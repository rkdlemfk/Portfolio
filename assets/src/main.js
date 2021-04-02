const gnb = document.querySelector(".gnb");
const navItems = document.querySelectorAll(".header__container--items__item");

gnb.addEventListener("click", () => {
  const menuBtn = document.querySelector(".gnb-menu");
  const closeBtn = document.querySelector(".gnb-close");
  const menuList = document.querySelector(".header__container");
  menuBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  menuList.classList.toggle("active");
});

const itemHandler = (item) => {
  const itemTarget = item.currentTarget;
  navItems.forEach((item) => item.classList.remove("active"));
  itemTarget.classList.add("active");
};

navItems.forEach((item) => {
  item.addEventListener("click", itemHandler);
});
