let face = document.querySelector("i");
let home = document.querySelector("a");

home.addEventListener("mouseover", function () {
  face.classList.add("fa-smile", "green");
  // face.style.animationPlayState = "paused";
});
home.addEventListener("mouseout", function () {
  face.classList.remove("fa-smile", "green");
  // face.style.animationPlayState = "start";
});
