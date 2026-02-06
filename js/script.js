// 1. Data Source
const pages = [{
      title: "Google",
      url: "https://www.google.com"
   },
   {
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org"
   },
   {
      title: "Stack Overflow",
      url: "https://stackoverflow.com"
   },
   {
      title: "GitHub",
      url: "https://github.com"
   },
   {
      title: "W3Schools",
      url: "https://www.w3schools.com"
   }
];

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');

// 2. Filter Function
function filterResults() {
   const query = searchInput.value.toLowerCase();
   resultsList.innerHTML = '';

   if (query.length === 0) {
      resultsList.classList.remove('active');
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
         link.style.display = "block";
         link.style.textDecoration = "none";
         link.style.color = "inherit";
         link.textContent = item.title;

         resultsList.appendChild(link);
      });
      resultsList.classList.add('active');
   } else {
      resultsList.classList.remove('active');
   }
}

searchInput.addEventListener('input', filterResults);


// 3. Event Listeners
searchInput.addEventListener('input', filterResults);

// Keyboard Accessibility: Handle Enter Key
searchInput.addEventListener('keypress', (e) => {
   if (e.key === 'Enter') {
      alert('Searching for: ' + searchInput.value);
      resultsList.classList.remove('active');
   }
});

searchBtn.addEventListener('click', () => {
   alert('Searching for: ' + searchInput.value);
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
   if (!e.target.closest('.search-wrapper')) {
      resultsList.classList.remove('active');
   }
});
