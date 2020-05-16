"use strict";
function validationFormInput(htmlID, type) {
    let formId = document.getElementById(htmlID);
    let valueVar;
    if (formId) {
        valueVar = formId.value;
    }
    else {
        console.log(`not have html element id for ${htmlID}`);
    }
    if (type == "string") {
        if (isNaN(valueVar)) {
            console.log(`is string : ${valueVar}`);
        }
        else {
            console.log("is not string");
        }
    }
    else if (type == "number") {
        if (!isNaN(valueVar)) {
            console.log(`is number : ${valueVar}`);
        }
        else {
            console.log("is not number");
        }
    }
    else {
        console.log("only string and number type");
    }
}
