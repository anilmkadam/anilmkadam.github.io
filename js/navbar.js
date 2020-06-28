//function handleNavActive() {

$(document).ready(() => {
  $("#resumeBtn").click(() => {
    window.open(
      "https://drive.google.com/file/d/1S8b6AXtL4_gwsJg6wMRntBDjza99lEzb/view?usp=sharing"
    );
  });
  var elmnt = document.getElementById("navbarItems");
  var items = elmnt.getElementsByClassName("nav-item");
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length == 0) {
        this.className += " active";
      } else {
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      }
    });
  }
});
//}

// export { handleNavActive };
