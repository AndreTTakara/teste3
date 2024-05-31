document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('loginError');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulando uma verificação simples de usuário e senha
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === 'usuario' && password === 'senha') {
            // Redirecionar para a página de sucesso (aqui, apenas exibindo uma mensagem)
            window.alert('Login bem-sucedido!');
            // Você pode redirecionar para outra página usando window.location.href = 'URL_DA_PAGINA';
          window.location.href="/pedro/Principal.html" /*arrumar para tela de cliente amanha */
          
        } else {
            loginError.textContent = 'Usuário ou senha incorretos';
        }
    });
});
