
document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.querySelector('.register');
    const switchFormLinks = document.querySelectorAll('.switch-form');
    const switchFormLinksLog = document.querySelectorAll('.switch-form-log');
    const loginForm = document.querySelector('.loginForm');
    const registerForm = document.querySelector('.registerForm');

    function toggleLoginForm() {
        loginForm.style.display = (loginForm.style.display !== 'block') ? 'block' : 'none';
        registerForm.style.display = 'none';
    }

    function toggleRegisterForm() {
        registerForm.style.display = (registerForm.style.display !== 'block') ? 'block' : 'none';
        loginForm.style.display = 'none';
    }

    registerButton.addEventListener('click', toggleRegisterForm);

    switchFormLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            toggleRegisterForm();
        });
    });

    switchFormLinksLog.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            toggleLoginForm();
        });
    });
});









