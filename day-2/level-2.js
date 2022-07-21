const theFollowingStatement = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."

console.log({theFollowingStatement});

const motherTeresaQuote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(`I believe Mother Teresa once said ${motherTeresaQuote}`);

// skipping typeof check because its wrong

let stringFloat = "9.8";
if(parseFloat(stringFloat) !== 10) {
    stringFloat = "10"
}

console.log(parseFloat(stringFloat) === 10);

const onExistsInBoth = "python".includes("on") && "jargon".includes("on");

console.log({onExistsInBoth});

const jargonExists = "I hop this course is not full of jargon".includes("jargon");

console.log({jargonExists});

const randBetween = (start, end) =>
    (Math.random() * (end - start)) + start;

console.log({
    randBetween_0_100: randBetween(0, 100),
    randBetween_50_100: randBetween(50, 100),
    randBetween_0_255: randBetween(0, 255),
});

const word = "JavaScript";
const randChar = word[randBetween(0, word.length-1)];

console.log({
    word,
    randChar
});

console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);
const becauseWord = `You cannot end a sentence with because because because is a conjunction`;
const indexOfBecauseAgain = becauseWord.indexOf("because");
const lengthOf = 7 * 3 + 3; // 7 chars 3 times + 3 spaces
const augmented = `${becauseWord.substring(indexOfBecauseAgain, becauseWord - lengthOf)}${becauseWord.substring(indexOfBecauseAgain + lengthOf)}`;
console.log({augmented});

c
