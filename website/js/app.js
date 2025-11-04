// ===================================
// Divorce Roadmap Navigator - Main App
// ===================================

// Configuration
const ROADMAP_PATH = '../Roadmap/';
const FILES = {
    stages: [
        '01-safety-stabilization-days-0-7.md',
        '02-resolution-track-selection.md',
        '03-prefiling-prep-weeks-1-3.md',
        '04-filing-and-service.md',
        '05-temporary-orders-30-90-days.md',
        '06-financial-disclosures-discovery.md',
        '07-parenting-plan-development.md',
        '08-property-division.md',
        '09-support-determination.md',
        '10-settlement-or-trial.md',
        '11-judgment-and-postdecree.md'
    ],
    guides: [
        'first-10-moves-today.md',
        'strategies-protect-yourself-and-kids.md',
        'what-never-to-do.md',
        'what-other-person-might-do.md',
        'allowed-vs-not-allowed.md',
        'dividing-things-fairly.md',
        'settlement-strategies.md'
    ],
    custody: [
        'Custody/01-understanding-custody-law.md',
        'Custody/02-building-winning-case.md',
        'Custody/03-evidence-gathering.md',
        'Custody/04-custody-evaluation.md',
        'Custody/05-proving-best-interests.md',
        'Custody/06-countering-tactics.md',
        'Custody/07-psychological-evaluations.md',
        'Custody/08-trial-preparation.md',
        'Custody/09-temporary-orders.md',
        'Custody/10-post-judgment.md',
        'Custody/custody-evidence-checklist.md',
        'Custody/custody-evaluation-prep.md',
        'Custody/proving-best-interests.md'
    ]
};

// State
let currentFile = null;
let contentCache = {};
let searchIndex = null;

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const markdownContent = document.getElementById('markdownContent');
const loadingSpinner = document.getElementById('loadingSpinner');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const sidebar = document.querySelector('.sidebar');

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeSearch();
    initializeSectionToggle();
    initializeMobileMenu();

    // Load content from URL hash if present
    const hash = window.location.hash.substring(1);
    if (hash) {
        loadFile(decodeURIComponent(hash));
    }
});

// ===================================
// Navigation
// ===================================
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const filename = item.getAttribute('data-file');
            loadFile(filename);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            loadFile(decodeURIComponent(hash), false);
        } else {
            showWelcomeScreen();
        }
    });
}

function initializeSectionToggle() {
    const sectionTitles = document.querySelectorAll('.nav-section-title');

    sectionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const section = title.parentElement;
            section.classList.toggle('collapsed');
        });
    });
}

function initializeMobileMenu() {
    // Toggle menu when hamburger is clicked
    menuToggle.addEventListener('click', () => {
        const isOpen = sidebar.classList.contains('mobile-open');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close menu when overlay is clicked
    menuOverlay.addEventListener('click', closeMobileMenu);

    // Close menu when a nav item is clicked
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', closeMobileMenu);
    });
}

function openMobileMenu() {
    sidebar.classList.add('mobile-open');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeMobileMenu() {
    sidebar.classList.remove('mobile-open');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// ===================================
// File Loading
// ===================================
async function loadFile(filename, updateHash = true) {
    if (!filename || filename === currentFile) return;

    // Update UI state
    showLoadingSpinner();
    updateActiveNavItem(filename);

    // Update URL hash
    if (updateHash) {
        window.location.hash = encodeURIComponent(filename);
    }

    try {
        // Get content from embedded data
        let content;
        if (typeof EMBEDDED_CONTENT !== 'undefined' && EMBEDDED_CONTENT[filename]) {
            content = EMBEDDED_CONTENT[filename];
        } else {
            throw new Error(`File ${filename} not found in embedded content`);
        }

        // Parse and render markdown
        const html = marked.parse(content);
        displayContent(html);

        // Process cross-reference links
        processCrossReferenceLinks();

        currentFile = filename;

        // Scroll to top
        markdownContent.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } catch (error) {
        console.error('Error loading file:', error);
        displayError(filename);
    }
}

function showWelcomeScreen() {
    welcomeScreen.classList.remove('hidden');
    markdownContent.classList.add('hidden');
    loadingSpinner.classList.add('hidden');
    currentFile = null;
    updateActiveNavItem(null);
    window.location.hash = '';
}

function showLoadingSpinner() {
    welcomeScreen.classList.add('hidden');
    markdownContent.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');
}

function displayContent(html) {
    markdownContent.innerHTML = html;
    welcomeScreen.classList.add('hidden');
    loadingSpinner.classList.add('hidden');
    markdownContent.classList.remove('hidden');
}

function displayError(filename) {
    const errorHTML = `
        <div style="text-align: center; padding: 4rem;">
            <h1 style="color: var(--accent-red);">⚠️ Error Loading File</h1>
            <p style="color: var(--text-secondary); font-size: 1.125rem; margin-top: 1rem;">
                Could not load <strong>${filename}</strong>
            </p>
            <p style="color: var(--text-muted); margin-top: 1rem;">
                Please make sure the Roadmap folder is in the correct location.
            </p>
            <button
                onclick="showWelcomeScreen()"
                style="margin-top: 2rem; padding: 0.75rem 1.5rem; background: var(--stages-primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;"
            >
                Return to Home
            </button>
        </div>
    `;
    displayContent(errorHTML);
}

function updateActiveNavItem(filename) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.getAttribute('data-file') === filename) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ===================================
// Cross-Reference Link Processing
// ===================================
function processCrossReferenceLinks() {
    const links = markdownContent.querySelectorAll('a');

    links.forEach(link => {
        const href = link.getAttribute('href');

        // Check if it's a cross-reference to another markdown file
        if (href && href.endsWith('.md')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                // Preserve full path including directory (e.g., "Custody/01-understanding-custody-law.md")
                const filename = href;
                loadFile(filename);
            });
        }
    });
}

