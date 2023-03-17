function preload_image(img_url) {
    let img = new Image();
    img.src = img_url;
  }
  
  preload_image("");

  preload_image("../images/agency-img.jpg"),
               ("../images/bnw-img.jpg"),
               ("../images/dropbeat-img.jpg"),
               ("../images/icon-PL.png"),
               ("../images/logo-PL.png"),
               ("../images/poster-video.jpg"),
               ("../images/profile-art.jpg"),
               ("../images/profile.jpg"),
               ("../images/resume.jpg"),
               ("../images/twitter-card.jpg");

const video = document.createElement('video');
video.src = '../video/background-video.mov';
video.preload = 'auto';