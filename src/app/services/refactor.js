const fs = require('fs');
const path = require('path');

const files = [
  'TabBIMOnline.jsx',
  'TabBIMCorp.jsx',
  'TabBIMModel.jsx',
  'TabBIMDesign.jsx',
  'TabDigital.jsx'
];

files.forEach(file => {
  const filepath = path.join(__dirname, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Replace spring transition with smooth Apple transition
  content = content.replace(
    /transition: \{ type: 'spring', damping: 12, stiffness: 200 \}/g,
    "transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }"
  );

  // We also need to add staggerChildren to the parent motion.h3
  // Wait, right now it is <h3 ...>, we need it to be <motion.h3 ...>
  // Let's replace <h3 style=... with <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } }} style=...
  
  content = content.replace(
    /<h3\s+style=/g,
    '<motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } }} style='
  );

  content = content.replace(
    /<\/h3>/g,
    '</motion.h3>'
  );

  fs.writeFileSync(filepath, content, 'utf8');
});

console.log('Refactoring done');
