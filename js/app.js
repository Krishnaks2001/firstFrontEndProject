//DOM => document object Model
function init() {
  const hamberger = document.querySelector(".hamberger");
  const sidebarCloseButton = document.querySelector(".close-button");
  const sidebarContainer = document.querySelector(".sidebar-container");
  const openSidebar = () => {
    sidebarContainer.classList.add("show-sidebar");
    console.log(sidebarContainer.classList);
  };
  const closeSideBar = () => {
    sidebarContainer.classList.remove("show-sidebar");
    console.log(sidebarContainer.classList);
  };
  hamberger.addEventListener("click", openSidebar);

  sidebarCloseButton.addEventListener("click", closeSideBar);
}

function navRealtedCode(){
    const navbarContainer = document.querySelector(".nav-container");
    window.addEventListener("scroll", function () {
      const scrollNumber = window.scrollY;
      const targetNumber = window.innerWidth >= 992 ? 70 : 50;
      if (scrollNumber >= targetNumber) {
        navbarContainer.classList.add("stikcy-nav");
      } else {
        navbarContainer.classList.remove("stikcy-nav");
      }
    });
}
init();

navRealtedCode();