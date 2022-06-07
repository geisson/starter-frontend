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
- [Stylelint-a11y](https://github.com/YozhikM/stylelint-a11y)
- [Stylelint-scales](https://github.com/signal-noise/stylelint-scales)
- [HTMLHint](https://htmlhint.com/)
- [CommitLint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [Husky](https://typicode.github.io/husky/#/)
- [WebPack](https://webpack.js.org/)

## Instalação

<code> yarn install </code> <br>
Instala as dependências do projeto

<code> yarn prepare </code> <br>
Instala e configura o husk.

## Comandos

<code> yarn start </code> <br>
Inicia o servidor do Webpack e abre o projeto no navegador.

<code> yarn build </code> <br>
Cria a versão de distribuição do projeto, em /dist. <br>
Os arquivos são gerados no modo de produção.

<code> yarn github-page </code> <br>
Cria e envia para o github a branch **github-page**, preparada para se publicar no Github Pages.

<code> yarn commit </code> <br>
Para usar o CommitLint. <br>
Use esse comando ao invés de <code> git commit -m 'message'</code>.

## Configurações

### Stylelint, Stylelint-a11y, Stylelint-scales

Lint do Css e Scss.<br>
Aquivo de configuração: **.stylelintrc**

### Htmlhint

Lint do HTML. <br>
Arquivo de configuração: **.htmlhintrc**

### Eslint

Lint JavaScript e Typescript. <br>
Arquivo de configuração: **.estlintrc.json**

### Commitlint

Lint commits. <br>
Arquivo de configuração: **commitlint.config.js**

### Webpack

Empacotador do projeto. <br>
Arquivo de configuração: **webpack.config.js**

## Extensões para VScode

- [VS Code - ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VS Code - Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [VS Code - HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)
- [VS Code - Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [VS Code - Format Code Action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action)

**Importante**: configure corretamente cada extensão.
Minhas configurações do VSCode estão no arquivo: [settings.json](https://github.com/geisson/starter-frontend/blob/main/vscode%20-%20settings.json)

---

### Desenvolvimento: [Geisson Iuri](mailto:geissoniuri@gmail.com) | [Página do projeto](https://geisson.github.io/starter-frontend/)

---

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
