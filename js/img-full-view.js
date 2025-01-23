"use strict";
let allImg = document.querySelectorAll(".gallery-img-container img");
let outterGallery = document.querySelector(".outter-gallery-mask");
let outterGalleryImg = document.querySelector(".outter-gallery img");
let main = document.querySelector("main");
for (const eachImg of allImg) {
  eachImg.addEventListener("click", (element) => {
   
   
    outterGalleryImg.src = 
    element.currentTarget.src.split("/")[element.currentTarget.src.split("/").length - 2 ]
    + "/" + element.currentTarget.src.split("/")[element.currentTarget.src.split("/").length - 1]
      
    outterGallery.querySelector("button").classList.add("show");
    outterGallery.classList.add("show");
    document.body.classList.add("no-scroll");
    main.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  });
}
function closeOutterGallery() {
  
    outterGallery.querySelector("button").classList.remove("show");
  document.body.classList.remove("no-scroll");
  outterGallery.classList.remove("show");
}
