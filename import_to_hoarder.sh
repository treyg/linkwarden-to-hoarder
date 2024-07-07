#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <api_key> <server_address>"
    exit 1
fi

API_KEY=$1
SERVER_ADDR=$2

# Check if all_links.txt exists
if [ ! -f "all_links.txt" ]; then
    echo "Error: all_links.txt not found. Please run extract_urls.js first."
    exit 1
fi

# Import URLs to Hoarder
cat all_links.txt | while read url; do
    hoarder --api-key "$API_KEY" --server-addr "$SERVER_ADDR" bookmarks add --link "$url"
    echo "Imported: $url"
done

echo "Import completed!"