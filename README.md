# Gerenciador de Podcast

Este projeto é um gerenciador de podcasts desenvolvido em Node.js e TypeScript. Ele permite listar e filtrar episódios de podcasts de forma simples e eficiente.

## Funcionalidades
- Listagem de episódios
- Filtro de episódios por critérios
- API RESTful para gerenciamento

## Estrutura do Projeto
```
gerenciador-podcast/
├── package.json
├── tsconfig.json
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── controllers/
│   │   └── podcasts-controller.ts
│   ├── models/
│   │   └── podcast-model.ts
│   ├── repositories/
│   │   ├── podcasts-repository.ts
│   │   └── podcasts.json
│   ├── routes/
│   │   └── routes.ts
│   ├── services/
│   │   ├── filter-episodes-service.ts
│   │   └── list-episodes-service.ts
│   └── utils/
│       ├── http-methods.ts
│       └── status-code.ts
```

## Como executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```

## Requisitos
- Node.js
- npm
- TypeScript

## Autor
- Ygor Roberto Guedes

## Licença
Este projeto está sob a licença MIT.
