const directionBtn = document.querySelector("#direction-link");

directionBtn.addEventListener("click", () => {
  let destinationAddress = ` https://maps.google.com/maps/dir//Shakarpur+Delhi,+110092/@28.6279488,77.2786205,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x390ce34d3da9c6a1:0x2f061e770eccf4a7`;

  directionBtn.href = destinationAddress;
  directionBtn.target = "_blank";
});

//
window.addEventListener("DOMContentLoaded", (event) => {
  const navShrink = function () {
    const navCollapse = document.querySelector("#main-nav");
    if (!navCollapse) {
      return;
    }
    if (window.scrollY === 0) {
      navCollapse.classList.remove("navbar-shrink");
    } else {
      navCollapse.classList.add("navbar-shrink");
    }
  };
// Shrink the navbar
navShrink()
// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navShrink);




});
