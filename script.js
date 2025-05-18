// Sample book data - can be extended or loaded from external source
const booksData = [
  {
    id: 'b1',
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg",
    summary: "A story of the mysteriously wealthy Jay Gatsby and his love for Daisy Buchanan, set in the Jazz Age.",
    publicationYear: 1925,
    pageCount: 180,
    infoLink: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
    addedAt: 1615374000,
  },
  {
    id: 'b2',
    title: "1984",
    author: "George Orwell",
    genre: "dystopian",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
    summary: "Dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    publicationYear: 1949,
    pageCount: 328,
    infoLink: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
    addedAt: 1615460400,
  },
  {
    id: 'b3',
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "non-fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg",
    summary: "Explores fundamental questions about time, space, and the universe for a general audience.",
    publicationYear: 1988,
    pageCount: 256,
    infoLink: "https://en.wikipedia.org/wiki/A_Brief_History_of_Time",
    addedAt: 1615546800,
  },
  {
    id: 'b4',
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
    summary: "Bilbo Baggins embarks on a thrilling journey through Middle-earth to reclaim treasure guarded by a dragon.",
    publicationYear: 1937,
    pageCount: 310,
    infoLink: "https://en.wikipedia.org/wiki/The_Hobbit",
    addedAt: 1615633200,
  },
  {
    id: 'b5',
    title: "Educated",
    author: "Tara Westover",
    genre: "non-fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
    summary: "A memoir about growing up in a strict and abusive household in rural Idaho but eventually escaping to learn through education.",
    publicationYear: 2018,
    pageCount: 334,
    infoLink: "https://en.wikipedia.org/wiki/Educated_(book)",
    addedAt: 1615719600,
  },
  {
    id: 'b6',
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "dystopian",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1575509280i/5129.jpg",
    summary: "A dystopian novel set in a futuristic world state where citizens are environmentally engineered into an intelligence-based hierarchy.",
    publicationYear: 1932,
    pageCount: 311,
    infoLink: "https://en.wikipedia.org/wiki/Brave_New_World",
    addedAt: 1615806000,
  },
  {
    id: 'b7',
    title: "Dune",
    author: "Frank Herbert",
    genre: "science fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    summary: "A science fiction novel set in the distant future amidst a feudal interstellar society where noble houses control planetary fiefs.",
    publicationYear: 1965,
    pageCount: 412,
    infoLink: "https://en.wikipedia.org/wiki/Dune_(novel)",
    addedAt: 1615892400,
  },
  {
    id: 'b8',
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "classic",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
    summary: "A romantic novel of manners about the Bennet family, focusing on Elizabeth Bennet and her relationship with the wealthy Mr. Darcy.",
    publicationYear: 1813,
    pageCount: 279,
    infoLink: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
    addedAt: 1615978800,
  },
  {
    id: 'b9',
    title: "Dracula",
    author: "Bram Stoker",
    genre: "gothic",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
    summary: "A Gothic horror novel that tells the story of Count Dracula's attempt to move from Transylvania to England.",
    publicationYear: 1897,
    pageCount: 418,
    infoLink: "https://en.wikipedia.org/wiki/Dracula",
    addedAt: 1616065200,
  },
  {
    id: 'b10',
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "romance",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557343311i/10210.jpg",
    summary: "A novel that follows the emotions and experiences of its title character, including her growth to adulthood and her love for Mr. Rochester.",
    publicationYear: 1847,
    pageCount: 532,
    infoLink: "https://en.wikipedia.org/wiki/Jane_Eyre",
    addedAt: 1616151600,
  },
  // Additional books
  {
    id: 'b11',
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg",
    summary: "The story of racial injustice and the loss of innocence in a small Southern town, told through the eyes of a young girl named Scout Finch.",
    publicationYear: 1960,
    pageCount: 281,
    infoLink: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird",
    addedAt: 1616238000,
  },
  {
    id: 'b12',
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    summary: "A philosophical novel about a young Andalusian shepherd who travels to Egypt after having a recurring dream of finding treasure there.",
    publicationYear: 1988,
    pageCount: 197,
    infoLink: "https://en.wikipedia.org/wiki/The_Alchemist_(novel)",
    addedAt: 1616324400,
  },
  {
    id: 'b13',
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
    summary: "An epic high-fantasy novel that follows the quest to destroy the One Ring, a powerful artifact created by the Dark Lord Sauron.",
    publicationYear: 1954,
    pageCount: 1178,
    infoLink: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
    addedAt: 1616410800,
  },
  {
    id: 'b14',
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
    summary: "The story of a teenager named Holden Caulfield and his experiences in New York City after being expelled from prep school.",
    publicationYear: 1951,
    pageCount: 277,
    infoLink: "https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye",
    addedAt: 1616497200,
  },
  {
    id: 'b15',
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "non-fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595674533i/23692271.jpg",
    summary: "A book that examines the history of humankind from the evolution of archaic human species to the 21st century.",
    publicationYear: 2011,
    pageCount: 443,
    infoLink: "https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind",
    addedAt: 1616583600,
  },
  {
    id: 'b16',
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "thriller",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579621267i/968.jpg",
    summary: "A mystery thriller novel that follows symbologist Robert Langdon as he investigates a murder in Paris's Louvre Museum.",
    publicationYear: 2003,
    pageCount: 454,
    infoLink: "https://en.wikipedia.org/wiki/The_Da_Vinci_Code",
    addedAt: 1616670000,
  },
  {
    id: 'b17',
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "fantasy",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg",
    summary: "The first novel in the Harry Potter series that introduces a young wizard who discovers his magical heritage on his eleventh birthday.",
    publicationYear: 1997,
    pageCount: 223,
    infoLink: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone",
    addedAt: 1616756400,
  },
  {
    id: 'b18',
    title: "The Art of War",
    author: "Sun Tzu",
    genre: "philosophy",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630683326i/10534.jpg",
    summary: "An ancient Chinese military treatise dating from the 5th century BC, attributed to the military strategist Sun Tzu.",
    publicationYear: -500,
    pageCount: 273,
    infoLink: "https://en.wikipedia.org/wiki/The_Art_of_War",
    addedAt: 1616842800,
  },
  {
    id: 'b19',
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "dystopian",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
    summary: "A dystopian novel about a future American society where books are outlawed and 'firemen' burn any that are found.",
    publicationYear: 1953,
    pageCount: 158,
    infoLink: "https://en.wikipedia.org/wiki/Fahrenheit_451",
    addedAt: 1616929200,
  },
  {
    id: 'b20',
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    genre: "children",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg",
    summary: "A poetic tale about a prince who visits Earth after traveling through space, addressing themes of loneliness, friendship, and love.",
    publicationYear: 1943,
    pageCount: 96,
    infoLink: "https://en.wikipedia.org/wiki/The_Little_Prince",
    addedAt: 1617015600,
  }
];

