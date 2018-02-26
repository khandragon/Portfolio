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
  g.Academic = document.getElementsByClassName("cvLvL1")[0];
  g.AcaLevel1 = document.getElementsByClassName("cvLvL2")[0];
  g.AcaLevel2 = document.getElementsByClassName("cvLvL2")[1];
  g.AcaLevel3 = document.getElementsByClassName("cvLvL2")[2];
  g.Skills = document.getElementsByClassName("cvLvL1")[1];
  g.Experience = document.getElementsByClassName("cvLvL1")[2];
  g.ExpLevel1 = document.getElementsByClassName("cvLvL2")[3];
  g.ExpLevel2 = document.getElementsByClassName("cvLvL2")[4];
  g.ExpLevel3 = document.getElementsByClassName("cvLvL2")[5];
  g.Projects = document.getElementsByClassName("cvLvL1")[3];
  g.ProLevel1 = document.getElementsByClassName("cvLvL2")[6];
  g.ProLevel2 = document.getElementsByClassName("cvLvL2")[7];
  g.ProLevel3 = document.getElementsByClassName("cvLvL2")[8];

  console.log(g.slider);
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

function cvLvL2invisible() {
  for (var i = 0; i < g.AcaLevel1.children.length; i++) {
      invisible(g.AcaLevel1.children[i]);
  }
  for (var i = 0; i < g.AcaLevel2.children.length; i++) {
      invisible(g.AcaLevel2.children[i]);
  }
  for (var i = 0; i < g.AcaLevel3.children.length; i++) {
      invisible(g.AcaLevel3.children[i]);
  }
  for (var i = 0; i < g.ExpLevel1.children.length; i++) {
      invisible(g.ExpLevel1.children[i]);
  }
  for (var i = 0; i < g.ExpLevel2.children.length; i++) {
      invisible(g.ExpLevel2.children[i]);
  }
  for (var i = 0; i < g.ExpLevel3.children.length; i++) {
      invisible(g.ExpLevel3.children[i]);
  }
  for (var i = 0; i < g.ProLevel1.children.length; i++) {
      invisible(g.ProLevel1.children[i]);
  }
  for (var i = 0; i < g.ProLevel2.children.length; i++) {
      invisible(g.ProLevel2.children[i]);
  }
  for (var i = 0; i < g.ProLevel3.children.length; i++) {
      invisible(g.ProLevel3.children[i]);
  }



}

function cvLvL2visible() {
  for (var i = 0; i < g.AcaLevel1.children.length; i++) {
      visible(g.AcaLevel1.children[i]);
  }
  for (var i = 0; i < g.AcaLevel2.children.length; i++) {
      visible(g.AcaLevel2.children[i]);
  }
  for (var i = 0; i < g.AcaLevel3.children.length; i++) {
      visible(g.AcaLevel3.children[i]);
  }
  for (var i = 0; i < g.ExpLevel1.children.length; i++) {
      visible(g.ExpLevel1.children[i]);
  }
  for (var i = 0; i < g.ExpLevel2.children.length; i++) {
      visible(g.ExpLevel2.children[i]);
  }
  for (var i = 0; i < g.ExpLevel3.children.length; i++) {
      visible(g.ExpLevel3.children[i]);
  }
  for (var i = 0; i < g.ProLevel1.children.length; i++) {
      visible(g.ProLevel1.children[i]);
  }
  for (var i = 0; i < g.ProLevel2.children.length; i++) {
      visible(g.ProLevel2.children[i]);
  }
  for (var i = 0; i < g.ProLevel3.children.length; i++) {
      visible(g.ProLevel3.children[i]);
  }
}

function main() {
  addSlider();
  g.slider = U.$("slider");
  console.log(g.slider.value);
  g.slider.addEventListener("change",changeSlider);
}

function addSlider() {
  var mySlide = document.createElement("input");
  mySlide.setAttribute("type","range");
  mySlide.setAttribute("min","1");
  mySlide.setAttribute("max","3");
  mySlide.setAttribute("step","1");
  mySlide.setAttribute("step","1");
  mySlide.setAttribute("id","slider");
  mySlide.setAttribute("defaultValue","1");
  var container = U.$("sliderContainer");
  container.appendChild(mySlide);
}

document.addEventListener("DOMContentLoaded",main);
