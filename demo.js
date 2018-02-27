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
    myImage.setAttribute("height", "15%");
    imgArray.push(myImage);
  }
  return imgArray;
}
gallery.imageElements = spawning();

createDummyElements();

U.ready(main);

function main() {
  var imgSection = U.$("imageSpawn");
  for (var i = 0; i < gallery.imageElements.length; i++) {
    imgSection.appendChild(gallery.imageElements[i]);
  }
  U.addHandler(imgSection, "mousedown",selected);
  U.addHandler(imgSection, "dblclick",flip);
}


function selected(e) {
    var e = e || window.event;
    var selectedObj = e.target;

    if(selectedObj.tagName.toLowerCase() === "img"){
      for (var i = 0; i < gallery.imageElements.length; i++) {
        gallery.imageElements[i].style.border="none";
        gallery.imageElements[i].style.zIndex=0;
      }
      console.log("workin3");

      gallery.diffx = selectedObj.offsetLeft-selectedObj.clientX;
      gallery.diffy = selectedObj.offsetTop-selectedObj.clientY;
      console.log("workin2");

      selectedObj.style.border="2px solid green";
      selectedObj.style.zIndex="2";

      console.log("workin");
      U.addHandler(selectedObj, "mousemove", dragElement);
      U.addHandler(document.body, "mouseup", dropElement);
    }

function flip(e) {

  }

  function dragElement(e) {
    var e = e || window.event;
    var selectedObj = e.target
    selectedObj.ondragstart = function(){
      return false;
    };

    var positioning = {
        x:selectedObj.clientX,
        y:selectedObj.clientY
    };

    if (selectedObj.tagName.toLowerCase() === "img") {
      selectedObj.style.left = gallery.diffx + positioning.x + "px";
      selectedObj.style.top = gallery.diffy + positioning.y + "px";
    }
  }

function dropElement(e) {
  var e = e || window.event;
  var selectedObj = e.target;
  U.removeHandler(selectedObj, "mousemove", dragElement);
  U.removeHandler(document.body, "mouseup", dropElement);
}

}
