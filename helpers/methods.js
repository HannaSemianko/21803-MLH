import sel from "../data/selectors";

function inputValues4(name, gender, age, story) {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function inputValues4Submit(name, gender, age, story) {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
    $(sel.submitButton).click();
}

function inputValues5Submit(name, gender, age, story, image) {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();

    $(sel.submitButton).click();
}

// SHOW ELEMENT
function makeElVisible(element) {
    browser.execute(function (el)  {
        el.style.display = '';
    }, element);
}

function clearBackspace(value) {
    for (let i = 0; i < value; i++) {
        $(sel.name).keys(['Backspace']);
    }
}

function getTitle() {
    return $("h4").getText();
}

function textStory() {
    return $$(".card-text")[0].getText();
}

function breakStoryIntoLines() {
    let text = textStory();
    let arrIncludesLines = text.split("\n");
    console.log(arrIncludesLines)
    return arrIncludesLines;
}

function getNameStory() {
    let arrWordsOfLines1 = breakStoryIntoLines()[1].split(",");
    return arrWordsOfLines1[0];
}

function getAgeStory() {
    let arrWordsOfLines1 = breakStoryIntoLines()[1].split(" ");
    return arrWordsOfLines1[3];
}

function getYears() {
    let arrWordsOfLines1 = breakStoryIntoLines()[1].split(" ");
    return arrWordsOfLines1[4];
}

function textWithoutLineBreak() {
    let arrWords = textStory().replace(/\n/g, ' ').split(' ');
    console.log(arrWords);
    return arrWords;
}

function countGenderLower(genderTC) {
    let arrWords = textWithoutLineBreak();
    return arrWords.filter(el => el === genderTC).length;
}

function countPosGender(genderPosTC) {
    let arrWords = textWithoutLineBreak();
    return arrWords.filter(el => el === genderPosTC).length;
}

function textBreakInToSentence(){
    let text = textStory();
    let arrIncludesSentence = text.split(".");
    console.log(arrIncludesSentence)
    return arrIncludesSentence;
}

function firstElGender(){
   let arrIncludesSentence =  textBreakInToSentence();
   let firstElGender = arrIncludesSentence[3].trim().split(" ");
   return firstElGender[0];
}

function secondElGender(){
    let arrIncludesSentence =  textBreakInToSentence();
    let secondElGender = arrIncludesSentence[4].split(" ");
    return secondElGender[0].slice(1);
}

function thirdElGender (){
    let arrIncludesSentence =  textBreakInToSentence();
    let thirdGender = arrIncludesSentence[2].split(" ").slice(-6);
    return thirdGender[0];
}

function checkHeader () {
    return $(sel.header).getText();
}

module.exports = {
    inputValues4,
    clearBackspace,
    inputValues4Submit,
    makeElVisible,
    getTitle,
    textStory,
    getNameStory,
    getAgeStory,
    getYears,
    countGenderLower,
    countPosGender,
    firstElGender,
    secondElGender,
    thirdElGender,
    checkHeader
};
