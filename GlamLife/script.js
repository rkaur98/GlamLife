


var cartvalues = localStorage.getItem('item');
 
var finalcart = JSON.parse(cartvalues);

console.log(finalcart);


var slideIndex = 1;
window.onload = function(){
    
    show(slideIndex);
}

function plus(n) {
  show(slideIndex += n);
}

function show(n) {
  var i;
  var x = document.getElementsByClassName("gallery");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}


jQuery(document).ready(function($){

  a=window.location.href;
    b=a.split('/',15);
    p=b[b.length-2];

    console.log(b[b.length-2]);

    var r = p.toUpperCase();
    document.title = r;

  var cart_number = document.createElement("span");
  if(finalcart!==null)
  cart_number.innerHTML = "("+finalcart.length+")";
  $(".menu-item-112 a").append(cart_number);


          $(".menu-item-has-children a[href*='#']").on("click",function(event){

            event.preventDefault();

            var button = $(this);
            var menu = button.next();

            menu.toggleClass("expanded");
            


          });

    $(window).on("scroll",function(){
      var distanceFromTop = $(window).scrollTop();

            if(distanceFromTop > 50)
            {
              $("header").addClass("sticky");
            }
            else{
              $("header").removeClass("sticky");
            }
    });

  window.onclick = function(event) {

  if (!event.target.matches(".menu-item-has-children a[href*='#']")){

    var dropdowns = document.getElementsByClassName("sub-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('expanded')) {
        openDropdown.classList.remove('expanded');
      }
    }
  }
}

});


