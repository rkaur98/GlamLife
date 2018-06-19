
var listvalues = localStorage.getItem('list-n');
 
var finalvalue = JSON.parse(listvalues);

console.log(finalvalue);


var cartvalues = localStorage.getItem('item');
 
var finalcart = JSON.parse(cartvalues);

console.log(finalcart);

jQuery(document).ready(function(){
result();
function result() {

    let notes = finalcart;
    console.log(finalcart);
 
    let y = '';
    for(let i=0; i<notes.length; i++) {
        y += notes[i] + '<button class="delete add-cart" id="' +i+ '" >Remove From Cart</button>'+'</div>';
    };
    console.log(y);
    

     document.getElementById('productdes').innerHTML = y;
    
    let del = document.getElementsByClassName('delete');
    
    for (let i=0; i < del.length; i++) {
        del[i].addEventListener('click', del_item);
    };
    
    
}
 
 function del_item() {

    let div = this.getAttribute('id');
    console.log(div);
    
    finalcart.splice(div, 1);
    finalvalue.splice(div,1);
    localStorage.setItem('item', JSON.stringify(finalcart));
    localStorage.setItem('list-n', JSON.stringify(finalvalue));
 
    result();
  }



});
 
 