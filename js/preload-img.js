const images = ['/images/agency-img.jpg',
                '/images/bnw-img.jpg',
                '/images/dropbeat-img.jpg',
                '/images/icon-PL.png',
                '/images/logo-PL.png',
                '/images/poster-video.jpg',
                '/images/profile-art.jpg',
                '/images/profile.jpg',
                '/images/resume.jpg',
                '/images/twitter-card.jpg'];

images.forEach((image) => {
  const img = new Image();
  img.src = image;
});

// preload video
var video = document.getElementById("background-loop");

var url = "../video/background-video.mov"

var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.responseType = "arraybuffer";

xhr.onload = function(oEvent) {

    var blob = new Blob([oEvent.target.response], {type: "video/mov"});

    video.src = URL.createObjectURL(blob);

    video.play();
};

xhr.onprogress = function(oEvent) {

    if (oEvent.lengthComputable) {
        var percentComplete = oEvent.loaded/oEvent.total;
    }
}

xhr.send();