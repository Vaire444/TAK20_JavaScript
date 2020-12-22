let phrase = prompt('Sisesta sõna või fraas');

let str = phrase.trim();
let strLowerCase = str.toLowerCase();
let reversed = strLowerCase.split('').reverse().join('');

if (strLowerCase === reversed) {
    console.log('Tegemist on palindroomiga');

} else {
    console.log('Tegemist ei ole palindroomiga');
}
