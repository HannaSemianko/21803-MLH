import {name, age, gender, story} from "../../data/testData";
import sel from "../../data/selectors";
import exp from "../../data/expected.json";
import {inputValues4Submit,} from '../../helpers/methods';

describe('Reset button suite', function () {

    before('Open App', function () {
        browser.url('');
    });

    it.only('TC-132 When user click the button, the application shows the main page with clear fields', function () {
        inputValues4Submit(name.default, gender.he, age.one, story.comedy);
        $(sel.tryAgainButton).click();
        browser.pause(3000);

        let nameText = $(sel.name).getText();
        expect(nameText).toEqual("");

        let genderField = $(sel.radioButtons).isSelected();
        expect(genderField).toEqual(false);

        let ageField = $(sel.age).getValue();
        expect(ageField).toEqual("");

        let storyText = $(sel.storyType).getText();
        expect(storyText).toEqual(exp.storyPlaceholder);

        let createBtn = $(sel.submitButton).isEnabled();
        expect(createBtn).toEqual(false);

    });
});
