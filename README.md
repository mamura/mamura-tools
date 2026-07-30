# Mamura Tools

Mamura Tools é uma extensão experimental para o VS Code focada em acelerar a criação de componentes React no Explorer.

## Funcionalidade atual

A extensão adiciona o comando:

- Mamura Tools: Criar componente React

Ele pode ser executado:

- a partir do menu de contexto do Explorer em uma pasta;
- pela Command Palette.

Ao executar, a extensão solicita o nome do componente, converte para PascalCase, cria uma pasta com o novo componente e gera quatro arquivos:

- Component.tsx
- Component.test.tsx
- Component.types.ts
- index.ts

## Estrutura gerada

Exemplo para o nome `badge`:

```text
Badge/
├── Badge.tsx
├── Badge.test.tsx
├── Badge.types.ts
└── index.ts
```

## Como executar em desenvolvimento

1. Instale as dependências com `npm install`.
2. Abra a pasta da extensão no VS Code.
3. Pressione `F5` para abrir uma janela de Extension Development Host.
4. Clique com o botão direito em uma pasta no Explorer e escolha `Mamura Tools: Criar componente React`.

## Como testar

Os testes unitários podem ser executados com:

```bash
npm test
```

## Limitações atuais

- A geração é voltada apenas a componentes React simples.
- A extensão não sobrescreve arquivos ou pastas existentes.
- Os templates são strings internas, sem suporte a personalização avançada por enquanto.
