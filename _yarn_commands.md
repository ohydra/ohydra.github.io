# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### DEPENDE DOS SEGUINTES PROGRAMAS
1. yarn       winget install -e --id Yarn.Yarn
2. node.js    winget install -e --id OpenJS.NodeJS




## Installation

```bash
yarn
```

## Local Development Server for testing

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```







------------------------- PARA NOVO REPO -----------------------------
### necessario so fazer 1 vez

This command generates static content into the `build` directory and can be served using any static contents hosting service.


### criar repo no github e usar os comandos que estao default no repo vazio como os a baixo

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:ohydra/ohydra.github.io.git
git push -u origin main
```




## Criar branch gh-pages
```bash
git checkout --orphan gh-pages
git rm -rf .
echo "# GitHub Pages" > README.md
git add README.md
git commit -m "Initialize gh-pages"
git push origin gh-pages
git checkout main
```



## Deployment
```bash
yarn
yarn build
$env:USE_SSH="true"; yarn deploy
```





---------------- PARA ATUALIZAR REPO EXISTENTE ------------------------

```bash
git add .
git commit -m "mensagem com qqcoisa"
```

```bash
git push -u origin main
```

```bash
yarn
yarn build
$env:USE_SSH="true"; yarn deploy
```










---------------------------------------------
https://www.youtube.com/watch?v=Kv5u3fwJpQA&list=WL