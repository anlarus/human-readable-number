module.exports = function toReadable(number) {
    let group1 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];

    let group2 = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let hundred = "hundred";
    let result, firstWord, secondWord, thirdWord;

    if (!isNaN(+number) && +number >= 0 && +number <= 999) {
        if (number <= 20) {
            group1.forEach((item) => {
                number === group1.indexOf(item) ? (result = item) : result;
            });
        } else if (+number > 20 && +number < 100) {
            if (+number % 10 === 0) {
                group2.forEach((item) => {
                    +number / 10 === group2.indexOf(item)
                        ? (firstWord = item)
                        : firstWord;
                });
                result = `${firstWord}`;
            } else {
                group2.forEach((item) => {
                    Math.floor(+number / 10) === group2.indexOf(item)
                        ? (firstWord = item)
                        : firstWord;
                });
                group1.forEach((item) => {
                    +number % 10 === group1.indexOf(item)
                        ? (secondWord = item)
                        : secondWord;
                });
                result = `${firstWord} ${secondWord}`;
            }
        } else if (+number % 10 === 0) {
            if (+number % 100 === 0) {
                group1.forEach((item) => {
                    +number / 100 === group1.indexOf(item)
                        ? (firstWord = item)
                        : firstWord;
                });
                result = `${firstWord} ${hundred}`;
            } else {
                group1.forEach((item) => {
                    Math.floor(+number / 100) === group1.indexOf(item)
                        ? (firstWord = item)
                        : firstWord;
                });
                group2.forEach((item) => {
                    Math.floor((+number % 100) / 10) === group2.indexOf(item)
                        ? (secondWord = item)
                        : secondWord;
                });
                result = `${firstWord} ${hundred} ${secondWord}`;
            }
        } else {
            if (Math.floor((+number / 10) % 10) === 0) {
                group1.forEach((item) => {
                    Math.floor(+number / 100) === group1.indexOf(item)
                        ? (firstWord = item)
                        : firstWord;
                });
                group1.forEach((item) => {
                    Math.floor(Math.floor(+number % 10) % 10) ===
                    group1.indexOf(item)
                        ? (thirdWord = item)
                        : thirdWord;
                });
                result = `${firstWord} ${hundred} ${thirdWord}`;
            } else {
                if (+number % 100 < 20) {
                    group1.forEach((item) => {
                        Math.floor(+number / 100) === group1.indexOf(item)
                            ? (firstWord = item)
                            : firstWord;
                    });
                    group1.forEach((item) => {
                        +number % 100 === group1.indexOf(item)
                            ? (secondWord = item)
                            : secondWord;
                    });
                    result = `${firstWord} ${hundred} ${secondWord}`;
                } else {
                    group1.forEach((item) => {
                        Math.floor(+number / 100) === group1.indexOf(item)
                            ? (firstWord = item)
                            : firstWord;
                    });
                    group2.forEach((item) => {
                        Math.floor((+number % 100) / 10) ===
                        group2.indexOf(item)
                            ? (secondWord = item)
                            : secondWord;
                    });
                    group1.forEach((item) => {
                        Math.floor(Math.floor(+number % 10) % 10) ===
                        group1.indexOf(item)
                            ? (thirdWord = item)
                            : thirdWord;
                    });

                    result = `${firstWord} ${hundred} ${secondWord} ${thirdWord}`;
                }
            }
        }
    }
    return result;
};
