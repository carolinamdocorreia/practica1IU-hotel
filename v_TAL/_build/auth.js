// Função para simular o login

function fazerLogin(email) {

    // Extrai o nome antes do @ para simular um nome de utilizador

    const nomeUsuario = email.split('@')[0];

    

    // Guarda no navegador que o utilizador está logado

    localStorage.setItem('usuarioLogado', 'true');

    localStorage.setItem('nomeUsuario', nomeUsuario);

    

    // Redireciona para o perfil

    window.location.href = 'perfil_client.html';

}



// Função para verificar o estado do login e atualizar o Header

function atualizarHeader() {

    const logado = localStorage.getItem('usuarioLogado');

    const navDesktop = document.querySelector('.nav-desktop');

    const loginLink = document.querySelector('.nav-login');



    if (logado === 'true' && loginLink) {

        // Substitui o texto "LOGIN" pelo ícone de pessoa

        loginLink.innerHTML = '<i class="fa-solid fa-user-circle"></i> PERFIL';

        loginLink.href = 'perfil.html';

        loginLink.classList.add('perfil-active');

    }

}



// Função para Terminar Sessão

function logout() {

    localStorage.removeItem('usuarioLogado');

    localStorage.removeItem('nomeUsuario');

    localStorage.removeItem('fotoPerfil'); // Remove a foto se houver

    window.location.href = 'index.html';

}



// Executa ao carregar qualquer página

document.addEventListener('DOMContentLoaded', atualizarHeader);

// --- LOGIN ---
function fazerLogin(email) {
    // Simulação de login bem-sucedido (tu podes adaptar para validar com BD)
    const userData = {
        email: email,
        isLogged: true
    };

    // Guardar dados enquanto a sessão estiver ativa
    sessionStorage.setItem("user", JSON.stringify(userData));

    // Redirecionar para a página inicial ou dashboard
    window.location.href = "index.html";
}

// --- VERIFICAR LOGIN NA PÁGINA ---
function verificarLogin() {
    const user = sessionStorage.getItem("user");

    if (user) {
        const dados = JSON.parse(user);
        const loginLink = document.querySelector(".nav-login");

        if (loginLink) {
            loginLink.innerHTML = `<i class="fa-solid fa-user"></i> ${dados.email}`;
            loginLink.href = "#";
        }
    }
}

// --- LOGOUT ---
function fazerLogout() {
    sessionStorage.removeItem("user");
    window.location.href = "index.html";
}