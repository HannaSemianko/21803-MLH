import sel from "../../data/selectors";
import {name, age, gender, story} from "../../data/testData";
import exp from "../../data/expected.json";

describe('Age field suite', function () {

    describe('Positive cases', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
        });

        it('TC-056 Input field placeholder =`Hero\'s age`', function () {
            const placeholder =  $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.AgePlaceholder);
        });

        it('TC-059 Age input field accepts "1234567890"', function () {
            $(sel.age).setValue(age.default);
            let result = $(sel.age).getValue();
            expect(result).toEqual(exp.digitsFrom0To9);
        });

        // it('TC-060 Age input field trimmed "0" on the left of the number', function () {
        //     $(sel.age).setValue(age.numberWith0);
        //     let result = $(sel.age).getValue();
        //     expect(result).toEqual(exp.numberWithout0);
        // });

    });

    describe('Negative cases', function (){

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
        });

        it('TC-066 When enter  \'13\' digits  error appears', function () {
            $(sel.age).setValue(age.digits13);
            let result = $(sel.ageFieldErrorMessage).waitForDisplayed({timeout:3000});
            expect(result).toEqual(true);
        });
    })
});