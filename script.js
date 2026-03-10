lucide.createIcons();

const backToTop = document.getElementById("backToTop");
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("shadow-sm");
    nav.style.padding = "10px 0";
  } else {
    nav.classList.remove("shadow-sm");
    nav.style.padding = "15px 0";
  }

  if (window.scrollY > 500) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const toggler = document.querySelector('.navbar-toggler');
        if (window.getComputedStyle(toggler).display !== 'none') {
            bsCollapse.hide(); 
        }
    });
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const triggerTabList = document.querySelectorAll("#pills-tab button");
triggerTabList.forEach((triggerEl) => {
  triggerEl.addEventListener("shown.bs.tab", () => {
    lucide.createIcons();
  });
});

const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    btn.innerText = "Message Sent!";
    btn.disabled = true;
    btn.style.backgroundColor = "#27ae60";

    contactForm.reset();

    setTimeout(() => {
      btn.innerText = originalText;
      btn.disabled = false;
      btn.style.backgroundColor = "";
    }, 3000);
  });
}

