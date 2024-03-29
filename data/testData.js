const name = {
    "default": "LadyBug007",
    "digits": "1234567890",
    "anyLetters": "ABCabc",
    "letters": "zaqwsxcderfvbgtyhnmjukilop",
    "oneSymbol": "a",
    "nameWithSpaces": 'abc abc"/ "  abc abc"/ "abc abc  ',
    "maxSymbol": "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    "moreMaxSymbol": "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwq",
    "specialSymbol": "1(){}[]|`¬¦! \"£$%^&*\"<>:;#~_-+=,@",
    "cyrillicSymbols": "ЯЧСМИТЬБЮфывапролджэёЙЦУКЕНГШЩЗХъ",
    "onlySpaces": "   ",
    "nameTC_125": "LadyBoss",
    "nameTC_126": "Tree",
    "nameTC_127": "BigBoss",
    "nameTC_128": "MissMarple"
}

const gender = {
    "he": 0,
    "she": 1,
    "it": 2,
    "He": "He",
    "It": "It",
    "its": "its",
    "her": "her",
    "his": "his",
    "She": "She"
}

const age = {
    "default": "1234567890",
    "numberWith0": "05",
    "digits12": "999999999999",
    "digits13": "1234567890123",
    "one": "1",
    "two": "2",
    "zero": "0",
    "hundred": "100",
    "symbol": "@",
    "space": "    ",
    "letters": "abc",
    "errorText": "Required",
    "negative": "-5",
    "letterE": "E",
    "eLetter": "e",
    "plus": "+",
    "minus": "-"
}

const story = {
    "overcomingTheMonster": 0,
    "rebirth": 1,
    "quest": 2,
    "journeyAndReturn": 3,
    "ragsAndRiches": 4,
    "tragedy": 5,
    "comedy": 6,
    "lastStory": "Comedy"
}

const image = {
    "imagePlaceholder": "Click or drag and drop",
    "mp4" : '../data/image/mp4_180KB.mp4',
    "tiff": '../data/image/tiff_1MB.tiff',
    "gif": '../data/image/gif_845KB.gif'
}

const testCase129 = {
    "name": name.default,
    "genderClick": gender.it,
    "genderTextLower": gender.It,
    "genderPossessive": gender.its,
    "age": age.digits12,
    "story": story.comedy
}

module.exports = {name, age, gender, story, image, testCase129};
