"use strict";
function createDummyElements() {
  var semanticElements = [
    "article", "aside", "details", "figcaption", "figure",
    "footer", "header", "hgroup", "menu", "nav", "section"
  ];
  for (var i = 0; i < semanticElements.length; i++) {
    document.createElement(semanticElements[i]);
  }
}

createDummyElements();

var g = {};

function invisible(e) {
  e.style.display="none";
}

function visible(e) {
  e.style.display="";
}

function changeSlider() {
  g.Level1=[];
  g.Level2=[];
  for (var i = 0; i < document.getElementsByClassName("cvLvL1").length; i++) {
    g.Level1[i]=  document.getElementsByClassName("cvLvL1")[i];
  }
  for (var i = 0; i < document.getElementsByClassName("cvLvL2").length; i++) {
    g.Level2[i]=  document.getElementsByClassName("cvLvL2")[i];
  }
  if(g.slider.value === "1"){
    cvLvL1invisible();
  }
  if(g.slider.value === "2"){
    cvLvL1visible();
    cvLvL2invisible();
  }
  if(g.slider.value === "3"){
    cvLvL1visible();
    cvLvL2visible();
  }
}

function cvLvL1invisible() {
  for (var i = 0; i < g.Level1.length; i++) {
    for (var j = 0; j < g.Level1[i].children.length; j++) {
      invisible(g.Level1[i].children[j]);
    }
  }
}

function cvLvL1visible() {
  for (var i = 0; i < g.Level1.length; i++) {
    for (var j = 0; j < g.Level1[i].children.length; j++) {
      visible(g.Level1[i].children[j]);
    }
  }
}

function cvLvL2invisible() {
  for (var i = 0; i < g.Level2.length; i++) {
    for (var j = 0; j < g.Level2[i].children.length; j++) {
      invisible(g.Level2[i].children[j]);
    }
  }
}

function cvLvL2visible() {
  for (var i = 0; i < g.Level2.length; i++) {
    for (var j = 0; j < g.Level2[i].children.length; j++) {
      visible(g.Level2[i].children[j]);
    }
  }
}

function main() {
  addSlider();
  g.slider = U.$("slider");
  g.slider.addEventListener("change",changeSlider);
  changeSlider();
}

function addSlider() {
  var mySlide = document.createElement("input");
  mySlide.setAttribute("type", "range");
  mySlide.setAttribute("min", "1");
  mySlide.setAttribute("max", "3");
  mySlide.setAttribute("step", "1");
  mySlide.setAttribute("value", "1");
  mySlide.setAttribute("id", "slider");
  var container = U.$("sliderContainer");
  container.appendChild(mySlide);
}

U.ready(main);
