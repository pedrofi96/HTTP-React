# CRUD de Produtos com React

Aplicação web desenvolvida em React para gerenciamento de produtos através de operações CRUD (Create, Read, Update e Delete). O projeto consome uma API REST simulada utilizando JSON Server, permitindo cadastrar, visualizar, editar e remover produtos de forma dinâmica.

## Tecnologias Utilizadas

* React.js
* JavaScript
* HTML5
* CSS3
* React Hooks
* JSON Server
* REST API

## Funcionalidades

### Create (Criar)

* Cadastro de novos produtos através de formulário.

### Read (Ler)

* Listagem de produtos cadastrados.
* Consulta e visualização de informações dos produtos.

### Update (Atualizar)

* Edição de produtos existentes.
* Atualização automática dos dados na interface.

### Delete (Excluir)

* Remoção de produtos cadastrados.
* Atualização da lista em tempo real após exclusão.

## Objetivo do Projeto

Este projeto foi desenvolvido para praticar conceitos fundamentais do desenvolvimento Front-End, incluindo:

* Operações CRUD completas
* Consumo de APIs REST
* 
* Gerenciamento de estado com React Hooks
* Manipulação de formulários
* Integração entre Front-End e Back-End simulado
* Atualização dinâmica da interface

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

ou

```bash
npm i
```

## Executando o Banco de Dados Simulado

O projeto utiliza o JSON Server para simular uma API REST através de um arquivo JSON.

No terminal execute:

```bash
npm run server
```

Este comando iniciará o servidor responsável por armazenar e fornecer os dados utilizados pela aplicação.

## Executando a Aplicação

Abra um novo terminal mantendo o servidor em execução e execute:

```bash
npm start
```

Caso a porta 3000 esteja em uso, o React exibirá a mensagem:

```bash
Would you like to run the app on another port instead? (Y/n)
```

Digite:

```bash
Y
```

e pressione Enter para iniciar a aplicação em uma porta disponível.

## Ordem Correta de Execução

### Terminal 1

```bash
npm run server
```

### Terminal 2

```bash
npm start
```

## Competências Demonstradas

* React.js
* JavaScript ES6+
* CRUD Completo
* React Hooks
* Consumo de API REST
* JSON Server
* Gerenciamento de Estado
* Componentização
* Manipulação de Formulários
* Git e GitHub

## Autor

Pedro Filipe Tavares Baptista
