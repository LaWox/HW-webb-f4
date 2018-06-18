function plusDivs(n){
  displayImg(slideIndex += n);
}

function displayImg(n){
  var i;
  var images = document.getElementsByClassName("rounded");
  if (n > images.length){slideIndex = 1}
  if (n < 1){slideIndex = images.length}

  for (i=0; i < images.length; i++){
    images[i].style.display = "none"
  }
  images[slideIndex-1].style.display = "block"
}

var slideIndex = 1;
  displayImg(slideIndex);


function flip(element){
  var front = element.children[0];
  var back = element.children[1];
  
  if (front.classList.contains("flipped")){
    front.classList.replace("flipped", "flippBack")
    back.classList.replace("flippBack", "flipped")
  }
  else{
    front.classList.replace("flippBack", "flipped")
    back.classList.replace("flipped", "flippBack")
  }

}