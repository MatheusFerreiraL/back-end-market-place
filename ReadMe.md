# 💻 Sobre o projeto (estória)

Desenvolver um e-commerce onde vendedores poderão criar seu market place e realizar vendas dentro da plataforma.

---
## [Dashboard] Configuração do Deploy

Na posição de **usuário do sistema**, é possível **acessar o sistema através da internet**, afim de **usá-lo em qualquer dispositivo com acesso a internet**.

**Critérios:**

- O frontend deployado
- O backend e banco de dados deployados
- O frontend e backend integrados

---
## [Dashboard] Home e Menu

Na posição de **usuário**, é possível **visualizar uma tela inicial**, afim de **poder navegar pelo sistema**.

**Critérios:**

- A página funciona em um navegador web padrão
- Qualquer usuário, sem que tenha realizado login, pode navegar pelo sistema
- Esta tela possui uma navbar com as seguintes opções de navegação:
    - ícones de navegação - Caso o usuário esteja deslogado, ao clicar em qualquer atalho da navbar será redirecionado para a tela de login - todos os ícones abaixo obedecem essa regra
        - ícone Meu Carrinho
        - ícone Meus anúncios
        - ícone Usuário
        - Botão de "Quero Vender"
- No centro da exitem cards dos anúncios dos produtos. Ao clicar em cada um dos cards o usuário é direcionado para a tela de detalhamento do produto
- Na parte inferior direta da tela há um contador de páginas. O contador é clicável e direciona o usuário para a página com os cards dos produtos indicados

---
## [Dashboard] Detalhamento do produto

Na posição de **usuário do sistema**, é possível **visualizar todos os detalhes de um produto cadastrado**, a fim de consultar seus dados detalhados.

**Critérios:**

- A página funciona em um navegador web padrão
- Qualquer usuário, sem que tenha realizado login, consegue navegar pelo sistema
- Navbar apenas com atalho para voltar a página anterior, logotipo e usuário
- Ao clicar no card do produto na Home abre-se uma nova página com todos os detalhes do produto clicado
- A página mostra 2 blocos:
    - Um bloco com as informações do produto cadastradas, como título do produto, valor, formas de pagamento, quantidade, cálculo do valor do frete, seguido de dois botões.
        - O primeiro botão de 'Adicionar carrinho'
        - O segundo botão de 'Comprar agora'
    - Outro bloco com a 'Descrição do Produto' conforme informado no momento do cadastro
- Logo abaixo são exibidos, de forma aleatória, outros cards de produtos cadastrados para venda no sistema

---
## [Usuário] Cadastro do usuário

Na posição de **usuário do sistema**, é possível **cadastrar meus dados**, afim de **ter acesso ao sistema**.

**Critérios:**

- O cadastro funciona em formulário web
- Os dados do cadastro são persistentes, de maneira que podem ser consultados em qualquer momento no futuro, até que sejam excluídos
- O usuário pode visualizar sua senha enquanto a escreve (Ex: Material UI Input Adornment)
- A senha do usuário é  persistida utilizando algoritmo de criptografia confiável (hash)
- Campos necessários para o cadastro inicial (* obrigatórios):
    - Nome da loja (*)
    - Email (*)
    - Senha (*)
    - Confirmação de senha (*)
- São informadas mensagens de erro em casos de:
    - Campos obrigatórios em branco
    - E-mail informado já existir cadastrado
- Após realizado o cadastro com sucesso o usuário recebe uma mensagem de confirmação e um botão para ser redirecionado para a página de Login

---
## [Usuário] Login do usuário

Na posição de **usuário**, é possível **realizar login na plataforma**, afim de **acessar o sistema**.

**Critérios:**

- O login do usuário é realizado em formulário web 
- Campos obrigatórios:
    - E-mail
    - Senha
- É possível informar os dados de acesso (e-mail e senha) e então clicar em botão "Entrar" para realização do login
- São informadas mensagens de erro em casos de:
    - Campos obrigatórios em branco
    - E-mail não existe no cadastro
    - Senha incorreta para o e-mail
- É criado token de autenticação após validação dos dados (credenciais) de acesso (e-mail e senha)
- Após realização de login com sucesso, é retornado ao navegador o token de autenticação de forma a ser utilizado em outras funcionalidades que exigem autenticação. O usuário é redirecionado para a home do sistema

---
## [Usuário] Home e Menu

Na posição de **usuário logado no sistema**, é possível **visualizar uma tela inicial**, afim de **poder navegar pelo sistema**.

**Critérios:**

