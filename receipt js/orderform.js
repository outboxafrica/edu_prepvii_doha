
/*Validatation for the right email address*/
var pageDetails = document.querySelector("#page-details"),
var form = document.querySelector("form");

function validateemail(e) {
    e.preventDefault();
    var emailID = document.orderform.email.value;
    let x = emailID.indexOf("@");
    let y = emailID.lastIndexOf(".")

    if (y < 1 || (y - x < 2)) {
        //allert("Please enter correct email ID")
        var h3 = document.createElement("h3");
        var mes = document.createTextNode("please enter correct email ID");
        h3.appendChild(mes);
        pageDetails.insertBefore(h3, form);
        document.orderform.email.focus();
        return false;

    }
    return (true);
}
