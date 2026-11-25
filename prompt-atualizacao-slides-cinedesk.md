# Prompt — Atualização da apresentação do CineDesk (novos slides e skills por integrante)

## 0. Contexto e regra principal

O site de apresentação em `cinedesk-apresentacao/` (Astro + Tailwind + TypeScript) **já está pronto e aprovado**. O visual atual é o definitivo: fundo claro, logo do CineDesk e logos da Etec, do Centro Paula Souza e do Governo de SP no topo, cabeçalho "Projeto de Software: Controle de Estoque Bomboniere - Aplicação Desktop / Desenvolvimento de Sistemas", títulos grandes em preto, detalhes em vinho, rodapé com "Equipe_03" e o número `NN / total`.

**Não mude nada do que já existe**, nem no design, nem nos textos, nem nas imagens, nem na navegação, exceto os pontos listados neste prompt. Isso inclui o que foi ajustado recentemente e precisa continuar igual:

- slide 1 com "Bimestre: 4° de 2026";
- logo do CineDesk alinhada à esquerda com o texto do cabeçalho (o `-ml-[19px]` em `SlideHeader.astro`);
- diagramas de casos de uso novos nos slides 27 e 28;
- slide 12 com as 20 tecnologias em 6 grupos;
- slide 36 com 85%, o motivo e as listas "O que foi feito" / "O que falta fazer" (incluindo "Geração dos relatórios de produtos, de clientes e de estoque");
- QR code do slide 35, ampliação de imagens ao clicar, rota `/imprimir` e funcionamento offline.

Os textos novos deste prompt devem ser usados **exatamente** como estão escritos aqui, caractere por caractere. Não invente textos, subtítulos ou legendas além dos que estão aqui.

Antes de mexer no visual dos slides novos, **use a skill `frontend-design`** e mantenha os slides novos coerentes com os que já existem (mesmas fontes, cores, espaçamentos, componentes de título, cabeçalho e rodapé).

## 1. Resumo das mudanças

1. **Sumário (slide 3):** passa de 19 para **21 itens**. Entram "Uso de Inteligência Artificial" (item 20) e "Demonstração da Aplicação" (item 21), depois de "Bibliografia".
2. **Slide 38 (Hard Skills) e slide 39 (Soft Skills):** sai o texto que explica o que é cada habilidade. No lugar entram as habilidades de **cada integrante**, em ordem alfabética.
3. **Novo slide 42, "Uso de Inteligência Artificial":** slide gráfico mostrando que 50% do projeto teve apoio de IA e em quais partes.
4. **Novo slide 43, "Demonstração da Aplicação":** slide de abertura para a demonstração do sistema funcionando.
5. **Total de slides:** passa de 41 para **43**.

Os slides 1 a 41 continuam na mesma ordem e com a mesma numeração. Os dois slides novos entram **depois do slide 41 (Referências)**, seguindo a ordem do sumário.

## 2. Sumário (slide 3)

O sumário fica com estes 21 itens, nesta ordem e com estes textos exatos:

1. Problematização
2. Solução
3. Público-alvo
4. Objetivos
5. Justificativa
6. Metodologias
7. Tecnologias
8. Levantamento de Requisitos
9. Requisitos: Funcionais e Não Funcionais
10. Protótipos: Baixa, Média e Alta Definição
11. Diagramas UML: Caso de Uso e Classe
12. Projeto de Banco de Dados: Conceitual e Lógico
13. Documentação
14. Percentual de Conclusão
15. Desafios
16. Hard Skills
17. Soft Skills
18. Conclusão
19. Bibliografia
20. Uso de Inteligência Artificial
21. Demonstração da Aplicação

**Layout:** mantenha o visual atual (número pequeno em cinza à esquerda, texto ao lado, linhas finas separando os itens), agora em **3 colunas de 7 itens** (1–7, 8–14, 15–21). Tudo precisa caber sem rolagem.

## 3. Slides 38 e 39 — Hard Skills e Soft Skills por integrante

**Remova** os parágrafos que explicam o que são Hard Skills e Soft Skills. Os títulos continuam: "Hard Skills:" no slide 38 e "Soft Skills:" no slide 39 (exibidos como hoje, sem os dois-pontos se o componente de título já os remove).

No lugar do texto, cada slide mostra os **5 integrantes em ordem alfabética**, cada um com suas **3 habilidades**, também em ordem alfabética.

### 3.1 Slide 38 — Hard Skills

| Integrante | Hard Skills |
|---|---|
| Anderson Melo | Codificação · Documentação · Modelagem de dados |
| Arthur Santana | Codificação · Modelagem UML · Prototipagem |
| Fabricio Nunes | Codificação · Modelagem de banco de dados · Prototipagem |
| Luiz Quadros | Codificação · Documentação · Modelagem UML |
| Matheus Santos | Codificação · Design · Prototipagem |

### 3.2 Slide 39 — Soft Skills

| Integrante | Soft Skills |
|---|---|
| Anderson Melo | Comunicação · Gestão de tempo · Trabalho em equipe |
| Arthur Santana | Adaptabilidade · Gestão de tempo · Trabalho em equipe |
| Fabricio Nunes | Comunicação · Gestão de tempo · Trabalho em equipe |
| Luiz Quadros | Comunicação · Tomada de decisão · Trabalho em equipe |
| Matheus Santos | Comunicação · Liderança · Trabalho em equipe |

