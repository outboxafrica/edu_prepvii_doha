// import {stock} from '/data/stock/stock.js';

// const displayItems = document.querySelector('.items_display');

// function outPut(stock){
//     if(stock.length > 0){
    
//     var list = stock.map(function(iterate){
//       `
//       <article id="item_colletions" class="item_colletions">
//           <img src="${iterate.productImage}" alt="items" class="image" />
//           <div class="product_details">
//             <p class="product">${iterate.productType}</p>
//             <p class="product">${iterate.productName}</p>
//             <p class="price">Price:UGX ${iterate.productPrice}</p>
//           </div>
//           <input type="button" value="Add to cart" class="button" />
//         </article>
//       `  
//     }).join('');
//     displayItems.innerHTML = list;
// }
// };
// outPut(stock)


// //Add to cart
// var addToCartButton =document.querySelectorAll('.To_Cart_button');
// addToCartButton.forEach(function(iterate) {
//   iterate.addEventListener('click', addToCart);
//   // console.log(addToCartButton);
// });

// //Add to cart function
// function addToCart(event){
//   var product = event.target.parentElement;
//   var productImage = product.querySelector('.image').src;
//   var productOfType = product.querySelector('.product_Type').innerText;
//   var productOfName = product.querySelector('.product_name').innerText;
//   var productOfPrice = product.querySelector('.price_amount').innerText;
//   includeProduct(productImage,productOfType,productOfName,productOfPrice);


// outPut(stock);
// console.log(stock);
// console.log(`${iterate.productType} & ${iterate.productName}`);

// //Add to cart
// var addToCartButton =document.querySelectorAll('.To_Cart_button');
// addToCartButton.forEach(function(iterate) {
//   iterate.addEventListener('click', addToCart);
//   // console.log(addToCartButton);
// });

// //Add to cart function
// function addToCart(event){
//   event.preventDefault();
//   console.log(event);
//   var product = event.target.parentElement;
//   console.log(product.querySelector('.image').src);
//   var productImage = product.querySelector('.image').src;
//   var productOfType = product.querySelector('.product_Type').innerText;
//   var productOfName = product.querySelector('.product_name').innerText;
//   var productOfPrice = product.querySelector('.price').innerText;
//   includeProduct(productImage,productOfType,productOfName,productOfPrice);
// }
// //Indcluding items to the add to cart function
// function includeProduct(productImage,productOfType,productOfName,productOfPrice) {
//   var cart = document.querySelector('.cart-items'); 
//         var cartRow = document.createElement('div');
//       cartRow.classList.add('item_colletions');
//       const cartItems = document.querySelectorAll('.cart-items')[0];      
//       var list = 
//        `
//       <article id="item_colletions" class="item_colletions">
//       <img src="${productImage}" alt="items" class="image" />
//       <div class="product_details">
//       <p class="product_Type">${productOfType}</p>
//       <p class="product_name">${productOfName}</p>
//       <p class="price">Price:UGX ${productOfPrice}</p>
//       </div>
//       <input type="button" value="Delete Item" class="Delete_Item" />
//       </article>
//       `;
//       cartRow.innerHTML = list;
//       cart.append(cartRow);

//       deleteItem()
// }