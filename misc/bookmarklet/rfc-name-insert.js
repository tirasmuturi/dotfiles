javascript: (() => {
  Array.from(document.querySelectorAll('a')).filter(e => e.title).forEach((e) => {
    e.addEventListener('mouseover', () => {
      e.setAttribute('x-text', e.textContent);
      e.textContent = e.title;
    });
    e.addEventListener('mouseleave', () => {
      e.textContent = e.getAttribute('x-text');
    });
  });
})();
