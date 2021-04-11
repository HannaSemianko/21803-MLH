import sel from '../../data/selectors';
import {name, gender, age, story, image} from '../../data/testData';
import {
    inputValues4,
    makeElVisible
} from '../../helpers/methods';

const path = require('path');

describe('Image suite', function () {

    describe('Positive cases', function () {

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

        it('TC -089 Upload image - User can choose a file on the computer - jpg 2.5Mb', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            const filePath = path.join(__dirname, '../../data/image/jpg2_5MB.jpg');
            makeElVisible($(sel.inputUpload));
            $(sel.inputUpload).waitForDisplayed();
            $(sel.inputUpload).setValue(filePath);
            $(sel.submitButton).click();
        });

        it('TC -091 Upload image - User can choose a file on the computer - png 2.5Mb', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            const filePath = path.join(__dirname, '../../data/image/png2_5MB.png');
            makeElVisible($(sel.inputUpload));
            $(sel.inputUpload).waitForDisplayed();
            $(sel.inputUpload).setValue(filePath);
            $(sel.submitButton).click();
        });

        it('TC-093 User can choose a file on the computer - jpeg (size < 0. 2Mb)', function () {
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
        });

        it('TC -097 Upload image - User can choose a file on the computer - jpg 3.9Mb', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            const filePath = path.join(__dirname, '../../data/image/jpg3_9MB.jpg');
            makeElVisible($(sel.inputUpload));
            $(sel.inputUpload).waitForDisplayed();
            $(sel.inputUpload).setValue(filePath);
            $(sel.submitButton).click();
        });

        it('TC -099 Upload image - User can choose a file on the computer - png 3.9Mb', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            const filePath = path.join(__dirname, '../../data/image/png3_9MB.png');
            const inputUpload = $('.ant-upload input');
            makeElVisible($(sel.inputUpload));
            $(sel.inputUpload).waitForDisplayed();
            $(sel.inputUpload).setValue(filePath);
            $(sel.submitButton).click();
        });
    });

    describe('Negative  cases', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach(() => {
            browser.refresh();
        });

        it('TC - 119 Upload image - User can choose a file on the computer - gif < 1Mb', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            const filePath = path.join(__dirname, '../../data/image/gif_845KB.gif');
            makeElVisible($(sel.inputUpload));
            $(sel.inputUpload).waitForDisplayed();
            $(sel.inputUpload).setValue(filePath);
            let element = $(sel.imageError);
            element.waitForDisplayed();
            let message = element.isDisplayed();
            expect(message).toEqual(true);
        });

        it('TC - 120 Upload image - User can choose a file on the computer - mp4 < 1Mb', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            const filePath = path.join(__dirname, '../../data/image/mp4_180KB.mp4');
            makeElVisible($(sel.inputUpload));
            $(sel.inputUpload).waitForDisplayed();
            $(sel.inputUpload).setValue(filePath);
            let element = $(sel.imageError);
            element.waitForDisplayed();
            let message = element.isDisplayed();
            expect(message).toEqual(true);
        });

        it('TC -121 Upload image - User can choose a file on the computer - tiff 1.1Mb', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            const filePath = path.join(__dirname, '../../data/image/tiff_1MB.tiff');
            makeElVisible($(sel.inputUpload));
            $(sel.inputUpload).waitForDisplayed();
            $(sel.inputUpload).setValue(filePath);
            let element = $(sel.imageError);
            element.waitForDisplayed();
            let message = element.isDisplayed();
            expect(message).toEqual(true);
        });
    });
});