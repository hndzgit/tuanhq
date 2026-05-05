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

  // Remove the flex gap styling from motion.h3
  content = content.replace(
    /, display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap'/g,
    ''
  );
  
  // TabBIMCorp has a slightly different one
  content = content.replace(
    /, display: 'flex', flexWrap: 'wrap'/g,
    ''
  );

  // Now fix the icons to have inline-block and marginRight
  // e.g. <MonitorPlay size={28} color="var(--primary-red)"/>
  // we want to add style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '12px', marginTop: '-4px' }}
  
  // The icons are: MonitorPlay, Box, PenTool, Network
  const icons = ['MonitorPlay', 'Box', 'PenTool', 'Network'];
  
  icons.forEach(icon => {
    // Find <IconName size={28} color="..."/>
    const regex = new RegExp(`<${icon}\\s+size={28}\\s+color="([^"]+)"\\s*/>`, 'g');
    content = content.replace(regex, `<${icon} size={28} color="$1" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '12px', marginTop: '-4px' }}/>`);
  });

  fs.writeFileSync(filepath, content, 'utf8');
});

console.log('Fixed flex gap issue in all tabs.');
