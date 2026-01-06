# Gerenciador de Podcasts

API RESTful para gerenciamento de podcasts desenvolvida em Node.js com TypeScript e HTTP Module nativo.

## Descricao

Este projeto implementa uma API completa para gerenciar podcasts, permitindo listar e filtrar episodios de forma simples e eficiente. Desenvolvido durante o bootcamp da DIO, demonstra conhecimento em arquitetura em camadas, TypeScript e boas praticas de desenvolvimento.

## Funcionalidades

- **Listagem de Podcasts**: Retorna todos os podcasts cadastrados
- **Filtro de Podcasts**: Busca podcasts por nome com query strings
- **Busca Especifica**: Endpoint dedicado para busca de podcasts
- **API RESTful**: Segue padrao REST com status codes apropriados
- **TypeScript**: Tipagem forte para maior seguranca
- **Arquitetura em Camadas**: Separacao clara de responsabilidades

## Tecnologias

- Node.js
- TypeScript
- HTTP Module (modulo nativo)
- Arquitetura em Camadas (MVC)

## Estrutura do Projeto

```
gerenciador-podcast/
├── src/
│   ├── server.ts          # Servidor HTTP
│   ├── app.ts             # Request handler principal
│   ├── controllers/       # Logica de requisicoes
│   ├── services/          # Logica de negocio
│   ├── repositories/      # Acesso aos dados
│   ├── models/            # Interfaces e tipos
│   ├── routes/            # Definicao de rotas
│   └── utils/             # Utilitarios (metodos HTTP, status codes)
├── package.json
├── tsconfig.json
└── README.md
```

## Endpoints

### GET /podcasts
Retorna lista completa de podcasts.

**Resposta:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Tech Podcast",
      "description": "Discussoes sobre tecnologia",
      "author": "Dev Team",
      "episodes": []
    }
  ],
  "total": 1
}
```

### GET /podcasts?name=tech
Filtra podcasts por nome.

**Parametros:**
- `name` (string): Nome ou parte do nome do podcast

### GET /podcasts/search?name=podcast
Busca especifica de podcasts.

**Status Codes:**
- `200`: Sucesso na requisicao
- `404`: Rota nao encontrada
- `500`: Erro interno do servidor

## Como Executar

### Instalacao

```bash
npm install
```

### Compilacao TypeScript

```bash
npx tsc
```

### Executar Servidor

```bash
node dist/server.js
```

Ou com variavel de ambiente para porta customizada:

```bash
PORT=4000 node dist/server.js
```

O servidor iniciara na porta 3000 por padrao.

## Arquitetura

### Fluxo de Requisicao

```
Cliente HTTP
    ↓
server.ts (cria servidor HTTP)
    ↓
app.ts (processa requisicao)
    ↓
Routes (valida endpoint)
    ↓
Controllers (handles getPodcast)
    ↓
Services (logica de negocio)
    ↓
Repositories (acesso dados)
    ↓
Models (Podcast, Episode)
    ↓
Response JSON
```

### Camadas

- **HTTP Server**: Modulo nativo Node.js para criar servidor
- **Controllers**: Recebem requisicoes, validam dados, chamam services
- **Services**: Logica de negocio principal
- **Repositories**: Acesso aos dados (em memoria no projeto atual)
- **Models**: Interfaces TypeScript para tipagem
- **Utils**: Enums e constantes (HttpMethod, StatusCodes, Routes)

## Implementacao Completa

Para ver a implementacao completa de todas as camadas, consulte o snippet no Pastebin:
https://pastebin.com/T27pVGHZ

## Autor

Desenvolvido como projeto pratico do bootcamp Mobile Developer da DIO.

## Licenca

MIT
