window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopButton = document.querySelector(".back-to-top");

  // Check if user has scrolled more than 100px
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}
