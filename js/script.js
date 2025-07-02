const revealBtn = document.getElementById("revealBtn");
const intro = document.getElementById("intro");
const revealSection = document.getElementById("revealSection");
const maskLayer = document.getElementById("maskLayer");

revealBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  revealSection.classList.remove("hidden");
  maskLayer.classList.add("masked");
  document.title = "✨ Rahul Gupta | Full Stack Reveal";
});

revealSection.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  maskLayer.style.webkitMaskImage = `radial-gradient(circle at ${x}px ${y}px, black 0, black 130px, transparent 150px)`;
  maskLayer.style.maskImage = `radial-gradient(circle at ${x}px ${y}px, black 0, black 130px, transparent 150px)`;
});

const titles = [
  "👨‍💻 Rahul Gupta | Full Stack Dev",
  "🚀 MERN • Laravel • WordPress",
  "🔦 Hover to Explore My Work",
];
let index = 0;
setInterval(() => {
  if (!revealSection.classList.contains("hidden")) {
    document.title = titles[index++ % titles.length];
  }
}, 3000);