### 3.3 Layout dos dois slides

- **5 cartões lado a lado**, um por integrante, todos com a mesma largura e altura, na ordem da tabela (da esquerda para a direita).
- Cada cartão tem o **nome do integrante** em negrito no topo e, abaixo, as **3 habilidades** uma por linha, cada uma em uma etiqueta (pílula) com contorno fino, ou numa lista com marcador discreto na cor vinho do site.
- Cartões com fundo levemente diferente do fundo do slide ou com borda fina, cantos arredondados e o mesmo respiro interno, seguindo o estilo dos cartões que já existem no site (como os grupos do slide 12).
- Textos grandes o suficiente para leitura no projetor (nome com cerca de 26–28 px e habilidades com cerca de 20–22 px no canvas de 1920×1080). Nenhuma habilidade pode quebrar no meio de uma palavra; se "Modelagem de banco de dados" não couber numa linha, pode quebrar em duas linhas dentro da etiqueta.
- Os dois slides usam **exatamente o mesmo layout**, mudando só o conteúdo.
- Os dados ficam em `slides.ts` (por exemplo, um tipo novo `skills` com `integrantes: { nome: string; habilidades: string[] }[]`).

## 4. Novo slide 42 — Uso de Inteligência Artificial

**Título:** Uso de Inteligência Artificial:

**Objetivo do slide:** mostrar de forma **gráfica** que cerca de **50%** do projeto teve apoio de inteligência artificial, e em quais partes ela foi usada.

**Conteúdo, com estes textos exatos:**

- **Gráfico de rosca (donut)** à esquerda, igual em estilo ao gráfico do slide 36 (reaproveite o componente `DonutChart`):
  - fatia **"Com apoio de IA" — 50%**, na cor vinho do site;
  - fatia **"Desenvolvido pela equipe" — 50%**, na cor cinza clara usada para "Não concluído" no slide 36;
  - abaixo do gráfico, a legenda com os dois rótulos e os percentuais grandes, no mesmo formato do slide 36 ("Com apoio de IA" / "50%" e "Desenvolvido pela equipe" / "50%").
- À direita, o título **"Onde a IA foi utilizada"** e **4 cartões** numa grade 2 × 2, cada um com um ícone simples e o texto:
  1. Dúvidas sobre os requisitos
  2. Sugestão de tabelas para o banco de dados
  3. Design da interface
  4. Lógica da interface
- **Ícones:** desenhe ícones de linha simples em SVG inline, na cor vinho, sem biblioteca externa e sem requisição de rede (por exemplo: balão de pergunta, tabela/banco de dados, paleta/pincel, engrenagem/código). Todos do mesmo tamanho.
- O valor 50% fica em `src/data/config.ts` como `PERCENTUAL_IA = 50`, e o restante é calculado.
- Cartões no mesmo estilo dos cartões do slide 12 e dos slides de skills.
- Tudo precisa caber sem rolagem.

## 5. Novo slide 43 — Demonstração da Aplicação

**Título:** Demonstração da Aplicação

- Slide de abertura para a parte em que a equipe vai mostrar o sistema funcionando.
- O título fica **grande e centralizado** (vertical e horizontalmente) na área de conteúdo, com mais destaque que os títulos comuns, no estilo do restante do site.
- **Nenhum outro texto** além do título. Cabeçalho com logos e rodapé com "Equipe_03" e "43 / 43" continuam aparecendo, como em todos os slides.
- Pode ter um único detalhe gráfico discreto na cor vinho (por exemplo, um ícone de "play" simples, lembrando o triângulo da logo do CineDesk), sem animação.

## 6. Ajustes gerais

- `TOTAL_SLIDES = 43` em `src/data/config.ts`. O rodapé de todos os slides passa a mostrar `NN / 43`.
- A navegação (setas, `Home`/`End`, hash `/#N`) funciona até o slide 43. `End` vai para o slide 43.
- A rota `/imprimir` passa a ter 43 páginas.
- Não mude o número de nenhum slide existente (1 a 41).
- Remova do código qualquer texto ou componente que tenha ficado sem uso por causa da retirada das definições de Hard e Soft Skills.
- Se fizer commit, **não** inclua linhas de coautoria ou atribuição (Co-Authored-By, Claude-Session etc.) na mensagem.
- **Não publique, não faça deploy e não faça push.**

## 7. Verificação final (obrigatória)

1. `npm run build` e `astro check` sem erros nem avisos.
2. Com `npm run preview`, confira:
   - slide 3 com os 21 itens em 3 colunas de 7, sem rolagem;
   - slides 38 e 39 com os 5 integrantes em ordem alfabética e as habilidades exatamente como nas tabelas da seção 3, sem os textos de definição;
   - slide 42 com o gráfico 50% / 50% e os 4 cartões com os textos exatos;
   - slide 43 só com o título "Demonstração da Aplicação";
   - rodapé `NN / 43` em todos os slides.
3. Percorra os slides 1 a 41 e confirme que **nada mudou** neles além do sumário e das skills.
4. Em `/imprimir`, `Ctrl + P → Salvar como PDF` gera 43 páginas.
5. Com a rede em "Offline" no DevTools, tudo carrega sem nenhuma requisição externa.

No final, mostre um resumo curto do que foi alterado e qualquer decisão que precisou tomar e que não estava neste prompt.
