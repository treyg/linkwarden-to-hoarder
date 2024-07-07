# Linkwarden to Hoarder URL Extractor and Importer

This project provides scripts to extract URLs from a Linkwarden backup file and import them into Hoarder.

## Prerequisites

1. **Node.js**: If you don't have Node.js installed, you can download and install it from [the official Node.js website](https://nodejs.org/). Choose the LTS (Long Term Support) version for your operating system.

2. **Linkwarden Backup**: You'll need to export your data from Linkwarden:

   - Log into your Linkwarden account
   - Go to Settings -> Account
   - Scroll down to the "Export Data" section
   - Click on "Export" to download your backup (JSON) file

3. **Hoarder CLI**: Install the Hoarder CLI globally using npm:

   ```
   npm install -g @hoarderapp/cli
   ```

4. **Hoarder API Key**: You'll need an API key from Hoarder. Refer to the [Hoarder documentation](https://docs.hoarder.app/command-line) for instructions on how to obtain your API key.

## Setup

1. Clone this repository or download the `extract_urls.js` and `import_to_hoarder.sh` scripts.
2. Place your Linkwarden backup file (named `backup.json` by default - which extract_urls looks for) in the same directory as the scripts.

## Usage

### Extracting URLs

1. Open a terminal.
2. Navigate to the directory containing the script and your backup file (this project).
3. Run the extraction script using Node.js:
   ```
   node extract_urls.js
   ```
4. If successful, you'll see a message indicating how many URLs were extracted, and a new file named `all_links.txt` will be created in the same directory.

### Importing URLs to Hoarder

1. After running the extraction script, use the import script to add the URLs to Hoarder:

   ```
   bash import_to_hoarder.sh <your-hoarder-api-key> <your-hoarder-server-address>
   ```

   Replace `<your-hoarder-api-key>` with your actual Hoarder API key and `<your-hoarder-server-address>` with your Hoarder server address (the url you use to access hoarder).

2. The script will import each URL and display a message for each imported bookmark.

## Troubleshooting

If you encounter any issues:

- Make sure your Linkwarden backup file is named `backup.json` and is in the same directory as the scripts. The script is looking for a file with that exact name.
- Check that you have the latest version of Node.js installed.
- Ensure that the Hoarder CLI is installed globally and accessible from your terminal.
- If you get an error about the JSON structure, your backup file might have a different format. Please open an issue with details about the error.
- If you encounter a "Permission denied" error while running the import script, you may need to make the script executable. Run the following command:

```
chmod +x import_to_hoarder.sh
```

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements or encounter any problems.