// Globals
let books = [...booksData]; // working copy for sorting/filtering
let favorites = JSON.parse(localStorage.getItem('favorites')) || {};
let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
let readingStatus = JSON.parse(localStorage.getItem('readingStatus')) || {};
let currentGenreFilter = 'all';
let currentStatusFilter = 'all';
let currentSearchTerm = '';
let currentSort = 'title-asc';
let activeTab = 'all'; // 'all' or 'favorites'
const genres = [...new Set(booksData.map(b => b.genre))].sort();

// Dom Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const searchInput = document.getElementById('search');
const statusFilter = document.getElementById('status-filter');
const sortFilter = document.getElementById('sort-filter');
const genreFiltersContainer = document.getElementById('genre-filters');
const bookList = document.getElementById('book-list');
const favoritesList = document.getElementById('favorites-list');
const modal = document.getElementById('book-modal');
const modalTitle = document.getElementById('modal-title');
const modalSummary = document.getElementById('modal-summary');
const modalYear = document.getElementById('modal-year');
const modalPages = document.getElementById('modal-pages');
const modalLink = document.getElementById('modal-link');
const modalClose = modal.querySelector('.modal-close');
const tabs = document.querySelectorAll('.tab');
const allBooksPanel = document.getElementById('all-books-panel');
const favoritesPanel = document.getElementById('favorites-panel');

// Utilities
function saveToStorage() {
  localStorage.setItem('favorites', JSON.stringify(favorites));
  localStorage.setItem('ratings', JSON.stringify(ratings));
  localStorage.setItem('readingStatus', JSON.stringify(readingStatus));
}