// ===================================
// Search Functionality
// ===================================
function initializeSearch() {
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();

        if (query.length < 2) {
            hideSearchResults();
            return;
        }

        // Debounce search
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            hideSearchResults();
        }
    });

    // Handle Escape key
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideSearchResults();
            searchInput.blur();
        }
    });
}

async function performSearch(query) {
    // Build search index if not already built
    if (!searchIndex) {
        await buildSearchIndex();
    }

    const results = searchInContent(query);
    displaySearchResults(results, query);
}

async function buildSearchIndex() {
    searchIndex = [];
    const allFiles = [...FILES.stages, ...FILES.guides];

    for (const filename of allFiles) {
        try {
            // Get content from embedded data
            const content = EMBEDDED_CONTENT[filename];

            if (!content) {
                console.warn(`File ${filename} not found in embedded content`);
                continue;
            }

            // Extract title from first heading
            const titleMatch = content.match(/^#\s+(.+)$/m);
            const title = titleMatch ? titleMatch[1] : filename;

            searchIndex.push({
                filename: filename,
                title: title,
                content: content.toLowerCase()
            });
        } catch (error) {
            console.error(`Error indexing ${filename}:`, error);
        }
    }
}

function searchInContent(query) {
    const queryLower = query.toLowerCase();
    const results = [];

    searchIndex.forEach(item => {
        const content = item.content;
        const index = content.indexOf(queryLower);

        if (index !== -1) {
            // Extract snippet around match
            const snippetStart = Math.max(0, index - 60);
            const snippetEnd = Math.min(content.length, index + query.length + 60);
            let snippet = content.substring(snippetStart, snippetEnd);

            // Clean up snippet
            snippet = snippet.replace(/[#*`_\[\]]/g, '').trim();
            if (snippetStart > 0) snippet = '...' + snippet;
            if (snippetEnd < content.length) snippet = snippet + '...';

            results.push({
                filename: item.filename,
                title: item.title,
                snippet: snippet,
                relevance: calculateRelevance(content, queryLower)
            });
        }
    });

    // Sort by relevance
    results.sort((a, b) => b.relevance - a.relevance);

    return results.slice(0, 10); // Limit to top 10 results
}

function calculateRelevance(content, query) {
    // Count occurrences
    const matches = content.split(query).length - 1;

    // Boost if in title
    const titleBoost = content.substring(0, 100).includes(query) ? 2 : 1;

    return matches * titleBoost;
}

function displaySearchResults(results, query) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No results found for "' + escapeHtml(query) + '"</div>';
        searchResults.classList.remove('hidden');
        return;
    }

    const html = results.map(result => `
        <div class="search-result-item" onclick="loadFile('${result.filename}'); hideSearchResults(); searchInput.value = '';">
            <div class="search-result-title">${escapeHtml(result.title)}</div>
            <div class="search-result-snippet">${highlightQuery(result.snippet, query)}</div>
        </div>
    `).join('');

    searchResults.innerHTML = html;
    searchResults.classList.remove('hidden');
}

function hideSearchResults() {
    searchResults.classList.add('hidden');
}

function highlightQuery(text, query) {
    const regex = new RegExp('(' + escapeRegex(query) + ')', 'gi');
    return escapeHtml(text).replace(regex, '<mark>$1</mark>');
}

// ===================================
// Utility Functions
// ===================================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ===================================
// Global Functions (called from HTML onclick)
// ===================================
window.loadFile = loadFile;
window.showWelcomeScreen = showWelcomeScreen;
window.hideSearchResults = hideSearchResults;

// ===================================
// Configure Marked.js
// ===================================
if (typeof marked !== 'undefined') {
    marked.setOptions({
        breaks: true,
        gfm: true,
        headerIds: true,
        mangle: false
    });
}
