import os
import re

files = [
    ("TabBIMOnline.jsx", "REVIT CẦU ĐƯỜNG ONLINE"),
    ("TabBIMCorp.jsx", "ĐÀO TẠO REVIT CẦU ĐƯỜNG CHO DOANH NGHIỆP"),
    ("TabBIMModel.jsx", "Dịch vụ Mô hình BIM"),
    ("TabBIMDesign.jsx", "Dịch vụ Thiết kế BIM"),
    ("TabDigital.jsx", "Dịch vụ Số hóa Quản lý")
]

base_dir = "/Users/hoainam/Desktop/Tuanhq/bim-innovator-app/src/app/services"

for filename, title_text in files:
    filepath = os.path.join(base_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We need to find the <h3> that contains title_text.
    # The title text might have leading/trailing spaces or newlines due to formatting.
    # Let's do a regex replacement.
    
    # Pattern to match the <h3 ...> ... title_text ... </h3>
    # and replace the h3 with motion.h3 and wrap the title_text with split.map
    
    replacement = f"""<motion.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{{{{
              hidden: {{ opacity: 1 }},
              visible: {{ opacity: 1, transition: {{ staggerChildren: 0.03 }} }}
            }}}}}
            style={{{{fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap'}}}}
          >
            \\1 
            {{"{title_text}".split('').map((char, index) => (
              <motion.span 
                key={{index}} 
                variants={{{{{
                  hidden: {{ opacity: 0, y: 15, filter: 'blur(8px)' }},
                  visible: {{ opacity: 1, y: 0, filter: 'blur(0px)', transition: {{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} }}
                }}}}}
                style={{{{ display: 'inline-block', whiteSpace: 'pre' }}}}
              >
                {{char}}
              </motion.span>
            ))}}
          </motion.h3>"""

    # In TabBIMCorp, fontSize is 2rem and there's textShadow, so we shouldn't hardcode style.
    # Let's dynamically extract the style and the icon!
    
    # We find: <h3 style={{...}}> \n <Icon .../> \n TEXT \n </h3>
    # We want to replace it with:
    # <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{...stagger...}} style={{...}}>
    #   <Icon .../>
    #   {"TEXT".split...}
    # </motion.h3>
    
    def replace_h3(match):
        style_content = match.group(1)
        icon_content = match.group(2)
        
        return f"""<motion.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{{{ once: true }}}}
            variants={{{{{{
              hidden: {{ opacity: 1 }},
              visible: {{ opacity: 1, transition: {{ staggerChildren: 0.03 }} }}
            }}}}}}
            style={{{style_content}}}
          >
            {icon_content}
            {{"{title_text}".split('').map((char, index) => (
              <motion.span 
                key={{index}} 
                variants={{{{{{
                  hidden: {{ opacity: 0, y: 15, filter: 'blur(8px)' }},
                  visible: {{ opacity: 1, y: 0, filter: 'blur(0px)', transition: {{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} }}
                }}}}}}
                style={{{{ display: 'inline-block', whiteSpace: 'pre' }}}}
              >
                {{char}}
              </motion.span>
            ))}}
          </motion.h3>"""

    pattern = r'<h3\s+style={([^}]+(?:}[^}]+)*?)}\s*>\s*(<[A-Za-z0-9]+\s+size={28}\s+color="[^"]+"\s*/>)?\s*' + re.escape(title_text) + r'\s*</h3>'
    # Wait, TabBIMCorp has:
    # <h3 style={{...}}>
    #   ĐÀO TẠO REVIT CẦU ĐƯỜNG CHO DOANH NGHIỆP
    # </h3> (no icon!)
    
    pattern_corp = r'<h3\s+style={([^}]+(?:}[^}]+)*?)}\s*>\s*(<[A-Za-z0-9]+\s+size={28}\s+color="[^"]+"\s*/>)?\s*' + re.escape(title_text) + r'\s*</h3>'
    
    content = re.sub(r'<h3\s+style={({[^}]+\})}>\s*(<[A-Za-z0-9]+\s+size={28}\s+color="[^"]+"\s*/>)?\s*' + re.escape(title_text) + r'\s*</h3>', replace_h3, content, flags=re.DOTALL)
    
    # If the regex fails because of whitespace or whatever, let's just do a simpler manual replacement since there are only 5 files.
    # Actually I will just write a simpler regex.
    content = re.sub(r'<h3\s+style=({{[^}]+}})[^>]*>\s*(<[^>]+>)?\s*' + re.escape(title_text) + r'\s*</h3>', replace_h3, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Python script created.")
