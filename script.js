// Get elements
const dropBtn = document.querySelector(".dropbtn");
const dropContent = document.querySelector(".dropdown-content");

// Toggle dropdown on button click
dropBtn.addEventListener("click", () => {
  dropContent.style.display = dropContent.style.display === "block" ? "none" : "block";
});

// Close dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!e.target.matches('.dropbtn')) {
    dropContent.style.display = "none";
  }
});

const elementInView = (el, offset = 300) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight - offset);
};

scrollTargets.forEach((el, index) => {
  if (elementInView(el, 300)) {
    el.style.transitionDelay = `${index * 0.15}s`;
    displayScrollElement(el);
  }
});
