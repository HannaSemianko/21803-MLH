import sel from "../data/selectors";


function inputValues4(name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function inputValues5(name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
    $(sel.submitButton).click();
}

function clearBackspace (value){
    for (let i = 0; i < value; i++) {
        $(sel.name).keys(['Backspace']);
    }
}



module.exports = {inputValues4, clearBackspace,inputValues5};
