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
  if(g.slider.value==="1"){
    cvLvL1invisible();
  }
  if(g.slider.value===2){
    cvLvL2invisible();
  }
  if(g.slider.value===3){

  }
}

function invisible(e) {
  e.style.display="none";
}

function visible(e) {
  e.style.display="";
}

function cvLvL1invisible() {
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

function cvLvL1visible() {
  for (var i = 0; i < g.Academic.children.length; i++) {
    visible(g.Academic.children[i])
  }
  for (var i = 0; i < g.Skills.children.length; i++) {
    visible(g.Skills.children[i])
  }
  for (var i = 0; i < g.Experience.children.length; i++) {
    visible(g.Experience.children[i])
  }
  for (var i = 0; i < g.Projects.children.length; i++) {
    visible(g.Projects.children[i])
  }
}
document.addEventListener("DOMContentLoaded",changeSlider);
