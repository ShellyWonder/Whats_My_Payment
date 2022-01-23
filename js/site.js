//display message from the user:
function getValues() {
    let tPrincipal = document.getElementById("loanAmt").value;
    let numPayments = document.getElementById("numPayments").value;
    let interestRate = document.getElementById("interestRate").value;
    //VAIDATION:
    //Parse for numbers(inputs)
    tPrincipal = parseInt(tPrincipal);
    numPayments = parseInt(numPayments);
    interestRate = parseInt(interestRate);
    //convert strings to integers
    if (Number.isInteger(tPrincipal) && Number.isInteger(numPayments) && Number.isInteger(interestRate)) {
        let lcArray = loanCalc(tPrincipal, numPayments, interestRate)
        //Call displayData & write values to the DOM;
        displayData(lcArray);
    } else {
        alert("Try again. Please enter only numbers into the loan calculator")
    }

    //display Right Col 2 data

    displayData();
}
//LOGIC: (old generate )
//Generate an array of payment objects
/*function reverseAString(userString) {
    let revString = "",
        //decrimenting for loop
        for (let i = userString.length - 1; i >= 0; i--) {
            revString += userString[index];

            return revString;

        }
}*/

//Display back to DOM
function displayData() {
    document.getElementById("tPrincipal").innerHTML = `$ ${tPrincipal}`;


}