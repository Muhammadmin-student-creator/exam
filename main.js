const indicators = document.querySelector(".indicators");
const show = document.querySelector("#show img");

indicators.addEventListener("click", function (event) {
  event.target.src && (show.src = event.target.src);
});

// dark-light

let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// accordion

const accordionItems = document.querySelectorAll(".accordion-item");
const accordionHeaders = document.querySelectorAll(".accordion-header");
const itemsLength = accordionItems.length;

for (let i = 0; i < itemsLength; i++) {
  accordionHeaders[i].addEventListener("click", function () {
    const accordionContent = this.nextElementSibling;
    for (let j = 0; j < itemsLength; j++) {
      if (i == j) {
        continue;
      }
      accordionHeaders[j].parentNode.classList.remove("active");
      accordionHeaders[j].nextElementSibling.style.maxHeight = null;
    }
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      this.parentNode.classList.remove("active");
    } else {
      this.parentNode.classList.add("active");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
}

//carousel

const carousel = document.querySelector(".carousel");
const carouselAllItems = document.querySelectorAll(".carousel-item");
const carouselItems = document.querySelector(".carousel-items");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

let slideLength = 1;

const carouselItemsLength = carouselAllItems.length; // the number of carousel items

const carouselItemWidth = carousel.offsetWidth / slideLength; // carousel-item width
carouselItems.style.width = carouselItemsLength * carouselItemWidth + "px"; // total width of carousel-items

for (let i = 0; i < carouselItemsLength; i++) {
  carouselAllItems[i].style.width = carouselItemWidth + "px"; // set width for every carousel-item
}

const stepLength = 1;
const stepWidth = stepLength * carouselItemWidth;

let currentPosition = 0;
let lastPosition = (carouselItemsLength - slideLength) * carouselItemWidth;

prevBtn.addEventListener("click", function () {
  currentPosition -= stepWidth;
  if (Math.ceil(currentPosition) < 0) {
    currentPosition = lastPosition;
  }
  carouselItems.style.transform = `translateX(${-currentPosition}px)`;
});

nextBtn.addEventListener("click", function () {
  currentPosition += stepWidth;
  if (Math.floor(currentPosition) > lastPosition) {
    currentPosition = 0;
  }
  carouselItems.style.transform = `translateX(${-currentPosition}px)`;
});

// modal

let btn = document.getElementsByClassName("second-btn");

const open_btn = document.querySelector(".second-btn");
const close_btn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modal_content = document.querySelector(".modal-content");

function modalShow() {
  modal.classList.add("modal-show");
  modal_content.classList.add("modal-content-show");
}

function modalHide() {
  modal.classList.remove("modal-show");
  modal_content.classList.remove("modal-content-show");
}

open_btn.addEventListener("click", modalShow);

close_btn.addEventListener("click", modalHide);

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modalHide();
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modalHide();
  }
});

// maping

const head = document.getElementsByClassName("cards-1");

function Fuctname(h1, p, a, b, c, img, card_i) {
  const card = document.createElement("div");
  const card_img = document.createElement("img");
  const card__h1 = document.createElement("h1");
  card__h1.style.fontWeight = "700";
  card__h1.style.fontSize = "24px";
  card__h1.style.lineHeight = "26px";
  card__h1.style.color = "black";
  card__h1.style.padding = "40px 0 25px";
  const card_p = document.createElement("p");
  card_p.style.fontWeight = "400";
  card_p.style.fontSize = "16px";
  card_p.style.lineHeight = "28px";
  card_p.style.color = "#666666";
  card_p.style.padding = "0 0 50px";
  const card_a = document.createElement("p");
  const card_b = document.createElement("p");
  const card_c = document.createElement("p");
  card_a.textContent = a;
  card_b.textContent = b;
  card_c.textContent = c;
  card_p.textContent = p;
  card__h1.textContent = h1;
  card_img.src = card_i;
  const card__img = document.createElement("img");
  card__img.src = img;
  card_a.style.color = "black";
  card_a.style.fontWeight = "700";
  card_b.style.fontWeight = "700";
  card_c.style.fontWeight = "700";
  card_a.style.paddingBottom = "10px";
  card_b.style.paddingBottom = "10px";
  card_c.style.paddingBottom = "10px";
  card_b.style.color = "black";
  card_c.style.color = "black";
  card.append(card_img, card__h1, card_p, card_a, card_b, card_c);
  return card;
}

let obj = [
  {
    img: "images/card-1.svg",
    h1: "What I can do for you",
    p: "Faster, better products that your users love. Here's all the services I provide:",
    a: "Design Strategy",
    b: "Web and Mobile App Design",
    c: "Front-end Development",
    kub: "images/kub.svg",
  },
  {
    img: "images/card-2.svg",
    h1: "Applications I'm fluent in",
    p: "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
    a: "Sketch",
    b: "Webflow",
    c: "Figma",
    kub: "images/kub.svg",
  },
  {
    img: "images/card-3.svg",
    h1: "What you can expect",
    p: "I design products that are more than pretty. I make them shippable and usable.",
    a: "Clean and functional",
    b: "Device and user friendly",
    c: "Efficient and maintainable",
    kub: "images/kub.svg",
  },
];

for (el of obj) {
  let res = Fuctname(el.h1, el.p, el.a, el.b, el.c, el.kub, el.img);
  document.querySelector(".cards-1").append(res);
}

// back top

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.opacity = 1;
  } else {
    backtop.style.opacity = 0;
  }
}

window.addEventListener("scroll", function () {
  toggleBacktop();
});

//navbar-shrink

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

//navbr respnsive

function openNavbar() {
  document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
