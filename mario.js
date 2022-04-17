const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const f = document.getElementById("f");


function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 2100,"linear");
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  let fLeft = parseInt(
    window.getComputedStyle(f).getPropertyValue("left")
  );
  if (fLeft < 100 && fLeft > 0 && dinoTop >= 100) {
    // collision
    alert("GAME OVER ");
  }
  // detect collision
  if (cactusLeft < 100 && cactusLeft > 0 && dinoTop >= 100) {
    // collision
    alert("GAME OVER ");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
}); 