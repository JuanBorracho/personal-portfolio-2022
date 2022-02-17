// Showing and hiding the mobile menu
const mobileIconContainer = document.getElementById('hamburger');
const mobileIcon = document.getElementById('mobile-icon');
const mobileMenu = document.getElementById('mobile-menu');
const exitIcon = document.getElementById('exit-icon');

mobileIconContainer.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  mobileIcon.classList.toggle('none');
});

exitIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  mobileIcon.classList.toggle('none');
});

// Showing and hiding portfolio items based on filters
// Creating filterArray and allPortfolioItems array
const filterArray = Array.from(document.querySelectorAll('[data-filter]'));
const allPortfolioItems = Array.from(
  document.getElementsByClassName('portfolio-item__outer')
);

// Grabbing the filter buttons
const all = document.querySelector('.all');
const react = document.querySelector('.react');
const sass = document.querySelector('.sass');
const wordpress = document.querySelector('.wordpress');

const filterButtonArr = [all, react, sass, wordpress];

// Re-usable function for filtering portfolio items
const filterByData = (portfolioItems, filterButton) => {
  filterButtonArr.forEach((button) =>
    button.classList.remove('filter-selected')
  );

  filterButton.classList.add('filter-selected');

  portfolioItems.forEach((item) => item.classList.add('none'));

  const filteredItems = filterArray.filter(
    (item) => item.dataset.filter === filterButton.innerHTML.toLowerCase()
  );

  filteredItems.forEach((item) => item.classList.remove('none'));
};

// Event Listeners
react.addEventListener('click', () => {
  filterByData(allPortfolioItems, react);
});

sass.addEventListener('click', () => {
  filterByData(allPortfolioItems, sass);
});

wordpress.addEventListener('click', () => {
  filterByData(allPortfolioItems, wordpress);
});

all.addEventListener('click', () => {
  filterButtonArr.forEach((button) =>
    button.classList.remove('filter-selected')
  );
  all.classList.add('filter-selected');
  allPortfolioItems.forEach((item) => item.classList.remove('none'));
});
