# 🔗 Intelligent Matchmaking AI – MVP

Este projeto é um **MVP (Produto Mínimo Viável)** de um sistema fictício de matchmaking inteligente com IA. Simula um processo de combinação de pessoas utilizando dados mockados de interesses e localização, e uma lógica simples de afinidade.

---

## 🚀 Tecnologias Utilizadas

- **Next.js** – Framework moderno para aplicações React
- **TypeScript** – Segurança de tipos
- **Tailwind CSS** – Estilização rápida e responsiva
- **Shadcn UI** – Componentes reutilizáveis e acessíveis
- **React Hook Form + Zod** – Gerenciamento de formulários com validação simples
- **Framer Motion** – Animações suaves para transições

---

## 📁 Estrutura do Projeto

```
matchmaking-mvp
├── app
│   ├── globals.css           // estilos globais e tokens de design
│   ├── layout.tsx            // layout base da aplicação
│   └── page.tsx              // página principal
├── components
│   ├── match-form.tsx        // formulário com inputs de entrada
│   ├── match-results.tsx     // exibição dos resultados
│   ├── matchmaking-system.tsx// orquestrador do processo de matching
│   └── ui                    // componentes de UI do Shadcn (input, button etc.)
├── lib
│   ├── mock-data.ts          // banco de dados mockado
│   ├── types.ts              // interfaces TypeScript
│   └── utils.ts              // lógica de afinidade
├── public                    // ícones e imagens SVG
└── arquivos de configuração  // eslint, tailwind, tsconfig, etc.
```

---

## ⚙️ Como rodar o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/marcosfaria19/matchmaking-mvp.git
   cd matchmaking-mvp
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:3000` no seu navegador.

---

## ✅ Funcionalidades

- Interface responsiva e amigável
- Formulário com campos: Nome, Área de Interesse e Localização
- Botão “Match!” com estado de carregamento
- Exibição de três possíveis combinações com:
  - Nome
  - Descrição
  - Nível de afinidade (simulado)
- Transições suaves entre estados com animações

---

## 🧠 Decisões de Desenvolvimento

### 1. Arquitetura

- Utilização do App Router do Next.js para simplificar o roteamento
- Separação entre lógica (lib) e apresentação (components)
- Criação de componentes reutilizáveis

### 2. Experiência do Usuário

- Feedback visual com loading e animações
- Validação de formulário com mensagens claras
- Design minimalista adaptado para dispositivos móveis e desktop

### 3. Lógica de Dados

- Base mockada de usuários simulando um "banco de dados"
- Algoritmo de afinidade considerando interesses e localização
- Aleatoriedade incluída para simular comportamento de IA

### 4. Qualidade de Código

- Organização modular
- Padrões de nomenclatura e boas práticas mantidos

---

## 🔧 Melhorias Futuras

Com mais tempo e escopo ampliado, eu consideraria:

### 🧬 Aprimorar o Algoritmo de Matching

- Criar um sistema de pontuação mais realista e adaptativo
- Integrar conceitos de machine learning para sugestões personalizadas

### 💡 UX/UI e Funcionalidades

- Adicionar perfis com avatar e talvez biografia
- Implementação de chat entre usuários compatíveis
- Adicionar o Plugin do Prettier para TailwindCSS
- Switch para dark mode

### 🛠️ Melhorias Técnicas

- Integração com backend real e banco de dados (Ex: MongoDB, PostgreSQL)
- Login, Cadastro e Autenticação para os usuários
- Testes unitários automatizados
