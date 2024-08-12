<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;
</p>

<div align="center">
<a href="https://ibb.co/JBJdFMk"><img src="https://i.ibb.co/2n46YfK/Captura-de-tela-2024-08-04-203841.png" alt="Captura-de-tela-2024-08-04-203841"/></a>
</div>

## 🚀 Tecnologias

Tecnologias utilizadas durante o projeto:

- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Sass](https://sass-lang.com) 
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)

## ⭐ Conceitos implantados
- [React Hooks](https://medium.com/@AbidKazmi/all-react-hooks-in-one-short-4b0ed4b5a6e4)
- Arquitetura CSS - [BEM](https://desenvolvimentoparaweb.com/css/bem/)
- Consumo de Endpoint com [Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
- Uso de [RegeEx](https://regexr.com)
- Testes Unitários

## 💻 Projeto

O intuito do projeto foi resolver um problema relacionado a falhas de seguranças de um sistema, no qual foi adicionado uma validação de senha (De acordo com critérios exigidos) 😄.

Com isso, foi criado/usados alguns recursos:
- Uso do [Composition Patterns](https://refactoring.guru/design-patterns/composite) para a criação dos componentes com foco em flexibilidade + reutilização e prevenção de [Prop Drilling](https://www.alura.com.br/artigos/prop-drilling-no-react-js) além de responsabilidades separadas, assim facilitando a modificação/manutenção do componente.

- Funções utilitárias:  hasNumbersAdjancents, hasNumbersIsCrescentReducer e validateEmail.

- Criação de um Reducer com uso do useReducer (Hook) para manipulação de vários states de validações (adicionando + removendo validações caso necessário) para a listagem de critérios.

- Uso/Consumo da docs [RegeEx](https://regexr.com) para o uso do Regex para validação de e-mail + Input de password para apenas numbers.

- Criação de custom hook como useFormValidator (Relacionado ao toda a manipulação do formulário) + useValidatorPassword (Validação da senha retornando quais critérios estão corretos).

- Criação de testes unitários para os componentes Button, CriteriaPassword, Field, Message + Snaphosts e de funções utilitárias.
<div align="center">
<a href="https://ibb.co/Wf2468w"><img src="https://i.ibb.co/TtgxkjS/image.png" alt="image" border="0"></a>
</div>

- Criação do fetch já com configurações padrões para o uso geral da aplicação
- Uso do Sass com o uso da metodologia Arquitetura CSS [BEM](https://desenvolvimentoparaweb.com/css/bem/).


## Critérios da senha
- [X] Senhas são números com 6 dígitos.
- [X] A senha deve estar entre 184759-856920.
- [X] Dois dígitos adjacentes devem ser iguais (como 22 em 122346).
- [X] Começando da esquerda para a direita, os dígitos devem apenas crescer em valor ou se manter (como 111237 ou 135678).

## Requisitos
- [X] Crie uma página web em que o usuário possa entrar com os campos nome, email e senha em um formulário e enviar esses dados para uma API especificada mais abaixo.

- [X] O campo Nome é obrigatório, O campo Email é obrigatório, O campo Email deve apenas permitir uma entrada com padrão de email.

- [X] O botão para submeter o formulário deve ficar desabilitado enquanto o mesmo estiver inválido, isto é, enquanto não há um nome, um email válido ou uma senha válida.

- [X] Todos os campos e botão devem ficar desabilitados enquanto estiver mandando o resultado para a api.

- [X] As regras da validação de senha podem ser a qualquer momento modificadas, isto é, novas regras podem ser adicionadas e regras existentes podem ser removidas, portanto construa sua aplicação de uma forma que seja fácil fazer tais alterações no futuro.

- [X] O projeto deve conter testes unitários. Você pode escolher o framework para desenvolvê-los de sua preferência

- [X] O projeto deve usar TypeScript ou ECMA 6+

## Adicionais

- [X] A página ser responsiva. Sua aparência é diferente numa resolução de celular.
- [X] Uso de pré-processador de CSS ou CSS Funcional.
- [X] Funcionamento e apresentação geral da UI/UX

## 😎 Iniciando 

📖 Para rodar o projeto localmente você precisará seguir algumas instruções.

- É necessário que o <a href="https://nodejs.org/en/">NodeJS</a> esteja instalado em sua máquina.
- É necessário utilizar <a href="https://classic.yarnpkg.com/en/">Yarn</a> ou <a href="https://www.npmjs.com/">Npm</a> ou <a href="https://pnpm.io">Pnpm</a> para a instalação de pacotes.

### Instalação
```bash
# Clone o repositório

git clone https://github.com/zbra-repos/larissadantier_2024-08-02.git

# Instale todos os pacotes

- Npm
npm install

- Yarn
yarn install

- Pnpm
pnpm install

Após tudo isso, você está pronto para rodar o projeto, basta inserir o comando:

- Npm
  - Rodar aplicação: npm run dev
  - Rodar os testes unitários: npm test

- Yarn
  - Rodar aplicação: yarn dev
  - Rodar os testes unitários: yarn test

- Pnpm
  - Rodar aplicação: pnpm dev
  - Rodar os testes unitários: pnpm test

Tudo pronto! Agora a sua aplicação vai rodar no localhost:5173! 😄

```
## 👀 Autor
<div align="center">
  <a href="https://app.rocketseat.com.br/me/larissadantier">
   <img align="center" style="border-radius: 100%;" src="https://avatars3.githubusercontent.com/u/61429963?s=400&u=0182f2fa598437842398e2f08f5dc6622df0b432&v=4" width="100px;" alt=""/>
  </a>
</div>
<br/>
<p align="center">Desenvolvido por Larissa Dantier 🚀 </p> 
<p align="center">Entre em contato! 👏 </p>
<div align="center">
<a href="https://www.linkedin.com/in/larissadantier/" target="_blank">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>&nbsp;&nbsp;
 <a href="https://www.instagram.com/larissa.dantier/" target="_blank">
    <img src="https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white" />        
  </a>&nbsp;&nbsp;
 <a href="mailto:larissa_dantier@hotmail.com">
    <img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" />        
  </a>&nbsp;&nbsp; 
</div>
