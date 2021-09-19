window.addEventListener("load", () => {
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  function fade() {
    var x = document.getElementById("smile");
    x.style.opacity = 0;
  }
  // Usage!
  sleep(3000).then(() => {
    fade();
  });
  var myinterval;
  myinterval = setInterval(myFunction, 1500);
  async function myFunction() {
    var x = document.getElementById("smile");
    x.style.opacity = 1;
    clearInterval(myinterval);
  }
});

document.addEventListener("scroll", () => {
  // console.log(EventTarget);
});
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

var langdd = document.getElementById("langlist");
langdd.addEventListener("click", () => {
  var x = document.getElementsByClassName("active");
  for (i = 0; i < x.length; i++) {
    var elem = x[i];
    elem.classList.toggle("nv");
  }
});

var languages = document.getElementsByClassName("active");
for (const x of languages) {
  var s = document.createElement("i");
  s.classList.add("fa-solid");
  s.classList.add("fa-check");
  console.log(s);
  x.addEventListener("click", () => {
    for (const item of languages) {
      var i = item.firstChild;
      if (!i.classList.contains("nv")) i.classList.add("nv");
    }
    var txt = x.children[0];
    txt.classList.toggle("nv");
  });
}
