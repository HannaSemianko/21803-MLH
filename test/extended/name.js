import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';
import exp from "../../data/expected.json";

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open App',  function(){
            browser.url('');
        });

        it.only('TC-032 Name field accepts Lower case/ Upper case', function () {
            $(sel.name).setValue(name.anyLetters);
            const value = $(sel.errorRequired).isDisplayed();
            expect(value).toEqual(false);
        });
    });
});