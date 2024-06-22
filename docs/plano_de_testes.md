# Planos de Testes

## Caso de Uso 1: Criança Acessa Conteúdo Educacional

### Caso de Teste 1.1: Carregar Dados Corretamente
- **Pré-condição**: A criança está autenticada e acessa a página de atividades.
- **Passos**: 
  1. A criança acessa a página de atividades.
  2. O sistema carrega as atividades disponíveis do banco de dados.
- **Resultado Esperado**: As atividades são carregadas e exibidas corretamente na página.

### Caso de Teste 1.2: Selecionar Atividade
- **Pré-condição**: A criança está na página de atividades com atividades carregadas.
- **Passos**:
  1. A criança seleciona uma atividade da lista.
  2. O sistema exibe a atividade selecionada para a criança.
- **Resultado Esperado**: A atividade é exibida corretamente para a criança.

### Caso de Teste 1.3: Interagir com a Atividade
- **Pré-condição**: A criança está com uma atividade aberta.
- **Passos**:
  1. A criança interage com a atividade (responde perguntas, joga jogos, etc.).
  2. O sistema registra a interação da criança.
- **Resultado Esperado**: A interação é registrada e feedback é fornecido à criança.

## Caso de Uso 2: Pai/Responsável Monitora Progresso da Criança

### Caso de Teste 2.1: Login no Sistema
- **Pré-condição**: O pai/responsável possui uma conta no site.
- **Passos**:
  1. O pai/responsável acessa a página de login.
  2. O pai/responsável insere suas credenciais e faz login.
- **Resultado Esperado**: O pai/responsável é autenticado e redirecionado para a página de monitoramento.

### Caso de Teste 2.2: Visualizar Relatórios de Progresso
- **Pré-condição**: O pai/responsável está autenticado e acessa a seção de relatórios.
- **Passos**:
  1. O pai/responsável navega até a seção de relatórios de progresso.
  2. O sistema exibe os relatórios de progresso da criança.
- **Resultado Esperado**: Os relatórios são exibidos corretamente, mostrando o progresso da criança.

## Caso de Uso 3: Educador Utiliza Ferramentas de Apoio à Aprendizagem

### Caso de Teste 3.1: Criar Plano de Aula
- **Pré-condição**: O educador está autenticado e acessa a seção de planos de aula.
- **Passos**:
  1. O educador navega até a seção de planos de aula.
  2. O educador cria um novo plano de aula.
- **Resultado Esperado**: O plano de aula é criado e salvo no sistema.

### Caso de Teste 3.2: Avaliar Progresso das Crianças
- **Pré-condição**: O educador está autenticado e acessa a seção de avaliações.
- **Passos**:
  1. O educador navega até a seção de avaliações.
  2. O educador avalia o progresso das crianças.
- **Resultado Esperado**: As avaliações são registradas e armazenadas no sistema.

## Caso de Uso 4: Administrador Gerencia Conteúdo e Ferramentas

### Caso de Teste 4.1: Adicionar Novo Conteúdo
- **Pré-condição**: O administrador está autenticado e acessa o painel de administração.
- **Passos**:
  1. O administrador navega até a seção de gerenciamento de conteúdo.
  2. O administrador adiciona novo conteúdo educacional.
- **Resultado Esperado**: O novo conteúdo é adicionado e está disponível para os usuários.

### Caso de Teste 4.2: Gerenciar Ferramentas do Site
- **Pré-condição**: O administrador está autenticado e acessa o painel de administração.
- **Passos**:
  1. O administrador navega até a seção de gerenciamento de ferramentas.
  2. O administrador faz ajustes nas ferramentas do site (sistema de avaliação, fórum, agenda escolar).
- **Resultado Esperado**: As ferramentas são ajustadas conforme as alterações feitas pelo administrador.