function setTheme(theme) {
  if(theme === 'dark') {
    document.body.classList.add('dark');
    themeToggleBtn.textContent = '☀️';
    themeToggleBtn.setAttribute('aria-pressed', 'true');
  } else {
    document.body.classList.remove('dark');
    themeToggleBtn.textContent = '🌗';
    themeToggleBtn.setAttribute('aria-pressed', 'false');
  }
  localStorage.setItem('theme', theme);
}

// Initialize theme from storage or default
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Create genre chips
function renderGenreFilters() {
  // Add "All" first
  genreFiltersContainer.innerHTML = '';
  const allChip = document.createElement('span');
  allChip.className = 'genre-chip' + (currentGenreFilter === 'all' ? ' selected' : '');
  allChip.textContent = 'All';
  allChip.dataset.genre = 'all';
  allChip.tabIndex = 0;
  genreFiltersContainer.appendChild(allChip);

  genres.forEach(genre => {
    const chip = document.createElement('span');
    chip.className = 'genre-chip' + (currentGenreFilter === genre ? ' selected' : '');
    chip.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
    chip.dataset.genre = genre;
    chip.tabIndex = 0;
    genreFiltersContainer.appendChild(chip);
  });
}

// Create star SVG for rating
function createStarSVG(filled) {
  const ns = "http://www.w3.org/2000/svg";
  const star = document.createElementNS(ns, "svg");
  star.setAttribute("viewBox", "0 0 24 24");
  star.setAttribute("class", filled ? "filled" : "");
  star.innerHTML = `<path d="M12 .587l3.668 7.431 8.207 1.193-5.938 5.786 1.4 8.165L12 18.897l-7.337 3.865 1.4-8.164-5.939-5.787 8.208-1.193z"/>`;
  return star;
}

// Render star rating component
function createRatingComponent(bookId) {
  const container = document.createElement('div');
  container.className = 'rating';
  
  // Prevent click on the rating container from opening the modal
  container.addEventListener('click', e => {
    e.stopPropagation();
  });
  
  for (let i = 1; i <= 5; i++) {
    const star = createStarSVG(i <= (ratings[bookId] || 0));
    star.title = `Rate ${i} star${i > 1 ? 's' : ''}`;
    star.tabIndex = 0;
    star.setAttribute('data-star', i);
    star.setAttribute('role', 'button');
    star.setAttribute('aria-label', `Rate ${i} stars`);
    star.addEventListener('click', e => {
      e.stopPropagation();
      ratings[bookId] = i;
      saveToStorage();
      renderLists();
    });
    star.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        ratings[bookId] = i;
        saveToStorage();
        renderLists();
      }
    });
    container.appendChild(star);
  }
  return container;
}

// Reading status options
const readingStatusOptions = {
  'want-to-read': 'Want to Read',
  'currently-reading': 'Currently Reading',
  'finished': 'Finished',
  'none': 'No Status Set'
};

// Create reading status dropdown
function createReadingStatusDropdown(bookId) {
  const select = document.createElement('select');
  select.className = 'reading-status';
  select.setAttribute('aria-label', 'Change Reading Status');
  
  // Prevent click and change events on select from opening the modal
  select.addEventListener('click', e => {
    e.stopPropagation();
  });
  
  const defaultOption = document.createElement('option');
  defaultOption.value = 'none';
  defaultOption.textContent = 'Want to Read';
  select.appendChild(defaultOption);
  
  for(const [value, label] of Object.entries(readingStatusOptions)) {
    if(value === 'none') continue; // skip default option already added
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  }
  
  select.value = readingStatus[bookId] || 'want-to-read';
  select.addEventListener('change', e => {
    e.stopPropagation();
    if(e.target.value === 'none') {
      delete readingStatus[bookId];
    } else {
      readingStatus[bookId] = e.target.value;
    }
    saveToStorage();
    renderLists();
  });
  return select;
}

// Toggle favorite heart icon
function toggleFavorite(bookId) {
  if(favorites[bookId]) {
    delete favorites[bookId];
  } else {
    favorites[bookId] = true;
  }
  saveToStorage();
  renderLists();
}

// Create favorite heart icon
function createFavoriteIcon(bookId) {
  const icon = document.createElement('span');
  icon.className = 'favorite-toggle ' + (favorites[bookId] ? 'favorited' : '');
  icon.innerHTML = '❤';
  icon.setAttribute('role', 'button');
  icon.setAttribute('aria-pressed', favorites[bookId] ? 'true' : 'false');
  icon.setAttribute('tabindex', '0');
  icon.setAttribute('aria-label', favorites[bookId] ? 'Remove from favorites' : 'Add to favorites');
  icon.addEventListener('click', e => {
    e.stopPropagation();
    toggleFavorite(bookId);
  });
  icon.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(bookId);
    }
  });
  return icon;
}

