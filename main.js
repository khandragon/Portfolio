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

function changeSlider() {
  g.slider = U.$("slider");
  g.Academic = document.getElementsByClassName("cvLvL1")[0];
  g.Skills = document.getElementsByClassName("cvLvL1")[1];
  g.Experience = document.getElementsByClassName("cvLvL1")[2];
  g.Projects = document.getElementsByClassName("cvLvL1")[3];
  console.log(g.slider);
  if(g.slider.value===1){
    for (var i = 0; i < g.Academic.children.length; i++) {
      invisible(g.Academic.children[i])
    }
    for (var i = 0; i < g.Skills.children.length; i++) {
      invisible(g.Skills.children[i])
    }
    for (var i = 0; i < g.Experience.children.length; i++) {
      invisible(g.Experience.children[i])
    }
    for (var i = 0; i < g.Projects.children.length; i++) {
      invisible(g.Projects.children[i])
    }
  }
  if(g.slider.value===2){

  }
  if(g.slider.value===3){

  }
}

function invisible(e) {
  e.style.visibility="hidden";
}

document.addEventListener("DOMContentLoaded",changeSlider);
