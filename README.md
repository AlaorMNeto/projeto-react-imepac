# Projeto React Native - IMEPAC

Aplicação mobile desenvolvida para a disciplina de Desenvolvimento de Dispositivos Móveis.

O objetivo do aplicativo é permitir que o usuário organize tarefas de estudo, acompanhe metas e receba frases motivacionais para manter a produtividade durante a rotina acadêmica.

## Tecnologias
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- React Native
- Expo
- TypeScript
- React Navigation
- Material Icons

## Funcionalidades
- Login
- Cadastro
- Home

## Primeira etapa do projeto

Na primeira etapa do desenvolvimento foram implementadas as telas iniciais da aplicação, responsáveis pela navegação básica e acesso do usuário ao sistema.

As telas desenvolvidas foram:

## 1.1 🔐 Tela de Login

A tela de Login permite que o usuário acesse o aplicativo utilizando seu e-mail e senha.

Funcionalidades principais:

- Campos para inserção de e-mail e senha
- Ícones para melhorar a experiência visual
- Botão de acesso ao sistema
- Link para redirecionamento para a tela de cadastro

# 1.2 📝 Tela de Cadastro

A tela de Cadastro permite que novos usuários criem uma conta dentro do aplicativo.

Funcionalidades principais:

- Formulário para cadastro de usuário
- Campos para nome, e-mail e senha
- Interface simples e organizada
- Navegação para retorno à tela de login

# 1.3 🏠 Tela Home (Dashboard)

A tela Home funciona como o painel principal do aplicativo.

Nesta tela o usuário encontra uma breve descrição do objetivo do StudyTrack e acesso rápido às funcionalidades principais através de cards interativos.

Elementos presentes na tela:

- Logo do app (StudyTrack)
- Texto explicativo sobre o propósito do app
- Cards de navegação para funcionalidades futuras

Cards disponíveis:
- 📚 Minhas Tarefas – acesso à lista de tarefas de estudo
- ➕ Nova Tarefa – cadastro de novas tarefas de estudo
- 💡 Frases Motivacionais – área que exibirá frases motivacionais obtidas por meio de uma API

## 🎨 Interface da aplicação

A interface do aplicativo foi construída com foco em:

- Organização visual
- Facilidade de uso
- Navegação simples e intuitiva
- Utilização de cores suaves (azul claro e branco)
- Uso de ícones para melhorar a experiência do usuário
- Estrutura baseada em cards, padrão comum em aplicações mobile modernas

## Segunda etapa do projeto

Na segunda etapa do desenvolvimento foi criada a funcionalidade de Cadastro de Tarefas, permitindo que o usuário registre atividades acadêmicas dentro do aplicativo.

Essa tela foi desenvolvida utilizando um formulário interativo, permitindo inserir informações importantes sobre cada tarefa.

## 2.1 Tela de Cadastro de Tarefas

A tela Cadastrar Tarefas permite que o usuário registre novas atividades de estudo dentro do aplicativo.

O formulário contém os seguintes campos:

- Nome da tarefa – descrição da atividade que deve ser realizada
- Disciplina – matéria relacionada à tarefa
- Data de entrega – prazo para conclusão da atividade
- Prioridade da tarefa – nível de importância da tarefa (Alta, Média ou Baixa) - em que o usuário pode marcar a prioridade da tarefa como Alta/Média/Baixa.

## Interface da tela

A interface foi projetada seguindo o mesmo padrão visual do restante do aplicativo, garantindo consistência na experiência do usuário.

Elementos utilizados:

- Ícones da biblioteca Material Icons
- Cores organizadas seguindo o padrão visual do StudyTrack
- Estrutura baseada em formulário simples e intuitivo
- Botão de ação para salvar a tarefa

Esses elementos tornam a tela fácil de utilizar e de compreender.

## Funcionamento do formulário

Ao preencher as informações da tarefa e pressionar o botão *Salvar Tarefa*, a aplicação executa uma função responsável por validar os dados inseridos.

Caso os campos estejam preenchidos corretamente, um *alerta é exibido informando que a tarefa foi cadastrada com sucesso*.

Esse comportamento permite demonstrar o funcionamento do formulário dentro da aplicação.

## Boas práticas utilizadas

Durante o desenvolvimento dessa funcionalidade foram aplicadas algumas boas práticas importantes:

- Utilização de TypeScript para tipagem das rotas da aplicação
- Definição do tipo RootStackParamList para controle das telas do aplicativo
- Uso de NativeStackScreenProps para tipagem da navegação entre telas
- Separação do código em arquivos organizados (index.tsx e styles.ts)

Essas práticas tornam o código mais organizado, seguro e fácil de manter.

# Autor

Projeto desenvolvido por Alaor Miranda Neto
Curso de Análise e Desenvolvimento de Sistemas
IMEPAC