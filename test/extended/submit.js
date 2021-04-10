import sel from "../../data/selectors";
import {name, age, gender, story, testCase129} from "../../data/testData";
import exp from "../../data/expected.json";
import {
    inputValues4Submit,
    getTitle,
    getText,
    getNameStory,
    getAgeStory,
    getYears,
    countGenderLower,
    countPosGender
} from '../../helpers/methods';

describe('Submit button suite', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(function () {
        browser.refresh();
    });

    it('TC-124 name + age (1) + HE + story comedy', function () {
        inputValues4Submit(name.default, gender.he, age.one, story.comedy);
        browser.pause(3000);

        let text = $$(".card-text")[0].getText();
        let arrIncludesString = text.split("\n");
        let arrString1 = arrIncludesString[1].split(",");
        console.log(arrString1);
        let header = $("h4").getText();
        expect(header).toEqual(`Two Cats And A ${name.default}`)
        expect(arrString1[0]).toEqual(name.default);

        let arrStringOneElOne = arrString1[1].split(" ");
        expect(arrStringOneElOne[3]).toEqual(age.one);
        //expect(arrStringOneElOne[4]).toEqual("year");//Bug!!!

        let arrSplitSentence = text.split(".");
        console.log(arrSplitSentence);
        let firstElGender = arrSplitSentence[3].trim().split(" ");
        let secondElGender = arrSplitSentence[4].split(" ");
        expect(firstElGender[0]).toEqual("He");
        expect(secondElGender[0].slice(1)).toEqual("He");

        let thirdElGender = arrSplitSentence[2].split(" ").slice(-6);
        expect(thirdElGender[0]).toEqual("his");
    });

    describe('TC-129 name (LadyBug007) + age (999999999999) + It + story "Comedy"', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
            inputValues4Submit(testCase129.name, testCase129.genderClick, testCase129.age, testCase129.story);
        });

        it('TC-129.1 Check name in Title', function () {
            let header = getTitle();
            expect(header).toEqual(`Two Cats And A ${testCase129.name}`)
        });

        it('TC-129.2 Check name in Story', function () {
            let result = getNameStory();
            expect(result).toEqual(testCase129.name);
        });

        it('TC-129.3 Check age in Story', function () {
            let result = getAgeStory();
            expect(result).toEqual(testCase129.age);
        });

        it('TC-129.4 Check "year" / "years"', function () {
            let result = getYears();
            expect(result).toEqual(testCase129.age > 1 ? "years" : "year");
        });

        it('TC-129.5 Check Gender (Lower case) in Story (= 2 )', function () {
            let countGender = countGenderLower(testCase129.genderTextLower);
            expect(countGender).toEqual(2);
        });

        it('TC-129.6 Check Possessive gender in Story (= 1)', function () {
            let countGender = countPosGender(testCase129.genderPossessive);
            expect(countGender).toEqual(1);
        });

    });

    it('TC-126 name (Tree) + age (1) + It + story "Comedy"', function () {

        inputValues4Submit(name.nameTC_126, gender.it, age.one, story.comedy);

        it('TC-126.1 correct name in the header', () => {
            let header = getTitle();
            expect(header).toEqual(`Two Cats And A ${name.nameTC_126}`)
        });

        it('TC-126.2 correct name in the story', () => {
            let header = getNameStory();
            expect(header).toEqual(name.nameTC_126);
        });

        it('TC-126.3 correct age in the story', () => {
            let header = getAgeStory();
            expect(header).toEqual(age.one);
        });

        it('TC-126.4 correct plural of age', () => {
            let header = getYears();
            expect(header).toEqual(age.one > 1 ? "years" : "year")
        });

        it('TC-126.5 correct sum of gender in the story', () => {
            let header = countGenderLower(gender.It);
            expect(header).toEqual(2);
        });

        it('TC-126.6 correct sum of possessive gender', () => {
            let header = countPosGender(gender.its);
            expect(header).toEqual(1);
        });
    });
});
