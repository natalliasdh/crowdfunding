const backProject = document.querySelector("#back");
const modal = document.querySelector("#modal");
const thanks = document.querySelector(".thanks");
const close = document.querySelector(".close");
const editionButton = document.querySelector("#editionbutton");
const bambooButton = document.querySelector("#bamboobutton");
const norewardButton = document.querySelector("#norewardbutton");
const gotIt = document.querySelector("#gotit");
const content = document.querySelector(".content");
const invisible = document.querySelector(".invisible");
const invisible2 = document.querySelector(".invisible2");
const invisible3 = document.querySelector(".invisible3");
const bambooRadio = document.querySelector("#bambooreward");
const editionRadio = document.querySelector("#editionreward");
const norewardRadio = document.querySelector("#noreward");

content.addEventListener('click', (e) => {
    if ((e.target.tagName === 'BUTTON') && (e.target.className !== 'bookmark')) {
        modal.style.display = 'block';
    }

    if (e.target.id == "bamrew") {
        invisible2.style.display = "none";
        invisible.style.display = "block";
        invisible3.style.display = "none";
        bambooRadio.checked = true;

    }


    if (e.target.id == "edrew") {
        invisible2.style.display = "block";
        invisible.style.display = "none";
        invisible3.style.display = "none";
        editionRadio.checked = true;
    }

    if (e.target.id == "back") {
        invisible2.style.display = "none";
        invisible.style.display = "none";
        invisible3.style.display = "block";
        norewardRadio.checked = true;

    }


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

norewardButton.addEventListener('click', () => {

    modal.style.display = 'none';
    thanks.style.display = 'block';
});

editionButton.addEventListener('click', () => {

    modal.style.display = 'none';
    thanks.style.display = 'block';
});


modal.addEventListener("click", (e) => {

    if (e.target.id == "bambooreward") {
        invisible.style.display = "block";
        invisible2.style.display = "none";
        invisible3.style.display = "none";
    }


    if (e.target.id == "editionreward") {
        invisible2.style.display = "block";
        invisible.style.display = "none";
        invisible3.style.display = "none";
    }

    if (e.target.id == "noreward") {
        invisible2.style.display = "none";
        invisible.style.display = "none";
        invisible3.style.display = "block";
    }

});