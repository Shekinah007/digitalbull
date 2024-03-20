export const scrollProgress = () => {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
};

export const intesectionHandler = () => {
  let classes = document.querySelectorAll(
    ".animate, .left, .fade, .card, .top-enter"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("entrance");
        } else {
          entry.target.classList.remove("entrance");
        }
      });
    },
    { rootMargin: "20px" }
  );

  for (let i = 0; i < classes.length; i++) {
    const elements = classes[i];

    observer.observe(elements);
  }

  //////////////////////////////////////////
  let midPoint = document.getElementById("mid-point");
  let topButton = document.getElementsByClassName("to-top")[0];

  topButton.classList.add("show-top-btn");

  const topObserver = new IntersectionObserver((entry) => {
    if (entry[0].isIntersecting) {
      topButton.classList.add("show-top-btn");
    } else {
      topButton.classList.remove("show-top-btn");
    }
  });

  topObserver.observe(midPoint);
};
