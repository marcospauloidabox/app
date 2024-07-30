Aqui está o README formatado para facilitar a cópia e colagem:

---

# Sistema de Lista de Produtos

Este projeto é uma aplicação de lista de produtos desenvolvida com Vue.js, incluindo uma interface de usuário para exibição e filtro de produtos, integração com uma API fictícia e uma experiência de usuário responsiva.

## Funcionalidades

- **Listagem de Produtos:** Exibe uma lista de produtos com imagem, nome e preço.
- **Detalhes do Produto:** Modal ou página dedicada com detalhes completos do produto.
- **Filtros de Produtos:** Campo de busca por nome e filtro de faixa de preço.
- **Componentes Reutilizáveis:** Estrutura modular para fácil manutenção.

## Tecnologias Utilizadas

- **Vue.js** para a interface de usuário.
- **Vue Router** para navegação.
- **Vuetify** para componentes UI.
- **Node.js e Express** para a API backend.
- **Docker** para containerização.

## Configuração e Execução

### Pré-requisitos

- Node.js v16 ou superior
- Docker (opcional, mas recomendado para facilitar a configuração)

### Configuração Local

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/your-repo-url.git
   cd your-repo-url
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação no navegador:**

   Acesse `http://localhost:5173` para visualizar a aplicação.

### Execução da API

A API está localizada na pasta `api` e pode ser iniciada de duas maneiras: manualmente ou usando Docker.

#### Iniciar Manualmente

1. **Acesse a pasta da API:**

   ```bash
   cd api
   ```

2. **Instale as dependências da API:**

   ```bash
   npm install
   ```

3. **Inicie a API:**

   ```bash
   npm start
   ```

   A API estará disponível em `http://127.0.0.1:3000`.

#### Iniciar com Docker

1. **Construa e execute o contêiner Docker:**

   ```bash
   docker build -t products-api .
   docker run -p 3000:3000 products-api
   ```

   A API estará disponível em `http://127.0.0.1:3000`.

## Contribuição

Se você deseja contribuir para o projeto, por favor, crie um fork do repositório, faça suas alterações em uma branch separada e envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Sinta-se à vontade para copiar e colar este conteúdo no seu arquivo README.md, ajustando conforme necessário para se adequar ao seu projeto.
