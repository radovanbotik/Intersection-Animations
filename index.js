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
  console.log(observer);
  entries.forEach(entry => {
    console.log(entry.boundingClientRect, window.innerHeight);
    if (entry.isIntersecting) {
      console.log(window.innerHeight);
      console.log(entry);
      const image = entry.target.querySelector("img");
      // image.style.transform = `translateX(0%)`;
      image.style.transform = `scale(1.1)`;
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
