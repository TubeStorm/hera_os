import fs from 'fs';

const content = fs.readFileSync('src/data/lineage.ts', 'utf8');

const startIndex = content.indexOf("id: 'obsidian-shortcuts'");
const endIndex = content.indexOf("id: 'lifelogger'");
const block = content.substring(startIndex, endIndex);

console.log('=== OBSIDIAN SHORTCUTS BLOCK ===');
console.log(block);
console.log('=================================');

// Check em dashes: \u2014 or \u2013 or —
const emDashes = block.match(/[\u2014\u2013—]/g) || [];
console.log('Em Dash Count in entire block:', emDashes.length);

// Extract inherited using JS AST / regex handling escaped quotes
const inheritedMatch = block.match(/inherited:\s*\n?\s*'((?:[^'\\]|\\.)*)'/);
const actualInherited = inheritedMatch ? inheritedMatch[1].replace(/\\'/g, "'") : '';

const requiredInherited = "Obsidian Shortcuts taught me that something as simple as appending here, appending to bottom, or appending to a symbol is a system. It taught me that if you stack very simple actions one after the other, you eventually have a very complex system. This is how lanes and task parallelism work is built in the backend. When Iris (HERA's planner) plans your project, her job is not just to think of fancy new tasks or guess, she must consider dependencies that will make it impossible for the next task to ever matter to the first task that was executed. In other words, what will break task 5 in column 4 in lane 3, when we press the plan and task 1 in lane 1 of column 1 begins?";

console.log('\n--- INHERITED COMPARISON ---');
console.log('Required length:', requiredInherited.length);
console.log('Actual length:', actualInherited.length);
console.log('Inherited exact match:', actualInherited === requiredInherited);

if (actualInherited !== requiredInherited) {
  console.log('Required value:\n', JSON.stringify(requiredInherited));
  console.log('Actual value:\n', JSON.stringify(actualInherited));
  for (let i = 0; i < Math.max(requiredInherited.length, actualInherited.length); i++) {
    if (requiredInherited[i] !== actualInherited[i]) {
      console.log(`Diff at idx ${i}: Expected ${JSON.stringify(requiredInherited[i])} (${requiredInherited ? requiredInherited.charCodeAt(i) : 'N/A'}) | Actual ${JSON.stringify(actualInherited[i])} (${actualInherited ? actualInherited.charCodeAt(i) : 'N/A'})`);
    }
  }
}

// Check placeholders
const placeholders = block.match(/TBD|TODO|FIXME|placeholder|lorem/i) || [];
console.log('Placeholders found:', placeholders);
