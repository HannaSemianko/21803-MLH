import sel from "../../data/selectors";
import {gender} from "../../data/testData";
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

    });
});