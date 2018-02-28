"use strict";

/**
 * createDummyElements - creates sematic elements which are not supported by IE8
 *
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

if(!document.addEventListener){
  createDummyElements();
}

var g = {};


/**
 * invisible - make element invisible
 *
 * @param  {Element} e
 */
function invisible(e) {
  e.style.display = "none";
}


/**
 * visible - make element visible
 *
 * @param  {type} e
 */
function visible(e) {
  e.style.display = "";
}


/**
 * changeSlider - handels logic of what to display due to slider
 *
 * @return {type}  description
 */
function changeSlider() {
  g.Level1 = [];
  g.Level2 = [];

  for (var q = 0; q < document.getElementsByClassName("cvLvL1").length; q++) {
    g.Level1[q] = document.getElementsByClassName("cvLvL1")[q];
  }
  for (var k = 0; k < document.getElementsByClassName("cvLvL2").length; k++) {
    g.Level2[k] = document.getElementsByClassName("cvLvL2")[k];
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


/**
 * cvLvL1invisible - make lower and higher cv elements invisible
 *
 */
function cvLvL1invisible() {
  for (var i = 0; i < g.Level1.length; i++) {
    for (var j = 0; j < g.Level1[i].children.length; j++) {
      invisible(g.Level1[i].children[j]);
    }
  }
}


/**
 * cvLvL1visible - make lower and higher cv elements visible
 *
 */
function cvLvL1visible() {
  for (var i = 0; i < g.Level1.length; i++) {
    for (var j = 0; j < g.Level1[i].children.length; j++) {
      visible(g.Level1[i].children[j]);
    }
  }
}


/**
 * cvLvL2invisible - make lower cv elements invisible
 *
 */
function cvLvL2invisible() {
  for (var i = 0; i < g.Level2.length; i++) {
    for (var j = 0; j < g.Level2[i].children.length; j++) {
      invisible(g.Level2[i].children[j]);
    }
  }
}


/**
 * cvLvL2visible - make lower cv elements visible
 *
 */
function cvLvL2visible() {
  for (var i = 0; i < g.Level2.length; i++) {
    for (var j = 0; j < g.Level2[i].children.length; j++) {
      visible(g.Level2[i].children[j]);
    }
  }
}


/**
 * main - method that loads once dom is loaded
 *
 */
function main() {
  addSlider();
  g.slider = U.$("slider");
  U.addHandler(g.slider, "change", changeSlider);
  changeSlider();
}


/**
 * addSlider - method to input slider in dom
 *
 */ 
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
