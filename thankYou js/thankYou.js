

function serialID(){
    var numberGroupOne = (parseInt)(Math.random()*1000);
    var numberGroupTwo = (parseInt)(Math.random()*1000);
    var numberGroupThree = (parseInt)(Math.random()*1000);
    // console.log(numberGroupOne,numberGroupTwo,numberGroupThree);
    var serialNumbers = `
    <p>ID: ${numberGroupOne}-${numberGroupTwo}-${numberGroupThree}</p>
    `;
    
    var id = document.querySelector('.serial_number');
    id.innerHTML = serialNumbers;
}