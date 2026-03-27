/**
 * SISTEMA DE AUTENTICACIÓN - LUMINA GRAND HOTEL
 */

document.addEventListener('DOMContentLoaded', () => {
    const nomeUsuario = localStorage.getItem('usuarioLogado');
    const emailUsuario = localStorage.getItem('emailLogado');

    /* HOME */
    const saudacaoHome = document.getElementById('boasVindasNome');
    if (saudacaoHome && nomeUsuario) {
        saudacaoHome.textContent = nomeUsuario;
    }

    /* NAV DESKTOP */
    const navLogin = document.querySelector('.nav-login');
    if (navLogin) {
        if (nomeUsuario) {
            navLogin.textContent = 'MI CUENTA';
            navLogin.href = 'perfil_client.html';
        } else {
            navLogin.textContent = 'LOGIN';
            navLogin.href = 'login.html';
        }
    }

    /* NAV MOBILE */
    const navLoginMobile = document.querySelector('.nav-login-mobile');
    if (navLoginMobile) {
        if (nomeUsuario) {
            navLoginMobile.textContent = 'MI CUENTA';
            navLoginMobile.href = 'perfil_client.html';
        } else {
            navLoginMobile.textContent = 'LOGIN';
            navLoginMobile.href = 'login.html';
        }
    }

    /* PERFIL */
    const nomePerfil = document.getElementById('nomePerfil');
    if (nomePerfil) {
        if (!nomeUsuario) {
            window.location.href = 'login.html';
            return;
        } else {
            nomePerfil.textContent = nomeUsuario;
        }
    }

    const nomePerfilInput = document.getElementById('nomePerfilInput');
    if (nomePerfilInput && nomeUsuario) {
        nomePerfilInput.value = nomeUsuario;
    }

    const emailUsuari = document.getElementById('emailUsuari');
    if (emailUsuari && emailUsuario) {
        emailUsuari.value = emailUsuario;
    }

    /* LOGIN FORM */
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        configurarFormularioLogin(loginForm);
    }
});

function fazerLogin(email) {
    let nomeRaw = email.split('@')[0].split('.')[0];
    let nomeFormatado = nomeRaw.charAt(0).toUpperCase() + nomeRaw.slice(1);

    localStorage.setItem('usuarioLogado', nomeFormatado);
    localStorage.setItem('emailLogado', email);

    window.location.href = 'perfil_client.html';
}

function terminarSessao() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('emailLogado');
    window.location.href = 'index.html';
}

function configurarFormularioLogin(form) {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    if (togglePassword && passwordField && eyeIcon) {
        togglePassword.addEventListener('click', () => {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            eyeIcon.classList.toggle('fa-eye');
            eyeIcon.classList.toggle('fa-eye-slash');
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailValue = document.getElementById('email').value;
        fazerLogin(emailValue);
    });
}