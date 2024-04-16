let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    document.querySelector('.about-section').classList.remove('reverse');
    document.querySelector('.about-content p').classList.remove('reverse');
  } else {
    document.querySelector('.about-section').classList.add('reverse');
    document.querySelector('.about-content p').classList.add('reverse');
  }
  lastScrollTop = st <= 0 ? 0 : st;

  // Call the function to animate testimonials when scrolling
  animateTestimonials();
}, false);

// JavaScript code to trigger the animation when the testimonials section is in view
const testimonialsSection = document.querySelector('.testimonials-section');
const testimonials = document.querySelectorAll('.testimonial');

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateTestimonials() {
  testimonials.forEach(testimonial => {
    if (isElementInViewport(testimonial)) {
      testimonial.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
}
