
  // 1. Toggle sidebar
  function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
  }

  // 2. Close sidebar
  function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('hidden');
  }

  // 3. Highlight active menu item
  function highlightMenuItem(id) {
    document.querySelectorAll('.menu-link').forEach(link => {
      link.classList.remove('text-orange-400');
    });
    document.getElementById(id).classList.add('text-orange-400');
  }

  // 4. Show alert when clicking "Next Page"
  function showAlert() {
    alert("Navigating to the competition page!");
  }

  // 5. Log when image is hovered
  function logHover(itemName) {
    console.log("Hovering over:", itemName);
  }

  // 6. Change background color
  function changeBackground(color) {
    document.body.style.backgroundColor = color;
  }

  // 7. Reset background color
  function resetBackground() {
    document.body.style.backgroundColor = "white";
  }

  // 8. Scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 9. Display date
  function displayDate() {
    const now = new Date();
    alert("Today's date is: " + now.toDateString());
  }

  // 10. Count number of recipe cards
  function countRecipes() {
    const count = document.querySelectorAll('.recipe-card').length;
    alert("Total recipe categories: " + count);
  }

  // Optional: Assign toggle button after DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    if (toggle) toggle.addEventListener('click', toggleMenu);
  });


