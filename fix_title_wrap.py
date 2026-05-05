import os
import glob

pattern = """{dict.title.split('').map((char, index) => (
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
            ))}"""

replacement = """{dict.title.split(' ').map((word, wIdx) => (
              <span key={wIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}>
                {word.split('').map((char, cIdx) => (
                  <motion.span 
                    key={`${wIdx}-${cIdx}`} 
                    variants={{
                      hidden: { opacity: 0, y: 15, filter: 'blur(8px)' },
                      visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}"""

# Strip exact whitespaces for robust matching, or just do a standard replace
import re

files = glob.glob("src/app/services/Tab*.jsx")
for f in files:
    with open(f, "r") as file:
        content = file.read()
    
    # We will do a regex replacement ignoring exact whitespace
    regex_pattern = re.escape("{dict.title.split('').map((char, index) => (") + r"[\s\S]*?" + re.escape("</motion.span>\n            ))}")
    
    new_content = re.sub(regex_pattern, replacement, content)
    
    with open(f, "w") as file:
        file.write(new_content)
    print(f"Fixed {f}")
