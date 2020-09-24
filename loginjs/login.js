var data = JSON.parse(localStorage.getItem("data"));
console.log(window.location.pathname);

document.getElementById("submit").addEventListener("click", submit);
let userCheck = (dataObj, mail) => {
  let user = null;
  // let errs = [];
  dataObj.forEach((element) => {
    if (element.email == mail) {
      user = element;
    } // else{
    //     errs.push("User does not exist pliz registor");
    // }
  });
  return user;
};

let domErrWriting = (stri) => {
  document.querySelector("#err").innerHTML = stri;
};
function submit(e) {
  e.preventDefault();
  var mail = document.getElementById("email").value;
  var password = document.querySelector("#password").value;
  const user = userCheck(data, mail);
  console.log(user);
  if (mail == "" || password == "") {
    var stri = "Please input either your email or password";
    domErrWriting(stri);
  } else if (user == null) {
    var stri = `No user with email: ${mail}  please try registering`;
    domErrWriting(stri);
  } else if (user != null && user.password == password) {
    alert(`Welcom Peter ${user.username}`);
    domErrWriting("Successfully Logged In");
    document.getElementById("err").href = "homePage.html";
    // window.location.assign(window.location.href.substr(0,72).concat('homePage.html'));
    // // if (document.location.href == window.location.href.substr(0,72).concat('homePage.html')) {
    // //
    // // }
    localStorage.setItem("user", JSON.stringify(user));
    document.location.href = "./homePage.html";
  } else {
    var stri = "Check your password";
    domErrWriting(stri);
  }

}



