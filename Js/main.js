const initApp = () => {
  const directionBtn = document.querySelector("#direction-link");

  if (directionBtn) {
    directionBtn.addEventListener("click", () => {
      let destinationAddress = ` https://maps.google.com/maps/dir//Shakarpur+Delhi,+110092/@28.6279488,77.2786205,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x390ce34d3da9c6a1:0x2f061e770eccf4a7`;

      directionBtn.href = destinationAddress;
      directionBtn.target = "_blank";
    });
  }
  // -------------------------------
  if (navigator.onLine) {
    console.log("online");

  } else {
    console.log("offline");
    alert("Please makesure your internet connection is on.");
  }



  // ---------------------- Copyright
  const copyRightElement = document.querySelector(".copyright-year");
  const today = new Date();
  const currentYear = today.getFullYear();
  // console.log("this is current year::", currentYear, String(currentYear + 1).slice(-2));
  copyRightElement.innerHTML = `${currentYear}-${String(currentYear + 1).slice(-2)}`;

};


window.addEventListener("DOMContentLoaded", initApp);
window.addEventListener("offline", (e) => {
  console.log("Internet connection is off.");
});

window.addEventListener("online", (e) => {
  console.log("Internet connection is on.");
});