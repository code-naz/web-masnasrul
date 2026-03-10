lucide.createIcons();

const backToTop = document.getElementById("backToTop");
const nav = document.querySelector(".navbar");

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

