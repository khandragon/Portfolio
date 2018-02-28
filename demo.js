"use strict";

var gallery = {
    "imgFiles": [
    "bulba.png",
    "charmander.png",
    "mankey.png",
    "squirtle.png",
    "umbreon.png",
    "wobbuffet.png",
    "gengar.png",
    "eevee.png"
  ]
};


function createDummyElements() {
  var semanticElements = [
    "article", "aside", "details", "figcaption", "figure",
    "footer", "header", "hgroup", "menu", "nav", "section"
  ];
  for (var i = 0; i < semanticElements.length; i++) {
    document.createElement(semanticElements[i]);
  }
}

function spawning() {
  var imgArray= [];
  for (var i = 0; i < gallery.imgFiles.length; i++) {
    var myImage = document.createElement("img")
    myImage.setAttribute("src", "./images/DragNDrop/"+gallery.imgFiles[i]);
    myImage.setAttribute("alt", gallery.imgFiles[i].split(".")[0]);
    myImage.setAttribute("id", gallery.imgFiles[i].split(".")[0]);
    myImage.setAttribute("width", "10%");
    myImage.setAttribute("height", "33%");
    myImage.style.position = "absolute";
    imgArray.push(myImage);
    console.log(myImage.alt);
  }
  return imgArray;
}


gallery.imageElements = spawning();

createDummyElements();

U.ready(main);

function main() {
  var imgSection = U.$("boxforimages");
  for (var i = 0; i < gallery.imageElements.length; i++) {
    imgSection.appendChild(gallery.imageElements[i]);
  }
  U.addHandler(imgSection, "mousedown", selected);
  U.addHandler(imgSection, "dblclick", flip);
}


function selected(e) {
  var e = e || window.event;
  var selectedObj = e.target || e.srcElement;

  if(selectedObj.src !== "undefined"){
    for (var i = 0; i < gallery.imageElements.length; i++) {
      gallery.imageElements[i].style.border = "none";
      gallery.imageElements[i].style.zIndex = 0;
    }

    gallery.diffx = selectedObj.offsetLeft - e.clientX;
    gallery.diffy = selectedObj.offsetTop - e.clientY;
    selectedObj.style.border = "2px solid green";
    selectedObj.style.zIndex = "2";

    U.addHandler(selectedObj, "mousemove", dragElement);
    U.addHandler(document.body, "mouseup", dropElement);
  }
}

function dragElement(e) {
  var e = e || window.event;
  var selectedObj = e.target || e.srcElement;

  U.addHandler(selectedObj, "dragstart", function (e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    } else {
      return false;
    }
  });

  var positioning = {
    x:e.clientX,
    y:e.clientY
  };

  console.log("drag");
  selectedObj.style.zIndex = "3";

  setTimeout(function() {
    selectedObj.style.left = gallery.diffx + positioning.x + "px";
    selectedObj.style.top = gallery.diffy + positioning.y + "px";
  }, 5);
}

function dropElement(e) {
  var e = e || window.event;
  var selectedObj = e.target || e.srcElement;
  U.removeHandler(selectedObj, "mousemove", dragElement);
  U.removeHandler(document.body, "mouseup", dropElement);
  console.log("drop");
}

function flip(e) {
  var e = e || window.event;
  var selectedObj = e.target || e.srcElement;

  if (selectedObj.src !== "undefined") {

    if (selectedObj.alt !== "back") {

      var tails = document.createElement("img");
      tails.setAttribute("src", "images/DragNDrop/back.png");
      tails.setAttribute("alt", "back");
      tails.style.top = selectedObj.style.top;
      tails.style.left = selectedObj.style.left;
      tails.setAttribute("width", "10%");
      tails.setAttribute("height", "33%");
      tails.style.width = selectedObj.style.width;
      tails.style.position = selectedObj.style.position;

      selectedObj.parentElement.replaceChild(tails, selectedObj);
      console.log("flip");
    } else {

      var nodelist = U.$("boxforimages").querySelectorAll("img");

      var arraylist= [];
      for(var i = 0, n; n = nodelist[i]; ++i){
        arraylist.push(n);
      }

      console.log(arraylist);
      var heads = document.createElement("img");

      var numberIndex = arraylist.indexOf(selectedObj);

      heads.setAttribute("src", gallery.imageElements[numberIndex].src);
      heads.setAttribute("alt", gallery.imageElements[numberIndex].alt);
      heads.style.top = selectedObj.style.top;
      heads.style.left = selectedObj.style.left;
      heads.style.zIndex = selectedObj.style.zIndex;
      heads.setAttribute("width", "10%");
      heads.setAttribute("height", "33%");
      heads.style.position = selectedObj.style.position;
      console.log("flip");

      selectedObj.parentElement.replaceChild(heads, selectedObj);
    }
  }
}
