var purchace_data = JSON.parse(localStorage.getItem("totalPrice"));
document.querySelector("#username").innerHTML = purchace_data.user.username;
document.querySelector("#price").innerHTML = purchace_data.price;
document.querySelector("#serialID").innerHTML = purchace_data.serialID;