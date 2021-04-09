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
            const placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.AgePlaceholder);
        });

        it('TC-057 Age Input Field accepts "1"', function () {
            $(sel.age).setValue(age.one);
            const message = $(sel.ageFieldErrorMessage).isDisplayed();
            expect(message).toEqual(false);
        });

        it('TC-058 Age input field  accepts 12 digits "999999999999"', function () {
            $(sel.age).setValue(age.digits12);
            const message = $(sel.ageFieldErrorMessage).isDisplayed();
            expect(message).toEqual(false);
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

        it('TC-061 Age input field does not accept space', function () {
            $(sel.age).setValue(age.space);
            let res = $(sel.age).getValue();
            let ageError = $(sel.ageFieldErrorMessage);
            ageError.waitForDisplayed({ timeout: 3000 });
            let textageError = $(sel.ageFieldErrorMessage).getText()
            expect(textageError).toEqual(age.errorText);
        });

        it('TC-062 If click spin up  in Age input field "1" appears', function () {
            $(sel.age).click();
            $(sel.spinUPButton).click();
            let result = $(sel.age).getValue();
            expect(result).toEqual(age.one);
        });

        it('TC-063 If click 1 in Age input field 2  appears', function () {
            $(sel.age).setValue(age.one);
            $(sel.spinUPButton).click();
            let result = $(sel.age).getValue();
            expect(result).toEqual(age.two);
        });
    });

        describe('Negative cases', function () {

            before('Open App', function () {
                browser.url('');
            });

            beforeEach(function () {
                browser.refresh();
            });

         it('TC-065 Age input field doesn\'t accept \'0\' (Submit button isn\'t enable after fields 1 -4', function () {
             $(sel.name).setValue(name.default);
             $$(sel.radioButtons)[gender.she].click();
             $(sel.age).setValue(age.zero);
             $(sel.storyType).click();
             $$(sel.storyList)[story.comedy].click();
             let submitButton = $(sel.submitButton).isEnabled();
             expect(submitButton).toEqual(false);
         });

         it('TC-066 When enter  \'13\' digits  error appears', function () {
             $(sel.age).setValue(age.digits13);
             let result = $(sel.ageFieldErrorMessage).waitForDisplayed({timeout: 3000});
             expect(result).toEqual(true);
         });

         it('TC-067 Age input field doesn\'t accept negative digits', function () {
             $(sel.age).setValue(age.negative);
             let result = $(sel.ageFieldErrorMessage).waitForDisplayed({timeout: 3000});
             expect(result).toEqual(true);
         });

         it('TC-068 Age doesn\'t accept letters', function () {
             $(sel.age).setValue(age.letters);
             let error = $(sel.ageFieldErrorMessage).waitForDisplayed(2000);
             expect(error).toEqual(true);
         });

         it('TC-071 Age input field doesn\'t accept symbols', function () {
             $(sel.age).setValue(age.symbol);
             let result = $(sel.age).getValue();
             expect(result).toEqual("");
         });

         it('TC-073 If enter 12 digits "999999999999" and click spin up, error appears ', function () {
             $(sel.age).setValue(age.digits12);
             browser.pause(3000);
             $(sel.spinUPButton).click();
             browser.pause(3000);
             let message = $(sel.ageFieldErrorMessage).waitForDisplayed(2000);
             expect(message).toEqual(true);
         });

     });
 });
