const elements = {
    "header": "h3",
    "instruction": "p",
    "requiredLabel": ".ant-form-item-required",
    "name": "#name",
    "radioButtons": ".ant-radio",
    "btnShe": "input[type='radio'][class='ant-radio-input'][value='she']",
    "btnIt": "input[type='radio'][class='ant-radio-input'][value='it']",
    "btnHe": "input[type='radio'][class='ant-radio-input'][value='he']",
    "radioButtonsLabel": ".ant-radio-wrapper",
    "age": "#age",
    "storyType": ".ant-select-selector",
    "storyList": ".ant-select-item-option-content",
    "storyTypeSelected": ".ant-select-selection-item",
    "placeholderStory": ".ant-select-selection-placeholder",
    "imageLabel": ".ant-form-item-label",
    "image": "span.ant-upload",
    "imageBoxPlaceholder": "span[role='button'] > div > div",
    "submitButton": ".ant-btn",
    "tryAgainButton": ".btn-primary",
    "errorRequired": '//div[contains(@class, "ant-form-item-control")][. //input[@id="name"]]//div[@role="alert"]',
    "ageFieldErrorMessage": "//div[contains(@class, \"ant-form-item-with-help\")][.//input[@id=\"age\"]]//div[@role=\"alert\"]",
    "spinUPButton": ".anticon-up",
    "spinDownButton": ".anticon-down"
}

module.exports = elements;
