document.getElementsByTagName('li').onclick = function(){
    document.getElementsByClassName("hidden").style.display = " ";
}

function myFunction(toggle1){
  var imgElement = document.getElementById("svgImage");
  var currentSrc = imgElement.getAttribute("src");
  
  if (currentSrc === "/faq-accordion-main/assets/images/icon-plus.svg") {
    imgElement.setAttribute("src", "/faq-accordion-main/assets/images/icon-minus.svg");
  } else {
    imgElement.setAttribute("src", "/faq-accordion-main/assets/images/icon-plus.svg");
  }

   let visible = document.getElementById("toggle1");
   visible.classList.toggle("hidden");
   visible.classList.toggle("active");
}

function myFunction2(toggle2){
  var imgElement = document.getElementById("svgImage2");
  var currentSrc = imgElement.getAttribute("src");

  if (currentSrc === "/faq-accordion-main/assets/images/icon-plus.svg") {
    imgElement.setAttribute("src", "/faq-accordion-main/assets/images/icon-minus.svg");
  } else {
    imgElement.setAttribute("src", "/faq-accordion-main/assets/images/icon-plus.svg");
  }

  let visible = document.getElementById("toggle2");
  visible.classList.toggle("hidden");
  visible.classList.toggle("active");
}

function myFunction3(toggle3){
  var imgElement = document.getElementById("svgImage3");
  var currentSrc = imgElement.getAttribute("src");

  if (currentSrc === "/faq-accordion-main/assets/images/icon-plus.svg") {
    imgElement.setAttribute("src", "/faq-accordion-main/assets/images/icon-minus.svg");
  } else {
    imgElement.setAttribute("src", "/faq-accordion-main/assets/images/icon-plus.svg");
  }

  let visible = document.getElementById("toggle3");
  visible.classList.toggle("hidden");
  visible.classList.toggle("active");
}

function myFunction4(toggle4){
  var imgElement = document.getElementById("svgImage4");
  var currentSrc = imgElement.getAttribute("src");
  
  if (currentSrc === "/faq-accordion-main/assets/images/icon-plus.svg") {
    imgElement.setAttribute("src", "/faq-accordion-main/assets/images/icon-minus.svg");
  } else {
    imgElement.setAttribute("src", "/faq-accordion-main/assets/images/icon-plus.svg");
  }

  let visible = document.getElementById("toggle4");
  visible.classList.toggle("hidden");
  visible.classList.toggle("active");
} 