# Ecommerce Furniro

This is a furniture ecommerce project where users can browse, filter, and sort products, add items to the cart, and complete the checkout process. The project is built with **React**, **TypeScript**, and **Tailwind CSS**. It also uses **AWS S3** to store product images. Additionally, it integrates [**ViaCep**](https://viacep.com.br/) for address lookup.

[Leia em português](README-ptBR.md)

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Features](#features)
- [Technical Considerations](#technical-considerations)
  - [Project Architecture](#1-project-architecture)
  - [TypeScript for Type Safety](#2-typescript-for-type-safety)
  - [Styling with Tailwind CSS](#3-styling-with-tailwind-css)
  - [JSON Server as Simulated Back-End](#4-json-server-as-simulated-back-end)
  - [User Authentication with Clerk](#5-user-authentication-with-clerk)
  - [AWS S3 Integration](#6-aws-s3-integration)
- [EC2 Instance](#ec2-instance)
  - [Technologies Used](#technologies-used)
  - [Links](#links)
- [Author](#author)

## Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Amazon S3](https://img.shields.io/badge/Amazon%20S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## Installation

To run the project locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/SabrinaZ8/e-commerce-challenger3.git
2. Navigate to the project directory:
   ```bash
   cd e-commerce-challenger3
3. Install dependencies:
   ```bash
   npm install
4. start the JSON server (simulates a local backend):
   ```bash
   npm run db
5. Start the React application:
   ```bash
   npm run dev

## Features

- **Product Display**: Products are displayed with their details, including images stored in AWS S3.
- **Filters**: Users can filter products by categories.
- **Sorting**: Users can sort products based on criteria such as price or name.
- **Shopping Cart**: Users can add items to the cart and view the selected products.
- **Checkout**: A checkout process allows users to complete their purchase.
- **Authentication**: Uses **Clerk** for user login and authentication management.
- **Address Lookup**: Utilizes ViaCep for address search.

## Technical Considerations

### 1. Project Architecture

- **Component Separation**:
The project is structured with modular and reusable React components.
- **State Management**:
The shopping cart's state is managed using Redux, ensuring efficient handling of products in the cart. Communication between components is achieved through actions and reducers.

### 2. TypeScript for Type Safety

- **Code Safety**:
TypeScript ensures code safety by helping to prevent common runtime errors through static typing. Using interfaces and explicit types for data such as products, users, and cart information makes the code more robust and maintainable.
- **Standardization and Maintenance**:
TypeScript facilitates code standardization by providing clear definitions of the expected data types for components and functions. This improves code readability and promotes best development practices.

### 3. Styling with Tailwind CSS

- **Productivity**:
Tailwind CSS enables styling components directly in JSX, eliminating the need to create custom CSS classes.

### 4. JSON Server as Simulated Back-End

- **Local Development Simulation**:
For development purposes, JSON Server is used as a simulated API to manage product data.

### 5. User Authentication with Clerk

- **Simple Authentication Flow**:
User authentication is handled with Clerk, providing an easy-to-implement login and registration solution. Clerk manages the authentication lifecycle, including account creation, login, and logout, simplifying the user flow.
- **Session Persistence**:
Clerk automatically manages user sessions, ensuring authentication persists across browser sessions. This provides a seamless and uninterrupted user experience.

### 6. AWS S3 Integration

- **Image Storage**:
Product images are stored using AWS S3, offering a scalable and secure storage solution. S3 allows images to be easily accessed and displayed in the ecommerce interface, improving site performance by loading images directly from the cloud.

## EC2 Instance

To host the React application for this E-commerce, an AWS EC2 instance was used. The application was successfully configured and deployed on the server, accessible via public IP.

### Technologies Used:

- **AWS EC2**: To host and run the application.
- **PuTTY**: To access the EC2 instance terminal via SSH.
- **Linux**: Operating system of the EC2 instance.
- **Nginx**: Used as a web server to manage traffic and route requests.

### Links

- [Google Drive Link - Video](https://drive.google.com/file/d/1HaURkHu1SRDFZgHQK_IrjQAW-mRVvVy_/view?usp=sharing) - Deployment demonstration video on EC2.

## Author

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
