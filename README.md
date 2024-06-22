<<<<<<< HEAD
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



=======
## (i) o objetivo que será abordado no trabalho; 

O objetivo que será tratado nesse trabalho, será o **4°objetivo**, dos objetivos selecionados para um desenvolvimento sustentável no brasil: Educação de qualidade.


## (ii) o problema que será resolvido pela solução de software planejada;

Esse trabalho possuirá como objetivo uma forma de educação, básica e qualidade, de maneira leve e descontraida, aumentando o engajamento e garantam uma completude do ensino primário e secundário livre, equitativo e de qualidade.
**4.1 - Garantir que todas as meninas e meninos completem o ensino primário e secundário livre, equitativo e de qualidade, que conduza a resultados de aprendizagem relevantes e eficazes**

## (iii) o tipo de solução que será desenvolvido;

Será construido um **sistema web** com front e back end, com perguntas e respostas, numa dinâmica de "jogo", para educação infantil.

## (iv) os requisitos funcionais e não funcionais da aplicação;

**Objetivo**: Garantir que todas as crianças completem o ensino primário e secundário de forma gratuita, equitativa e de qualidade, com foco em resultados de aprendizagem relevantes e eficazes.

### Requisitos Funcionais para o Site de Educação Infantil

Funcionalidades:

1. Conteúdo Educacional:

- Atividades Interativas
- Planos de Aula
- Materiais Didáticos

2. Ferramentas de Apoio à Aprendizagem:

- Sistema de Avaliação
- Fórum de Discussões
- Agenda Escolar

3. Acessibilidade e Inclusão

- Design Universal
- Material Didático Adaptado
- Suporte Multiplataforma

4.Segurança e Privacidade

- Proteção de Dados
- Monitoramento e Prevenção

### Requisitos Não Funcionais
1. Desempenho
  - Tempo de Resposta
  - Escalabilidade
  - Disponibilidade
2. Usabilidade
 - Interface Simples e Intuitiva
 - Acessibilidade
 - Responsividade
3. Segurança
 - Segurança da Informação
 - Privacidade
 - Testes de Segurança
4. Manutenção
 -Facilidade de Manutenção
 -Suporte Técnico

## (v) o diagrama de caso de uso da aplicação.

## Diagrama de Casos de Uso para o Site de Educação Infantil

**Objetivo:** Descrever os casos de uso essenciais para o site de educação infantil, ilustrando as interações entre os usuários e o sistema.

**Legenda:**

-   Ator: Representa os usuários do sistema, como crianças, pais, educadores e administradores.
-   Caso de Uso: Descreve uma funcionalidade específica do sistema, iniciada por um evento e finalizada por um resultado.
-   Pré-condição: Detalhes sobre o estado do sistema e do usuário antes do início do caso de uso.
-   Fluxo Principal: Sequência de etapas que o ator executa para concluir o caso de uso.
-   Pós-condição: Detalhes sobre o estado do sistema e do usuário após a conclusão do caso de Uso.
-   Extensão: Representa um caso de uso opcional ou alternativo que se origina de um ponto específico no fluxo principal.
-   Associação: Indica a relação entre casos de uso, como inclusão ou extensão.

**Casos de Uso:**

**1. Criança Acessa Conteúdo Educacional:**

-   **Ator:** Criança
-   **Pré-condição:**
    -   A criança possui acesso à internet e a um dispositivo compatível.
    -   O site está funcionando corretamente.
-   **Fluxo Principal:**
    1.  A criança acessa o site de educação infantil.
    2.  A criança navega pelas diferentes seções do site (atividades, histórias, jogos, etc.).
    3.  A criança seleciona uma atividade, história ou jogo de seu interesse.
    4.  A criança interage com o conteúdo educacional escolhido.
    5.  O sistema fornece feedback à criança sobre seu progresso e desempenho.
-   **Pós-condição:**
    -   A criança aprende e se diverte com o conteúdo educacional.
    -   O sistema registra o progresso da criança nas atividades.

**2. Pai/Responsável Monitora Progresso da Criança:**

-   **Ator:** Pai/Responsável
-   **Pré-condição:**
    -   O pai/responsável possui acesso à internet e a um dispositivo compatível.
    -   O site está funcionando corretamente.
    -   O pai/responsável possui uma conta no site e está logado.
-   **Fluxo Principal:**
    1.  O pai/responsável acessa o site de educação infantil.
    2.  O pai/responsável faz login em sua conta.
    3.  O pai/responsável acessa a seção de acompanhamento do progresso da criança.
    4.  O sistema exibe relatórios sobre o desempenho da criança nas atividades.
    5.  O pai/responsável pode visualizar o histórico de atividades da criança.
-   **Pós-condição:**
    -   O pai/responsável acompanha o desenvolvimento e aprendizagem da criança.
    -   O sistema fornece dados para que o pai/responsável possa acompanhar o progresso da criança.

**3. Educador Utiliza Ferramentas de Apoio à Aprendizagem:**

-   **Ator:** Educador
-   **Pré-condição:**
    -   O educador possui acesso à internet e a um dispositivo compatível.
    -   O site está funcionando corretamente.
    -   O educador possui uma conta no site e está logado.
-   **Fluxo Principal:**
    1.  O educador acessa o site de educação infantil.
    2.  O educador faz login em sua conta.
    3.  O educador acessa a seção de ferramentas de apoio à aprendizagem.
    4.  O educador utiliza as ferramentas para criar planos de aula, avaliar o progresso das crianças e se comunicar com os pais/responsáveis.
    5.  O sistema fornece suporte ao educador em sua prática pedagógica.
-   **Pós-condição:**
    -   O educador utiliza as ferramentas para aprimorar seu trabalho e facilitar a aprendizagem das crianças.
    -   O sistema contribui para o desenvolvimento profissional do educador.

**4. Administrador Gerencia Conteúdo e Ferramentas:**

-   **Ator:** Administrador
-   **Pré-condição:**
    -   O administrador possui acesso à internet e a um dispositivo compatível.
    -   O site está funcionando corretamente.
    -   O administrador possui uma conta no site com privilégios administrativos.
-   **Fluxo Principal:**
    1.  O administrador acessa o site de educação infantil.
    2.  O administrador faz login em sua conta.
    3.  O administrador acessa o painel de administração.
    4.  O administrador gerencia o conteúdo do site, incluindo atividades, histórias, jogos e materiais didáticos.
    5.  O administrador gerencia as ferramentas do site, como sistema de avaliação, fórum de discussões e agenda escolar.
>>>>>>> a38f737599cc293a176df14055c3cbf6049bcc68
