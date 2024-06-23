function cursoreffect() {
  let main = document.querySelector("main");
  let playReel = document.querySelector(".playReel");

  main.addEventListener("mousemove", function (e) {
    gsap.to(playReel, {
      x: e.x,
      y: e.y,
    });
  });
  main.addEventListener("mouseenter", function () {
    gsap.to(playReel, {
      scale: 1,
      opacity: 1,
    });
  });

  main.addEventListener("mouseleave", function () {
    gsap.to(playReel, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursoreffect();
