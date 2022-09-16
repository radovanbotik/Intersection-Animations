const sections = document.querySelectorAll("section");
const sectionsBoxes = [...document.querySelectorAll("section .box")];
const sectionsImages = [...document.querySelectorAll("section .box img")];
const sectionsHeadings = [...document.querySelectorAll("section h2")];

const optionsBoxes = {
  threshold: 0.5,
};
const optionsHeadings = {
  threshold: 1,
  rootMargin: "0px 0px 0px 0px ",
};

const animateBoxes = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target.querySelector("img");
      image.style.transform = `scale(1.05)`;
      image.style.left = 0;
      image.style.width = "100%";
    }
  });
};

const animateHeadings = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const boxWidth = entry.target.previousElementSibling
        .querySelector("img")
        .getBoundingClientRect().width;
      entry.target.style.transform = `translateX(${boxWidth}px)`;
    }
  });
};
const observerBoxes = new IntersectionObserver(animateBoxes, optionsBoxes);
const observerHeadings = new IntersectionObserver(
  animateHeadings,
  optionsHeadings
);

sectionsBoxes.forEach(box => {
  observerBoxes.observe(box);
});

sectionsHeadings.forEach(heading => {
  observerHeadings.observe(heading);
});
