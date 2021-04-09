import sel from "../../data/selectors";
import {name, age, gender, story} from "../../data/testData";
import exp from "../../data/expected.json";
import {inputValues5} from '../../helpers/methods';

describe('Submit button suite', function () {

    before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
        });

        it.only('TC-124 name + age (1) + HE + story comedy', function () {
            inputValues5(name.default, gender.he, age.one, story.comedy);

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

            let thirdElGender =  arrSplitSentence[2].split(" ").slice(-6);
            expect(thirdElGender[0]).toEqual("his");
        });
});
