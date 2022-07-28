let audio = document.querySelector("#musicButton");
let image = document.querySelector("#musicButton img");
let sound = new Audio("./css/img/WTF.mp3");

let music = function () {
    console.log(audio.style.background === "./css/img/muteblack.png");
    if (image.src.includes("css/img/muteblack.png")) {
        image.src = "./css/img/playblack.png";
        sound.play();
        console.log(image.src);
    } else {
        image.src = "./css/img/muteblack.png";
        sound.pause();
        console.log(image.src);
    }
};
