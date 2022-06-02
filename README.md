# Starter Front-End
O objetivo do starter é fornecer uma base completa e configurada para o desenvolvimento de códigos legíveis e consistentes

## Linguagens suportadas

- Typescript
- Sass
- CSS
- HTML

## Lints e empacotadores

- [Eslint](https://eslint.org/)
- [StyleLint](https://stylelint.io/)
- [HTMLHint](https://htmlhint.com/)
- [CommitLint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [Husky](https://typicode.github.io/husky/#/)
- [WebPack](https://webpack.js.org/)

## Instalação

- <code> yarn install </code>

  Instala as dependências do projeto.

- <code> yarn prepare </code>

  Instala e configura o husk.

## Comandos

- <code> yarn start </code>

  Inicia o servidor do Webpack e abre o projeto no navegador.

- <code> yarn build </code>

  Cria a versão de distribuição do projeto, em /dist.
  Os arquivos são gerados no modo de produção.

- <code> yarn github-page </code>

  Cria e envia para o github a branch __github-page__, preparada para se publicar no Github Pages.

- <code> yarn commit </code>

  Para usar o CommitLint.
  Use esse comando ao invés de <code> git commit -m 'message'</code>.

## Configurações

### Stylelint
Lint do Css e Scss.
Aquivo de configuração: **.stylelintrc**

### Htmlhint
Lint do HTML.
Arquivo de configuração: **.htmlhintrc**

### Eslint
Lint JavaScript e Typescript.
Arquivo de configuração: **.estlintrc.json**

### Commitlint
Lint commits.
Arquivo de configuração: **commitlint.config.js**

### Webpack
Empacotador do projeto.
Arquivo de configuração: **webpack.config.js**

## Extensões para VScode

- [VS Code - ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VS Code - Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [VS Code - HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)
- [VS Code - Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

__Importante__: configure corretamente cada extensão.

---

Desenvolvimento: [Geisson Iuri](mailto:geissoniuri@gmail.com) | [Repositório do projeto](https://github.com/geisson/starter-frontend)



[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
