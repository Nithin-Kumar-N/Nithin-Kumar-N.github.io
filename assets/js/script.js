document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector(".checkbox");

  checkbox.addEventListener("change", () => {
    const root = document.documentElement;

    if (checkbox.checked) {
      // Switch to light mode
      root.style.setProperty('--bg-gradient-yellow-1', 'linear-gradient(to bottom right, hsl(282, 68%, 85%) 0%, hsla(285, 94%, 81%, 0) 50%)');
      root.style.setProperty('--text-gradient-yellow', 'linear-gradient(to right, hsl(260, 100%, 85%), hsl(290, 100%, 83%))');
      root.style.setProperty('--bg-gradient-jet', 'white');
      root.style.setProperty('--jet', 'hsl(0, 0%, 93%)');
      root.style.setProperty('--onyx', 'hsl(271, 100%, 89%)');
      root.style.setProperty('--eerie-black-1', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--eerie-black-2', 'hsl(240, 100%, 100%)');
      root.style.setProperty('--smoky-black', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--white-1', 'hsl(0, 0%, 0%)');
      root.style.setProperty('--white-2', 'hsl(0, 4%, 21%)');
      root.style.setProperty('--orange-yellow-crayola', 'hsl(270, 50%, 70%)');
      root.style.setProperty('--vegas-gold', 'hsl(270, 50%, 68%)');
      root.style.setProperty('--bittersweet-shimmer', 'hsl(0, 43%, 51%)');
    } else {
      // Switch to dark mode
      root.style.setProperty('--bg-gradient-yellow-1', 'linear-gradient(to bottom right, hsl(283, 100%, 63%) 0%, hsla(285, 100%, 69%, 0) 50%)');
      root.style.setProperty('--text-gradient-yellow', 'linear-gradient(to right, hsl(260, 96%, 71%), hsl(290, 100%, 76%))');
      root.style.setProperty('--bg-gradient-jet', 'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%)');
      root.style.setProperty('--jet', 'hsl(0, 0%, 22%)');
      root.style.setProperty('--onyx', 'hsl(240, 1%, 17%)');
      root.style.setProperty('--eerie-black-1', 'hsl(240, 2%, 13%)');
      root.style.setProperty('--eerie-black-2', 'hsl(240, 2%, 12%)');
      root.style.setProperty('--smoky-black', 'hsl(0, 0%, 7%)');
      root.style.setProperty('--white-1', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--white-2', 'hsl(0, 0%, 98%)');
      root.style.setProperty('--orange-yellow-crayola', 'hsl(260, 96%, 71%)');
      root.style.setProperty('--vegas-gold', 'hsl(270, 50%, 68%)');
      root.style.setProperty('--bittersweet-shimmer', 'hsl(0, 43%, 51%)');
    }

    // Toggle styles for checkbox label
    const checkboxLabel = document.querySelector(".checkbox-label");
    checkboxLabel.style.backgroundColor = checkbox.checked ? 'var(--onyx)' : 'var(--bg-gradient-onyx)';
    checkboxLabel.style.border = checkbox.checked ? '1px solid hsl(270, 50%, 68%)' : '1px solid var(--jet)';

    // Toggle styles for info content title
    const infoContentTitle = document.querySelector(".info-content .title");
    infoContentTitle.style.background = checkbox.checked ? 'hsla(270, 50%, 70%, 0.634)' : 'var(--onyx)';
    const infomorebutton = document.querySelector(".info_more-btn");
    infomorebutton.style.backgroundColor = checkbox.checked ? 'white' : 'var(--bg-gradient-jet)';

    // Toggle styles for navbar
    const navbar = document.querySelector(".navbar");
    navbar.style.background = checkbox.checked ? 'var(--onyx)' : 'hsla(240, 1%, 17%, 0.75)';
    navbar.style.border = checkbox.checked ? '1px solid hsl(270, 50%, 68%)' : '1px solid var(--jet)';

    // Toggle styles for testimonials-text
    const testimonialsTextMain = document.querySelectorAll(".testimonials-text-main");
    testimonialsTextMain.forEach(element =>{
      element.style.color = checkbox.checked ? 'var(--light-gray)':'white';
    });
    

    // Toggle styles for about-text paragraphs
    const aboutTextParagraphs = document.querySelector(".about-text");
    aboutTextParagraphs.style.color = checkbox.checked ? 'var(--light-gray)' : 'white';

    const servicetext = document.querySelectorAll(".service-item-text");
    servicetext.forEach(element => {
      element.style.color = checkbox.checked ? 'var(--light-gray)' : 'white';
    });

    const serviceitembefore = document.querySelectorAll(".service-item::before");
    const serviceitem = document.querySelectorAll(".service-item");
    const infomorebtn = document.querySelectorAll(".info_more-btn");
    const contentcardbefore = document.querySelectorAll(".content-card::before");
    const contentcard = document.querySelectorAll(".content-card");
    const timelinetext = document.querySelectorAll(".timeline-text");

    serviceitembefore.forEach(element => {
      element.style.backgroundColor = checkbox.checked ? 'white' : 'var(--bg-gradient-jet)';
    });
    infomorebtn.forEach(element => {
      element.style.background = checkbox.checked ? 'var(--onyx)':'var(--border-gradient-onyx)';
    });
    serviceitem.forEach(element => {
      element.style.background = checkbox.checked ? 'white':'var(--border-gradient-onyx)';
    });
    contentcard.forEach(element => {
      element.style.background = checkbox.checked ? 'white':'var(--border-gradient-onyx)';
    });
    timelinetext.forEach(element => {
      element.style.color= checkbox.checked ?' var(--light-gray)': 'hsl(0, 1%, 85%)';
    });

      const navbarlink = document.querySelectorAll(".navbar-link");
      navbarlink.forEach(element => {
        element.style.color = checkbox.checked ? 'var(--light-gray)':'white';
      });
    
  });
});

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}