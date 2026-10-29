# Pesquisa de referências e decisões de design

Pesquisa feita em 29/10/2026. Os sites foram lidos em texto (estrutura, conteúdo, links e metadados). Não houve inspeção visual pixel a pixel, então observações sobre cor e animação vêm do que os próprios sites declaram ou de descrições publicadas.

## 1. Referências analisadas

| # | Portfólio | Perfil | O que funciona | Pontos fracos |
|---|-----------|--------|----------------|---------------|
| 1 | [Brittany Chiang](https://brittanychiang.com/) | Front-end sênior | Hero de 3 linhas (nome, cargo, frase); menu que acompanha a rolagem; experiência com data, cargo, descrição e tags; link “Pular para o conteúdo”; hierarquia h1/h2/h3 limpa | Muito copiado (o tema v4 virou template); pouca personalidade visual além do brilho que segue o cursor |
| 2 | [Ryan Furrer](https://ryanfurrer.com/) | Design engineer | Frase de posicionamento forte como h1; seção “Now”; tema claro/escuro; colofão com stack e fontes | Projetos aparecem só como links de texto; sem e-mail nem botão de contato |
| 3 | [Shaun Lin](https://shaundataanalytics.github.io/) | Dados / engenharia de dados | Cards com problema, destaques, métricas e links (demo, GitHub, estudo de caso); linha do tempo filtrável | Sem seção de contato; métricas sem contexto; links “Live Demo” que levam ao código |
| 4 | [Lorenzo Miguel Bo](https://lorenzomiguelbo.github.io/) | Analista de dados (Power BI) | Narrativa de transição de carreira; ferramentas com nomes, não porcentagens; contato completo | Dashboards só como imagem; resultados ausentes; erro de digitação no e-mail |
| 5 | [Mehdi Ouazza](https://www.mehdio.com/) | Engenharia de dados | Posicionamento claro; números de produção de conteúdo; recursos para leitura por máquina (llms.txt, RSS) | Sem histórico de carreira; contato só no rodapé; projetos não aparecem na home |
| 6 | [Jesse Zhou](https://www.jesse-zhou.com) | Experiência 3D | Memorável, tema próprio (loja de ramen), projetos “dentro” do cenário | Tela de carregamento antes de qualquer conteúdo; sem alternativa sem 3D; difícil para recrutador achar informação |

Fontes de descoberta: [WeAreDevelopers, inspirações de portfólio](https://www.wearedevelopers.com/magazine/561-web-developer-portfolio-inspiration-and-examples-march-2025) e [Colorlib, portfólios de ciência de dados](https://colorlib.com/wp/data-science-portfolio-examples/).

### Síntese pelos 10 critérios

1. **Identidade e originalidade.** Os mais lembrados (Jesse Zhou, Brittany Chiang) têm uma ideia central. Os de dados quase sempre usam o mesmo template de cards.
2. **Tipografia e hierarquia.** Os melhores usam uma família só, com pesos bem separados (Chiang usa Inter; Furrer usa Google Sans + uma mono).
3. **Página inicial.** Nome + função + frase de posicionamento + CTA resolve a primeira dobra. Mehdi e Furrer não têm CTA de contato no topo.
4. **Projetos.** Shaun Lin estrutura cada projeto em descrição, destaques, métricas, tecnologias e links. É o formato que o recrutador escaneia mais rápido.
5. **Animação.** Pouca e com função (menu que acompanha a rolagem). O 3D de Jesse Zhou impressiona, mas atrasa o acesso ao conteúdo.
6. **Responsividade.** Todos declaram viewport responsivo. Os pesados (3D) são os que mais sofrem no celular.
7. **Acessibilidade e desempenho.** Chiang e Furrer têm skip link e hierarquia de títulos. Sites 3D não oferecem alternativa.
8. **Facilidade para recrutador.** Falta contato visível em 3 dos 6. Erros de digitação em contato custam vagas.
9. **Diferenciais.** Uma ideia própria (a máquina do tempo de Chiang, o ramen de Zhou), honestidade sobre dados de treino (Lorenzo), colofão.
10. **Pontos fracos recorrentes.** Métricas sem contexto, links com rótulo errado, contato escondido, barras de habilidade sem significado.

### O que foi aproveitado (sem copiar)

- Estrutura do hero e menu com seção ativa, inspirados em Chiang.
- Formato problema → minha parte → funcionalidades → stack → link, inspirado em Shaun Lin, sem métricas inventadas.
- Seção “O que estou estudando agora”, na linha do “Now” de Furrer.
- Colofão no rodapé.
- Uma ideia visual central, como Zhou, mas leve e sem bloquear o conteúdo.
- Habilidades com evidência (onde foi usada) no lugar de porcentagens, resolvendo o problema visto em vários sites.

## 2. Conceito visual: “almoxarifado”

O João trabalha no estoque e quer ir para dados. O portfólio trata o próprio João como um item catalogado: uma **etiqueta de estoque** pendurada no topo da página, com campos (Item, Categoria, Origem, Previsão, Destino) e um **código de barras Code 128 real** que, lido por um celular, retorna `joongama`.

| Token | Valor | Uso |
|-------|-------|-----|
| Concreto | `#E4E7EA` | fundo (piso de depósito) |
| Prateleira | `#F4F5F6` | painéis |
| Tinta | `#18212B` | texto |
| Aço | `#4F5B67` | texto secundário (contraste 5,6:1) |
| Amarelo de sinalização | `#FFD23F` | etiqueta, botão principal, seção de contato |
| Caneta azul | `#1D4ED8` | links e foco (5,4:1) |

- **Tipografia:** só a Archivo variável. O eixo de largura vira recurso de design: títulos largos (118%) como letreiro de galpão, rótulos estreitos (82%) como campos de etiqueta.
- **Layout:** alinhado à esquerda, assimétrico (7/5 colunas), projetos alternando o lado da ilustração.
- **Movimento:** um único momento orquestrado (a etiqueta cai e balança ao carregar; balança de novo no hover). Todo o resto é estático ou responde a uma ação.
- **Amarelo com regra:** só aparece no que pede ação ou é o “item principal”.

### Revisão contra padrões genéricos

Antes de implementar, o plano foi comparado com os padrões que mais denunciam páginas geradas automaticamente: fundo creme com acento terracota, fundo quase preto com verde neon, cards idênticos com sombra cinza, rótulos em caixa alta em cima de tudo, números 01/02/03 sem sequência real. Mudanças feitas:

- Fundo cinza-concreto frio no lugar de creme.
- Nenhum rótulo em caixa alta. Os rótulos usam a largura estreita da fonte.
- Sem numeração nos projetos (não são uma sequência). A linha do tempo usa datas porque é uma sequência.
- Cada projeto tem uma ilustração diferente, feita com dados reais do repositório (fluxo de estoque, rotas da API, atributos do jogo), em vez de cards iguais.
- Fonte mono só onde é código de verdade (rotas da API).

## 3. Avaliação crítica (0 a 10)

| Critério | Nota | Por quê |
|----------|------|---------|
| Design e identidade visual | 8 | Conceito coeso e ligado à história real. Perde ponto porque, fora do hero e do contato, as seções são sóbrias e podem parecer comuns. |
| Originalidade | 8 | A etiqueta com código de barras legível não aparece nas referências. A estrutura das seções segue o padrão de mercado (de propósito, para o recrutador). |
| Experiência do usuário | 8 | Primeira dobra responde quem, o quê e como contatar. Projetos são longos; um recrutador apressado pode não ler os três. |
| Responsividade | 9 | Testado em 390, 820 e 1440 px, sem rolagem horizontal. Menu móvel completo. |
| Qualidade do código | 8 | Dados separados dos componentes, TypeScript estrito, CSS Modules. Não há testes automatizados. |
| Desempenho | 9 | Lighthouse 98 (mobile). JS de 81 kB gzip, quase todo do React; um site estático puro seria mais leve. |
| Acessibilidade | 9 | Lighthouse 100, navegação por teclado testada, movimento reduzido respeitado. Não foi testado com leitor de tela real. |
| Apresentação dos projetos | 7 | Problema, papel e stack claros. Faltam capturas de tela, demos publicadas e resultados, porque não existem ainda. |
| Atratividade para recrutadores | 7 | Honesto e fácil de escanear. O limite é o conteúdo: são três projetos acadêmicos, e nenhum de dados ainda, que é a área-alvo. |
| Diferenciação frente às referências | 8 | Mais pessoal que os portfólios de dados analisados e mais acessível que os criativos. |

### Próximas melhorias recomendadas (em ordem de impacto)

1. **Publicar o projeto de dados** (Excel + MySQL + Power BI) com README, prints do painel e o problema que resolve. É o que mais aproxima o portfólio da vaga desejada.
2. **README no repositório `dados-pessoais`** com objetivo, rotas e como rodar.
3. **Capturas de tela** do e-commerce e um GIF do RPG rodando no terminal.
4. **Publicar uma demo** do e-commerce (ex.: GitHub Pages com dados de exemplo).
5. **Currículo em PDF** linkado no contato.
6. Uma frase própria do João na seção Sobre sobre como gosta de aprender, com as palavras dele.
