const pages = [
    { title: "Home", url: "https://iceguz0.github.io" },
    { title: "Text to Binary", url: "https://iceguz0.github.io/convert" },
];

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');
const searchBtn = document.getElementById('searchBtn');

const fullScreenSearch = document.getElementById('fullScreenSearch');
const fullScreenSearchInput = document.getElementById('fullScreenSearchInput');
const fullScreenResultsList = document.getElementById('fullScreenResultsList');
const closeSearchBtn = document.getElementById('closeSearchBtn');

function filterResults(query, container) {
    container.innerHTML = '';

    if (query.length === 0) {
        container.classList.remove('active');
        return;
    }

    const filtered = pages.filter(item =>
        item.title.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const link = document.createElement('a');
            link.href = item.url;
            link.target = "_blank";
            link.classList.add('result-item');
            link.textContent = item.title;
            container.appendChild(link);
        });
        container.classList.add('active');
    } else {
        container.classList.remove('active');
    }
}

// Normal inline search filter
searchInput.addEventListener('input', () => filterResults(searchInput.value.toLowerCase(), resultsList));

// Close inline results on enter key
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        alert('Searching for: ' + searchInput.value);
        resultsList.classList.remove('active');
    }
});

// Show fullscreen search on button click
searchBtn.addEventListener('click', () => {
    fullScreenSearch.classList.add('active');
    fullScreenSearchInput.value = searchInput.value;
    filterResults(fullScreenSearchInput.value.toLowerCase(), fullScreenResultsList);
    fullScreenSearchInput.focus();
});

// Filter fullscreen search results
fullScreenSearchInput.addEventListener('input', () => {
    filterResults(fullScreenSearchInput.value.toLowerCase(), fullScreenResultsList);
});

// Close fullscreen search
closeSearchBtn.addEventListener('click', () => {
    fullScreenSearch.classList.remove('active');
});

// Close fullscreen search when clicking outside the search content
fullScreenSearch.addEventListener('click', (e) => {
    if (e.target === fullScreenSearch) {
        fullScreenSearch.classList.remove('active');
    }
});
