# MSCODEX - Portfólio

Este é um projeto de portfólio simples que permite a administração de produtos, incluindo a adição, remoção e edição de produtos. O sistema é protegido por um login de administrador, onde apenas usuários autenticados podem gerenciar os produtos.

## Aviso Importante


**Este projeto não é recomendado para uso em ambientes de produção.** O código foi desenvolvido para fins educacionais e de estudo. Não possui medidas de segurança adequadas e não deve ser utilizado em aplicações reais que exigem proteção de dados ou segurança. Utilize este código apenas para aprender e entender os conceitos de desenvolvimento web.

## Funcionalidades


- **Área de Administração**: Permite que o administrador adicione, remova e visualize produtos.
- **Login de Administrador**: Apenas usuários com credenciais corretas podem acessar a área de administração.

- **Persistência de Dados**: Os produtos são armazenados no `localStorage`, permitindo que os dados persistam mesmo após a atualização da página.
- **Exibição do Nome do Administrador**: O nome do administrador que adicionou o produto é exibido ao lado de cada produto.

## Tecnologias Utilizadas


- HTML
- CSS

- JavaScript

## Estrutura do Projeto

mscodex-portfolio/
│
├── index.html # Página principal do site
├── style.css # Estilos do site
└── script.js # Lógica do site


## Como Usar


1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/mscodex-portfolio.git
   cd mscodex-portfolio

Abra o arquivo index.html em um navegador da web.

Para acessar a área de administração, clique no link "Admin" e faça login com as seguintes credenciais:

Nome de Usuário: adm
Senha: 123
Nome do Administrador: (insira o nome desejado)
Após o login, você poderá adicionar produtos, visualizar a lista de produtos e removê-los.

Para sair da área de administração, clique no botão "Sair".
