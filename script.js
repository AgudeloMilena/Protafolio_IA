document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a.nav-link');
  const sections = Array.from(links)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter((section) => section);

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach((section, index) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        links.forEach((link) => link.classList.remove('active'));
        links[index].classList.add('active');
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
