import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import exp from '../../data/expected.json';
import {clearBackspace}  from '../../helpers/methods';

 describe('Name field suite', function () {

    describe('Positive cases', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
        });

        it('TC-028 placeholder = "Hero\'s name"', function () {
         const placeholder =  $(sel.name).getAttribute('placeholder');
         expect(placeholder).toEqual(exp.namePlaceholder);
        });

        it('TC-029 Name field  accept "a" (one symbol) ', () => {
            $(sel.name).setValue(name.oneSymbol);
            const value = $(sel.errorRequired).isDisplayed();
            expect(value).toEqual(false);

        });

        it('TC-030 Name field accepts 70 letters', function () {
            $(sel.name).setValue(name.maxSymbol);
            const value = $(sel.errorRequired).isDisplayed();
            expect(value).toEqual(false);
        });

        it('TC-031 Name field accepts letters', function () {
            $(sel.name).setValue(name.letters);
            const value = $(sel.errorRequired).isDisplayed();
            expect(value).toEqual(false);
        });

        it('TC-032 Name field accepts Lower case/ Upper case', function () {
            $(sel.name).setValue(name.anyLetters);
            const value = $(sel.errorRequired).isDisplayed();
            expect(value).toEqual(false);
        });

        it('TC-033 Name field accepts digits "123456789"', function () {
            $(sel.name).setValue(name.digits);
            const s = $(sel.errorRequired).isDisplayed();
            expect(s).toEqual(false);
        });

        it('TC-034 Name field accepts special symbols', () => {
            $(sel.name).setValue(name.specialSymbol);
            const expected = $(sel.errorRequired).isDisplayed();
            expect(expected).toEqual(false);
        });

        it('TC-035 Name field accepts spaces between letters/ words', () => {
            $(sel.name).setValue(name.nameWithSpaces);
            const expected = $(sel.errorRequired).isDisplayed();
            expect(expected).toEqual(false);
        });

        it('TC-036 Name field accepts Cyrillic characters', () => {
            $(sel.name).setValue(name.cyrillicSymbols);
            const expected = $(sel.errorRequired).isDisplayed();
            expect(expected).toEqual(false);
        });
    });

    describe('Negative  cases', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
        });

        it('TC-038 when enter symbol in input field and delete, input field is empty, error appears', function () {
            $(sel.name).setValue(name.oneSymbol);
            const value = (name.oneSymbol).length;
            clearBackspace(value);
            let messageError = $(sel.errorRequired).waitForDisplayed({timeout:3000});
            expect(messageError).toEqual(true);
        });

        /*
        it('TC-040 Only spaces in the name field', function () {
            $(sel.name).setValue(name.onlySpaces);
            const space = $(sel.errorRequired).isDisplayed();
            expect(space).toEqual(true);
        });
        */


        it('TC-042 Name field accepts 71 symbols', function () {
            $(sel.name).setValue(name.moreMaxSymbol);
            let messageError = $(sel.errorRequired).waitForDisplayed({timeout:3000});
            expect(messageError).toEqual(true);
        });
    });
});

