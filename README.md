# Ecommerce Furniro

Este é um projeto de ecommerce de móveis, onde os usuários podem visualizar, filtrar e ordenar os produtos, adicionar itens ao carrinho e realizar o checkout. O projeto é construído com **React**, **TypeScript**, **Tailwind CSS**. Além disso, utiliza [**ViaCep**](https://viacep.com.br/) para busca de endereço.

## Sumário

- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Funcionalidades](#funcionalidades)
- [Considerações Técnicas](#considerações-técnicas)
  - [Arquitetura do Projeto](#1-arquitetura-do-projeto)
  - [TypeScript para Segurança de Tipos](#2-typescript-para-segurança-de-tipos)
  - [Estilização com Tailwind CSS](#3-estilização-com-tailwind-css)
  - [Servidor JSON como Back-End Simulado](#4-servidor-json-como-back-end-simulado)
  - [Autenticação do Usuário com Clerk](#5-autenticação-do-usuário-com-clerk)
- [Autora](#autora)

## Tecnologias

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/SabrinaZ8/e-commerce-challenger3.git
2. Navegue até o diretório do projeto:
   ```bash
   cd e-commerce-challenger3
3. Instale as dependências:
   ```bash
   npm install
4. Inicie o servidor json-server (simula um backend local):
   ```bash
   npm run db
5. Inicie o aplicativo React:
   ```bash
   npm run dev

## Funcionalidades

- **Exibição de produtos**: Os produtos são exibidos com suas informações.
- **Filtros**: O usuário pode filtrar os produtos por categorias.
- **Ordenação**: O usuário pode ordenar os produtos com base em critérios como preço ou nome.
- **Carrinho de compras**: Os usuários podem adicionar itens ao carrinho e visualizar os produtos selecionados.
- **Checkout**: O processo de checkout permitindo a finalização da compra.
- **Autenticação**: Utiliza o **Cleck** para gerenciamento de login e autenticação de usuários.
- **Busca de endereço**: Utiliza o ViaCep para buscar endereços.

## Considerações Técnicas

### 1. Arquitetura do Projeto
   
- **Separação de Componentes:**
O projeto é estruturado com componentes React modulares e reutilizáveis.
- **Gerenciamento de Estado:**
O gerenciamento de estado do carrinho é feito utilizando o Redux, garantindo que os produtos no carrinho sejam gerenciados de maneira eficiente. A comunicação entre componentes é por meio de actions e reducers.

### 2. TypeScript para Segurança de Tipos
- **Segurança do Código:**
O TypeScript é utilizado para garantir a segurança do código, ajudando a evitar erros comuns de tempo de execução ao fornecer tipagem estática. O uso de interfaces e tipos explícitos para os dados, como produtos, usuários e informações de carrinho, garante que o código seja mais robusto e fácil de manter.
- **Padronização e Manutenção:**
O TypeScript também facilita a padronização do código, permitindo o entendimento de maneira clara dos tipos de dados que cada componente e função espera. Isso melhora a legibilidade do código e promove melhores práticas de desenvolvimento.

### 3. Estilização com Tailwind CSS
- **Produtividade:**
Uso do Tailwind CSS permitindo a estilização dos componentes diretamente no JSX, sem a necessidade de criar classes CSS personalizadas.

### 4. Servidor JSON como Back-End Simulado
- **Simulação para Desenvolvimento Local:**
Para fins de desenvolvimento, o JSON Server foi utilizado como uma API simulada para o uso de dados dos produtos.

### 5. Autenticação do Usuário com Clerk
- **Fluxo de Autenticação Simples:**
A autenticação de usuários é realizada através do Clerk, proporcionando uma solução de login e registro fácil de implementar. Clerk gerencia o ciclo de vida da autenticação, incluindo criação de contas, login e logout, simplificando o fluxo de autenticação para os usuários.
- **Persistência da Sessão:**
A sessão do usuário é gerida automaticamente pelo Clerk, com a persistência da autenticação entre as sessões de navegação. Isso garante que o usuário permaneça autenticado mesmo após recarregar a página, criando uma experiência de uso contínua e sem interrupções.
  

## Autora

<table>
  <tr>
    <td>
      <img width="80px" align="center" src="https://avatars.githubusercontent.com/SabrinaZ8"/>
    </td>
    <td align="left">
      <a href="https://github.com/SabrinaZ8">
         <span><b>Sabrina Souza</b></span>
      </a>
      <br>
    </td>
  </tr>
</table>



