// import {stock} from '../data/stock/stock.js';
var Price = 0;
var stock = JSON.parse(localStorage.getItem("stock"));
console.log(stock);
const displayItems = document.querySelector(".items_display");
// Display items on home page

function serialID() {
  var numberGroupOne = parseInt(Math.random() * 1000);
  var numberGroupTwo = parseInt(Math.random() * 1000);
  var numberGroupThree = parseInt(Math.random() * 1000);
  var serial = `${numberGroupOne}-${numberGroupTwo}-${numberGroupThree}`;
  // console.log(numberGroupOne,numberGroupTwo,numberGroupThree);
  // var serialNumbers = `
  // <p>ID: ${numberGroupOne}-${numberGroupTwo}-${numberGroupThree}</p>
  // `;
  // var id = document.querySelector('.serial_number');
  // id.innerHTML = serialNumbers;
  return serial;
}

function outPut(stock) {
  if (stock.length > 0) {
    var list = stock.map(function (iterate) {
      return `
      <article id="item_colletions" class="item_colletions">
      <img src="${iterate.productImage}" alt="items" class="image" />
      <div class="product_details">
      <p class="product_Type">${iterate.productType}</p>
      <p class="product_name">${iterate.productName}</p>
      <p class="price">Price:UGX ${iterate.productPrice}</p>
      </div>
      <input type="button" value="Add to cart" class="To_Cart_button" />
      </article>
      `;
    });
    displayItems.innerHTML = list;
  }
}
outPut(stock);

// SEARCH ENGINE
var h4 = document.querySelector("#errMess");

let domErrWriting = (stri, color) => {
  document.getElementById("err").innerHTML = stri;
  document.getElementById("err").style.color = color;
  document.getElementById("input").style.borderColor = color;
  setTimeout(() => {
    document.getElementById("err").innerHTML = "";
    // document.getElementById("err").style.color = color;
    document.getElementById("input").style.borderColor = null;
  }, 10000);

  // console.log(stri);
};
let displayItem = (item) => {
  console.log(item);
  if (item.length <= 0) {
    h4.innerHTML = "Item is not available";
  } else {
    var list = item.map(function (iterate) {
      return `
    <article id="item_colletions" class="item_colletions">
      <img src="${iterate.productImage}" alt="items" class="image" />
      <div class="product_details">
      <p class="product_Type">${iterate.productType}</p>
      <p class="product_name">${iterate.productName}</p>
      <p class="price">Price:UGX ${iterate.productPrice}</p>
      </div>
      <input type="button" value="Add to cart" class="To_Cart_button" />
      </article>
      `;
    });
    h4.innerHTML = "Items searched are here";
    displayItems.innerHTML = list;

    var selectorItems = document.querySelector(".items_display");
    console.log(selectorItems);
    var prodtItem = selectorItems.querySelectorAll(".item_colletions");
    prodtItem.forEach((element) => {
      btn = element.querySelector(".To_Cart_button");
      btn.addEventListener("click", add);
    });
    // document.querySelector(".logo").addEventListener('click',outPut(stock));
  }
  document.querySelector(".logo").addEventListener("click", (e) => {
    e.preventDefault();
    if (stock.length > 0) {
      var list = stock.map(function (iterate) {
        return `
        <article id="item_colletions" class="item_colletions">
        <img src="${iterate.productImage}" alt="items" class="image" />
        <div class="product_details">
        <p class="product_Type">${iterate.productType}</p>
        <p class="product_name">${iterate.productName}</p>
        <p class="price">Price:UGX ${iterate.productPrice}</p>
        </div>
        <input type="button" value="Add to cart" class="To_Cart_button" />
        </article>
        `;
      });
      displayItems.innerHTML = list;
      var selectorItems = document.querySelector(".items_display");
      console.log(selectorItems);
      var prodtItem = selectorItems.querySelectorAll(".item_colletions");
      prodtItem.forEach((element) => {
        btn = element.querySelector(".To_Cart_button");
        btn.addEventListener("click", add);
      });
    }
  });
};

