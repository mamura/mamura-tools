# Mamura Tools

Extensão para Visual Studio Code criada para automatizar tarefas repetitivas no desenvolvimento de aplicações.

## Funcionalidades

### Criar componente React

Cria uma estrutura padronizada de componente React diretamente pelo Explorer do VS Code.

A extensão aceita nomes como:

- `badge`
- `user-avatar`
- `user_avatar`
- `user avatar`
- `UserAvatar`

Todos são convertidos automaticamente para PascalCase.

Exemplo:

```text
Badge/
├── Badge.tsx
├── Badge.test.tsx
├── Badge.types.ts
└── index.ts
```

## Como usar
Abra um projeto React no VS Code.
Clique com o botão direito na pasta em que o componente será criado.
Selecione Mamura Tools: Criar componente React.
Informe o nome do componente.
Confirme a criação.

O comando também está disponível pela Command Palet
```
Mamura Tools: Criar componente React
```

## Desenvolvimento
Instale as dependências:
```bash
npm install
```

Execute as validações
```bash
npm run check-types
npm run lint
npm test
npm run compile
```

Execute a extensão em modo de desenvolvimento:
1. Abra o projeto no VS Code.
2. Pressione F5.
3. Aguarde a abertura da janela Extension Development Host.
4. Abra um projeto React nessa nova janela.
5. Teste o comando pelo Explorer.

## Gerar pacote instalável
```bash
npm run package:vsix
```

O comando gera um arquivo semelhante a: `mamura-tools-0.0.1.vsix`

Instale pelo terminal
```bash
code --install-extension mamura-tools-0.0.1.vsix
```

Ou use a opção Extensions: Install from VSIX... no VS Code.

## Funcionalidades planejadas

Templates React personalizáveis.
Criação de páginas.
Criação de hooks.
Criação de contextos.
Configurações específicas por projeto.
Suporte futuro a Laravel e Symfony.

## Licença

Distribuído sob a licença MIT.