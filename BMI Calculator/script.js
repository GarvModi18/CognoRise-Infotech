let weight = document.getElementById("weight");
let feet = document.getElementById("height-feet");
let inch = document.getElementById("height-inch");
let weightType = document.getElementById("weight-type");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", (e) => {
    e.preventDefault();

    let weightValue = parseFloat(weight.value);
    let feetValue = parseFloat(feet.value) || 0;
    let inchValue = parseFloat(inch.value) || 0;

    if (isNaN(weightValue) || weightValue <= 0 || !weightValue) {
        alert("Please enter a valid weight.")
        result.innerHTML = "Please enter a valid weight.";
        return;
    }
    if (isNaN(feetValue) || isNaN(inchValue) || !feetValue || !inchValue) {
        alert("Please enter a valid height.")
        result.innerHTML = "Please enter a valid height.";
        return;
    }

    let totalInch = (feetValue * 12) + inchValue;
    if (totalInch <= 0) {
        alert("Please enter a valid height.")
        result.innerHTML = "Please enter a valid height.";
        return;
    }

    let answer;
    if (weightType.value === "kg") {
        let meter = totalInch / 39.37;
        answer = weightValue / (meter * meter);
    } else {
        answer = (703 * weightValue) / (totalInch * totalInch);
    }
    //Formula:https://www.calculatorsoup.com/calculators/health/bmi-calculator.php
    let status;
    if(answer<=18.4) status="Under Weight";
    else if(answer<=24.9) status="Normal";
    else if(answer<=39.9) status="Over Weight";
    else status="Obese";

    result.innerHTML = `Your BMI is: ${answer.toFixed(2)} (${status}) `;
});
 