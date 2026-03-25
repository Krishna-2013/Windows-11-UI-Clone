const powerbtn = document.querySelector(".power-btn");
const btn = document.querySelector("#powerOnButton");
const loader = document.querySelector(".loader");
const myimg = document.querySelector("#myimg");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
  powerbtn.style.display = "none";
  btn.style.display = "none";
  loader.style.display = "block";
  myimg.style.display = "block";
  p.style.display = "flex";
  setTimeout(function () {
    window.location.href = "index.html";
  }, 4000);
});

powerbtn.addEventListener("click", () => {
  powerbtn.style.display = "none";
  btn.style.display = "none";
  loader.style.display = "block";
  myimg.style.display = "block";
  p.style.display = "flex";
  setTimeout(function () {
    window.location.href = "index.html";
  }, 4000);
});

