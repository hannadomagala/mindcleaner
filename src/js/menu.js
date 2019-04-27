const validateName = name => {
  name = name.replace(/\s+/g, "");
  return name.toLowerCase();
};

const highlightActive = () => {
  const menuItems = document.querySelectorAll(".page-nav__item");
  let pageName = document.querySelector(".page-content__title").innerText;
  const itemsArr = [...menuItems];

  const rightIndex = itemsArr.findIndex(item => {
    pageName = validateName(pageName);
    return item.dataset.name === pageName;
  });

  if (rightIndex >= 0) {
    menuItems[rightIndex].classList.add("page-nav__item--active");
  } else {
    return;
  }
};

export default highlightActive;
