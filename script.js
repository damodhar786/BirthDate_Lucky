const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

function checkBirthDateISLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);

    if (sum && dob) {
        if (sum % luckyNumber.value === 0) {
            output.innerText = "Your Birth Date is Lucky 😃";
        }
        else {
            output.innerText = "Your Birth Date is Not Lucky 😉";
        }
    }
    else {
        output.innerText = "Please Enter both the values.......";
    }
    dateOfBirth.value = "";
    luckyNumber.value = "";
}


function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}


checkButton.addEventListener("click", checkBirthDateISLucky);

