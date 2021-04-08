import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
const path = require('path');
describe('Image', function () {
    before('Open App', function () {
        browser.url('');
    });
    beforeEach(() => {
        browser.refresh();
    });
    // SHOW ELEMENT
    function makeElVisible(element) {
        browser.execute(function (el)  {
            el.style.display = '';
        }, element);
    }
    it('TC - 777 Upload image', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.she].click();
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        const filePath = path.join(__dirname, '../../data/image/jpg125KB.jpg');
        const inputUpload = $('.ant-upload input');
        makeElVisible(inputUpload);
        inputUpload.waitForDisplayed();
        inputUpload.setValue(filePath);
        const createBtn = $(sel.submitButton);
        createBtn.click();
        browser.pause(5000);
    });
});