// Apply all filters and sorting, return filtered book list
function filterAndSortBooks(books, filterFavorites=false) {
  let filtered = books;

  // Filter by favorites if tab/favorites toggled
  if(filterFavorites) {
    filtered = filtered.filter(b => favorites[b.id]);
  }

  // Filter by genre
  if(currentGenreFilter !== 'all') {
    filtered = filtered.filter(b => b.genre === currentGenreFilter);
  }

  // Filter by reading status
  if(currentStatusFilter !== 'all') {
    filtered = filtered.filter(b => readingStatus[b.id] === currentStatusFilter);
  }

  // Search filter (title or author, case insensitive)
  if(currentSearchTerm.trim().length > 0) {
    const searchTerm = currentSearchTerm.toLowerCase();
    filtered = filtered.filter(b =>
      b.title.toLowerCase().includes(searchTerm) ||
      b.author.toLowerCase().includes(searchTerm)
    );
  }

  // Sorting
  filtered = filtered.slice(); // copy to avoid mutating original
  switch(currentSort) {
    case 'title-asc':
      filtered.sort((a,b) => a.title.localeCompare(b.title));
      break;
    case 'title-desc':
      filtered.sort((a,b) => b.title.localeCompare(a.title));
      break;
    case 'author-asc':
      filtered.sort((a,b) => a.author.localeCompare(b.author));
      break;
    case 'author-desc':
      filtered.sort((a,b) => b.author.localeCompare(a.author));
      break;
    case 'rating-desc':
      filtered.sort((a,b) => (ratings[b.id] || 0) - (ratings[a.id] || 0));
      break;
    case 'added-desc':
      filtered.sort((a,b) => b.addedAt - a.addedAt);
      break;
  }
  return filtered;
}

// Create book card element
function createBookCard(book) {
  const card = document.createElement('article');
  card.className = 'book-card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `${book.title} by ${book.author}. Click for details.`);
  card.style.position = 'relative'; // For absolute positioning of favorite icon

  // Cover image
  const img = document.createElement('img');
  img.className = 'book-cover';
  img.src = book.cover;
  img.alt = `Cover of ${book.title}`;
  card.appendChild(img);

  // Favorite heart icon
  const favIcon = createFavoriteIcon(book.id);
  card.appendChild(favIcon);

  // Info container
  const info = document.createElement('div');
  info.className = 'book-info';

  // Title
  const title = document.createElement('h3');
  title.className = 'book-title';
  title.textContent = book.title;
  info.appendChild(title);

  // Author
  const author = document.createElement('p');
  author.className = 'book-author';
  author.textContent = `by ${book.author}`;
  info.appendChild(author);

  // Genre tag
  const genreTag = document.createElement('span');
  genreTag.className = 'book-genre';
  genreTag.textContent = book.genre.charAt(0).toUpperCase() + book.genre.slice(1);
  info.appendChild(genreTag);

  // Star rating component
  const ratingComp = createRatingComponent(book.id);
  info.appendChild(ratingComp);
  
  // Reading status dropdown
  const readingSelect = createReadingStatusDropdown(book.id);
  info.appendChild(readingSelect);

  card.appendChild(info);

  // Click event to open modal with detailed info
  card.addEventListener('click', () => openBookModal(book));
  card.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openBookModal(book);
    }
  });

  return card;
}

// Render all book cards into given container
function renderBookList(container, bookArray) {
  container.innerHTML = '';
  if (bookArray.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'No books found that match your criteria.';
    p.style.textAlign = 'center';
    p.style.color = '#777';
    container.appendChild(p);
    return;
  }
  bookArray.forEach(book => {
    const card = createBookCard(book);
    container.appendChild(card);
  });
}

// Render both lists depending on active tab
function renderLists() {
  if(activeTab === 'all') {
    allBooksPanel.hidden = false;
    favoritesPanel.hidden = true;
    let filteredBooks = filterAndSortBooks(books, false);
    renderBookList(bookList, filteredBooks);
  } else {
    allBooksPanel.hidden = true;
    favoritesPanel.hidden = false;
    let favBooks = books.filter(b => favorites[b.id]);
    favBooks = filterAndSortBooks(favBooks, false);
    renderBookList(favoritesList, favBooks);
  }
}

