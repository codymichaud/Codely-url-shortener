const byteResponse = (res) => {
    if (res.error) {
        responseField.innerHTML = `<p>Sorry, we could not format your Url. Please try again.`;
    } else {
        responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl}</p>`;

    }
};

const rawByteResponse = (res) => {
    if (res.error) {
        responseField.innerHTML = `<p>Sorry, we could not format your Url. Please try again.`;
    } else {
        let structureRes = JSON.stringify(res).replace(/,/g, ", \n");
        structureRes = `<pre>${structureRes}`;
    }
}
