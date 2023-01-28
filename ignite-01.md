# NLW 22 (2023)

# Ignite (16 à 20 de jan/2023)

# Aula 01 - Setup

# I INTRODUÇÃO

## 1.1 Ferramentas usadas no Ignite

- NodeJS
- ReactJS + jsx
- Vite
- Prisma
- fastify
- tailwindcss
- cors
- expo
- React Native + jsx + css + flexbox

## 1.2 Projeto

> Projeto:  habits

### 1.2.1 Backend (Server)

### 1.2.2 Frontend (Web)

### 1.2.3 Mobile

# II DESENVOLVIMENTO

### 2.1 Backend (/server) com Nodejs, fastify, cors e zod

> Instalando o ORM prisma e a extensão do prisma no VSC

```zsh
... /server

# prima lib e  cliente
npm install prisma -D
npm install  @prisma/client
npm install @prisma_cli
npm install prisma --save-devc

# iniciando com uma data provider escolhida
npx prisma init --datasource-provider sqlite

# erd
npm install prisma-erd-generator @mermaid-js/mermaid-cli
npx prisma generate

# escolha do provedor
npx prisma init --datasource-provider SQLite

# admin do prisma no browse
npx prisma studio

# atualizar os models
npx prisma migrate dev

# criando o seed
npx prisma db seed
```

- Instalando o ZOD

> zod, usado para validação dentro das rotas

```zsh
npm install zod
```

- Instalando o DAYJS

> lib dayjs, para lidar com as datas

```zsh
npm install dayjs
```

### 2.2 Frontend (/web) com Reactjs e tailwind

- vite

- tailwindcss

- **phosphoricons** disponível em: [https://phosphoricons.com/](https://phosphoricons.com/)

```zsh
 npm i phosphor-react 
```

### 2.3 Mobile (/mobile) com React Native

- Preparando o ambiente

> Docs para instalações do ambiente dev para mobile na [Rocketseat](https://react-native.rocketseat.dev/expo-managed/macos)

> Instalando o EXPO

```zsh
../mobile
npm install -g expo-cli
npx expo -h
npx create-expo-app mobile --templatenpm i
npx expo start --clear

# start do app
yarn start

# fontes
npx expo install expo-font
```

> Instalando o NativeWind

```zsh
../mobile
# usando yarn
yarn add nativewind
yarn add --dev tailwindcss

ou
# usando o npm
npm i nativewind
npm i --dev tailwindcss
npm i tailwindcss --save-dev

# crian o arquivo de configuracao do nativewind
npx tailwindcss init

# watchman 
watchman watch-del-all
watchman shutdown-server

```

## 2.4  Mão na massa

> db
>> SQLite

# III CONCLUSÃO

# IV REFERÊNCIAS

## Comandos no terminal

- Tailwindcss

> instalar as extensão do tailwind e do postcss

```zsh
... /web

# instalando
npm i tailwindcss postcss autoprefixer

# criar os arquivos de configuração do tailwind e do portcss
npm tailwindcss init -p
```

# V ANEXOS

# VI VIDEOS (ACOMPANHAMENTOS)

> Server
> Web
> Mobile

```zsh
 - Tempo 1:52 video 02 - svg
```
