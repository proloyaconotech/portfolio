document.querySelectorAll('.project-gallery img').forEach(img => {
  img.addEventListener('click', function() {
    this.classList.toggle('expanded');
  });
});