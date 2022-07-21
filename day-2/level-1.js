const challenge = "30 Days Of JavaScript";

console.log({challenge});

console.log(`Challenge length: ${challenge.length}`);

const upCaseChallenge = challenge.toUpperCase();
const lowCaseChallenge = challenge.toLowerCase();

const nonNumberIdx = challenge.indexOf(challenge.split("").find(c => Number.isNaN(Number(c))));
const firstWordSliced = challenge.substring(nonNumberIdx);
const replaced = challenge.replace("Days Of JavaScript", "");
const includesScript = replaced.includes("Script");

console.log({
    upCaseChallenge,
    lowCaseChallenge,
    firstWordSliced,
    replaced,
    includesScript
});

const stringSplit = challenge.split('');
const listOfCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',').map(x => x.trim());
const replacedWithPython = challenge.replace("JavaScript", "Python");
const charAt15 = challenge.charAt(15);
const firstJIndex = challenge.indexOf("J");
const charAtJ = challenge.charCodeAt(firstJIndex);

console.log({
    stringSplit,
    listOfCompanies,
    replacedWithPython,
    charAt15,
    firstJIndex,
    charAtJ
});


const indexOfA = challenge.indexOf('a');
const lastIndexOfA = challenge.lastIndexOf('a');
const becauseText = 'You cannot end a sentence with because because because is a conjunction';
const indexOfBecause = becauseText.indexOf("because");
const lastIndexOfBecause = becauseText.lastIndexOf("because");
const becauseViaSearch = becauseText.search(/because/);

const trimmed = `  ${challenge}  `.trim();

console.log({
    indexOfA,
    lastIndexOfA,
    indexOfBecause,
    lastIndexOfBecause,
    becauseViaSearch,
    trimmed
});

const isTrueStartsWith = challenge.startsWith("30");
const isTrueEndsWith = challenge.endsWith("Of JavaScript");
const allAs = challenge.match(/a/g).length;
const concatenated = "20 Days of".concat(" JavaScript");
const repeated = challenge.repeat(2);

console.log({
    isTrueEndsWith,
    isTrueStartsWith,
    allAs,
    concatenated,
    repeated
})
