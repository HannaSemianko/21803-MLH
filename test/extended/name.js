import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';

describe('Name field suite', function () {

    describe('Positive cases', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
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
    });
});

