# Documentação do Projeto - Task Manager API

## 1. Visão Geral
A Task Manager API é uma aplicação web que permite aos usuários gerenciar suas tarefas de forma eficiente. O principal objetivo do projeto é fornecer uma interface de API RESTful para criar, editar, listar e excluir tarefas, permitindo que os usuários mantenham suas atividades organizadas e acessíveis a qualquer momento.

## 2. Setup do Projeto


### 2.1. Pré-requisitos
- **Node.js**: É necessário ter o Node.js instalado. Você pode baixar a versão mais recente em [nodejs.org](https://nodejs.org/).

### 2.2. Instruções de Instalação e Execução
1. Clone o repositório:
   ```bash
   git clone https://github.com/GiovaniSantos9/bckend_task_manager_api.git
   cd task-manager-api
   ```
   
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm start
   npm run watch
   ```

O servidor estará disponível em `http://localhost:3000/api`.


# 3. Estrutura do Projeto - Task Manager API
A estrutura de diretórios do projeto é a seguinte:

```
task-manager-api/
├── controllers/          # Controladores para gerenciar a lógica das rotas
│   ├── tasksController.js  # Controlador para tarefas
│   └── usersController.js  # Controlador para usuários
├── operations/           # Operações para manipulação de dados
│   ├── tasksOperations.js  # Operações relacionadas a tarefas
│   └── usersOperations.js  # Operações relacionadas a usuários
├── routes/               # Definições das rotas da API
│   ├── tasks.js           # Rotas para gerenciamento de tarefas
│   ├── users.js           # Rotas para gerenciamento de usuários
│   └── index.js           # Roteador principal
├── data/                 # Diretório contendo arquivos JSON simulando o banco de dados
│   ├── users.json         # Armazena dados dos usuários
│   └── tasks.json         # Armazena dados das tarefas
├── middleware/           # Middleware para validação e autenticação
│   ├── validateUser.js     # Validação de dados do usuário
│   ├── validateTask.js     # Validação de dados da tarefa
│   ├── errorHandler.js      # Tratamento de erros
│   ├── isAuthenticated.js    # Middleware para verificar se o usuário está autenticado
│   └── isTaskOwner.js       # Middleware para verificar se o usuário é o proprietário da tarefa
├── .env                  # Arquivo de variáveis de ambiente
└── index.js              # Arquivo principal da aplicação
```

## 4. Descrição das Funcionalidades
- **Registro de Usuário**: Permite que novos usuários se registrem na aplicação.
- **Login de Usuário**: Permite que usuários existentes façam login e recebam um token de autenticação.
- **Gerenciamento de Tarefas**: Usuários autenticados podem criar, editar, listar e excluir suas tarefas.
- **Autenticação**: Implementação de segurança nas rotas usando PassportJS.
- **Simulação de Dados**: A aplicação utiliza arquivos JSON para simular o armazenamento de dados.

## 5. Exemplos de Uso da API

### 5.1. Registro de Usuário
**Requisição**:
```http
POST /api/users/register
Content-Type: application/json

{
  "username": "testuser",
  "password": "password123"
}
```

**Resposta**:
```json
{
  "success": true,
  "user": {
    "id": 1,
    "username": "testuser"
  }
}
```

### 5.2. Login de Usuário
**Requisição**:
```http
POST /api/users/login
Content-Type: application/json

{
  "username": "testuser",
  "password": "password123"
}
```

**Resposta**:
```json
{
  "success": true,
  "user": {
    "id": 1,
    "username": "testuser"
  },
  "token": "seu_token_aqui"
}
```

### 5.3. Criação de Tarefa
**Requisição**:
```http
POST /api/tasks/create
Authorization: Bearer {{authToken}}
Content-Type: application/json

{
  "title": "Minha primeira tarefa",
  "description": "Descrição da tarefa."

}
```

**Resposta**:
```json
{
  "success": true,
  "task": {
    "id": 1,
    "title": "Minha primeira tarefa",
    "description": "Descrição da tarefa.",
    "userId": 1
  }
}
```

## 6. Autenticação e Autorização
A API utiliza o PassportJS para proteger rotas através de autenticação baseada em tokens. Após o login, um token JWT é gerado e deve ser incluído no cabeçalho `Authorization` das requisições para rotas protegidas. O token é verificado em cada requisição para garantir que o usuário tenha permissão para acessar os recursos.

## 7. Considerações Finais
- **Melhorias Futuras**: Algumas melhorias que podem ser consideradas incluem a implementação de testes automatizados mais abrangentes e a adição de funcionalidades como lembretes de tarefas.
- **Limitações**: Atualmente, a API não possui um sistema de recuperação de senhas.
- **Dificuldades Encontradas**: Um dos desafios encontrados foi a configuração inicial do ambiente de desenvolvimento, mas a documentação disponível ajudou a superar as dificuldades.
```
