// window.addEventListener('DOMContentLoaded', init, true);

// function init() {
//     // animationForAlumni();
// }

// const animationForAlumni = () => {
//     const locationPinContainer = document.querySelectorAll(".pin-holder");
//     if (locationPinContainer) {
//         for (let i = 0; i < locationPinContainer.length; i++) {
//             locationPinContainer[i].style.setProperty("--pinanimation", "scale-easeOutBounce 2s linear");
//             locationPinContainer[i].style.setProperty("--height", "100px");
//             locationPinContainer[i].style.setProperty("--opacity", "1");
//             // locationPinContainer[i].classList.add('active');
//         }
//     }
// }

const body = document.querySelector("body");
const formOverlay = document.querySelector('.form-overlay');

const landingPage = document.querySelector(".landing__page");
const customForm = document.querySelector(".custom__form");

const enquireBtn = document.querySelector(".enquire__btn");
const customFormRow = document.querySelectorAll(".custom__form-row");

const queryMatch = window.matchMedia("(max-width: 768px)");

if (queryMatch.matches) {
  enquireBtn.innerHTML = `<i class="fa-solid fa-arrow-left-long"></i> Free <br> Registration`;
  // enquireBtn.style.setProperty("animation", "1.5s linear 5s infinite bounce");
}

function removeActive() {
  enquireBtn.classList.remove("active");
  enquireBtn.innerHTML = `<i class="fa-solid fa-arrow-left-long"></i> Free Registration`;
  // landingPage.style.setProperty("width", "100vw");
  customForm.style.setProperty("transform", "translateX(100%)");
  enquireBtn.style.setProperty("transform", "translate(0, -50%)");
  // customForm.style.setProperty('opacity', "0");
  // customFormRow.forEach(row => row.style.setProperty('display', 'none'));
  formOverlay.classList.remove("overlay");
  body.style.setProperty("overflow", "auto");
  if (queryMatch.matches) {
    enquireBtn.innerHTML = `<i class="fa-solid fa-arrow-left-long"></i> Free <br> Registration`;
    enquireBtn.style.setProperty("opacity", "0");
    setTimeout(function () {
      enquireBtn.style.setProperty("opacity", "1");
    }, 450);
  }
}

function addActive() {
  enquireBtn.classList.add("active");
  enquireBtn.innerHTML = `Close <i class="fa-solid fa-arrow-right-long"></i>`;
  // customForm.style.setProperty('opacity', "1");
  // landingPage.style.setProperty("width", "70vw");
  // customForm.style.setProperty('width', "30vw");
  customForm.style.setProperty("transform", "translateX(0)");
  enquireBtn.style.setProperty("transform", "translate(-30vw, -50%)");
  formOverlay.classList.add("overlay");
  body.style.setProperty("overflow", "hidden");
  if (queryMatch.matches) {
    enquireBtn.style.setProperty("transform", "translate(0, -50%)");
    enquireBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    enquireBtn.style.setProperty("opacity", "0");

    setTimeout(function () {
      enquireBtn.style.setProperty("opacity", "1");
    }, 450);
  }
}

enquireBtn.addEventListener("click", function () {
  if (enquireBtn.classList.contains("active")) {
    removeActive();
  } else {
    addActive();
    // customFormRow.forEach(row => row.style.setProperty('display', 'block'));
  }
});

document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    formOverlay.classList.contains("overlay")
  ) {
    removeActive();
  }
});

formOverlay.addEventListener('click', function(){
    if(formOverlay.classList.contains('overlay')){
        removeActive();
    }

})