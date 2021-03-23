// export default
// import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedbak-msg';

const formData = {};

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextareaInput, 200));


form.addEventListener('input', )

populateTextarea()

function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
};

function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, message);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        textarea.value = savedMessage;
    };
};