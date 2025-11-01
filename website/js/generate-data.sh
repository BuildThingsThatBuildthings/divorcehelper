#!/bin/bash

# This script generates the data.js file with all markdown content embedded

cat > website/js/data.js << 'EOF'
// This file contains all the markdown content embedded as JavaScript
// Generated automatically to avoid CORS issues when opening HTML directly

const markdownContent = {
EOF

# Process Roadmap files (non-Custody)
for file in Roadmap/*.md; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        echo "  \"$filename\": \`" >> website/js/data.js
        cat "$file" | sed 's/`/\\`/g; s/\$/\\$/g' >> website/js/data.js
        echo "\`," >> website/js/data.js
    fi
done

# Process Custody folder files
for file in Roadmap/Custody/*.md; do
    if [ -f "$file" ]; then
        filename="Custody/$(basename "$file")"
        echo "  \"$filename\": \`" >> website/js/data.js
        cat "$file" | sed 's/`/\\`/g; s/\$/\\$/g' >> website/js/data.js
        echo "\`," >> website/js/data.js
    fi
done

# Close the object
cat >> website/js/data.js << 'EOF'
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = markdownContent;
}
EOF

echo "data.js generated successfully!"
