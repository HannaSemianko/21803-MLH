import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';

describe('Gender field suite', function () {

    describe('Positive cases', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
        });

        it('TC-044 Button "she" is enabled', function () {
            $$(sel.radioButtons)[gender.she].click();
            let result = $(sel.btnShe).isSelected();
            expect(result).toEqual(true);
        });

        it('TC-045 Button "it" is enabled', function () {
            $$(sel.radioButtons)[gender.it].click();
            let result = $(sel.btnIt).isSelected();
            expect(result).toEqual(true);
        });

        it('TC-047 User can choose only one button at the time: "she"', function () {
            $$(sel.radioButtons)[gender.she].click();
            let result = $$(sel.radioButtons)[gender.he].isSelected() && $$(sel.radioButtons)[gender.it].isSelected();
            expect(result).toEqual(false);
        });
    });
})