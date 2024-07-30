function zoomIn(event) {
    var image = event.target;
    var x = event.offsetX;
    var y = event.offsetY;
    image.style.transformOrigin = x + "px " + y + "px";

    if (image.style.transform === "scale(2)") {
      image.style.transform = "scale(1)";
      image.style.cursor = "zoom-in";
    } else {
      image.style.transform = "scale(2)";
      image.style.cursor = "zoom-out";
    }
  }