// Modal open and close functions
function openBookModal(book) {
  modalTitle.textContent = book.title;
  modalSummary.textContent = book.summary;
  modalYear.textContent = book.publicationYear || 'N/A';
  modalPages.textContent = book.pageCount || 'N/A';
  modalLink.href = book.infoLink || '#';
  modalLink.setAttribute('aria-label', `Learn more about ${book.title}`);
  modal.classList.add('show');
  modal.focus();
}
function closeBookModal() {
  modal.classList.remove('show');
}
modalClose.addEventListener('click', closeBookModal);
modal.addEventListener('click', e => {
  if(e.target === modal) closeBookModal();
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && modal.classList.contains('show')) {
    closeBookModal();
  }
});

// Event listeners
themeToggleBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  setTheme(newTheme);
});

searchInput.addEventListener('input', () => {
  currentSearchTerm = searchInput.value;
  renderLists();
});

statusFilter.addEventListener('change', () => {
  currentStatusFilter = statusFilter.value;
  renderLists();
});

sortFilter.addEventListener('change', () => {
  currentSort = sortFilter.value;
  renderLists();
});

// Genre filters click handler (delegated)
genreFiltersContainer.addEventListener('click', e => {
  if(!e.target.classList.contains('genre-chip')) return;
  currentGenreFilter = e.target.dataset.genre;
  renderGenreFilters();
  renderLists();
});
genreFiltersContainer.addEventListener('keydown', e => {
  if(e.target.classList.contains('genre-chip') && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    currentGenreFilter = e.target.dataset.genre;
    renderGenreFilters();
    renderLists();
  }
});

// Tab switching logic
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    activeTab = tab.id === 'tab-favorites' ? 'favorites' : 'all';
    renderLists();
    if(activeTab === 'favorites') {
      favoritesPanel.querySelector('div').focus();
    } else {
      allBooksPanel.querySelector('div').focus();
    }
  });
  tab.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      tab.click();
    }
  });
});

// Add Book Modal Functions
function openAddBookModal() {
  const modal = document.getElementById('add-book-modal');
  modal.classList.add('show');
  document.getElementById('book-title').focus();
}

function closeAddBookModal() {
  const modal = document.getElementById('add-book-modal');
  modal.classList.remove('show');
  document.getElementById('add-book-form').reset();
}

function generateBookId() {
  return 'b' + (Math.max(...books.map(b => parseInt(b.id.slice(1)))) + 1);
}

function handleAddBook(event) {
  event.preventDefault();
  
  const formData = {
    title: document.getElementById('book-title').value.trim(),
    author: document.getElementById('book-author').value.trim(),
    genre: document.getElementById('book-genre').value,
    publicationYear: parseInt(document.getElementById('book-year').value) || null,
    pageCount: parseInt(document.getElementById('book-pages').value) || null,
    cover: document.getElementById('book-cover').value.trim() || 'https://via.placeholder.com/150x200?text=No+Cover',
    summary: document.getElementById('book-description').value.trim(),
    id: generateBookId(),
    addedAt: Date.now(),
    infoLink: '#'
  };

  // Add the new book to the books array
  books.unshift(formData);
  
  // Set initial reading status
  readingStatus[formData.id] = document.getElementById('book-status').value;
  
  // Save to storage
  saveToStorage();
  
  // Close modal and refresh the display
  closeAddBookModal();
  renderLists();
  
  // Show success message
  alert('Book added successfully!');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // ... existing event listeners ...
  
  // Add Book Button
  document.getElementById('add-book-btn').addEventListener('click', openAddBookModal);
  
  // Add Book Form
  document.getElementById('add-book-form').addEventListener('submit', handleAddBook);
  
  // Cancel Add Book
  document.getElementById('cancel-add-book').addEventListener('click', closeAddBookModal);
  
  // Close Add Book Modal when clicking outside
  document.getElementById('add-book-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closeAddBookModal();
    }
  });
  
  // Close Add Book Modal when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('add-book-modal').classList.contains('show')) {
      closeAddBookModal();
    }
  });
});

// Initial render calls
renderGenreFilters();
renderLists(); 