document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navbarLinks = document.querySelectorAll('#navbar a'); // Select all links in the navbar
    const parallaxSection = document.querySelector('.parallax');
    const contentSection = document.querySelector('section'); // Adjust this if your section has a different class or ID

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 1.0 // Trigger when the element is fully visible
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // The next section is fully visible
                navbar.classList.add('scrolled');
                navbarLinks.forEach(link => link.classList.add('text-white')); // Change text color to white
            } else {
                // The next section is not fully visible
                navbar.classList.remove('scrolled');
                navbarLinks.forEach(link => link.classList.remove('text-white')); // Revert text color
            }
        });
    }, observerOptions);

    // Observe the content section to trigger the color change
    observer.observe(contentSection);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
} 

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
