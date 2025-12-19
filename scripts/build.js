var AdmZip = require('adm-zip');

console.log('Creating servoy-rules.zip...');

// creating archives
var zip = new AdmZip();

// Add META-INF with MANIFEST.MF
console.log('Adding META-INF/');
zip.addLocalFolder("./META-INF/", "/META-INF/");

// Add embeddings folder
console.log('Adding embeddings/');
zip.addLocalFolder("./embeddings/", "/embeddings/");

// Add rules folder
console.log('Adding rules/');
zip.addLocalFolder("./rules/", "/rules/");

// Write the zip file
console.log('Writing servoy-rules.zip...');
zip.writeZip("servoy-rules.zip");

console.log('servoy-rules.zip created successfully!');
