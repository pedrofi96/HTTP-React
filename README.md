# CRUD de Produtos com React

Aplicação web desenvolvida em React para gerenciamento de produtos através de operações CRUD (Create, Read, Update e Delete). O projeto consome uma API REST simulada utilizando JSON Server, permitindo cadastrar, visualizar, excluir e (em breve) editar produtos de forma dinâmica.

## Tecnologias utilizadas

- React.js
- JavaScript
- HTML5
- CSS3
- React Hooks (hook customizado `useFetch`)
- JSON Server
- REST API

## Funcionalidades

### Create (Criar)

- Cadastro de novos produtos através de formulário (nome e preço).

### Read (Ler)

- Listagem de produtos cadastrados, com indicador de carregamento (`loading`).

### Delete (Excluir)

- Remoção de produtos cadastrados.
- Atualização da lista em tempo real após exclusão.

> A operação de **Update** ainda não está implementada nesta versão — é o próximo passo natural do projeto (reaproveitando a base do hook `useFetch`, que já trata `GET`, `POST` e `DELETE`).

## Hook customizado

Toda a comunicação com a API fica centralizada em `src/hooks/useFetch.js`, que expõe `data`, `loading` e a função `httpConfig` para configurar o método (`POST`/`DELETE`) e o corpo da requisição antes de disparar o fetch.

## Objetivo do projeto

Este projeto foi desenvolvido para praticar conceitos fundamentais do desenvolvimento Front-End, incluindo:

- Operações CRUD com API REST
- Consumo de API REST simulada (JSON Server)
- Gerenciamento de estado com React Hooks
- Manipulação de formulários
- Integração entre front-end e back-end simulado
- Atualização dinâmica da interface

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

## Executando o banco de dados simulado

O projeto utiliza o JSON Server para simular uma API REST a partir do arquivo `data/db.json`.

```bash
npm run server
```

Esse comando inicia o servidor responsável por armazenar e fornecer os dados utilizados pela aplicação (porta padrão `3000`).

## Executando a aplicação

Abra um novo terminal, mantendo o servidor em execução, e rode:

```bash
npm start
```

Caso a porta 3000 já esteja em uso (pelo JSON Server), o React vai sugerir outra porta — digite `Y` e pressione Enter.

## Ordem correta de execução

**Terminal 1**
```bash
npm run server
```

**Terminal 2**
```bash
npm start
```

## Competências demonstradas

- React.js e JavaScript ES6+
- Consumo de API REST com hook customizado
- Gerenciamento de estado
- Componentização
- Manipulação de formulários
- Git e GitHub

## Autor

Pedro Filipe Tavares Baptista — [github.com/pedrofi96](https://github.com/pedrofi96)
