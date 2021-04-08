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

        it('TC-043 Button "he" is enabled', function () {
            $$(sel.radioButtons)[gender.he].click();
            let result = $(sel.btnHe).isSelected();
            expect(result).toEqual(true);
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

        it('TC-046 User can choose only one button at the time: "he"', function () {
            $$(sel.radioButtons)[gender.he].click();
            let result = $$(sel.radioButtons)[gender.she].isSelected() && $$(sel.radioButtons)[gender.it].isSelected();
            expect(result).toEqual(false);
        });

        it('TC-047 User can choose only one button at the time: "she"', function () {
            $$(sel.radioButtons)[gender.she].click();
            let result = $$(sel.radioButtons)[gender.he].isSelected() && $$(sel.radioButtons)[gender.it].isSelected();
            expect(result).toEqual(false);
        });

        it('TC-049 User can switch the option: "he" -> "she"', function () {
            $$(sel.radioButtons)[gender.he].click();
            $$(sel.radioButtons)[gender.she].click();
            let result = $(sel.btnShe).isSelected();
            expect(result).toEqual(true);
        });

        it('TC-050 User can switch the option: "he" -> "it"', function () {
            $$(sel.radioButtons)[gender.he].click();
            $$(sel.radioButtons)[gender.it].click();
            let result = $(sel.btnIt).isSelected();
            expect(result).toEqual(true);
        });

        it('TC-051 User can switch the option: "he" -> "she"', function () {
            $$(sel.radioButtons)[gender.she].click();
            $$(sel.radioButtons)[gender.he].click();
            let result = $(sel.btnHe).isSelected();
            expect(result).toEqual(true);
        });

        it('TC-052 User can switch the option: "she" -> "it"', function () {
            $$(sel.radioButtons)[gender.she].click();
            $$(sel.radioButtons)[gender.it].click();
            let result = $(sel.btnIt).isSelected();
            expect(result).toEqual(true);
        });


        it('TC-054 User can switch the option: "it"  -> "she"', function () {
            $$(sel.radioButtons)[gender.it].click();
            $$(sel.radioButtons)[gender.she].click();
            let result = $(sel.btnShe).isSelected();
            expect(result).toEqual(true);
        });

        describe('Negative cases', function () {

            before('Open App', function () {
                browser.url('');
            });

            beforeEach(function () {
                browser.refresh();
            });

            it('TC-055 No button selected', function () {
                $(sel.name).setValue(name.default);
                $(sel.age).setValue(age.default);
                $(sel.storyType).click();
                $$(sel.storyList)[story.comedy].click();
                let submitButtonDisabled = $(sel.submitButton).isEnabled();
                expect(submitButtonDisabled).toEqual(false);
            });
        });
    });
});