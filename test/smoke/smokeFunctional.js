import sel from '../../data/selectors';
import {name, age, gender, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';


describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
    });


    it('TC-026 Submit button is enable after fields 1 -4 are filled in with valid values', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.she].click();
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let submitButton = $(sel.submitButton).isEnabled();
        expect(submitButton).toEqual(true);
    });

    it('TC-027 User can create a story with valid values', function () {
        browser.refresh();
        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submitButton).click();
        browser.pause(2000);
        let tryAgainButton = $(sel.tryAgainButton).isDisplayed();
        expect(tryAgainButton).toEqual(true);
    });
});
