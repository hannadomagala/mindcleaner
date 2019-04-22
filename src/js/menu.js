const validateName = (name) => {
    name = name.replace(/\s+/g, '');
    return name.toLowerCase();
}

const highlightActive = () => {
    const menuItems = document.querySelectorAll('.page-nav__item');
    let pageName = document.querySelector('.page-content__title').innerText;
    const itemsArr = [...menuItems];
    console.log(pageName);
    
    const rightIndex = itemsArr.findIndex((item) => {
        pageName = validateName(pageName);
        console.log(pageName);
        return item.dataset.name === pageName;
    });
    
    console.log(rightIndex);

    menuItems[rightIndex].classList.add('page-nav__item--active');
}

export default highlightActive;