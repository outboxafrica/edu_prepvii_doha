import {stock} from '/data/stock/stock.js';

const displayItems = document.querySelector('.items_display');

function outPut(stock){
    if(stock.length > 0){
    
    var list = stock.map(function(iterate){
      `
      <article id="item_colletions" class="item_colletions">
          <img src="${iterate.productImage}" alt="items" class="image" />
          <div class="product_details">
            <p class="product">${iterate.productType}</p>
            <p class="product">${iterate.productName}</p>
            <p class="price">Price:UGX ${iterate.productPrice}</p>
          </div>
          <input type="button" value="Add to cart" class="button" />
        </article>
      `  
    }).join('');
    displayItems.innerHTML = list;
}
};
outPut(stock)
// outPut(stock);
// console.log(stock);
// console.log(`${iterate.productType} & ${iterate.productName}`);