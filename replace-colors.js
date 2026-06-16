const fs = require('fs');
const path = require('path');

const directoryToSearch = path.join(__dirname, 'src');

const replacements = [
  { regex: /#F02476/gi, replacement: '#005A9C' },
  { regex: /#F35F20/gi, replacement: '#00A651' },
  { regex: /#FFF0F5/gi, replacement: '#EAF2F8' },
  { regex: /#FFD1E3/gi, replacement: '#BBD6EC' },
  { regex: /#FFE4EE/gi, replacement: '#D4E6F4' }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile() && (fullPath.endsWith('.js') || fullPath.endsWith('.css') || fullPath.endsWith('.jsx'))) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const rule of replacements) {
    content = content.replace(rule.regex, rule.replacement);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

console.log('Starting color replacement...');
processDirectory(directoryToSearch);
console.log('Finished.');
