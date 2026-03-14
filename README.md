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

# 🎨 Interface da Aplicação

A interface do aplicativo foi construída com foco em:

- Organização visual
- Facilidade de uso
- Navegação simples e intuitiva
- Utilização de cores suaves (azul claro e branco)
- Uso de ícones para melhorar a experiência do usuário
- Estrutura baseada em cards, padrão comum em aplicações mobile modernas

## Primeira Etapa do Projeto

Na primeira etapa do desenvolvimento foram implementadas as telas iniciais da aplicação, responsáveis pela navegação básica e acesso do usuário ao sistema.

As telas desenvolvidas foram:

## 1.1 🔐 Tela de Login

A tela de Login permite que o usuário acesse o aplicativo utilizando seu e-mail e senha.

Funcionalidades principais:

- Campos para inserção de e-mail e senha
- Ícones para melhorar a experiência visual
- Botão de acesso ao sistema
- Link para redirecionamento para a tela de cadastro

## 1.2 📝 Tela de Cadastro

A tela de Cadastro permite que novos usuários criem uma conta dentro do aplicativo.

Funcionalidades principais:

- Formulário para cadastro de usuário
- Campos para nome, e-mail e senha
- Interface simples e organizada
- Navegação para retorno à tela de login

## 1.3 🏠 Tela Home (Dashboard)

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

## Segunda Etapa do Projeto

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

## Terceira Etapa do Projeto

Na terceira etapa do desenvolvimento da aplicação *StudyTrack*, foram implementadas as telas responsáveis por exibir e gerenciar as tarefas cadastradas pelos usuários. O objetivo dessa etapa foi permitir a visualização organizada das tarefas e oferecer funcionalidades básicas de interação com cada item.

## 3.1 Lista de Tarefas

A tela *Lista de Tarefas* foi desenvolvida para apresentar todas as tarefas cadastradas pelo usuário em formato de lista. Para isso, foi utilizado o componente FlatList, que permite renderizar os itens de forma eficiente.

Cada tarefa exibida na lista apresenta informações importantes, como:

- Nome da tarefa
- Data de entrega
- Status da tarefa (Pendente ou Concluída)

Além disso, cada item possui botões de ação que permitem ao usuário:

- *Concluir uma tarefa*, alterando seu status para concluída;
- *Editar a tarefa*, redirecionando o usuário para a tela de cadastro com os dados preenchidos;
- *Excluir a tarefa*, removendo-a da lista após confirmação.

As tarefas são armazenadas em um estado (useState) e atualizadas dinamicamente conforme o usuário realiza alguma ação.

## 3.2 Detalhes da Tarefa

A tela *Detalhes da Tarefa* foi criada para exibir informações completas de uma tarefa específica. O acesso a essa tela ocorre quando o usuário toca em um dos itens da lista de tarefas.

Por meio do sistema de navegação da aplicação, os dados da tarefa selecionada são enviados como parâmetro para a tela de detalhes. 

Assim, é possível apresentar informações como:

- Nome da tarefa
- Disciplina associada
- Data de entrega
- Prioridade da tarefa
- Status atual

Essa tela permite que o usuário visualize de forma mais clara as informações da tarefa selecionada, contribuindo para uma melhor organização dos estudos.

## Integração entre telas

A navegação entre as telas foi implementada utilizando o *React Navigation*, permitindo a passagem de parâmetros entre as telas de *Cadastro de Tarefas*, *Lista de Tarefas* e *Detalhes da Tarefa*. Dessa forma, quando uma nova tarefa é criada, ela pode ser enviada para a tela de lista e exibida automaticamente ao usuário.

## Quarta e Última Etapa do Projeto

Na quarta e última etapa do desenvolvimento da aplicação *StudyTrack*, foi criada a tela *Frases Motivacionais*, com o objetivo de oferecer ao usuário mensagens inspiradoras que incentivem a continuidade e a organização dos estudos.

Essa funcionalidade foi implementada utilizando uma *API externa de frases*, permitindo que o aplicativo busque automaticamente uma frase motivacional aleatória sempre que a tela for acessada ou quando o usuário desejar gerar uma nova frase.

## 4.1 Funcionamento da Tela

Ao acessar a tela, o aplicativo realiza uma requisição HTTP para a API *ZenQuotes*, responsável por fornecer frases motivacionais de forma aleatória. Após receber a resposta da API, a aplicação processa os dados retornados e exibe no card da tela:

- A frase motivacional
- O nome do autor da frase

Além disso, foi implementado um processo de *tradução automática para o português*, garantindo que as frases sejam exibidas em um idioma mais acessível ao usuário.

## 4.2 Recursos Implementados

Durante o desenvolvimento dessa tela, foram utilizados diversos conceitos importantes do desenvolvimento mobile com React Native:

- Consumo de API externa utilizando fetch
- Uso de *Hooks do React*, como useState e useEffect
- Controle de *estado de carregamento (Loading)* utilizando ActivityIndicator
- Tratamento de erros para evitar falhas na aplicação
- Tradução automática das frases para o idioma português
- Interface organizada com *card de exibição da frase*
- Botão para gerar uma nova frase motivacional

## 4.3 Experiência do usuário

A interface da tela foi projetada para manter a consistência visual da aplicação, utilizando:

- Cores organizadas e agradáveis
- Navegação simples e intuitiva
- Carregamento visual enquanto a frase é buscada na API

Sempre que o usuário pressiona o botão *"Gerar Nova Frase"*, uma nova frase motivacional é solicitada à API e exibida na tela.

## Conclusão do Projeto

Com a implementação da tela de *Frases Motivacionais*, o aplicativo *StudyTrack* passa a oferecer não apenas ferramentas de organização de tarefas e acompanhamento de estudos, mas também um recurso de incentivo e motivação para o usuário.

Essa funcionalidade encerra a etapa final do desenvolvimento da aplicação, consolidando os conhecimentos aplicados ao longo do projeto, como:

- Criação de interfaces mobile
- Navegação entre telas
- Gerenciamento de estado
- Integração com APIs externas

Assim, o projeto *StudyTrack* foi finalizado com sucesso, apresentando uma aplicação funcional que auxilia estudantes na organização de suas atividades acadêmicas e na manutenção da motivação durante os estudos.

# Autor

Projeto desenvolvido por Alaor Miranda Neto
<p>Curso de Análise e Desenvolvimento de Sistemas</p>
<p>IMEPAC</p>