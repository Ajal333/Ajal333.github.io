function heroHeadingAnimation() {
  anime.timeline({ loop: false }).add({
    targets: ".name",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 70 * (i + 1) + 100,
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.querySelector("#load");
    loader.classList.add("endLoad");
    const name = document.querySelector("#name");
    name.classList.add("showName");
  }, 2000);
});

window.addEventListener("mousemove", (e) => {
  let mouseCursor = document.querySelector(".cursor");
  console.log(e);
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
});

heroHeadingAnimation();
