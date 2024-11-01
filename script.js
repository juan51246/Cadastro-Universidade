// Após o carregamento da página, adiciona a classe 'visible' ao body
window.onload = function() {
    document.body.classList.add('visible');
};

document.getElementById('telefone').addEventListener('input', function (e) {
    let telefone = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    telefone = telefone.replace(/^(\d{2})(\d)/, '($1)$2'); // Coloca o parêntese em volta do DDD
    telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca o hífen entre o 5º e 6º dígitos
    e.target.value = telefone.substring(0, 14); // Limita a 14 caracteres
});
//Funçao para verificar o login e a senha
function validarLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Credenciais predefinidas
    const usuarioCorreto = "Juan";
    const senhaCorreta = "juan123";

    // Valores inseridos pelo usuário
    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    // Verifica as credenciais
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login bem-sucedido!");
        // Redirecionamento para outra página
        window.location.href = "pagina_protegida.html"; // Substitua pelo destino desejado
    } else {
        alert("Usuário ou senha incorretos!");
    }
}
function login() {
    alert('Login realizado!');
    setTimeout(function(){
        window.location.href = "cadastro.html"; // URL de destino
    }, 3000); // 3000 milissegundos = 3 segundos
}