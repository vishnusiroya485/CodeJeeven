const fs = require('fs');
const path = require('path');

const directoryToSearch = path.join(__dirname, 'src');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile() && (fullPath.endsWith('.js') || fullPath.endsWith('.jsx'))) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Split by line to apply conditional replacement
  let lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    // If line looks like a button or a link and has the gradient we want to change
    if ((lines[i].includes('<button') || lines[i].includes('<Link') || lines[i].includes('<a')) && 
        lines[i].includes('from-[#005A9C]') && lines[i].includes('to-[#00A651]')) {
      // Replace the green end with a dark/rich blue end for a nice blue gradient
      lines[i] = lines[i].replace('to-[#00A651]', 'to-[#003B73]');
    }
  }
  
  content = lines.join('\n');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated buttons in: ${filePath}`);
  }
}

console.log('Starting button color update...');
processDirectory(directoryToSearch);
console.log('Finished.');
