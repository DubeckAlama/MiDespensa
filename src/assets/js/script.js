window.onscroll = function () {
  animarHeaderScroll();
};

window.onload = function () {
  slideDownUp(".collapse-item h6");
};
/*Funciones de Componentes*/

function animarHeaderScroll() {
  const element = document.querySelectorAll(".top-header")[0];
  const ifHasTheTopHeaderClass =
    document.body.scrollTop > 0 || document.documentElement.scrollTop > 0;

  const addFixed = () => {
    if (element) {
      element.classList.add("fixed");
      return;
    }
  };

  const removeFixed = () => {
    if (element) {
      element.classList.remove("fixed");
      return;
    }
  };

  if (ifHasTheTopHeaderClass) {
    addFixed();
    return;
  }

  if (!ifHasTheTopHeaderClass) {
    removeFixed();
    return;
  }
}

function slideDownUp(elm) {
  document.querySelectorAll(elm).forEach((item) => {
    item.addEventListener("click", function (event) {
      let parent = this.closest(".collapse-item");
      let height = parent.querySelector("p").getBoundingClientRect().height;
      if (!parent.classList.contains("expand")) {
        parent.classList.add("expand");
        this.querySelector("i").classList.remove("fa-plus");
        this.querySelector("i").classList.add("fa-minus");
        parent.querySelector("div").style.height = `${height}px`;
      } else {
        parent.classList.remove("expand");
        this.querySelector("i").classList.add("fa-plus");
        this.querySelector("i").classList.remove("fa-minus");
        parent.querySelector("div").style.height = "0px";
      }
    });
  });
}
