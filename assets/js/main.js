/*********************************************************************/

const langs_btn = document.querySelector("header .upper-header .langs button");
const langs_ul = document.querySelector("header .upper-header .langs ul");

const search_btn = document.querySelector("header .nav-bar .search-btn i");
const search_field = document.querySelector("header .nav-bar .search-btn .search-field");


langs_btn.addEventListener("click", ()=>{
    langs_ul.classList.toggle("hidden");
})

search_btn.addEventListener("click", ()=>{
    search_field.classList.toggle("hide");
})


/*********************************************************************/
/*********************************************************************/


const menuBar = document.querySelector(".menu-bar");
const toggleMenu = document.querySelector(".toggle-menu");


menuBar.addEventListener("click", ()=>{
    toggleMenu.classList.toggle("open");

});


/*********************************************************************/
/*********************************************************************/



/*********************************************************************/
/*********************************************************************/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

const next_button = document.querySelector(".slideshow-container a.next");
setInterval( function click_nect() {
  next_button.click();
} , 9000);


/*********************************************************************/
/*********************************************************************/

window.onscroll = function(){

  let scroll_btn = document.querySelector("button.scroll");
  if(window.scrollY > 350){
    scroll_btn.style.visibility= "visible";
    scroll_btn.style.transform = "translateY(0)";
  }else{
    scroll_btn.style.visibility= "hidden";
    scroll_btn.style.transform = "translateY(150px)";
  }

  let about = document.querySelector(".about-us");
  if(window.scrollY > about.offsetTop -400){
    document.querySelector(".about-us .image").style.transform = "translateX(0)";
    document.querySelector(".about-us .text").style.transform = "translateX(0)";
  }

  let our_adv = document.querySelector(".our-advantage");
  if(window.scrollY > our_adv.offsetTop -400){
    let advArr = document.querySelectorAll(".our-advantage .advantages div");
    advArr.forEach( adv=> {
      adv.style.transform = "translateY(0)";
    });
  }

  let products = document.querySelector(".products");
  if(window.scrollY > products.offsetTop -400){
    let prodArr = document.querySelectorAll(".products .products-row .pro");
    prodArr.forEach( pro => {
      pro.style.transform = "translateY(0)";
    });  
  }

};

let scroll_btn = document.querySelector("button.scroll");

scroll_btn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0 ;
});





/*********************************************************************/
/*********************************************************************/
/*********************************************************************/
/*********************************************************************/



























