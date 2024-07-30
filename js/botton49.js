//---- function for button "view portfolio"
var opacity = 0;

var fade_out_container = document.getElementById("fade-out-container"),
    fade_in_header = document.getElementById("fade-in-header"),
    fade_in_container = document.getElementById("fade-in-container"),
    background_loop = document.getElementById("background-loop");



function FadeButton49(){
    FirstPage_FadeOUT();
}

function FirstPage_FadeOUT(){
    opacity = Number(window.getComputedStyle(fade_out_container).getPropertyValue("opacity"));

    if (opacity > 0) {

        opacity = 0;
        fade_out_container.style.opacity = opacity;

        fade_out_container.style.display = "none";
        MainPage_FadeIN();
        FadeBackground();
        home_button_click();
    }
}

function MainPage_FadeIN() {
    
    opacity = Number(window.getComputedStyle(fade_in_container).getPropertyValue("opacity"));
    
    fade_in_container.style.display = "flex";
    fade_in_header.style.display = "block";

    if (opacity < 1) {

        opacity = 1;
        fade_in_container.style.opacity = opacity;
        fade_in_header.style.opacity = opacity
    }
}

 function FadeBackground() {
    opacity = Number(window.getComputedStyle(background_loop).getPropertyValue("opacity"));

    if(opacity > 0.1){

        opacity = 0.1;
        background_loop.style.opacity = opacity;
    }
}








