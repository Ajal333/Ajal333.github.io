window.onload = function () {
  lax.setup({
    breakpoints: { small: 0, large: 992 },
  }); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};
