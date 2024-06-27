document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.getElementById('form-container');
    const formIframe = document.getElementById('form-iframe');
    const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfi70__AA5P4rXd78X6yQqs6PW3KWu6bkT3NNFWxTbDTd3Qaw/viewform?embedded=true';

    if (!localStorage.getItem('formLoaded')) {
        formIframe.src = formURL;
        localStorage.setItem('formLoaded', 'true');
    } else {
        formContainer.innerHTML = '<p>You have already accessed the form on this device.</p>';
    }
});
