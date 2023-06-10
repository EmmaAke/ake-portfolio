// Function to show/hide the scroll-to-top button
function toggleScrollTopButton() {
    var scrollTopButton = document.getElementById("scrollTopButton");
    if (document.documentElement.scrollTop > 100) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  }
  
  // Function to smoothly scroll to the top of the page
  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  // Event listener for scroll events
  window.addEventListener("scroll", toggleScrollTopButton);
  
  // Event listener for click event on the scroll-to-top button
  var scrollTopButton = document.getElementById("scrollTopButton");
  scrollTopButton.addEventListener("click", scrollToTop);

   // Initialize scrollspy
   var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
});

//dark-mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});

