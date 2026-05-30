const fs = require('fs');
const file = 'd:/Proyectos/inkalandexplorers/src/data/packages.ts';
let content = fs.readFileSync(file, 'utf8');

const slug = "slug: 'palccoyo-rainbow-mountain',";
const nextSlug = "slug: 'south-valley-private-tour',";

const packages = content.split(slug);
if (packages.length === 2) {
    let parts = packages[1].split(nextSlug);
    if (parts.length === 2) {
        let palc = parts[0];
        
        // Match the overview field which starts with overview: ` and ends with `,
        palc = palc.replace(/overview:\s*`([\s\S]*?)`,/g, (match, p1) => {
            // Remove all newlines from the matched string
            const noNewlines = p1.replace(/\r?\n/g, '');
            // Convert it to a single quoted string to match other packages
            return "overview: '" + noNewlines.replace(/'/g, "\\'") + "',";
        });
        
        const newContent = packages[0] + slug + palc + nextSlug + parts[1];
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Successfully removed newlines from Palccoyo overviews.');
    } else {
        console.log('Could not find next package');
    }
} else {
    console.log('Could not find Palccoyo package');
}
