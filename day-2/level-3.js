const loveWord = "Love is the best thing in this world. Some found their love and some are still looking for their love.";

const loveTimes = loveWord.match(/love/gi).length;

const becauseTimes = becauseWord.match(/because/g).length;

console.log({
    loveTimes,
    becauseTimes
});

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log({
    cleanedSentence: sentence.replace(/[%$@&#;]/gi, "")
});

const incomeString = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month";

const totalAnnualIncome = incomeString.split(" ").filter(str => !Number.isNaN(Number(str))).map(Number).reduce((sum, el) => sum+el, 0);

console.log({totalAnnualIncome: `${totalAnnualIncome} euro`});