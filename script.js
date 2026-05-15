const revealItems = document.querySelectorAll(".reveal");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const desk = document.querySelector(".hero-desk");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach(item => observer.observe(item));

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("is-open"));
});

window.addEventListener("mousemove", event => {
  if (!desk || window.innerWidth < 900) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 10;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;

  desk.style.transform = `translate(${x}px, ${y}px)`;
});
