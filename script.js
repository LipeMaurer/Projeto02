// Adicionando interatividade com JavaScript

// Função para alternar entre um email fictício e real
function toggleEmail() {
    const emailSpan = document.getElementById('email');
    emailSpan.textContent = emailSpan.textContent === 'seu@email.com' ? 'seu_email_real@gmail.com' : 'hautergamesxtreme@gmail.com';
}

// Função para alternar entre um número de telefone fictício e real
function togglePhone() {
    const phoneSpan = document.getElementById('phone');
    phoneSpan.textContent = phoneSpan.textContent === '(xx) xxxxx-xxxx' ? '(xx) xxxxx-xxxx (real)' : '(42) 99925-5783';
}

// Função para alterar o objetivo com uma animação
function changeObjective() {
    const objective = document.getElementById('objective');
    objective.style.color = '#e74c3c'; // Muda a cor do texto
    setTimeout(() => {
        objective.textContent = 'Pretendo ser um ótimo profissional';

        // Reinicia a cor do texto após a animação
        setTimeout(() => {
            objective.style.color = '#333';
        }, 1000);
    }, 500);
}

// Adicionando event listeners para interatividades
document.getElementById('email').addEventListener('click', toggleEmail);
document.getElementById('phone').addEventListener('click', togglePhone);
document.getElementById('objective').addEventListener('click', changeObjective);
w