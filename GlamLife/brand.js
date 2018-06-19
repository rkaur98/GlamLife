
display();

var p,q;

function display(){

    a=window.location.hash.substring(1);
    b=a.split('#',2);
    p=b[0];
    q=b[1];
    product(p,q);

    var r = p.toUpperCase()+" | "+q.toUpperCase();
    document.title = r;
}

function product(prod,brand){
    let url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type="+prod+"&brand="+brand;
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
                
                
                    y += '<div class="proddes"><div class="image"><img src="'+makeup.image+'"><div id="color">'+z+'</div></div>'+'<div class="info"><h3>'+makeup.name+'</h3><div class="price"><strong>$'+makeup.price+'</strong></div></div><button class="add-cart" id = "'+i+'" onclick = "addCart('+makeup.id+')">Add to Cart</button></div>';  
            }    
            brand.innerHTML = y;

            document.getElementById('header').innerHTML = '<h1>Product : '+p[0].toUpperCase()+p.slice(1)+'</h1><h2>Brand : '+q[0].toUpperCase()+q.slice(1)+'</h2>';

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
        let url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type="+p+"&brand="+q;
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


