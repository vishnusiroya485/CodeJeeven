const fs = require('fs');
const path = require('path');

const directoryToSearch = path.join(__dirname, 'src');

const replacements = [
  { regex: /#003B73/gi, replacement: '#00A651' } // Revert dark blue back to green
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

console.log('Starting color revert...');
processDirectory(directoryToSearch);
console.log('Finished.');
