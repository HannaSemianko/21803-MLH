import sel from '../../data/selectors';
import {name, gender, age, story, image} from '../../data/testData';
const path = require('path');

describe('Image', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    it('Placeholder  = "Click or drag and drop"', function () {
        let boxPlaceholder = $(sel.imageBoxPlaceholder).getText();
        expect(boxPlaceholder).toEqual(image.imagePlaceholder)
    });

    // SHOW ELEMENT
    function makeElVisible(element) {
        browser.execute(function (el)  {
            el.style.display = '';
        }, element);
    }
    it('TC -089 Upload image - User can choose a file on the computer - jpg 2.5Mb', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.she].click();
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        const filePath = path.join(__dirname, '../../data/image/jpg2_5MB.jpg');
        const inputUpload = $('.ant-upload input');
        makeElVisible(inputUpload);
        inputUpload.waitForDisplayed();
        inputUpload.setValue(filePath);
        const createBtn = $(sel.submitButton);
        createBtn.click();
        browser.pause(5000);
    });

    it('TC -095 User can choose a file on the computer - png  (size < 0. 2Mb)', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.he].click();
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        const filePath = path.join(__dirname, '../../data/image/png152KB.png');
        const inputUpload = $('.ant-upload input');
        makeElVisible(inputUpload);
        inputUpload.waitForDisplayed();
        inputUpload.setValue(filePath);
        const createBtn = $(sel.submitButton);
        createBtn.click();
        browser.pause(5000);
    });

});