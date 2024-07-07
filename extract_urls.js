const fs = require("fs");

// Input file name (backup.json - the linkwarden backup file)
const inputFile = "backup.json";
// Output file name
const outputFile = "all_links.txt";

try {
  const jsonData = JSON.parse(fs.readFileSync(inputFile, "utf8"));

  let urls = [];

  // Iterate through collections
  if (jsonData.collections && Array.isArray(jsonData.collections)) {
    jsonData.collections.forEach((collection) => {
      if (collection.links && Array.isArray(collection.links)) {
        collection.links.forEach((link) => {
          if (link.url) {
            urls.push(link.url);
          }
        });
      }
    });
  }

  if (urls.length === 0) {
    throw new Error("No URLs found in the JSON file.");
  }

  // Write URLs to the output file, one per line
  fs.writeFileSync(outputFile, urls.join("\n"));
  console.log(`Successfully extracted ${urls.length} URLs to ${outputFile}`);
} catch (error) {
  console.error("An error occurred:", error.message);
}
