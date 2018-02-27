"use strict";

var imageSources = {
  "imgFiles": [
  "bulba.png",
  "charmander.png",
  "mankey.png",
  "squirtle.png",
  "umbreon.png",
  "wobbuffet.png",
  "gengar.png",
  "eevee.png"
],
  "filenameIndex" : 0,
  "imageElements": []

};

imageSources.imageElements = imageSources.imgFilename.map(preloadImages);

/**
 * Teaches IE < 9 to recognize HTML5 elements.
 */
function createDummyElements() {
  var semanticElements = [
    "article", "aside", "details", "figcaption", "figure",
    "footer", "header", "hgroup", "menu", "nav", "section"
  ];
  for (var i = 0; i < semanticElements.length; i++) {
    document.createElement(semanticElements[i]);
  }
}

/**
 * Preload and create image imageElements
 *
 * @return {Image} imageSources.imageElements
 */
function preloadImages() {
  if (imageSources.filenameIndex < imageSources.imgFilename.length) {
    imageSources.imageElements = document.createElement("img");
    imageSources.imageElements.src = "./images/DragNDrop/" + imageSources.imgFilename[imageSources.filenameIndex];
    imageSources.imageElements.alt = imageSources.imgFilename[imageSources.filenameIndex].split(".")[0];
    imageSources.filenameIndex++;
  }
  return imageSources.imageElements;
}

/**
 * Add a border to an element and bring it to the "front", and
 * Add the event handlers "mousemove" and "mouseup"
 *
 * @param {Event} e event
 */
function highlight(e) {
  var e = e || window.event;
  //Check if the event target is an image element. If it is not, then do nothing
  var sender = e.target.tagName.toLowerCase();
  if (sender === "img") {
    for (var i = 0; i < e.target.parentElement.children.length; i++) {
      //Reset borders and z-indexes of all image element within the container
      e.target.parentElement.children[i].style.border = "none";
      e.target.parentElement.children[i].style.zIndex = "0";
    }
    //Add border and increment z-index of the selected image element
    e.target.style.border = "red solid 3px";
    e.target.style.zIndex = "1";
    imageSources.diffx = e.target.offsetLeft - e.clientX;
    imageSources.diffy = e.target.offsetTop - e.clientY;
    //Add handlers to the selected image element
    U.addHandler(e.target, "mousemove", drag);
    U.addHandler(document.body, "mouseup", drop);
  }
}

/**
 * Make the image follow the mouse
 */
function drag(e) {
  var e = e || window.event;
  //Remove the browser's default drag event handler
  e.target.ondragstart = function () {
    return false;
  };
  var sender = e.target.tagName.toLowerCase();
  var coords = {
    x: e.clientX,
    y: e.clientY
  };
  //Check if the event target is an image element. If it is not, then do nothing
  if (sender === "img") {
    //Change the position of the image to match that of the cursor
    e.target.style.left = imageSources.diffx + coords.x + "px";
    e.target.style.top = imageSources.diffy + coords.y + "px";
  }
}

/**
 * Remove event handlers from the selected image element
 */
function drop(e) {
    U.removeHandler(e.target, "mousemove", drag);
    U.removeHandler(document.body, "mouseup", drop);
}

/**
 * Flip the image to reveal either the backside or the frontside of an image element
 */
function flip(e) {
  var e = e || window.event;
  //Check if the event target is an image element. If it is not, then do nothing
  var sender = e.target.tagName.toLowerCase();
  if (sender === "img") {
    if (e.target.alt !== "purple") {
      //Flip image element to its frontside.
      //Shows the actual image by replacing the purple square with a new image element
      var purpleSquare = new Image(e.target.width, e.target.height);
      purpleSquare.src = "assets/demo/purple.jpg";
      purpleSquare.alt = "purple";
      purpleSquare.style.position = e.target.style.position;
      purpleSquare.style.top = e.target.style.top;
      purpleSquare.style.left = e.target.style.left;
      purpleSquare.style.zIndex = e.target.style.zIndex;
      e.target.parentElement.replaceChild(purpleSquare, e.target);
    }else {
      //Flip the image element to its backside.
      //Shows a purple square by replacing the actual image with a new image element
      var nodelist = document.querySelectorAll("img");
      var arr = Array.prototype.slice.call(nodelist);
      var index = arr.indexOf(e.target);
      var originalImage = new Image(e.target.width, e.target.height);
      originalImage.src = imageSources.imageElements[index-1].src;
      originalImage.alt = imageSources.imageElements[index-1].alt;
      originalImage.style.position = e.target.style.position;
      originalImage.style.top = e.target.style.top;
      originalImage.style.left = e.target.style.left;
      originalImage.style.zIndex = e.target.style.zIndex;
      e.target.parentElement.replaceChild(originalImage, e.target);
    }
  }
}

/**
 * Add preloaded image elements to the DOM and append them in the container, AND
 * Add event handlers to the container
 */
U.ready(function dragAndDropDemo() {
  var div = U.$("boxforimages"");
  for(var i = 0; i < imageSources.imageElements.length - 1; i++) {
    div.appendChild(imageSources.imageElements[i]);
    imageSources.imageElements[i].style.width = "10%";
    imageSources.imageElements[i].style.height = "15%";
    imageSources.imageElements[i].style.margin = "10px";
    imageSources.imageElements[i].style.position = "absolute";
  }
  U.addHandler(div, "mousedown", highlight);
  U.addHandler(div, "dblclick", flip);
});