- A página funciona em um navegador web padrão
- Apenas usuários autenticados irão conseguir acessar esta página
- Esta tela possui uma navbar com as seguintes opções de navegação:
    - ícones de navegação:
        - ícone Meu Carrinho
        - ícone Meus anúncios - ao clicar, o usuário é redirecionado para a página de gerenciamento de produto
        - ícone Usuário
    - Botão de "Quero Vender" - ao clicar, o usuário é redirecionado para a tela de cadastro de um novo produto
- No centro da tela existem os cards dos anúncios dos produtos. Ao clicar em cada um dos cards o usuário é direcionado para a tela de detalhamento do produto
- Na parte inferior direta da tela existe um contador de páginas

---
## [Usuário] Meus Produtos

Na posição de **usuário logado no sistema**, é possível **visualizar uma tela de gerenciamento de produto**, afim de **poder navegar pelo sistema**.

**Critérios:**

- A página funciona em um navegador web padrão
- Apenas usuários autenticados irão conseguir acessar esta página
- Esta tela possui uma navbar
- Logo abaixo um bloco com as informações do produto
    - Botão de "Criar Anúncio" - ao clicar, o usuário é redirecionado para a tela de cadastro de um novo produto
- No centro da tela existe uma tabela com as informações dos produtos cadastrados:
    - Nome do produto
    - Quantidade de produto em estoque
    - Quantidade de produtos vendidos
    - Valor unitário do produto
- Cada produto tem o seu CRUD de gerenciamento de estoque
    - ícone de editar - ao clicar o usuário é redirecionado para a página de edição do produto
    - ícone de excluir - ao clicar retorna um modal para confirmação da ação e prevenção de erro - ao confirmar a ação o produto é excluído da lista de produtos cadastrados
- Caso o usuário ainda não tenha realizado nenhuma cadastro de produto, retorna a informação de estoque vazio
- Na parte inferior direta da tela existe um contador de páginas, o contador é clicável e direcionará o usuário para a página com os cards dos produtos indicados

---
## [Usuário] Cadastro de Produto

Na posição de **usuário do sistema**, é possível **cadastrar um novo produto**, afim de acessar suas informações no futuro.

**Critérios:**

- O cadastro funciona em formulário web 
- Para acessar este formulário de cadastro é exigida autenticação
- Os dados do cadastro serão persistidos de maneira que possam ser consultados em qualquer momento no futuro até que sejam excluídos
- Todos os campos de input são necessários e obrigatórios de preenchimento para conclusão do cadastro
- Caso os limites de caracteres sejam ultrapassados, os inputs ficarão em estado de erro
- Usuário poderá adicionar somente uma foto no anúncio
- Depois que todos os campos forem preenchidos e uma imagem anexada, o botão de "Publicar anúncio" ficará ativo para click
- Ao final haverá o botão de 'Cancelar', quando clicado os dados informados pelo usuário serão apagados e o usuário redirecionado para a tela de 'Meus de Produtos'
- Após clicar em “publicar anúncio” será exibido o modal de “anúncio publicado” para informar o êxito na ação

---
## [Usuário] Edição de Produto

Na posição de **usuário do sistema**, é possível **editar as informações de cadastro produto**.

**Critérios:**
- O cadastro funciona em formulário web
- Para acessar este formulário de cadastro é exigida autenticação
- Os dados do cadastro são persistidos de maneira que possam ser consultados em qualquer momento no futuro até que sejam excluídos.
- Todos os campos de input devem vir com as informações de preenchimento
- Caso os limites de caracteres sejam ultrapassados, os inputs ficarão em estado de erro
- Usuário poderá alterar as informações já inputadas e excluir ou incluir outra foto no anúncio
- Quando todos os campos estiverem preenchidos e uma imagem anexada, o botão de "Publicar anúncio" ficará ativo para click
- Ao final haverá o botão de 'Cancelar', quando clicado os dados informados pelo usuário serão apagados e o usuário redirecionado para a tela de 'Meus de Produtos'
    - Prevenção de erro: apresentar modal de confirmação de descarte das alterações caso o usuário não tenha salvo as alterações
- Após clicar em “publicar anúncio” será exibido o modal de “anúncio publicado” para informar o êxito na ação

---
# 🚀 Techs
<div>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<br>

<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
<br>
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<br>
<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=whites" />
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
<br>
<img src="https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white" />

</div>

---
# 👨‍💻 Autor
<a href="https://www.linkedin.com/in/matheusferreiraleandro/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" >
</a>

---

###### tags: `backend` `api` `nodeJs` `restfull`
