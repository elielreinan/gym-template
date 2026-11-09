# 🚀 Gym Fitness

> Modelo demonstrativo de aplicativo e página para academias, com modalidades, planos e informações personalizáveis para web, Android e iOS.

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

- ✨ **Modalidades e planos:** exemplos de musculação, Pilates e aulas coletivas, com planos personalizáveis.
- ⚡ **Experiência responsiva:** interface para web, Android e iOS, com navegação adaptada para telas menores.
- 💬 **Contato configurável:** botões de WhatsApp e Instagram aparecem após a configuração dos links.
- 📍 **Localização configurável:** endereço e link de mapa podem ser adicionados para cada academia.
- 🎨 **Interações acessíveis:** animações discretas respeitam a preferência do dispositivo por movimento reduzido.

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

O conteúdo atual é demonstrativo: modalidades, planos e benefícios são exemplos, sem preços ou contatos reais. Antes de publicar:

1. Personalize o nome, a identidade visual e os textos, inclusive o FAQ.
2. Em `src/data/siteContent.js`, defina modalidades, planos, benefícios e preços confirmados. Os preços são exibidos em reais por mês, com centavos fixos em `,00`.
3. Configure `WHATSAPP_URL`, `INSTAGRAM_URL`, `ADDRESS` e `MAP_URL` com os dados da academia. Enquanto os links estiverem como `null`, os respectivos botões não aparecem. A assinatura DevReds é independente desses contatos.
4. Substitua as imagens ilustrativas por fotos autorizadas e informe horários, condições e formas de pagamento confirmadas.

Os botões de contato, quando configurados, abrem links externos; eles não confirmam reservas nem processam pagamentos. O FAQ e os demais textos demonstrativos também devem ser atualizados para refletir os serviços realmente oferecidos.

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