// document.getElementById("submit").addEventListener("click", search);
document.getElementById("input").addEventListener("keyup", search);
function search(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    var searchValue = document.querySelector("#input").value;
    var searchedItem = [];
    if (searchValue.length > 0) {
      stock.forEach((element) => {
        if (element.productType.toLowerCase() == searchValue.toLowerCase()) {
          searchedItem.push(element);
          domErrWriting("here are your searchs", "green");
        } else if (
          element.productName.toLowerCase() == searchValue.toLowerCase()
        ) {
          searchedItem.push(element);
          domErrWriting("here are your searchs", "green");
        } //else {
        //   domErrWriting('Item may not exist in our stores','orange');
        // }
      });
      displayItem(searchedItem);
    } else if (searchValue.length <= 0) {
      var stri = `Pliz input some item to search`;
      domErrWriting(stri, "red");
    }
  }
}
//result implementation
function add(e) {
  e.preventDefault();
  var item = e.target.parentElement;
  var data = {
    productType: item.querySelector(".product_Type").innerHTML,
    productImage: item.querySelector(".image").src,
    productName: item.querySelector(".product_name").innerHTML,
    productPrice: Number(
      item
        .querySelector(".price")
        .innerHTML.substring(
          item.querySelector(".price").innerHTML.lastIndexOf(" "),
          item.querySelector(".price").innerHTML.length
        )
    ),
  };
  console.log(data);
  // console.log(JSON.parse(localStorage.getItem('price')));
  addProduct(data);
  sum();
}

function addProduct(data) {
  var cart = document.querySelector(".cart-items");
  var cartRow = document.createElement("div");
  cartRow.classList.add("item_colletions");
  const cartItems = document.querySelectorAll(".cart-items")[0];
  var list = `
      <article id="item_colletions" class="item_colletions">
      <img src="${data.productImage}" alt="items" class="image" />
      <div class="product_details">
      <p class="product_Type">${data.productType}</p>
      <p class="product_name">${data.productName}</p>
      <p class="price">Price:UGX ${data.productPrice}</p>
      </div>
      <input type="button" value="Delete Item" class="Delete_Item" />
      </article>
      `;
  cartRow.innerHTML = list;
  cart.append(cartRow);
  deleteItem();
}

function sum(params) {
  var cart_items = document.querySelector(".cart-items");
  console.log(cart_items.children.length > 0);
  var price = 0;
  if (cart_items.children.length > 0) {
    var p = cart_items.querySelectorAll(".price");
    // console.log(p);
    p.forEach((element) => {
      //  console.log(element);
      var fig = Number(
        element.innerHTML.substring(
          element.innerHTML.lastIndexOf(" "),
          element.innerHTML.length
        )
      );
      //  console.log(fig);
      price += fig;
      //  console.log(price);
      Price = price;
      document.querySelector(".total").innerHTML = price;
    });
  } else {
    Price = price;
    document.querySelector(".total").innerHTML = price;
  }
}
document.querySelector("#order").addEventListener("click", (e) => {
  e.preventDefault();
  e.target.style.backgroundColor = "green";
  var serial = serialID();
  localStorage.setItem(
    "totalPrice",
    JSON.stringify({
      user: JSON.parse(localStorage.getItem("user")),
      price: Price,
      serialID: serial,
    })
  );
  document.location.href = "./receipt.html";
});
var selectorItems = document.querySelector(".items_display");
//  console.log(selectorItems);
var prodtItem = selectorItems.querySelectorAll(".item_colletions");
prodtItem.forEach((element) => {
  btn = element.querySelector(".To_Cart_button");
  btn.addEventListener("click", add);
});

// delete item from cart
function deleteItem() {
  const removeProduct = document.querySelectorAll(".Delete_Item");
  // console.log(removeProduct);
  //Remove Item from Cart
  removeProduct.forEach((removeBtns) => {
    removeBtns.addEventListener("click", (event) => {
      event.target.parentElement.parentElement.remove();
      sum();
    });
  });
}
