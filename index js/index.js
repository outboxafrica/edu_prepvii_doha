var login = document.querySelector(".login"); 
var Sign_Up = document.querySelector(".Sign_Up"); 

console.log(login);
login.addEventListener('click', function(){
    window.location.assign("login.html");
});
Sign_Up.addEventListener('click', function(){
    window.location.assign("createAccount.html");
});