
var p;


function filter(j) {
    var input, filter, ul, li, a, i;
    input = document.getElementById("input"+j);
    filter = input.value.toUpperCase();
    div = document.getElementById("brandsearch"+j);
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}




jQuery(document).ready(function($){
    $(".iconsearch").on("click", function(){
  
         $(this).next().toggleClass("show");
    });

window.onclick = function(event) {
    
  if ((!event.target.matches(".iconsearch"))&&(!event.target.matches(".input"))){

    var dropdowns = document.getElementsByClassName("brandsearch");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

});






display();

function display(){

    a=window.location.href;
    b=a.split('/',15);
    p=b[b.length-2];

    console.log(b[b.length-2]);
    product(p);

    var r = p.toUpperCase();
    document.title = r;
}

function product(prod){
    let url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type="+prod;
    sendRequest(url);
}


function sendRequest(url){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let data = JSON.parse(xmlhttp.responseText);
            
            let makeup = {};
            let y = '';
            
            let brand = document.getElementById('productdes');
            var s = 0;

            for(let i=0;i<data.length;i++){

                makeup.id = data[i].id;
                makeup.name = data[i].name;
                if(data[i].price===null)
                    makeup.price = 10.97;
                else
                    makeup.price = data[i].price;
                makeup.image = data[i].image_link;
                

                let z='';
                if(data[i].product_colors.length !== 0){

                    for(let j=0;j<data[i].product_colors.length;j++){
                        makeup.color = data[i].product_colors[j].hex_value;
                        
                        

                        z += '<div style = "background : '+makeup.color+'"></div>';
                    }
                    
                }
                
                
                    y += '<div class="proddes"><div class="image"><img src="'+makeup.image+'"><div id="color">'+z+'</div></div>'+'<div class="info"><h3>'+makeup.name+'</h3></div><div class="price"><strong>$'+makeup.price+'</strong></div><button class="add-cart" id = "'+i+'" onclick = "addCart('+makeup.id+')">Add to Cart</button></div>';  
            }    
            brand.innerHTML = y;


            var but = document.getElementsByClassName('add-cart');

            for (let i=0; i < but.length; i++) {
                but[i].addEventListener('click', function change(){
                    but[i].innerHTML = "Added";
                });
            };



            
        }
        
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}




// Cart ============================================================================================================

var cartvalues = localStorage.getItem('item');
 
var finalcart = JSON.parse(cartvalues);

console.log(finalcart);


function get_note(){
    let myArr= new Array();
    let list_item = localStorage.getItem('list-n');  /*global localStorage */
     if (list_item !== null) {
        myArr = JSON.parse(list_item); 
    }
    return myArr;
}


function addCart(id) {
    let x = parseInt(id);
    let notes = get_note();
    notes.push(x);
    localStorage.setItem('list-n', JSON.stringify(notes));
    
    console.log(notes);
    set_cart();

    function set_cart() {
    let array = get_note();
    var a = array;
    productlist();

    console.log(array);

    function productlist(){
        let url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type="+p;
        sendRequest1(url);
    }


    function sendRequest1(url){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let data = JSON.parse(xmlhttp.responseText);
            
            let makeup = {};
            let y = '';
            var s = 0;
            let k;

            for(let i=0;i<data.length;i++){

                if(data[i].id===x){
                    k = i;
                }
            }
                makeup.id = data[k].id;
                makeup.name = data[k].name;
                if(data[k].price===null)
                    makeup.price = 10.97;
                else
                    makeup.price = data[k].price;
                makeup.image = data[k].image_link;

                let z='';
                if(data[k].product_colors.length !== 0){

                    for(let j=0;j<data[k].product_colors.length;j++){
                        makeup.color = data[k].product_colors[j].hex_value;
                      
                        

                        z += '<div style = "background : '+makeup.color+'"></div>';
                    }
                    
                }
                
                    y += '<div class="proddes"><div class="image"><img src="'+makeup.image+'"><div id="color">'+z+'</div></div>'+'<div class="info"><h3>'+makeup.name+'</h3><div class="price"><strong>$'+makeup.price+'</strong></div></div>'; 
                
                    let cart = get_cart();
                    cart.push(y);
                    localStorage.setItem('item', JSON.stringify(cart));
                    console.log(cart);
                    
            
            
            }
        
         };
    
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    
}
}


function get_cart(){
    let myArr= new Array();
    let list_item = localStorage.getItem('item');  /*global localStorage */
     if (list_item !== null) {
        myArr = JSON.parse(list_item); 
    }
    return myArr;
}

