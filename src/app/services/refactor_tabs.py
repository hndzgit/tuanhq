import os
import re

files = [
    "TabBIMOnline.jsx",
    "TabBIMCorp.jsx",
    "TabBIMModel.jsx",
    "TabBIMDesign.jsx",
    "TabDigital.jsx"
]

base_dir = "/Users/hoainam/Desktop/Tuanhq/bim-innovator-app/src/app/services"

for filename in files:
    filepath = os.path.join(base_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove the parent animate="visible" to prevent it from triggering all children immediately
    content = content.replace('<motion.div initial="hidden" animate="visible" variants={staggerContainer}>', '<div>')
    # The ending </motion.div> will be changed to </div> but wait, there are other </motion.div>. 
    # It's better to just leave the parent as motion.div without animate="visible":
    content = content.replace('<div>', '<motion.div initial="hidden" animate="visible" variants={staggerContainer}>') # revert the above if I made a mistake
    
    # Actually let's just do:
    content = content.replace('<motion.div initial="hidden" animate="visible" variants={staggerContainer}>', '<div className="tab-wrapper">')
    # and replace the very last </motion.div> with </div>.
    # Since it's the root wrapper, we can just do a regex for the last </motion.div>
    content = re.sub(r'</motion\.div>\s*;\s*}\s*$', '</div>\n  );\n}', content)

    # 2. Add whileInView to all elements that have variants={fadeInUp}
    content = content.replace('variants={fadeInUp}', 'initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}')

    # 3. Fix the h3 letter-by-letter animation
    # The pattern is something like:
    # {"TEXT".split('').map((char, index) => (...))}
    # We want to just extract "TEXT" and put it back.
    
    pattern = r'\{"([^"]+)"\.split\(\'\'\)\.map\(\(char,\s*index\)\s*=>\s*\([\s\S]*?\}\s*</motion\.span>\s*\)\)\}'
    content = re.sub(pattern, r'\1', content)

    # Note: in TabBIMModel.jsx, it has: {char === ' ' ? '\u00A0' : char}
    # My regex covers [\s\S]*? which will match anything inside the map function body.
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Refactoring complete.")
