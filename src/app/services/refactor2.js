const fs = require('fs');
const path = require('path');

const files = [
  { name: 'TabBIMOnline.jsx', title: 'REVIT CẦU ĐƯỜNG ONLINE' },
  { name: 'TabBIMCorp.jsx', title: 'ĐÀO TẠO REVIT CẦU ĐƯỜNG CHO DOANH NGHIỆP' },
  { name: 'TabBIMModel.jsx', title: 'Dịch vụ Mô hình BIM' },
  { name: 'TabBIMDesign.jsx', title: 'Dịch vụ Thiết kế BIM' },
  { name: 'TabDigital.jsx', title: 'Dịch vụ Số hóa Quản lý' }
];

files.forEach(file => {
  const filepath = path.join(__dirname, file.name);
  let content = fs.readFileSync(filepath, 'utf8');

  // We need to replace the plain title text with the split map array.
  // The pattern to replace is the plain text, but we must be careful not to replace it if it's already there (it shouldn't be).
  
  const spanBlock = `{"${file.title}".split('').map((char, index) => (
              <motion.span 
                key={index} 
                variants={{
                  hidden: { opacity: 0, y: 15, filter: 'blur(8px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {char}
              </motion.span>
            ))}`;

  // Replace exact string (be mindful of possible spaces)
  // Let's use a regex that matches the title exactly
  const regex = new RegExp(file.title, 'g');
  // Wait, the title might also appear in comments or other text?
  // Let's replace ONLY the one inside motion.h3
  
  // Find the block from <motion.h3 to </motion.h3>
  const h3Start = content.indexOf('<motion.h3');
  const h3End = content.indexOf('</motion.h3>');
  if (h3Start !== -1 && h3End !== -1) {
    let h3Block = content.substring(h3Start, h3End);
    h3Block = h3Block.replace(file.title, spanBlock);
    content = content.substring(0, h3Start) + h3Block + content.substring(h3End);
  }

  fs.writeFileSync(filepath, content, 'utf8');
});

console.log('Refactoring 2 done');
