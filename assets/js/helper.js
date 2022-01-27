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

    responseField.innerHTML = `<p>Check these words out:</><ol>${wordArr}</ol>`;
    console.log(wordArr);
    return;

};

const renderWordResponse = (res) => {
    let trimResponse = res.slice(0, 10);
    responseField.innerHTML = `<text>${JSON.stringify(trimResponse)}</text>`;
};

const renderJsonResponse = (res) => {
    let rawJson = {};
    for (let key in response) {
        rawJson[key] = response[key];
    }

    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
    responseField.innerHTML = `<pre>${rawJson}</pre>`;
    console.log(rawJson);
};

const byteResponse = (res) => {
    if (res.errors) {
        responseField.innerHTML = `<p>Sorry, we could not format your Url. Please try again.`;
    } else {
        responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl}</p>`;

    }
};

const rawByteResponse = (res) => {
    if (res.errors) {
        responseField.innerHTML = `<p>Sorry, we could not format your Url. Please try again.`;
    } else {
        let structureRes = JSON.stringify(res).replace(/,/g, ", \n");
        structureRes = `<pre>${structureRes}`;
    }
}
