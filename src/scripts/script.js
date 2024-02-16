const spans = document.querySelectorAll('div.tecnologies span');

spans.forEach((element) => {
    element.addEventListener('mouseenter', function () {
        element.classList.remove('is-dark');
        element.classList.add('is-outlined');
        element.classList.add('shadow-pop-tr');
    });
});

spans.forEach((element) => {
    element.addEventListener('mouseleave', function () {
        element.classList.remove('is-outlined');
        element.classList.remove('shadow-pop-tr');
        element.classList.add('is-dark');
    });
});

const projects = document.querySelectorAll('div.project button');

projects.forEach((element) => {
    element.addEventListener('mouseenter', function () {
        element.classList.remove('is-dark');
        element.classList.add('is-outlined');
    });
});


projects.forEach((element) => {
    element.addEventListener('mouseleave', function () {
        element.classList.remove('is-outlined');
        element.classList.add('is-dark');
    });
});

const contacts = document.querySelectorAll('div.contacts button');

contacts.forEach((element) => {
    element.addEventListener('mouseenter', function () {
        element.style.color = '#363636';
    });
});


contacts.forEach((element) => {
    element.addEventListener('mouseleave', function () {
        element.style.color = '#ffffff';
    });
});

// Mudança GitHub
const github = document.querySelector('#github');

github.addEventListener('mouseenter', function () {
    github.innerHTML = '<ion-icon name="logo-github"></ion-icon>&nbsp;Clique para acessar';
});

github.addEventListener('mouseleave', function () {
    github.innerHTML = '<ion-icon name="logo-github"></ion-icon>&nbsp;github.com/ValdiirMartiins';
});

// Mudança Linkedin
const linkedin = document.querySelector('#linkedin');

linkedin.addEventListener('mouseenter', function () {
    linkedin.innerHTML = '<ion-icon name="logo-linkedin"></ion-icon>&nbsp;Clique para acessar';
});

linkedin.addEventListener('mouseleave', function () {
    linkedin.innerHTML = '<ion-icon name="logo-linkedin"></ion-icon>&nbsp;@valdiirmartiins';
});


// Mudança e clique email
const email = document.querySelector('#email');

email.addEventListener('mouseenter', function () {
    email.innerHTML = '<ion-icon name="mail"></ion-icon>&nbsp;Clique para copiar o email';
});

email.addEventListener('click', function () {
    navigator.clipboard.writeText("valdiirmartins2502@gmail.com");
    email.innerHTML = '<ion-icon name="mail"></ion-icon>&nbsp;O email foi copiado';
});


email.addEventListener('mouseleave', function () {
    email.innerHTML = '<ion-icon name="mail"></ion-icon>&nbsp;valdiirmartins2502@gmail.com';
});