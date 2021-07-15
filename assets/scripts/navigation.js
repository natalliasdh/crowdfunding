const hamburger = document.querySelector("#hamburger");
const myLinks = document.querySelector("#myLinks");

hamburger.addEventListener('click', () => {
    if (myLinks.style.display == 'flex') {
        myLinks.style.display = 'none';
    } else {
        myLinks.style.display = 'flex';
    }
});