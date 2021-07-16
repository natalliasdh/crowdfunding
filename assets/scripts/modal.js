const backProject = document.querySelector("#back");
const modal = document.querySelector("#modal");
const thanks = document.querySelector(".thanks");
const close = document.querySelector(".close");
const editionButton = document.querySelector("#editionbutton");
const bambooButton = document.querySelector("#bamboobutton");
const gotIt = document.querySelector("#gotit");

backProject.addEventListener('click', () => {

    modal.style.display = 'block';
});

close.addEventListener('click', () => {

    modal.style.display = 'none';
});


gotIt.addEventListener('click', () => {

    thanks.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});


bambooButton.addEventListener('click', () => {

    modal.style.display = 'none';
    thanks.style.display = 'block';
});

editionButton.addEventListener('click', () => {

    modal.style.display = 'none';
    thanks.style.display = 'block';
});