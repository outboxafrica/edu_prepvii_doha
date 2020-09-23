import {stock} from '/data/stock/stock.js';

const displayItems = document.querySelector('.items_display');
// Display items on home page
function outPut(stock){
  if(stock.length > 0){
    var list = stock.map(function(iterate){
      return `
      <article id="item_colletions" class="item_colletions">
      <img src="${iterate.productImage}" alt="items" class="image" />
      <div class="product_details">
      <p class="product_Type">${iterate.productType}</p>
      <p class="product_name">${iterate.productName}</p>
      <p class="price_lable">Price:UGX</p>
      <p class="price_amount">${iterate.productPrice}</p>
      </div>
      <input type="button" value="Add to cart" class="To_Cart_button" />
      </article>
      ` 
    });
    displayItems.innerHTML = list;
  }
};
outPut(stock);

//Add to cart
var addToCartButton =document.querySelectorAll('.To_Cart_button');
addToCartButton.forEach(function(iterate) {
  iterate.addEventListener('click', addToCart);
  // console.log(addToCartButton);
});

//Add to cart function
function addToCart(event){
  var product = event.target.parentElement;
  var productImage = product.querySelector('.image').src;
  var productOfType = product.querySelector('.product_Type').innerText;
  var productOfName = product.querySelector('.product_name').innerText;
  var productOfPrice = product.querySelector('.price_amount').innerText;
  includeProduct(productImage,productOfType,productOfName,productOfPrice);
}
//Indcluding items to the add to cart function
function includeProduct(productImage,productOfType,productOfName,productOfPrice) {
  var cart = document.querySelector('.cart-items'); 
        var cartRow = document.createElement('div');
      cartRow.classList.add('item_colletions');
      var cartItems = document.querySelectorAll('.cart-items')[0];      
      var list = 
       `
      <article id="item_colletions" class="item_colletions">
      <img src="${productImage}" alt="items" class="image" />
      <div class="product_details">
      <p class="product_Type">${productOfType}</p>
      <p class="product_name">${productOfName}</p>
      <p class="price_lable">Price:UGX</p>
      <p class="price_amount">${productOfPrice}</p>
      </div>
      <input type="button" value="Delete Item" class="Delete_Item" />
      </article>
      `;
      cartRow.innerHTML = list;
      cart.append(cartRow);

      deleteItem()
      updateCartTotal();
}

// delete item from cart
function deleteItem(){
  var removeProduct = document.querySelectorAll('.Delete_Item');
  console.log(removeProduct);
  //Remove Item from Cart
  removeProduct.forEach(removeBtns => {
      removeBtns.addEventListener('click', (event)=>{
          event.target.parentElement.parentElement.remove();
          });
      });
      
}

// calculating total function
function updateCartTotal(){
  var cartItems = document.querySelectorAll('.cart-items')[0];
  var cartTile = cartItems.querySelectorAll('.item_colletions');

  let total = 0;
  for (let i = 0; i < cartTile.length; i++) {
      var cartTile = cartTile[i];
      var productPrice = cartTile.querySelectorAll('.price_amount')[0];
      var price =parseInt(productPrice.innerText);
      console.log(productPrice);

      console.log(typeof(price));
      console.log(price);

      // const quantity = quantitiyElement.value;
      total = total + price ;
      console.log(total);

  }
  total = total ;
  document.getElementsByClassName('total')[0].innerText=total;
}


