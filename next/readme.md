# React Serve Side Render

## Table of Content

- [Introducing](#Introducing)
- [Motivation](#Motivation)
- [Introducing Next.js](#Introducing Next.js)
- [Hello World](#Hello World)
- [Thank You](#Thank You)

**Introducing**

> React é mais conhecido como um framework JavaScript do lado do cliente, mas você sabia que pode (e talvez devesse!) renderizar o React do lado do servidor?

> Nesta palestra, vou conduzi-los através de exemplos de renderização do lado do servidor incluindo a apresentacação de uma case que faz uso de um roadblock comum para aplicativos React que falam com APIs.

**Airform Overview**

Desenvolvi uma aplicação para ter uma case real mendindo a capacidade da ferramenta e o resulto foi incrível.

Para isso criei o Airform:

O Airform oferece a capacidade de criar formulários HTML funcionais sem pensar em servidores.

Mão a obra, por onde começar? Vamos entender como funciona a aplicação: Airform.

**Learning Rendering**

No diagrama podemos visualizar a linha do tempo para mostrar a diferença entre Server-side e Client-side Rendering.

Note, podemos resumir que o maior diferencial está no instant loading.

Over Engineered (robusto) vs Under Engineered ()

**Introducing Next.js**

Não é segredo que criar aplicativos JavaScript em 2018 pode ser bastante desafiador. Felizmente, existem alguns projetos incríveis que simplificam as coisas e ajudam você a produzir mais rapido.

Create React App é um ótimo exemplo.

Mesmo assim, há uma alta curva de aprendizado antes que você possa criar um aplicativo adequado.

Isso porque você precisa aprender sobre o arquitetura, organização de pastas, roteamento no lado do cliente, o layout da página e assim por diante.

Se você deseja executar renderizações do lado do servidor para carregamentos de página mais rápidos, as coisas podem se tornar ainda mais difíceis.

Então, precisamos de algo simples, mas personalizável: Next.js

Next.js é muito simples e efetivo.

Não precisamos nos preocupar com o roteamento, ou se o aplicativo é renderizado no servidor por padrão.

Com Next.js criamos a aplicação com Node.js e React ao mesmo tempo.

Aqui há alguns recursos interessantes que o Next.js traz para a mesa:

-Server-rendered por padrão
-Code Splitting automatico para rapido carregamento das páginas
-Roteamento simples baseado nas página
-Webpack baseado no ambiente de desenvolvimento com suporte Hot Module Replacement (HMR)
-Express, Micro ou qualquer outro servidor HTTP em Node.js
-Personalizável com suas próprias configurações de Babel e Webpack

Parece ótimo, certo? Vamos ver na pratica.

**Hello World**

Execute os seguintes comandos:

// To start, create a sample project by running the following commands:

mkdir hello-next
cd hello-next
npm init -y
npm i react react-dom next
mkdir pages
touch pages/index.js

// On package.json add the following NPM script:

{
"scripts": { "dev": "next" }
}

// On pages/index.js add the following content:

export default () => 'Hello Next.js'

// Now everything is ready. Run the following command to start the dev server:

npm run dev
