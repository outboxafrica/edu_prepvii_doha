var user = JSON.parse(localStorage.getItem("user"));
console.log(user);

document.querySelector("#suc").innerHTML = `Welcome ${user.username}`;
setTimeout(() => {
    document.querySelector("#suc").innerHTML = user.username;
  }, 10000);

