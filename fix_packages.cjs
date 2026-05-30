const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'packages.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace itinerary for id 22
content = content.replace(/itinerary:\s*\[\s*\{\s*day:\s*1,\s*title:\s*'Arequipa City Highlights',\s*activities:\s*\[([\s\S]*?)\]\s*\}\s*\]/g, (match, activities) => {
  const newActivities = activities.split('}').filter(a => a.trim()).map(a => {
    const timeMatch = a.match(/time:\s*'([^']+)'/);
    const descMatch = a.match(/description:\s*'([^']+)'/);
    if (timeMatch && descMatch) {
      return `        { time: '${timeMatch[1]}', activity: '${descMatch[1]}' }`;
    }
    return '';
  }).filter(Boolean).join(',\n');
  return `itinerary: [\n${newActivities}\n      ]`;
});

// Replace itinerary for id 22 (es)
content = content.replace(/itinerary:\s*\[\s*\{\s*day:\s*1,\s*title:\s*'Lo mejor de Arequipa',\s*activities:\s*\[([\s\S]*?)\]\s*\}\s*\]/g, (match, activities) => {
  const newActivities = activities.split('}').filter(a => a.trim()).map(a => {
    const timeMatch = a.match(/time:\s*'([^']+)'/);
    const descMatch = a.match(/description:\s*'([^']+)'/);
    if (timeMatch && descMatch) {
      return `        { time: '${timeMatch[1]}', activity: '${descMatch[1]}' }`;
    }
    return '';
  }).filter(Boolean).join(',\n');
  return `itinerary: [\n${newActivities}\n      ]`;
});

// Replace itinerary for id 23
content = content.replace(/itinerary:\s*\[\s*\{\s*day:\s*1,\s*title:\s*'The Land of the Condor',\s*activities:\s*\[([\s\S]*?)\]\s*\}\s*\]/g, (match, activities) => {
  const newActivities = activities.split('}').filter(a => a.trim()).map(a => {
    const timeMatch = a.match(/time:\s*'([^']+)'/);
    const descMatch = a.match(/description:\s*'([^']+)'/);
    if (timeMatch && descMatch) {
      return `        { time: '${timeMatch[1]}', activity: '${descMatch[1]}' }`;
    }
    return '';
  }).filter(Boolean).join(',\n');
  return `itinerary: [\n${newActivities}\n      ]`;
});

// Replace itinerary for id 23 (es)
content = content.replace(/itinerary:\s*\[\s*\{\s*day:\s*1,\s*title:\s*'La Tierra del Cóndor',\s*activities:\s*\[([\s\S]*?)\]\s*\}\s*\]/g, (match, activities) => {
  const newActivities = activities.split('}').filter(a => a.trim()).map(a => {
    const timeMatch = a.match(/time:\s*'([^']+)'/);
    const descMatch = a.match(/description:\s*'([^']+)'/);
    if (timeMatch && descMatch) {
      return `        { time: '${timeMatch[1]}', activity: '${descMatch[1]}' }`;
    }
    return '';
  }).filter(Boolean).join(',\n');
  return `itinerary: [\n${newActivities}\n      ]`;
});


// For multi-day itineraries (24, 25), we parse it differently.
function fixMultiDay(contentBlock) {
  return contentBlock.replace(/\{\s*day:\s*(\d+),\s*title:\s*'([^']+)',\s*activities:\s*\[([\s\S]*?)\]\s*\}/g, (match, day, title, activities) => {
    const acts = activities.split('}').filter(a => a.trim()).map(a => {
      const timeMatch = a.match(/time:\s*'([^']+)'/);
      const descMatch = a.match(/description:\s*'([^']+)'/);
      if (timeMatch && descMatch) {
        return `${timeMatch[1]}: ${descMatch[1]}`;
      }
      return '';
    }).filter(Boolean).join('\\n');
    return `{ time: 'Day ${day} - ${title}', activity: '${acts}' }`;
  });
}

// Find id 24 block
const colcaTrekEnMatch = content.match(/id:\s*24,[\s\S]*?en:\s*\{[\s\S]*?itinerary:\s*\[([\s\S]*?)\],[\s\S]*?includes:/);
if (colcaTrekEnMatch) {
  const fixed = fixMultiDay(colcaTrekEnMatch[1]);
  content = content.replace(colcaTrekEnMatch[1], fixed);
}

const colcaTrekEsMatch = content.match(/id:\s*24,[\s\S]*?es:\s*\{[\s\S]*?itinerary:\s*\[([\s\S]*?)\],[\s\S]*?includes:/);
if (colcaTrekEsMatch) {
  const fixed = fixMultiDay(colcaTrekEsMatch[1]);
  content = content.replace(colcaTrekEsMatch[1], fixed);
}

// Find id 25 block
const salkantayEnMatch = content.match(/id:\s*25,[\s\S]*?en:\s*\{[\s\S]*?itinerary:\s*\[([\s\S]*?)\],[\s\S]*?includes:/);
if (salkantayEnMatch) {
  const fixed = fixMultiDay(salkantayEnMatch[1]);
  content = content.replace(salkantayEnMatch[1], fixed);
}

const salkantayEsMatch = content.match(/id:\s*25,[\s\S]*?es:\s*\{[\s\S]*?itinerary:\s*\[([\s\S]*?)\],[\s\S]*?includes:/);
if (salkantayEsMatch) {
  const fixed = fixMultiDay(salkantayEsMatch[1]);
  content = content.replace(salkantayEsMatch[1], fixed);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed itineraries!');
