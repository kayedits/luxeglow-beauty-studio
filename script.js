
/* =========================================
   LUXEGLOW BEAUTY STUDIO
   COMPLETE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  // SELECT ELEMENTS

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");
  const year = document.getElementById("year");


  // AUTOMATIC COPYRIGHT YEAR

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // MOBILE NAVIGATION

  if (menuToggle && navigation) {

    // OPEN MENU

    function openMenu() {
      navigation.classList.add("active");
      menuToggle.classList.add("active");

      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute(
        "aria-label",
        "Close navigation menu"
      );
    }


    // CLOSE MENU

    function closeMenu() {
      navigation.classList.remove("active");
      menuToggle.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );
    }


    // TOGGLE MENU

    menuToggle.addEventListener("click", function () {

      const isOpen = navigation.classList.contains("active");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }

    });


    // CLOSE MENU AFTER CLICKING NAVIGATION LINKS

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

      link.addEventListener("click", function () {
        closeMenu();
      });

    });


    // CLOSE MENU WHEN CLICKING OUTSIDE

    document.addEventListener("click", function (event) {

      const clickedInsideMenu = navigation.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
      }

    });


    // CLOSE MENU WITH ESCAPE KEY

    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape") {
        closeMenu();
      }

    });


    // CLOSE MENU WHEN SCREEN RESIZES

    window.addEventListener("resize", function () {

      if (window.innerWidth > 950) {
        closeMenu();
      }

    });

  }

});
