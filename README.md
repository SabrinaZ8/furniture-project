# Ecommerce Furniro

Este é um projeto de ecommerce de móveis, onde os usuários podem visualizar, filtrar e ordenar os produtos, adicionar itens ao carrinho e realizar o checkout. O projeto é construído com **React**, **TypeScript**, **Tailwind CSS**. Também utiliza **AWS S3** para armazenar as imagens dos produtos.

## Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Amazon S3](https://img.shields.io/badge/Amazon%20S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/SabrinaZ8/e-commerce-challenger3.gi
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

## Características

- **Exibição de produtos**: Os produtos são exibidos com suas informações, incluindo imagens armazenadas na AWS S3.
- **Filtros**: O usuário pode filtrar os produtos por categorias.
- **Ordenação**: O usuário pode ordenar os produtos com base em critérios como preço ou nome.
- **Carrinho de compras**: Os usuários podem adicionar itens ao carrinho e visualizar os produtos selecionados.
- **Checkout**: O processo de checkout permitindo a finalização da compra.
- **Autenticação**: Utiliza o **Cleck** para gerenciamento de login e autenticação de usuários.

## Considerações Técnicas

### 1. Arquitetura do Projeto
   
- **Separação de Componentes:**
O projeto é estruturado com componentes React modulares e reutilizáveis.
- **Gerenciamento de Estado:**
O gerenciamento de estado do carrinho é feito utilizando o Redux, garantindo que os produtos no carrinho sejam gerenciados de maneira eficiente. A comunicação entre componentes é facilitada por meio de actions e reducers.

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

### 6. Integração com AWS S3
- **Armazenamento de Imagens:**
As imagens dos produtos são armazenadas utilizando o AWS S3, garantindo uma solução de armazenamento escalável e segura. O S3 permite que as imagens sejam facilmente acessadas e exibidas na interface do ecommerce, melhorando o desempenho do site ao carregar imagens diretamente da nuvem.


## Links
- [Link para o projeto](http://3.141.200.237:5173/)
- [Link para o Google Drive - Vídeo](https://drive.google.com/your_video_link)

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



