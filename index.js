const credentials = {
    username: "usuario",
    password: "contraseña"
};

const grades = [
    { subject: "Matemáticas", grade: "A" },
    { subject: "Ciencias", grade: "B" },
    { subject: "Historia", grade: "C" }
];

const loginForm = document.getElementById('login-form');
const gradesContainer = document.getElementById('grades-container');
const errorMessage = document.getElementById('error-message');
const userSpan = document.getElementById('user');
const gradesList = document.getElementById('grades-list');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isValidEmail(username) && username.endsWith('@outlook.com') || username.endsWith('@gmail.com') || username.endsWith('@hotmail.com') || username.endsWith('@')) {
        if (username === credentials.username && password === credentials.password) {
            showGrades(username);
        } else {
            errorMessage.textContent = "Nombre de usuario o contraseña incorrectos.";
        }
    } else {
        errorMessage.textContent = "Correo electrónico no válido.";
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showGrades(username) {
    loginForm.reset();
    errorMessage.textContent = "";
    userSpan.textContent = username;
    
    grades.forEach(grade => {
        const listItem = document.createElement('li');
        listItem.textContent = `${grade.subject}: ${grade.grade}`;
        gradesList.appendChild(listItem);
    });

    loginForm.style.display = 'none';
    gradesContainer.style.display = 'block';
}

function logout() {
    gradesList.innerHTML = "";
    gradesContainer.style.display = 'none';
    loginForm.style.display = 'block';
}
