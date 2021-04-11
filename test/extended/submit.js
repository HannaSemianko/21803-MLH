import sel from "../../data/selectors";
import {name, age, gender, story, testCase129} from "../../data/testData";
import exp from "../../data/expected.json";
import {
    inputValues4Submit,
    getTitle,
    getNameStory,
    getAgeStory,
    getYears,
    countGenderLower,
    countPosGender,
    firstElGender,
    secondElGender,
    thirdElGender,
    checkHeader
} from '../../helpers/methods';

describe('Submit button suite', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-124 name + age (1) + HE + story comedy', function () {
        inputValues4Submit(name.default, gender.he, age.one, story.comedy);
        browser.pause(3000);

        let header = getTitle();
        expect(header).toEqual(`Two Cats And A ${name.default}`);

        let nameInStory = getNameStory();
        expect(nameInStory).toEqual(name.default);

        let ageInStory = getAgeStory();
        expect(ageInStory).toEqual(age.one);

        // let yearsInStory = getYears();
        // expect(yearsInStory).toEqual(age.one > 1 ? "years" : "year"); //Bug!!!

        let firstGender = firstElGender();
        expect(firstGender).toEqual(gender.He);

        let secondGender = secondElGender();
        expect(secondGender).toEqual(gender.He);

        let thirdGender = thirdElGender();
        expect(thirdGender).toEqual(gender.his);

    });

    it('TC-130 name (BigBoss) + age (1) + It + story "Comedy"', function () {
        browser.refresh();
        inputValues4Submit(name.nameTC_127, gender.it, age.one, story.comedy);
        let header = checkHeader();
        expect(header).toEqual(exp.header)
    });

    describe('TC-125 name (LadyBoss) + age (1) + She + story "Comedy"', function () {

        before('Open App', function () {
            browser.refresh();
        });

        it('Add all information', () => {
            inputValues4Submit(name.nameTC_125, gender.she, age.one, story.comedy);
        });

        it('TC-125.1 Check name in Title', function () {
            let header = getTitle();
            expect(header).toEqual(`Two Cats And A ${name.nameTC_125}`)
        });

        it('TC-125.2 Check name in Story', function () {
            let result = getNameStory();
            expect(result).toEqual(name.nameTC_125);
        });

        it('TC-125.3 Check age in Story', function () {
            let result = getAgeStory();
            expect(result).toEqual(age.one);
        });

        // Bug needs to fix
        // it('TC-125.4 Check "year" / "years"', function () {
        //     let result = getYears();
        //     expect(result).toEqual(age.one > 1 ? "years" : "year");
        // });

        it('TC-125.5 Check Gender (Lower case) in Story (= 2 )', function () {
            let countGender = countGenderLower(gender.She);
            expect(countGender).toEqual(2);
        });

        it('TC-125.6 Check Possessive gender in Story (= 1)', function () {
            let countGender = countPosGender(gender.her);
            expect(countGender).toEqual(1);
        });

    });

    describe('TC-126 name (Tree) + age (1) + It + story "Comedy"', function () {

        before('Refresh App', function () {
            browser.refresh();
        });

        it('Add all information', () => {
            inputValues4Submit(name.nameTC_126, gender.it, age.one, story.comedy);
        });

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

        // it('TC-126.4 correct plural of age', () => {
        //     let header = getYears();
        //     expect(header).toEqual(age.one > 1 ? "years" : "year")   // Bug!!!
        // });

        it('TC-126.5 correct sum of gender in the story', () => {
            let header = countGenderLower(gender.It);
            expect(header).toEqual(2);
        });

        it('TC-126.6 correct sum of possessive gender', () => {
            let header = countPosGender(gender.its);
            expect(header).toEqual(1);
        });
    });

    describe('TC-127 name (BigBoss) + age (100) + He + story "Comedy"', function () {

        before('Open App', function () {
            browser.refresh();
        });

        it('Add all information', () => {
            inputValues4Submit(name.nameTC_127, gender.he, age.hundred, story.comedy);
        });

        it('TC-127.1 Check name in Title', function () {
            let header = getTitle();
            expect(header).toEqual(`Two Cats And A ${name.nameTC_127}`)
        });

        it('TC-127.2 Check name in Story', function () {
            let result = getNameStory();
            expect(result).toEqual(name.nameTC_127);
        });

        it('TC-127.3 Check age in Story', function () {
            let result = getAgeStory();
            expect(result).toEqual(age.hundred);
        });

        it('TC-127.4 Check "year" / "years"', function () {
            let result = getYears();
            expect(result).toEqual(age.hundred > 1 ? "years" : "year");
        });

        it('TC-127.5 Check Gender (Lower case) in Story (= 2 )', function () {
            let countGender = countGenderLower(gender.He);
            expect(countGender).toEqual(2);
        });

        it('TC-127.6 Check Possessive gender in Story (= 1)', function () {
            let countGender = countPosGender(gender.his);
            expect(countGender).toEqual(1);
        });
    });

    describe('TC-128 name (MissMarple) + age (100) + She + story "Comedy"', function () {

        before('Open App', function () {
            browser.refresh();
        });

        it('Add all information', () => {
            inputValues4Submit(name.nameTC_128, gender.she, age.hundred, story.comedy);
        });

        it('TC-128.1 Check name in Title', function () {
            let header = getTitle();
            expect(header).toEqual(`Two Cats And A ${name.nameTC_128}`)
        });

        it('TC-128.2 Check name in Story', function () {
            let result = getNameStory();
            expect(result).toEqual(name.nameTC_128);
        });

        it('TC-128.3 Check age in Story', function () {
            let result = getAgeStory();
            expect(result).toEqual(age.hundred);
        });

        it('TC-128.4 Check "year" / "years"', function () {
            let result = getYears();
            expect(result).toEqual(age.hundred > 1 ? "years" : "year");
        });

        it('TC-128.5 Check Gender (Lower case) in Story (= 2 )', function () {
            let countGender = countGenderLower(gender.She);
            expect(countGender).toEqual(2);
        });

        it('TC-128.6 Check Possessive gender in Story (= 1)', function () {
            let countGender = countPosGender(gender.her);
            expect(countGender).toEqual(1);
        });
    });


    describe('TC-129 name (LadyBug007) + age (999999999999) + It + story "Comedy"', function () {

        before('Open App', function () {
            browser.refresh();
        });

        it('Add all information', () => {
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


});

