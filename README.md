# Projeto de Educação Infantil

## Visão Geral

Este projeto faz parte do Trabalho Prático (TP2) da disciplina de Engenharia de Software e tem como objetivo desenvolver um sistema de educação infantil baseado no C4 Model. O sistema visa proporcionar uma educação básica e de qualidade de maneira interativa e divertida para crianças, além de oferecer ferramentas de apoio para pais, educadores e administradores.

## Objetivo

Garantir que todas as crianças completem o ensino primário e secundário de forma gratuita, equitativa e de qualidade, com foco em resultados de aprendizagem relevantes e eficazes. Este projeto aborda o 4º Objetivo de Desenvolvimento Sustentável (ODS): Educação de qualidade.

## Problema

O sistema visa fornecer uma forma de educação básica e de qualidade de maneira leve e descontraída, aumentando o engajamento e garantindo a completude do ensino primário e secundário livre, equitativo e de qualidade.

## Solução

O sistema web desenvolvido inclui:
- Um dashboard interativo para crianças com atividades educacionais.
- Ferramentas para pais acompanharem o progresso dos filhos.
- Recursos para educadores criarem e gerenciarem planos de aula.
- Painel administrativo para gerenciar conteúdo e ferramentas do site.

## Arquitetura do Sistema

O sistema foi projetado utilizando o C4 Model, que inclui os seguintes diagramas:
- **Diagrama de Contexto**: Mostra a interação dos diferentes tipos de usuários com o sistema.
- **Diagrama de Container**: Detalha os principais containers do sistema: Frontend, Backend e Banco de Dados.
- **Diagrama de Componentes**: Mostra os componentes internos do backend.

Os diagramas podem ser encontrados na pasta `diagrams/` do repositório.

## Tecnologias Utilizadas

- **Frontend**:
  - React: Biblioteca JavaScript para construção de interfaces de usuário interativas.
  - Bootstrap: Framework CSS para estilização rápida e responsiva.

- **Backend**:
  - Node.js: Ambiente de execução JavaScript para construção de aplicações de rede escaláveis.
  - Express.js: Framework minimalista para criação de APIs robustas e flexíveis.

- **Banco de Dados**:
  - MongoDB: Banco de dados NoSQL para armazenamento flexível e escalável de dados não estruturados.


## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB (versão 4 ou superior)

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu_usuario/Projeto_Educacao_Infantil.git
   cd Projeto_Educacao_Infantil

2. Instale as dependências do backend: 
    ```sh
    cd src/backend
    npm install
3. Instale as dependências do frontend: 
    ```sh
    cd ../frontend
    npm install

### Execute o projeto 

1. Inicie o MongoDB

2. Inicie o backend: 
    ```sh
    cd src/backend
    npm start

3. Inicie o frontend: 
    ```sh
    cd ../frontend
    npm start

4. Acesse o sistema em 'http://localhost:3000'



