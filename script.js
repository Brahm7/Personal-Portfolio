document.addEventListener("DOMContentLoaded", function () {
    const navIcon = document.getElementById("nav-icon1");
    const navbar = document.querySelector(".navbar");
  
    navIcon.addEventListener("click", function () {
      this.classList.toggle("open");
      navbar.classList.toggle("show");
    });
  });
  