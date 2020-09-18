var data = [
    {
        "username":"MUWANGUZI",
        "email":"muwanguzi51@gmail.com",
        "password":"peter12346"
    },
    {
        "username":"PETER",
        "email":"petermuwanguzi51@gmail.com",
        "password":"peter1234"
    }
]
document.getElementById('submit').addEventListener('click',submit);
let userCheck = (dataObj,mail) => {
    let user = null;
    // let errs = [];
    dataObj.forEach(element => {
        if (element.email == mail) {
            user = element;
        }// else{
        //     errs.push("User does not exist pliz registor");
        // }
    });
    return user;
}
function submit(e) {
    e.preventDefault()
    // alert("Hello");
    var mail=document.getElementById("email").value;
    var password = document.querySelector('#password').value;
    
    var user = userCheck(data,mail);
    console.log(user);
    if (mail =="" || password =="") {
        alert("Please input either ur email or password");
    }
    if (user==null) {
        alert(`No user with email: ${mail}  pliz try registering`);
    }else if (user!=null && user.password == password) {
        alert(`Welcom Peter ${user.username}`);
    }else{
        alert("Check ur password");
    }
}