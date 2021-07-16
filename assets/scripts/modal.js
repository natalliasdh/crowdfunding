const backProject = document.querySelector("#back");
const modal = document.querySelector("#modal");
const thanks = document.querySelector(".thanks");
const close = document.querySelector(".close");
const editionButton = document.querySelector("#editionbutton");
const bambooButton = document.querySelector("#bamboobutton");
const gotIt = document.querySelector("#gotit");
const content = document.querySelector(".content");
const invisible = document.querySelector(".invisible");
const invisible2 = document.querySelector(".invisible2");
const bambooRadio = document.querySelector("#bambooreward");
const editionRadio = document.querySelector("#editionreward");

content.addEventListener('click', (e) => {
    if ((e.target.tagName === 'BUTTON') && (e.target.className !== 'bookmark')) {
        modal.style.display = 'block';
    }

    if (e.target.id == "bamrew") {
        invisible2.style.display = "none";
        invisible.style.display = "block";
        bambooRadio.checked = true;

    }


    if (e.target.id == "edrew") {
        invisible2.style.display = "block";
        invisible.style.display = "none";
        editionRadio.checked = true;
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

editionButton.addEventListener('click', () => {

    modal.style.display = 'none';
    thanks.style.display = 'block';
});


modal.addEventListener("click", (e) => {

    if (e.target.id == "bambooreward") {
        invisible.style.display = "block";
        invisible2.style.display = "none";
    }


    if (e.target.id == "editionreward") {
        invisible2.style.display = "block";
        invisible.style.display = "none";
    }

    if (e.target.id == "noreward") {
        invisible2.style.display = "none";
        invisible.style.display = "none";
    }

});