# Portfólio — João Pedro Gama Nascimento

Portfólio pessoal com foco em **Dados, BI e desenvolvimento**. Feito com React, TypeScript e Vite, sem framework de CSS.

O conceito visual vem do trabalho no estoque: o elemento principal é uma **etiqueta de estoque** com um código de barras Code 128 de verdade (dá para ler com o celular).

## Como rodar

Precisa do [Node.js](https://nodejs.org) 20 ou mais novo.

```bash
npm install
npm run dev        # abre em http://localhost:5173
```

Outros comandos:

| Comando                | O que faz                                                       |
| ---------------------- | --------------------------------------------------------------- |
| `npm run build`        | Confere os tipos e gera o site estático em `dist/`              |
| `npm run preview`      | Serve o `dist/` localmente para testar o build                  |
| `npm run build:single` | Gera um único `index.html` autocontido em `dist-single/`        |

## Como publicar

### GitHub Pages (recomendado)

1. Crie um repositório público chamado **`Portifolio-joongama`** e envie esta pasta para ele.
2. No repositório, vá em **Settings → Pages → Source** e escolha **GitHub Actions**.
3. Cada `push` na branch `main` roda `.github/workflows/deploy.yml` e publica em `https://joongama.github.io/Portifolio-joongama/`.

O nome do repositório precisa ser exatamente `Portifolio-joongama` (maiúsculas e minúsculas contam). Para usar outro nome, troque `"/Portifolio-joongama/"` em `vite.config.ts` e ajuste as URLs em `index.html`, `public/robots.txt` e `public/sitemap.xml`.

### Vercel ou Netlify

Importe o repositório. Comando de build: `npm run build`. Pasta de saída: `dist`.

## Onde editar o conteúdo

Todo o texto fica em `src/data/`. Os componentes só exibem esses dados.

| Arquivo                  | Conteúdo                                                     |
| ------------------------ | ------------------------------------------------------------ |
| `src/data/profile.ts`    | Nome, contatos, links, resumo da seção Sobre, o que está estudando |
| `src/data/projects.ts`   | Projetos (problema, funcionalidades, stack, links, imagem)   |
| `src/data/skills.ts`     | Tecnologias e onde cada uma foi usada                        |
| `src/data/journey.ts`    | Linha do tempo (trabalho, formação, cursos)                  |

### O que ainda falta preencher

- [ ] **Data do workshop** da Apple Developer Academy (`src/data/journey.ts`, campo `period`). Hoje aparece o aviso “Data a preencher”.
- [ ] **Currículo em PDF**: salve em `public/curriculo.pdf` e mude `resumeUrl` para `"/curriculo.pdf"` em `src/data/profile.ts`. O link aparece sozinho na seção Contato.
- [ ] **Capturas de tela** dos projetos (opcional): salve em `public/projetos/` e preencha `image: { src, alt }` no projeto. Se a imagem falhar, a ilustração técnica aparece no lugar.
- [ ] **URL final**: se mudar o nome do repositório, troque nos arquivos citados acima.
- [ ] **Projeto de dados** (Excel + MySQL + Power BI): está como “Em planejamento”. Quando publicar, mude `status` para `"concluido"` e preencha problema, funcionalidades e link. Se não quiser mostrar ainda, apague o item.
- [ ] Confira a classificação das tecnologias em `skills.ts` (ex.: HTML e CSS estão como “Usei em projeto” por causa do e-commerce em Angular).

## Estrutura

```
├── .github/workflows/deploy.yml   # publicação automática no GitHub Pages
├── docs/PESQUISA-E-DECISOES.md    # referências analisadas e decisões de design
├── public/                        # favicon, imagem de compartilhamento, robots, sitemap
├── index.html                     # SEO, Open Graph, dados estruturados (JSON-LD)
└── src/
    ├── data/                      # conteúdo (edite aqui)
    ├── components/                # seções e componentes, cada um com seu .module.css
    ├── hooks/                     # tema claro/escuro e menu ativo na rolagem
    ├── lib/code128.ts             # gerador do código de barras
    └── styles/global.css          # tokens de cor, tipografia, botões
```

## Acessibilidade e desempenho

- HTML semântico, um único `h1`, link “Pular para o conteúdo” e foco visível em tudo que é clicável.
- Menu móvel com `aria-expanded`, fecha com Esc e devolve o foco ao botão.
- Animação só na etiqueta do topo, desligada com `prefers-reduced-motion`.
- Tema claro e escuro (segue o sistema até a pessoa escolher).
- Fonte variável Archivo hospedada junto com o site (sem chamadas a serviços externos).
- Lighthouse (mobile, build de produção): Desempenho 98, Acessibilidade 100, Boas práticas 100, SEO 100.
