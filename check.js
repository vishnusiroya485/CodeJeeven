const fs = require('fs');
const content = fs.readFileSync('src/pages/Home.js', 'utf8');

// Strip out comments and strings to avoid false positives
let stripped = content
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\/\/.*/g, '')
  .replace(/\"[^\"]*\"/g, '\"\"')
  .replace(/\'[^\']*\'/g, '\'\'')
  .replace(/\`[\s\S]*?\`/g, '\`\`');

let stack = [];
let regex = /<\/?([a-zA-Z0-9]+)[^>]*?(\/?)>/g;
let match;

// We will only trace standard block tags to keep it simple
const traceTags = ['div', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'button', 'span', 'svg'];

let lines = content.split('\n');

while ((match = regex.exec(stripped)) !== null) {
  let tag = match[1];
  let isClosing = match[0].startsWith('</');
  let isSelfClosing = match[2] === '/';
  
  if (!traceTags.includes(tag)) continue;
  
  // Calculate line number
  let lineNo = content.substr(0, match.index).split('\n').length;
  
  if (!isSelfClosing) {
    if (!isClosing) {
      stack.push({tag: tag, line: lineNo});
    } else {
      if (stack.length > 0 && stack[stack.length-1].tag === tag) {
        stack.pop();
      } else {
        console.log(`Mismatch! Found </${tag}> at line ${lineNo} but expected </${stack.length ? stack[stack.length-1].tag : 'none'}> from line ${stack.length ? stack[stack.length-1].line : 'N/A'}`);
      }
    }
  }
}

if (stack.length > 0) {
    console.log('Unclosed tags remaining:');
    stack.forEach(s => console.log(`Tag <${s.tag}> opened at line ${s.line}`));
} else {
    console.log('All matched tags are balanced!');
}
