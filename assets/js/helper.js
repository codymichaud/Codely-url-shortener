//Formatting Response
const wordResponse = (res) => {
    if (!res) {
        console.log(res.status);
    }
    if (!res.length) {
        responseField.innerHTML = '<p>Try again!</p><p>We could not find any suggestions';
        return;
    }
    //Array for the strings
    let wordArr = [];

    for (let i = 0; i < Math.min(res.length, 10); i++) {
        wordArr.push(`<li>${res[i].word}`);
    }

    wordArr = wordArr.join("");
}