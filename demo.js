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

var g = {};

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
  var imgArray = [];
  for (var i = 0; i < gallery.imgFiles.length; i++) {
    var myImage = document.createElement("img")
    myImage.setAttribute("src", "./images/DragNDrop/"+gallery.imgFiles[i]);
    myImage.setAttribute("alt", gallery.imgFiles[i].split(".")[0]);
    myImage.setAttribute("id", gallery.imgFiles[i].split(".")[0]);
    myImage.setAttribute("width", "200px");
    myImage.setAttribute("height", "200px");
    myImage.style.position = "absolute";
    imgArray.push(myImage);
  }
  return imgArray;
}


gallery.imageElements = spawning();

if(!document.addEventListener){
  createDummyElements();
}

U.ready(main);

function main() {
  var imgSection = U.$("boxforimages");
  for (var i = 0; i < gallery.imageElements.length; i++) {
    imgSection.appendChild(gallery.imageElements[i]);
  }
  U.addHandler(imgSection, "mousemove", dragElement);
  U.addHandler(imgSection, "mousedown", selected);
  U.addHandler(imgSection, "dblclick", flip);
}


function selected(e) {
  var e = e || window.event;
  var selectedObj = e.target || e.srcElement;

  if(selectedObj.id === "boxforimages"){
    return;
  }

  if(selectedObj.src !== "undefined"){
    for (var i = 0; i < gallery.imageElements.length; i++) {
      gallery.imageElements[i].style.border = "none";
      console.log(gallery.imageElements[i]+""+gallery.imageElements[i].style.border);
      gallery.imageElements[i].style.zIndex = 0;
    }
console.log("--------------->");
    gallery.diffx = selectedObj.offsetLeft - e.clientX;
    gallery.diffy = selectedObj.offsetTop - e.clientY;
    selectedObj.style.border = "2px solid green";
    selectedObj.style.zIndex = "2";
    g.selectedObj = selectedObj;
    U.addHandler(document.body, "mouseup", dropElement);
  }
}

function dragElement(e) {
  var e = e || window.event;
  var selectedObj = g.selectedObj;

  if (!g.selectedObj) {
    return;
  }

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

  selectedObj.style.zIndex = "3";

  setTimeout(function() {
    selectedObj.style.left = gallery.diffx + positioning.x + "px";
    selectedObj.style.top = gallery.diffy + positioning.y + "px";
  }, 5);
}

function dropElement(e) {
  var e = e || window.event;
  var selectedObj = g.selectedObj;
  U.removeHandler(selectedObj, "mousemove", dragElement);
  U.removeHandler(document.body, "mouseup", dropElement);
  g.selectedObj = null;
}

function flip(e) {
  var e = e || window.event;
  var selectedObj = e.target || e.srcElement;

  if(selectedObj.id === "boxforimages"){
    return;
  }

  if (selectedObj.src !== "undefined") {
    if (selectedObj.alt !== "back") {

      var tails = document.createElement("img");
      tails.setAttribute("src", "./images/DragNDrop/back.png");
      tails.setAttribute("alt", "back");
      tails.style.top = selectedObj.style.top;
      tails.style.left = selectedObj.style.left;
      tails.setAttribute("width", "200px");
      tails.setAttribute("height", "200px");
      tails.style.width = selectedObj.style.width;
      tails.style.position = selectedObj.style.position;

      selectedObj.parentElement.replaceChild(tails, selectedObj);
    } else {

      var nodelist = U.$("boxforimages").querySelectorAll("img");

      var arraylist = [];
      for(var i = 0; i < nodelist.length; i++){
        arraylist.push(nodelist[i]);
      }

      var heads = document.createElement("img");

      var numberIndex;
      for (var i = 0; i < arraylist.length; i++) {
        if (arraylist[i] === selectedObj) {
          numberIndex = i;
        }
      }

      heads.setAttribute("src", gallery.imageElements[numberIndex].src);
      heads.setAttribute("alt", gallery.imageElements[numberIndex].alt);
      heads.style.top = selectedObj.style.top;
      heads.style.left = selectedObj.style.left;
      heads.style.zIndex = selectedObj.style.zIndex;
      heads.setAttribute("width", "200px");
      heads.setAttribute("height", "200px");
      heads.style.position = selectedObj.style.position;

      selectedObj.parentElement.replaceChild(heads, selectedObj);
    }
  }
}
