/* =====================================================
   1. NAVIGATION ENTRE LES SECTIONS
===================================================== */

const navLinks = document.querySelectorAll(".navbar-link");
const sections = document.querySelectorAll("article[data-page]");

// Quand on clique sur un bouton du menu
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Supprime l’état actif sur tous
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const page = link.textContent.toLowerCase();

    // Affiche uniquement la bonne section
    sections.forEach((section) => {
      if (section.dataset.page === page) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });
});

/* Par défaut : n’afficher que "about" */
sections.forEach((section) => {
  section.style.display = section.dataset.page === "about" ? "block" : "none";
});


/* =====================================================
   2. BOUTON "VOIR MES CONTACTS"
===================================================== */

const toggleBtn = document.querySelector(".info_more-btn");
const moreInfo = document.querySelector(".sidebar-info_more");

toggleBtn.addEventListener("click", () => {
  moreInfo.style.display =
    moreInfo.style.display === "block" ? "none" : "block";
});


/* =====================================================
   3. SMOOTH SCROLL (si tu veux faire défiler vers un point)
===================================================== */

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});
