/**
 * SISTEMA DE AUTENTICAÇÃO - LUMINA GRAND HOTEL
 * Centraliza login, logout e verificação de sessão.
 */

// 1. GESTÃO DE INTERFACE (Executa em todas as páginas)
document.addEventListener('DOMContentLoaded', () => {
    const nomeUsuario = localStorage.getItem('usuarioLogado');
    
    // Atualiza a saudação na Home (se o elemento existir)
    const saudacaoHome = document.getElementById('boasVindasNome');
    if (saudacaoHome && nomeUsuario) {
        saudacaoHome.textContent = nomeUsuario;
    }

    // Atualiza o nome no Perfil (se o elemento existir)
    const nomePerfil = document.getElementById('nomePerfil');
    if (nomePerfil) {
        if (!nomeUsuario) {
            window.location.href = 'login.html'; // Proteção de rota
        } else {
            nomePerfil.textContent = nomeUsuario;
        }
    }

    // Gerir visibilidade do formulário de login (apenas na login.html)
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        configurarFormularioLogin(loginForm);
    }
});

// 2. FUNÇÕES CORE
function fazerLogin(email) {
    // Extrai o nome antes do @ (ex: ricardo.oliveira@gmail.com -> Ricardo)
    let nomeRaw = email.split('@')[0].split('.')[0];
    let nomeFormatado = nomeRaw.charAt(0).toUpperCase() + nomeRaw.slice(1);

    localStorage.setItem('usuarioLogado', nomeFormatado);
    localStorage.setItem('emailLogado', email);
    
    // Redireciona para o perfil após sucesso
    window.location.href = 'perfil_client.html';
}

function terminarSessao() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('emailLogado');
    window.location.href = 'index.html';
}

// 3. CONFIGURAÇÃO DO FORMULÁRIO (Event Listeners)
function configurarFormularioLogin(form) {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#password');
    const eyeIcon = document.querySelector('#eyeIcon');

    // Mostrar/Esconder password
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            eyeIcon.classList.toggle('fa-eye');
            eyeIcon.classList.toggle('fa-eye-slash');
        });
    }

    // Capturar o Submit
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento real da página
        const emailValue = document.querySelector('#email').value;
        fazerLogin(emailValue);
    });
}