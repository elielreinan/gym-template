# 🚀 Viver Bem Fitness

> Aplicativo e página de apresentação da academia Viver Bem Fitness, no bairro do Uruguai, em Salvador. Apresenta modalidades e planos e facilita o contato com a equipe pelo WhatsApp.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-green.svg)
![Versão](https://img.shields.io/badge/vers%C3%A3o-1.0.0-orange.svg)

---

## 📌 Índice

- [Visão Geral](#-visão-geral)
- [Tecnologias](#️-tecnologias)
- [Como Executar](#-como-executar)
- [Conteúdo e Atendimento](#-conteúdo-e-atendimento)
- [GitHub Pages](#-github-pages)
- [Como Contribuir](#-como-contribuir)
- [Licença](#-licença)

---

## 💡 Visão Geral

- ✨ **Modalidades e planos:** informações sobre musculação, Pilates e aulas coletivas, com preços e benefícios.
- ⚡ **Experiência responsiva:** interface para web, Android e iOS, com navegação adaptada para telas menores.
- 💬 **Contato simplificado:** consultas sobre planos, horários e visitas pelo WhatsApp.
- 📍 **Localização:** link para o mapa do bairro Uruguai, em Salvador.

---

## 🛠️ Tecnologias

- [React Native](https://reactnative.dev/) e [React Native Web](https://necolas.github.io/react-native-web/)
- [Expo](https://expo.dev/)
- JavaScript e [Node.js](https://nodejs.org/)
- GitHub Actions e GitHub Pages para publicação da versão web

---

## 🚀 Como Executar

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) com npm
- Para testar no celular, o aplicativo [Expo Go](https://expo.dev/go) ou um ambiente de desenvolvimento Android/iOS configurado

### 🔧 Passo a passo

```bash
# Clone o repositório
git clone https://github.com/elielreinan/gym-template.git

# Acesse a pasta do projeto
cd gym-template

# Instale as dependências
npm install

# Inicie o Expo
npm start
```

No terminal do Expo, pressione `a` para Android, `i` para iOS ou `w` para web. Também é possível executar `npm run android`, `npm run ios` ou `npm run web`.

---

## 📝 Conteúdo e Atendimento

Planos, modalidades e links estão em `src/data/siteContent.js`. As imagens atuais são ilustrativas e devem ser substituídas por fotos autorizadas da academia. Confirme valores e benefícios com a equipe antes da publicação.

Os botões de planos, horários e visitas abrem o WhatsApp; eles não confirmam reservas nem processam pagamentos. Horários, formas de pagamento, endereço completo, equipe e avaliações devem ser adicionados somente com informações confirmadas. O mapa mostra o bairro, não o endereço exato.

A versão web usa `public/index.html` para idioma e metadados. O conteúdo é renderizado no cliente e depende de JavaScript; para SEO mais completo, avalie renderização estática e faça testes após a publicação.

---

## 🌐 GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica pushes em `main` ou `master`. Nas configurações do repositório, em **Settings → Pages → Build and deployment**, selecione **GitHub Actions**. O build ajusta o caminho dos arquivos ao nome do repositório.

Para testar um subcaminho antes de publicar, defina `PAGES_BASE_PATH` e execute `npx expo export --platform web`.

---

## 🤝 Como Contribuir

Crie uma branch para sua alteração, verifique a aplicação nas plataformas afetadas e abra um pull request descrevendo o que mudou.

---

## 📄 Licença

Este repositório ainda não possui uma licença declarada.
