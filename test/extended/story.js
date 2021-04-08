import sel from "../../data/selectors";
import {name, age, gender, story} from "../../data/testData";
import exp from "../../data/expected.json";

describe('Story field suite', function () {

    describe('Positive cases', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(function () {
            browser.refresh();
        });

        it('TC-074 Placeholder = "Type of the story"', function () {
            const placeholder =  $(sel.placeholderStory).getText();
            expect(placeholder).toEqual(exp.storyPlaceholder);
        });

        it.only('TC-075 The first type of story is Overcoming the Monster', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.overcomingTheMonster].click();
            let result = $(sel.storyType).getText();
            expect(result).toEqual('Overcoming the Monster');
        });


        it('TC-076 The second type of story is Rebirth', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.rebirth].click();
            let result = $(sel.storyType).getText();
            expect(result).toEqual('Rebirth');
        });
    });
});