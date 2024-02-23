// JavaScript to handle tabs and pills
document.addEventListener('DOMContentLoaded', function () {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', function () {
      const targetId = this.dataset.target;
      tabContents.forEach(content => {
        content.classList.remove('show');
      });
      document.querySelector(targetId).classList.add('show');

      // Remove 'active' class from all tab links
      tabLinks.forEach(link => {
        link.classList.remove('active');
      });

      // Add 'active' class to the clicked tab link
      this.classList.add('active');
    });
  });
});
