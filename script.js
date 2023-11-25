
function toggleEmail() {
    const emailSpan = document.getElementById('email');
    emailSpan.textContent = emailSpan.textContent === 'seu@email.com' ? 'email@gmail.com' : 'hautergamesxtreme@gmail.com';
}

function togglePhone() {
    const phoneSpan = document.getElementById('phone');
    phoneSpan.textContent = phoneSpan.textContent === '(xx) xxxxx-xxxx' ? '(xx) xxxxx-xxxx (real)' : '(42) 99925-5783';
}

function changeObjective() {
    const objective = document.getElementById('objective');
    objective.style.color = '#e74c3c';
    setTimeout(() => {
        objective.textContent = 'Pretendo ser um ótimo profissional';

        
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
