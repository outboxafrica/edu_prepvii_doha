    
//validation for the right email format
function validateemail() {
var emailID = document.orderform.email.value;
let x = emailID.indexOf("@");
let y = emailID.lastIndexOf(".");

if (y < 1 || ( y - x < 2 )) {
 alert("Please enter correct email ID")
 document.orderform.email.focus() ;
 return false;
}
return( true );
}


