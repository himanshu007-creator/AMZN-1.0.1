var lang = document.getElementById("lang");
var ull = document.getElementById("ull");
lang.addEventListener("click", () => {
  var ol = document.getElementById("langs");
  ol.classList.toggle("no");
  var bdy = document.querySelector("body");
  //   if (!ol.classList.contains("no")) {
  //     bdy.style.opacity = "0.5";
  //     ull.style.opacity = "1";
  //     ull.style.zIndex = "10";
  //   } else {
  //     bdy.style.opacity = "1";
  //     ull.style.zIndex = "1";
  //   }
  var icon = document.getElementById("icon");
  icon.classList.toggle("down");
  icon.classList.toggle("up");
});
var smull = document.getElementById("small");
smull.addEventListener("click", () => {
  var sm = document.getElementById("sm");
  sm.classList.toggle("nv");
  smull.classList.toggle("fa-user");
  smull.classList.toggle("fa-cross");
});
