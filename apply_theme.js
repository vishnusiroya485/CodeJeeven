const fs = require('fs');
const path = require('path');

const directoryToSearch = path.join(__dirname, 'src');

const replacements = [
  // Primary deep blue to deep teal
  { regex: /#1e3a8a/gi, replacement: '#0f766e' },
  // Primary blue to emerald
  { regex: /#2563eb/gi, replacement: '#10b981' },
  { regex: /#2563EB/g, replacement: '#10B981' },
  
  // Secondary lighter blues to teals
  { regex: /#3B82F6/gi, replacement: '#14b8a6' },
  { regex: /#0EA5E9/gi, replacement: '#059669' },
  
  // Tailwind class names
  { regex: /blue-500/g, replacement: 'teal-500' },
  { regex: /sky-500/g, replacement: 'emerald-500' },
  { regex: /sky-400/g, replacement: 'emerald-400' },
  { regex: /blue-400/g, replacement: 'teal-400' },
  { regex: /sky-600/g, replacement: 'emerald-600' },
  { regex: /blue-600/g, replacement: 'teal-600' },
  { regex: /blue-50/g, replacement: 'teal-50' },
  { regex: /blue-100/g, replacement: 'teal-100' },
  { regex: /blue-800/g, replacement: 'teal-800' },
  { regex: /sky-50/g, replacement: 'emerald-50' },
  { regex: /sky-100/g, replacement: 'emerald-100' },
  
  // Special backgrounds
  { regex: /bg-\[\#EEF2FF\]/g, replacement: 'bg-[#F0FDF4]' },
  { regex: /border-\[\#C7D2FE\]/g, replacement: 'border-[#A7F3D0]' }
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

console.log('Starting global theme update to Blue & Green...');
processDirectory(directoryToSearch);
console.log('Finished updating theme!');
