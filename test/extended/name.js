import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';

describe('Required fields and story created', function () {

    describe('Positive cases', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
        });

        it('TC-033 Name field accepts digits "123456789"', function () {
            $(sel.name).setValue(name.digits);
            const s = $(sel.errorRequired).isDisplayed();
            expect(s).toEqual(false);
        });
    });
});

