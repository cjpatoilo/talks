# Grunt - The JavaScript task runner

> How our development can become easier and how much time we can save by automating repetitive tasks.

## Automação de Tarefas

Em uma única palavra: automação. Automatizadores de tarefas servem para otimizar o fluxo de trabalho e eles fazem praticamente tudo o que você pode imaginar como implementar, testar, validar, compilar, concatenar, minificar, otimizar. A vantagem disso é que você não precisa utilizar uma ferramenta pra cada uma dessas tarefas.

Quanto menos trabalho você tem que fazer, mais fácil se torna o seu fluxo de trabalho. Depois de configurado, um automatizador de tarefa pode fazer mais do que tarefas repetitivas. Ele pode mudar o jeito como você e sua equipe desenvolve aplicações rapidamente sem perder o foco na qualidade, com esforço basicamente zero. Veremos como o nosso desenvolvimento pode se tornar mais fácil e quanto tempo podemos economizar automatizado tarefas repetitivas.

## História

Ferramentas de automação é o que não falta no mercado atual, desde o Marven e o Ant para Java, o Gradle ou o clássico Make. Mas o Grunt é diferente. Foi feito em JavaScript e com grande foco para automatizar tarefas front-end.

## O Grunt

Na JSConfUS de 2012, Ben Alman "Cowboy" apresentou a primeira versão do Grunt com o intituito de otimizar tarefas triviais. Hoje, grande empresas e Startups fazem uso do Grunt: Adobe, jQuery, Twitter, Mozilla, SauceLabs, Modernizr, Opera, LiveChat, WordPress e Walmart.

## Por onde começar?

O Grunt roda a partir do Terminal (quem tem medo do Terminal?) e precisa do NodeJS e do NPM (Node Package Manager). Como primeiro passo precisamos baixar e instalar o NodeJS com o NPM: http://nodejs.org/download/

## Como funciona?

Para que o Grunt funcione precisamos criar e configurar 2 arquivos na raiz do projeto: package.json e Gruntfile.js. O package.json é um arquivo do NodeJS. Nele haverá informações sobre o projeto como nome, versão e dependências do projeto. O Gruntfile.js é o arquivo de configuração do Grunt. Nele você vai dizer tudo o que o Grunt deve fazer, como fazer e quando fazer.

## Plugins

- **grunt-watch**: Se houver alguma alteracao ele executa outra tarefa.
- **grunt-uglify**: Concatena, minifica e testa a consistencia do JavaScript.
- **grunt-cssmin**: Concatena, minifica e testa a consistencia do CSS.
- **grunt-htmlcompressor**: Concatena e minifica o HTML.
- **grunt-html-validation**: Valida o HTML de acordo com os padrões W3C.
- **grunt-ftp-deploy**: Implantação do código via protocolo FTP.
- **grunt-rsync**: Implantação do código via protocolo SSH.
- **grunt-responsive-images**: Imagens Responsivas.
- **grunt-contrib-imageoptim**: Otimização de Imagens.
- **grunt-concurrent**: Carregamento de Pre-processadores.
- **grunt-newer**: Tarefas serão executadas apenas se houver algum arquivo atualizado.
- **grunt-uncss**: Remove CSS sem uso.

## Finalizando

O que foi mostrado aqui, não é quase nada perto do real poder que uma ferramenta de automação como o Grunt tem para nos oferecer. Agora é com vocês, aprendam a usar os plugins e se divirtam deixando seu desenvolvimento muito mais fácil e ágil.

## Precisando de ajuda?

- **Website**: http://gruntjs.com
- **Github**: Repositório "http://github.com/gruntjs/grunt
- **IRC**: Você pode visitar "#grunt" em "irc.freenode.net".
- **StackOverflow**: Você pode postar dúvidas com a tag "gruntjs".
- **Facebook Groups**: Você pode postar dúvidas e ficar pode dentro das últimas novidades no grupo aberto "Grunt Brasil".

## Referencias

- http://gruntjs.com/
- http://www.youtube.com/watch?v=OF56WFEpAUQ http://blog.henriquesilverio.com/javascript-e-jquery/grunt-js-automatize-tarefas-e-oti mize-o-seu-workflow/
- https://github.com/wpbrasil/odin/wiki/Usando-o-GruntJS
