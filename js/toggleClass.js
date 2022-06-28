//Toggle color mode
const body = document.querySelector("body");
const title = document.querySelector(".title");
const titleMobile = document.querySelector(".title-mobile");
const toggleButton = document.getElementById("toggle");
const display = document.querySelector(".display");
const equalDisplay = document.querySelector(".display__output-operator");
const inputC = document.getElementById("input");
const outputC = document.getElementById("output");
const modeText = document.querySelector(".toggle-text");
const lightButton = document.querySelectorAll(".calculator__button--light1");

toggle.onclick = function() {
    let classA = "active";

    toggleButton.classList.toggle(classA)
    title.classList.toggle(classA);
    titleMobile.classList.toggle(classA);
    body.classList.toggle(classA);
    display.classList.toggle(classA);
    equalDisplay.classList.toggle(classA);
    inputC.classList.toggle(classA);
    outputC.classList.toggle(classA);
    //Swap text Dark/Light
    modeText.classList.toggle(classA);

    if(modeText.innerHTML === "Dark Mode") {
        modeText.innerHTML = "Light Mode"
    } else {
        modeText.innerHTML = "Dark Mode"
    }

    //Light buttons
    for(let button of lightButton) {
        button.classList.toggle(classA);
    }
}

