//get message from the user:
function getValues() {
    let tPrincipal = document.getElementById("loanAmt").value;
    let numPayments = document.getElementById("numPayments").value;
    let interestRate = document.getElementById("interestRate").value;
    //convert interestRate to %
    let term = interestRate / 100;
    //VAIDATION:
    //Parse for numbers(inputs)
    tPrincipal = parseInt(tPrincipal);
    numPayments = parseInt(numPayments);
    term = parseFloat(term);
    //convert strings to integers
    if (Number.isInteger(tPrincipal) && Number.isInteger(numPayments) && Number.isInteger(term)) {
        let lcArray = generatePayments(tPrincipal, numPayments, term)
        //Call displayData & write values to the DOM;
        displayData(lcArray);
    } else {
        alert("Try again. Please enter only numbers into the loan calculator.")
    }

    //display Right Col 2 data

    displayData();
}
//LOGIC: 
//Generate an array of payment objects:
function generatePayments(tPrincipal, numPayments, term) {

    let paymentsArray = [];
    let paymentobj = {};

    //generating months to the object
    let months = [];
    let monthPayment = [];
    for (let i = 1; i <= numPayments; i++) {
        months.push[i];
        paymentobj.push(months);
    }
    paymentsArray.push(paymentobj);

    //COL 2 (RIGHT) DATA
    //Calculate Monthly Payments
    monthPayment = tPrincipal * (term / 1200) / Math.pow(1 - (1 + term / 1200), months);
    paymentobj.push(monthPayment);
    paymentsArray.push(paymentobj);

    //Calculate Total interest
    let tInterest = (tPrincipal * term * months);
    paymentobj.push(tInterest);
    paymentsArray.push(paymentobj);

    //Calculate Total loan cost
    let tCost = tPrincipal + tInterest;

    /* for (let i = 1; i <= paymentsArray.length; i++) {

     }*/




}



//Display back to DOM
function displayData() {
    let displayPayment = document.getElementById("displayPayment").innerHTML = `&#36; ${monthPayment}`;
    let displayPrincipal = document.getElementById("tPrincipal").innerHTML = `&#36; ${tPrincipal}`;
    let displayTotalInterest = document.getElementById("tInterest").innerHTML = `&#36;${tInterest}`;
    let displayTotalCost = document.getElementById("tCost").innerHTML = `&#36; ${tCost}`;
}