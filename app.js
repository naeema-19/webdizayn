const cone = document.getElementById("cone");
const photo = document.getElementById("photo");
const two = document.getElementById("two");

function jump() {
  cone.classList.add("jump-animation");
  setTimeout(() =>
    cone.classList.remove("jump-animation"), 250);
}
document.addEventListener("keypress",() => {
  jump();
})


