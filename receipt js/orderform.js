var totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
console.log(totalPrice);
document.querySelector("#total").innerHTML = totalPrice.price;
document.querySelector("#username").innerHTML = totalPrice.user.username;
document.querySelector("#email").innerHTML = totalPrice.user.email;
document.getElementById("button").addEventListener("click", (e) => {
  e.preventDefault();
  document.location.href = "./thank_u_page.html";
});
//validation for the right email format
// function validateemail() {
//   var emailID = document.orderform.email.value;
//   let x = emailID.indexOf("@");
//   let y = emailID.lastIndexOf(".");

  // if (y < 1 || y - x < 2) {
  //   alert("Please enter correct email ID");
  //   document.orderform.email.focus();
  //   return false;
  // }
  // return true;

