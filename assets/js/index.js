const responseField = document.querySelector('#response');
const inputField = document.querySelector('#input');
const apiKey = '82f3c82177aa447bb9e71bb1f2bb58ee';
const rebrandlyUrl = 'https://api.rebrandly.com/v1/links';

const shortenBtn = document.querySelector('#shorten');

const shortenUrl = async () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({ destination: urlToShorten });

    try {
        const response = await fetch(rebrandlyUrl, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json',
                'apikey': apiKey
            }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            byteResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
        responseField.innerHTML('')
    }
};

const displayShortUrl = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
}

shortenBtn.addEventListener('click', displayShortUrl);