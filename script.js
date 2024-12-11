const produtosLista = document.getElementById('produtos-lista');
const adminForm = document.getElementById('admin-form');
const loginForm = document.getElementById('login-form');
const adminSection = document.getElementById('admin');
const loginSection = document.getElementById('login');
const adminLink = document.getElementById('admin-link');
const logoutBtn = document.getElementById('logout-btn');

const USERNAME = 'adm';
const PASSWORD = '123';

// Função para carregar produtos do localStorage
function carregarProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.forEach(produto => adicionarProdutoNaLista(produto));
}

// Função para adicionar produto na lista
function adicionarProdutoNaLista(produto) {
    const produtoItem = document.createElement('div');
    produtoItem.classList.add('produto-item');

    produtoItem.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}<br>Preço: R$${produto.preco}</p>
        <p>Postado por: ${produto.adminNome}</p>
        <a href="https://wa.me/${produto.whatsappNumero}?text=${encodeURIComponent(produto.whatsappMensagem)}" target="_blank">
            <button>Comprar via WhatsApp</button>
        </a>
        <button class="remover-btn">Remover</button>
    `;

    produtosLista.appendChild(produtoItem);

    // Adicionar funcionalidade de remoção
    const removerBtn = produtoItem.querySelector('.remover-btn');
    removerBtn.addEventListener('click', function() {
        if (localStorage.getItem('isAdmin') === 'true') {
            produtosLista.removeChild(produtoItem);
            removerProdutoDoStorage(produto.nome);
        } else {
            alert('Você não tem permissão para remover produtos.');
        }
    });
}

// Função para remover produto do localStorage
function removerProdutoDoStorage(nome) {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos = produtos.filter(produto => produto.nome !== nome);
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Função para adicionar produto ao localStorage
function adicionarProdutoAoStorage(produto) {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Carregar produtos ao iniciar
carregarProdutos();

adminLink.addEventListener('click', function(event) {
    event
    event.preventDefault();
    loginSection.style.display = 'block';
    adminSection.style.display = 'none';
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const adminNome = document.getElementById('admin-name').value;

    if (username === USERNAME && password === PASSWORD) {
        alert('Login bem-sucedido!');
        localStorage.setItem('isAdmin', 'true'); // Define o estado de administrador
        localStorage.setItem('adminNome', adminNome); // Armazena o nome do administrador
        loginSection.style.display = 'none';
        adminSection.style.display = 'block';
        carregarProdutos(); // Carrega produtos após login
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
});

adminForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('produto-nome').value;
    const descricao = document.getElementById('produto-descricao').value;
    const preco = document.getElementById('produto-preco').value;
    const whatsappNumero = document.getElementById('whatsapp-numero').value;
    const whatsappMensagem = document.getElementById('whatsapp-mensagem').value;

    const adminNome = localStorage.getItem('adminNome'); // Recupera o nome do administrador

    const produto = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        whatsappNumero: whatsappNumero,
        whatsappMensagem: whatsappMensagem,
        adminNome: adminNome // Adiciona o nome do administrador ao produto
    };

    // Adicionar produto à lista e ao localStorage
    adicionarProdutoNaLista(produto);
    adicionarProdutoAoStorage(produto);

    // Limpar o formulário
    adminForm.reset();
});

// Função de logout
logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('isAdmin'); // Remove o estado de administrador
    localStorage.removeItem('adminNome'); // Remove o nome do administrador
    adminSection.style.display = 'none';
    loginSection.style.display = 'block';
    produtosLista.innerHTML = ''; // Limpa a lista de produtos
});

// Verifica se o usuário é um administrador ao carregar a página
if (localStorage.getItem('isAdmin') === 'true') {
    adminSection.style.display = 'block';
    loginSection.style.display = 'none';
} else {
    adminSection.style.display = 'none';
    loginSection.style.display = 'block';
}