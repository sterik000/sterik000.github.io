const myImage = document.querySelector("img");
let counter = 0

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/firefox-logo.jpg") {
        myImage.setAttribute("src", "images/firefox-logo2.webp")
    } else {
        myImage.setAttribute("src", "images/firefox-logo.jpg")
    }
    console.log(`changed image ${++counter} times`) 
});

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Please enter your username.");
    if (!myName) {setUserName();} else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is Cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storageName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is Cool, ${storageName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});