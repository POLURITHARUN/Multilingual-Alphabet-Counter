

const englishLetters = [
    "A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z"
];
const teluguLetters = [
    "అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ",
    "ఋ", "ౠ", "ఌ", "ౡ", "ఎ", "ఏ",
    "ఐ", "ఒ", "ఓ", "ఔ", "అం", "అః",
    "క", "ఖ", "గ", "ఘ", "ఙ",
    "చ", "ఛ", "జ", "ఝ", "ఞ",
    "ట", "ఠ", "డ", "ఢ", "ణ",
    "త", "థ", "ద", "ధ", "న",
    "ప", "ఫ", "బ", "భ", "మ",
    "య", "ర", "ల", "వ",
    "శ", "ష", "స", "హ",
    "ళ", "క్ష", "ఱ"
];
const hindiLetters = [
    "अ", "आ", "इ", "ई", "उ", "ऊ",
    "ऋ", "ए", "ऐ", "ओ", "औ", "अं", "अः",
    "क", "ख", "ग", "घ", "ङ",
    "च", "छ", "ज", "झ", "ञ",
    "ट", "ठ", "ड", "ढ", "ण",
    "त", "थ", "द", "ध", "न",
    "प", "फ", "ब", "भ", "म",
    "य", "र", "ल", "व",
    "श", "ष", "स", "ह",
    "क्ष", "त्र", "ज्ञ"
];
const alphabets = {
    english: englishLetters,
    telugu: teluguLetters,
    hindi: hindiLetters
};
const indexes = {
    english: 0,
    telugu: 0,
    hindi: 0
};
function changeLetter(language, value) {
    const letters = alphabets[language];
    indexes[language] += value;
    if (indexes[language] < 0) {
        indexes[language] = 0;
    }
    if (indexes[language] >= letters.length) {
        indexes[language] = letters.length - 1;
    }
    updateDisplay(language);
}
function updateDisplay(language) {
    const letters = alphabets[language];
    const index = indexes[language];
    document.getElementById(language + "Letter").textContent =
        letters[index];
    document.getElementById(language + "Count").textContent =
        `${index + 1} / ${letters.length}`;
}
function resetLetter(language) {

    indexes[language] = 0;

    updateDisplay(language);
}
Object.keys(alphabets).forEach(language => {
    updateDisplay(language);
});
