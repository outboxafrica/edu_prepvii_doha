var dataArr = JSON.parse(localStorage.getItem('data'));
// console.log(dataArr);;
let emailExistance = (mail,data) => {
    var mess = false;
    data.forEach(element => {
        console.log(mail);
        if (mail === element.email){
            // console.log(mail);
            mess = true;
        }
    });
    return mess;
}
let passwordCheck = password => {
    var resp = []; 
    var passlen = password.length;
    var reg = ['!','@','#','$','&','*',"?"];
    var no = [1,2,3,4,5,6,7,8,9,0];
    let regInPass = [];
    let noInPass = [];
    for (let i=0;i<=passlen;i++) {
        reg.forEach(element => {
            if (password[i] == element) {
                regInPass.push(element);
            }
        });
        no.forEach(element => {
            if (password[i] == element) {
                noInPass.push(element);
            }  
        });
        
    }

    if (!(passlen >= 8)) {
        resp.push({
            "len":"Password is Less Than 8 characters"
        });
    }else if (regInPass.length == 0) {
        resp.push({
            "reg":"Password should contain some special characters in it"
        });
    }else if (noInPass.length == 0) {
        resp.push({
            "num":"Password should contain a number"
        });
    }else{
        resp.push({
            "suc":"Password fits all criterias"
        });
    }
    return resp;
}
let emailValidity = mail => {

    var valid = false;
    // if (mail.length <=0) {
    //     valid = false;
    // }else{
        var po=mail.lastIndexOf(".");
        var at = mail.lastIndexOf("@");
        if ((po > at)&&(mail.substring((po+1),mail.length).length>0)&&(po >= 0 && at >= 0)) {
            valid = true;
        }
    
  
    return valid;
}

let domErrWriting = stri => {
    document.querySelector("#err").innerHTML=stri;
    
}

document.getElementById('submit').addEventListener('click',validation);


function validation(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var email =  document.querySelector("#email").value;
    var password = document.querySelector('#password').value;
    var confpassword = document.querySelector('#confpassword').value;
    var data = {
        "username": username,
        "email": email,
        "password": password,
        "confpassword": confpassword
    };
    var response = [];
    if (data.username =='' || data.email=='' || data.password == '' || data.confpassword == '') {
        domErrWriting("U cant submit with a missing field");
        response.push({
            "missingFeild": "U cant submit with a missing field"
        });
        console.log("U cant submit with a missing field");
    }else if (emailExistance(data.email, dataArr) == true) {
        response.push({
            "mailErr": `${data.email} already exists please login or use another Email Address`
        });
        domErrWriting(`${data.email} already exists please login or use another Email Address`);
    } else if (emailValidity(data.email) == false) {
        response.push({
            "mailNotValid": `${data.email} is not a Valid Formate is 'example@mail.com'`
        });
        domErrWriting(`${data.email} is not a Valid Formate is 'example@mail.com'`);
    }else if (data.password.length <8) {
        response.push({
            "passLen": "Password Length should be Greater than 8 characters"
        });
        domErrWriting("Password Length should be Greater than 8 characters");
    } else if (!(data.password === data.confpassword)) {
        response.push({
            "passConf": "Passwords Dont Much"
        });
        domErrWriting("Passwords Dont Much");
    }else {
        response.push({
            "sucReg": `Successfully Registered as ${data.username} with email ${data.email}`
        });
        domErrWriting(`Successfully Registered as ${data.username} with email ${data.email}`);
        localStorage.setItem('user',JSON.stringify(data));
        document.location.href = ('./homePage.html');
    }
}