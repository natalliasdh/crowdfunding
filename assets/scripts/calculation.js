let bambooLeft = 101;
let editionLeft = 64;
let backedTotal = 89914;
let backersTotal = 5007;
let bambooReward;
let editionReward;
let backedSum = document.querySelector(".backedSum");
let backersTotalUpdate = document.querySelector(".backersTotal");
let inputTwentyFive = document.querySelector("#twentyfive");
let inputSeventyFive = document.querySelector("#seventyfive");
let leftBamboo = document.querySelectorAll(".leftbamboo");
let leftEdition = document.querySelectorAll(".leftedition");


modal.addEventListener("click", (e) => {

    if (e.target.id == "bamboobutton") {
        backedTotal += Number(inputTwentyFive.value);
        backersTotal++;
        bambooLeft--;
        backedSum.textContent = backedTotal;
        backersTotalUpdate.textContent = backersTotal;
        leftBamboo[0].textContent = bambooLeft;
        leftBamboo[1].textContent = bambooLeft;
        inputTwentyFive.value = "25";

    }

    if (e.target.id == "editionbutton") {
        backedTotal += Number(inputSeventyFive.value);
        backersTotal++;
        editionLeft--;
        backedSum.textContent = backedTotal;
        backersTotalUpdate.textContent = backersTotal;
        leftEdition[0].textContent = editionLeft;
        leftEdition[1].textContent = editionLeft;
        inputSeventyFive.value = "75";

    }

    if (e.target.id == "norewardbutton") {

        backersTotal++;


        backersTotalUpdate.textContent = backersTotal;


    }


});