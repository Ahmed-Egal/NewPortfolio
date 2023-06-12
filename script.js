const contentContainer = document.querySelector('.content-container');
const windowHeight = window.innerHeight;

window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;
  const opacity = 1 - (scrollPosition / windowHeight) * 0.8;
  const translateY = scrollPosition * 2;
  contentContainer.style.opacity = opacity;
  contentContainer.style.transform = `translateY(-${translateY}px)`;

  const distanceFromTop = contentContainer.getBoundingClientRect().top;
  if (distanceFromTop >= 0 && distanceFromTop <= 100) {
    contentContainer.style.opacity = '3';
    contentContainer.style.transform = 'translateY(0)';
  }
});