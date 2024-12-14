// Given a sentence where each word is separated by a SPACE, 
// count the number of words which start with a vowel in it. Assume the sentence can be in lower or uppercase



function vowelsCounting(sentence) {
    let vowels = "aeiou";
    let sent = sentence.split(" ");
    let count = 0;

    for (let word of sent) {
        if (vowels.includes(word[0].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(vowelsCounting("Apple orange umbrella"));

