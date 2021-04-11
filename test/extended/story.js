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

        it('TC-075 The first type of story is Overcoming the Monster', function () {
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

        it('TC-077 The third type of story is Quest', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.quest].click();
            let result = $(sel.storyType).getText();
            expect(result).toEqual('Quest');
        });

        it('TC-078 The fourth type of story is Journey and Return', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.journeyAndReturn].click();
            let result = $(sel.storyType).getText();
            expect(result).toEqual('Journey and Return');
        });

        it('TC-079 The 5 type of story is Rags and Riches', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.ragsAndRiches].click();
            let result = $(sel.storyType).getText();
            expect(result).toEqual('Rags and Riches');
        });


        it('TC-080 The 6th type of story is Tragedy', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.tragedy].click();
            let result = $(sel.storyType).getText();
            expect(result).toEqual('Tragedy');
        });

        it('TC-081 The 7th type of story is Comedy', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let result = $(sel.storyType).getText();
            expect(result).toEqual('Comedy');
        });

        it('TC-082 The chosen value fills the placeholder in', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let nameOfStory = $(sel.storyTypeSelected).getText();
            expect(nameOfStory).toEqual(story.lastStory);
        });

        it('TC-085 User can change the type of the story', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            $(sel.storyType).click();
            $$(sel.storyList)[story.tragedy].click();
            let nameOfStory = $(sel.storyTypeSelected).getText();
            expect(nameOfStory).toEqual('Tragedy');
        });

        it('TC-083 After the value is choosen the dropdown is collapced', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let nameOfStory = $$(sel.storyList)[story.overcomingTheMonster].isClickable();
            expect(nameOfStory).toEqual(false);
        });

    });
});

