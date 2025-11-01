# Divorce Roadmap Navigator Website

A modern, colorful static website for visualizing and navigating the comprehensive divorce roadmap guides.

## Features

✨ **Navigation Sidebar** - Browse all 11 process stages and 7 strategy guides
🔍 **Search Functionality** - Search across all markdown files with highlighted results
🎨 **Modern & Colorful Design** - Color-coded sections with smooth animations
📱 **Responsive Layout** - Works on desktop, tablet, and mobile devices
🔗 **Cross-Reference Links** - Click links between guides to jump seamlessly

## Quick Start

### Option 1: Open Directly in Browser
1. Navigate to `/Users/ryan/divorcehelper/website/`
2. Double-click `index.html`
3. The website will open in your default browser

### Option 2: Use a Local Server (Recommended)

Using a local server prevents CORS issues when loading markdown files.

**Python 3:**
```bash
cd /Users/ryan/divorcehelper/website
python3 -m http.server 8000
```
Then open: http://localhost:8000

**Node.js (with npx):**
```bash
cd /Users/ryan/divorcehelper/website
npx serve
```

**VS Code Live Server:**
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## File Structure

```
/divorcehelper/
├── Roadmap/               # 18 markdown guide files
│   ├── 01-*.md           # Process stages (11 files)
│   └── *.md              # Strategy guides (7 files)
└── website/              # Website files
    ├── index.html        # Main page
    ├── css/
    │   └── styles.css    # Styling
    └── js/
        └── app.js        # JavaScript logic
```

## How to Use

### Navigation
- **Sidebar**: Click any item to view that guide
- **Process Stages** (blue/purple): Numbered stages from 01-11
- **Strategy Guides** (orange): Additional reference materials

### Search
- Type in the search bar at the top
- Search works across all markdown files
- Results show file name and relevant snippet
- Click any result to jump to that file

### Cross-References
- Click any markdown link (like `[Stage 5](05-temporary-orders-30-90-days.md)`)
- Automatically loads the referenced file

### Collapsible Sections
- Click section headers in sidebar to collapse/expand

## Color Coding

- 🔵 **Blue/Purple Gradient** - Process Stages (01-11)
- 🟠 **Orange/Coral** - Strategy Guides
- 🟢 **Green** - Accents and action items
- 🔴 **Red** - Important warnings and disclaimers

## Browser Compatibility

Works in all modern browsers:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Technical Details

- **Framework**: Vanilla JavaScript (no dependencies except Marked.js)
- **Markdown Parser**: Marked.js (loaded from CDN)
- **No Build Process**: Just HTML, CSS, and JS files
- **Local Storage**: Search index cached for performance

## Troubleshooting

### Markdown files not loading?
- Ensure you're in the correct directory structure
- Use a local server (see Quick Start options above)
- Check browser console for errors

### Search not working?
- Wait a moment for search index to build on first search
- Clear browser cache and reload
- Check that all markdown files are in `/Roadmap/` folder

### Styling looks broken?
- Ensure `css/styles.css` file exists
- Check browser console for 404 errors
- Try hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

## Customization

### Change Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --stages-primary: #667eea;
    --guides-primary: #f97316;
    /* ... etc */
}
```

### Add More Files
Update `js/app.js` FILES object:
```javascript
const FILES = {
    stages: [ /* ... */ ],
    guides: [ /* add new filename here */ ]
};
```

Then add corresponding nav item in `index.html`.

## License

This website is part of the Divorce Roadmap project. All rights reserved.

## Disclaimer

This roadmap provides general educational information. It is not legal advice and does not create an attorney-client relationship. Consult with a qualified attorney in your jurisdiction for advice specific to your situation.
