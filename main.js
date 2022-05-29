// menu humburger
const menu = document.querySelector("#menu");
const list = document.querySelector(".list-header");
const h4 = document.querySelector("h4");
const remove = document.querySelector("#remove");

menu.addEventListener("click", function () {
  list.classList.toggle("slides");
});
// menghilangkan li ketika di klik
document.querySelectorAll("li").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("slides");
    list.classList.remove("slides");
  })
);
document.querySelectorAll("button").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("slides");
    list.classList.remove("slides");
  })
);

// STIKY NAVBAR
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  nav.classList.toggle("fixed", window.scrollY) > 0;
});

// scroll to top
let arrow = document.getElementById("arrow");

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
};

arrow.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Counter number
const counterNumber = document.querySelector(".counter-number");
const value = document.querySelectorAll(".counter-value .counter-h4");

// Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 200;
    value.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = "";
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / value.length + 0.5}s`;
      }
    });
    observer.unobserve(counterNumber);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(counterNumber);
