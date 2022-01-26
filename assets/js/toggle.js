//Creating variables for query selectors
const toggleBtn = document.querySelector('#toggle');
const title = document.querySelector('#title');
const cssFile = document.querySelector('#cssFile');
const prompt = document.querySelector('#enterWord');
const inputField = document.querySelector('#input');
const responseField = document.querySelector('#response');

//reassigning values based off if url shortner or word check

const toggleStatus = () => {
    if (title.innerHTML === 'Codely') {
        title.innerHTML = 'Tiny Url';
        cssFile.href = "./assets/css/shorten.css";
        prompt.innerHTML = "Please enter a Url in the box below";
        toggleBtn.innerHTML = 'Switch to Wordly';
    } else {
        title.innerHTML = 'Wordly';
        cssFile.href = './assets/css/word.css';
        prompt.innerHTML = 'Please enter a word in the box below';
        toggle.innerHTML = 'Switch to Codely';
    }
    // Resetting input field
    inputField.value = '';
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    };
};

//Toggle button event handler
toggleBtn.addEventListener("click", toggleStatus);
