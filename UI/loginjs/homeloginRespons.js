
var user = JSON.parse(localStorage.getItem('user'));
console.log(user);

document.querySelector('#suc').innerHTML = `Welcom ${user.username}`;