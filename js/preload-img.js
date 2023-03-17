const images = ['../images/agency-img.jpg',
                '../images/bnw-img.jpg',
                '../images/dropbeat-img.jpg',
                '../images/icon-PL.png',
                '../images/logo-PL.png',
                '../images/poster-video.jpg',
                '../images/profile-art.jpg',
                '../images/profile.jpg',
                '../images/resume.jpg',
                '../images/twitter-card.jpg'];

images.forEach((image) => {
  const img = new Image();
  img.src = image;
});