# Prompt — Site de apresentação do CineDesk (Astro + Tailwind + TypeScript) — v4: design de cinema + tecnologias em grupos + 85% de conclusão

## 0. O que fazer agora

O projeto `cinedesk-apresentacao/` **já existe** e já funciona. Este prompt é a versão completa e atualizada de tudo o que o site deve ter. Faça o site ficar exatamente como descrito aqui:

1. **Design:** o visual segue o template **"German Cinema and Visual Culture"** do Slidesgo (descrito em detalhes na seção 4), com **as cores do CineDesk** (seção 4.3) e **todas as regras deste prompt**. Se esse design já estiver aplicado, mantenha e só ajuste o que estiver diferente deste prompt.
2. **Slide 11 (Scrumban):** o texto mudou. O Teams agora aparece como ferramenta de **entregas**, não de comunicação. Use o novo texto da seção 8.
3. **Slide 12 (Tecnologias):** agora são **20 logos** (eram 14), todas **do mesmo tamanho**, **separadas em 6 grupos** (seção 5.5). Há 6 arquivos novos na pasta `tecnologias/`, em SVG.
4. **Slide 36 (Percentual de Conclusão):** o percentual passa de 45% para **85%**, e o slide ganha o motivo do percentual e duas listas: **"O que foi feito"** e **"O que falta fazer"** (seções 7.3 e 8).

Antes de escrever qualquer código de interface, **use a skill `frontend-design`** e siga as orientações dela durante todo o trabalho.

**Mantenha** o que já funciona e não depende do visual: o conteúdo de `src/data/slides.ts` (desde que esteja idêntico à seção 8), a navegação, o hash `/#N`, a tela cheia, o QR code, a rota `/imprimir`, a ampliação de imagens e o funcionamento offline. Pode reorganizar componentes e apagar o que não for mais usado.

## 1. Contexto

Site em **formato de apresentação de slides** para o projeto acadêmico **CineDesk**, da **Equipe_03**, do curso de Desenvolvimento de Sistemas da **Etec Uirapuru**. Ele substitui uma apresentação de PowerPoint e será usado ao vivo, projetado em sala de aula.

O CineDesk é um sistema desktop de **controle de estoque da bomboniere de um cinema** (Java, Swing, MySQL, JDBC). O site é só a apresentação do projeto, não o sistema em si.

Regras gerais:

- **Os textos dos slides devem ser usados EXATAMENTE como estão na seção 8.** Não corrija, não resuma, não reescreva e não acrescente nenhuma palavra, inclusive erros de digitação ou concordância que existam no original.
- **Não invente conteúdo.** Nada de textos novos, subtítulos, frases de efeito, legendas, números de seção inventados ou dados que não estejam neste prompt. Os textos de exemplo do template ("Here is where your presentation begins", "Explore influential factors…" etc.) **não** entram no site.
- **Não publique, não faça deploy e não faça push.** O site vai rodar localmente por enquanto e só precisa ficar pronto para ser publicado depois na Vercel, como site estático.
- Interface, `alt` de imagens e `title` em **português do Brasil** (`<html lang="pt-BR">`).

## 2. Tecnologias

- **Astro** (estável mais recente), saída estática.
- **Tailwind CSS** (estável mais recente; na v4, plugin `@tailwindcss/vite`).
- **TypeScript** em modo `strict`.
- **`qrcode`** (npm) para gerar o QR code no build, como SVG inline.
- **Fontes locais via `@fontsource`**: `@fontsource/heebo` e `@fontsource-variable/dm-sans`. Nada de Google Fonts por link.
- **Sem** React, Vue, Next.js ou bibliotecas prontas de apresentação. A navegação é TypeScript puro.
- **100% offline:** nenhuma requisição externa (fontes, ícones, imagens, scripts, CSS). O link do PDF no slide 35 é o único endereço externo, aberto só pelo celular de quem escanear o QR.

## 3. Imagens

As imagens ficam em `src/assets/img/`, com esta estrutura:

```
src/assets/img/
├── db/                Modelo-conceitual.png, Modelo-logico.png
├── diagramas/         diagrama-UML_Casos-de-uso-01.png, diagrama-UML_Casos-de-uso-02.png, diagrama-UML_Classe.png
├── img-essenciais/    logo-cinedesk.png, logo-cps.png, logo-etec.png, logo-gov-sp.png
├── prototipo-alta/    tela-inicio.png, tela-produto.png, tela-add-produto.png
├── prototipo-baixa/   tela-inicio.png, tela-produto.png, tela-add-produto.png
├── prototipo-media/   tela-inicio.png, tela-produto.png, tela-add-produto.png
├── ref-design/        imagens de referência antigas (ignorar)
└── tecnologias/       teams.png, notion.png, discord.png, whatsapp.png, word.png, canva.png,
                       figma.png, lucidchart.png, balsamiq.png, drawio.png, logodev.png,
                       claude.png, chatgpt.png, brmodelo.jpeg,
                       java.svg, intellij.svg, mysql.svg, git.svg, github.svg, svgrepo.svg
```

- Use `<Image />` de `astro:assets` em todas as imagens, com qualidade e largura suficientes para ficarem nítidas num projetor Full HD.
- **Nunca corte, distorça ou recolora** as imagens do projeto nem as logos. Use sempre `object-contain`.
- As imagens de `ref-design/` são de referências anteriores e **não valem mais**. Ignore-as. A referência agora é a descrição da seção 4.
- Logos das tecnologias: use os arquivos de `tecnologias/`, não bibliotecas de ícones. São 20 arquivos em três formatos: `.png`, `.svg` (java, intellij, mysql, git, github, svgrepo) e `.jpeg` (só o brmodelo). O `<Image />` do Astro aceita todos; os SVGs são vetoriais e não devem ser rasterizados em tamanho pequeno. Não renomeie nem converta os arquivos.
- Toda imagem precisa de `alt` descritivo em português.

## 4. Design

### 4.1 A referência: template "German Cinema and Visual Culture" (Slidesgo)

Você não tem acesso ao template, então aqui está a descrição completa dele. Reproduza essa linguagem visual.

**Clima geral:** apresentação de tema cinema, vintage e escura. Fundo escuro com textura, conteúdo em texto claro, e **ilustrações de cinema desenhadas à mão** espalhadas **só nos cantos e nas bordas** do slide, como uma moldura que nunca invade o texto. É elegante e organizado: o centro do slide é sempre limpo e legível, e a decoração fica na periferia.

**Fundo:**
- Cor sólida escura em todos os slides, **sem gradiente**.
- Por cima, uma **textura sutil de papel ou lousa gasta**: manchas, arranhões e pontinhos irregulares em um tom um pouco mais claro que o fundo, com opacidade bem baixa (algo entre 4% e 8%). Parece um quadro-negro velho ou um cartaz antigo. É estática.

**Ilustrações (o elemento mais marcante):**
- Desenhos de objetos de cinema em estilo **ilustração à mão / gravura**: traço de contorno escuro irregular, preenchimento chapado, sombras feitas com hachuras (riscos paralelos).
- Os objetos são: **rolos de filme** (círculo com furos grandes em volta do centro), **tiras de película** (faixa com furinhos quadrados nas duas bordas e quadros no meio, muitas vezes em curva ou enrolada), **projetor antigo** com dois rolos em cima, **câmera de filmagem antiga**, **claquete** e **latas de filme empilhadas**.
- Paleta das ilustrações no template: **vermelho forte** em alguns objetos (rolos e claquete), **bege/areia** nas tiras de película, **cinza-marrom** nos projetores, sempre com contorno escuro.
- **Posicionamento:** as ilustrações ficam **cortadas pelas bordas do slide**, como se entrassem de fora (um rolo pela metade no canto inferior esquerdo, uma tira de película saindo do canto superior direito, um projetor encostado na lateral). Ocupam de 10% a 25% da área do slide, nunca o centro.
- **Variação:** cada slide tem uma **combinação diferente** de 1 a 4 ilustrações em cantos diferentes, mas sempre do mesmo conjunto de objetos. A capa e os slides de abertura de seção têm mais ilustrações (3 ou 4); os slides de conteúdo, menos (1 ou 2, pequenas).

**Tipografia:**
- **Títulos:** fonte **Heebo**, negrito (700), cor clara, tamanho grande, alinhados à esquerda, no topo do slide (ex.: "Historical context", "Chronology of events").
- **Texto corrido:** fonte **DM Sans**, peso normal, cor clara levemente acinzentada, alinhado à esquerda, em parágrafos curtos.
- **Números grandes** (ex.: "01" nas aberturas de seção, "123,000" em slide de destaque): Heebo negrito em **cor bege/areia**, bem grandes.
- Listas com marcador de **bolinha simples**.

**Layouts que aparecem no template:**
- **Capa:** título grande em duas linhas (negrito) + subtítulo em peso normal logo abaixo; uma **linha horizontal fina** em bege separando o bloco do título de um texto pequeno embaixo; texto à esquerda; ilustrações grandes no lado direito e nos cantos (projetor, rolos vermelhos, tira de película subindo).
- **Sumário:** lista com números ("01", "02"…) em bege à esquerda, título do item em negrito e uma linha de descrição embaixo, com linhas finas separando os itens.
- **Abertura de seção:** número grande em bege ("01"), título grande em negrito em duas linhas, texto pequeno embaixo, ilustrações nos cantos.
- **Texto + imagem:** título no topo, texto à esquerda e uma **foto com cantos bem arredondados** à direita.
- **Texto em duas colunas** e **grade de 3 colunas × 2 linhas** com título curto em negrito e texto pequeno embaixo.
- **Linha do tempo:** pontos vermelhos ligados por uma linha fina clara, com os rótulos embaixo de cada ponto.
- **Tabelas:** linhas finas claras, cabeçalho em negrito, fundo transparente.
- **Destaque:** pergunta ou frase centralizada em negrito, com ilustrações em volta.
- **Gráficos:** barras em vermelho, bege e cinza sobre o fundo escuro.
- **Encerramento:** "Thanks!" grande centralizado com ilustrações nos cantos.

### 4.2 O que adaptar para o CineDesk

- **Estrutura, textura, ilustrações e tipografia:** iguais ao template, descritos acima.
- **Cores:** **trocar a paleta do template pela do CineDesk** (seção 4.3). O fundo marrom do template vira o **vinho bem escuro** do CineDesk; o vermelho das ilustrações vira o **vermelho do CineDesk**; o bege vira o **rosado**.
- **Ilustrações próprias:** o template é de terceiros, então **não copie nenhum arquivo dele**. **Desenhe as ilustrações você mesmo, em SVG**, no estilo descrito (traço à mão, contorno, hachuras), como componentes Astro reutilizáveis (`ReelIllustration`, `FilmStripIllustration`, `ProjectorIllustration`, `CameraIllustration`, `ClapperIllustration`, `FilmCansIllustration`). Use só as cores da seção 4.3. Faça poucas e bem-feitas, reaproveitando em posições, rotações e tamanhos diferentes.
- **A textura do fundo** também é sua: SVG `feTurbulence` local ou uma pequena imagem gerada no projeto, estática, com opacidade baixa.
- **Nada de fotos** como as do template (pipoca, claquete). As únicas imagens são as do projeto (seção 3).
- **Minimalismo:** a decoração fica **só nas bordas**, nunca atrás do texto, nunca sobre as imagens do projeto. Nos slides com imagens grandes (diagramas, modelos de banco, protótipos), use no máximo **uma** ilustração pequena num canto livre, ou nenhuma se faltar espaço.
- **Sem animação** nas ilustrações e na textura.

### 4.3 Paleta (cores do CineDesk)

Defina como tokens no Tailwind e use só estas cores:

| Token | Hex | Uso |
|---|---|---|
| `fundo` | `#1C0205` | Fundo de todos os slides e da página em volta |
| `fundo-textura` | `#3E000B` | Manchas da textura do fundo (opacidade baixa) |
| `claro` | `#F0EFED` | Títulos e texto principal |
| `claro-suave` | `#DFCAC9` | Texto corrido, linhas finas, tiras de película das ilustrações |
| `rosado` | `#A99499` | Números grandes, rótulos, "Fonte:", detalhes (faz o papel do bege do template) |
| `vinho` | `#4C0B0F` | Contornos e sombras das ilustrações, preenchimento de cartões |
| `vinho-medio` | `#8E0A14` | Partes vermelhas escuras das ilustrações |
| `vermelho` | `#DC0004` | Rolos de filme e claquete das ilustrações, pontos de linha do tempo, destaques pequenos |

- Ilustrações: contorno em `vinho` ou quase preto (`#120103`), preenchimentos em `vermelho`, `vinho-medio`, `claro-suave` e `rosado`.
- Contraste: texto sempre `claro` ou `claro-suave` sobre `fundo`.

### 4.4 Tipografia (tamanhos)

No canvas de 1920×1080:
- títulos dos slides: Heebo 700, 72–88 px, cor `claro`;
- títulos de capa e de abertura: Heebo 700, até 120 px;
- números grandes (sumário, percentuais): Heebo 700, cor `rosado`;
- texto das definições: DM Sans 400, 32–36 px, `line-height` 1.5, cor `claro-suave`, largura máxima de cerca de 1100 px;
- rótulos e elementos fixos: DM Sans 500, 15–18 px, cor `rosado`.

Texto corrido **sempre alinhado à esquerda**, nunca justificado. Os dois-pontos dos títulos são mantidos exatamente como na seção 8.

## 5. Formato e layouts

### 5.1 Canvas

- Canvas fixo de **1920×1080**, escalado com `transform: scale()` para caber na janela, centralizado sobre a cor `fundo`.
- **Área segura de conteúdo:** margem de **120 px nas laterais e 96 px em cima e embaixo**. Texto e imagens do projeto ficam dentro dela; as ilustrações ficam fora dela, nos cantos, podendo ser cortadas pela borda do canvas.
- Transição entre slides: fade de 200 ms, desligado em `prefers-reduced-motion`.

### 5.2 Elementos fixos em todos os slides

Discretos e **sempre na mesma posição**:

1. **Logos essenciais** no topo:
   - as logos têm cores que somem no fundo escuro (texto preto, vermelho, brasão colorido). Por isso ficam **dentro de uma pequena faixa arredondada na cor `claro`**, como uma etiqueta, no **canto superior esquerdo** da área segura;
   - dentro dela, lado a lado e pequenas (altura de cerca de 32 px): `logo-cinedesk.png`, `logo-etec.png`, `logo-cps.png` e `logo-gov-sp.png`, com espaçamento igual;
   - nas **cores originais**, sem filtro nem inversão.
2. **Cabeçalho do projeto**, no **canto superior direito**, alinhado à direita, em duas linhas pequenas na cor `rosado`:
   - **Projeto de Software:** Controle de Estoque Bomboniere - Aplicação Desktop. Só "Projeto de Software:" em negrito.
   - Desenvolvimento de Sistemas
   - Tamanhos de cerca de 18 px e 15 px. Texto exatamente como acima.
3. **Rodapé:** "Equipe_03" à esquerda e o número do slide à direita, no formato `07 / 41`, em rótulo `rosado`.

**"Equipe_03" aparece UMA única vez por slide** (no rodapé). A única outra ocorrência permitida é o "Fonte: Equipe_03 (Etec Uirapuru, 2026)", que faz parte do texto original de alguns slides.

As ilustrações dos cantos **não podem cobrir** esses elementos fixos. Planeje as posições das ilustrações em volta deles.

Crie esses elementos como componentes únicos usados no layout base de todos os slides.

### 5.3 Layouts por tipo

| Tipo | Slides | Como fica (no estilo do template) |
|---|---|---|
| `capa` | 1 | Como a capa do template: `logo-cinedesk.png` grande sobre um retângulo `claro` arredondado à esquerda; abaixo, uma linha fina `rosado`; abaixo dela, os itens do slide 1 com o rótulo ("Curso:", "Bimestre:" etc.) em DM Sans 600 `rosado` e o valor em `claro`. Ilustrações maiores no lado direito (projetor, rolos vermelhos, tira de película subindo) |
| `equipe` | 2 | Os 5 nomes em Heebo 700 grande, um por linha, com linhas finas `claro-suave` a 30% entre eles. Ilustrações em 2 cantos |
| `sumario` | 3 | Como o sumário do template: os 19 itens em 3 colunas, cada um com o número (01 a 19) em Heebo 700 `rosado` e o texto em DM Sans `claro`, separados por linhas finas. Sem descrições (não invente) |
| `definicao` | 4–11, 13, 14, 16, 18, 19, 21, 23, 25, 26, 29, 31, 33, 38, 39, 40 | Título no topo à esquerda e o texto em bloco abaixo, como "Historical context" no template. 1 ou 2 ilustrações pequenas nos cantos livres, variando de slide para slide |
| `tecnologias` | 12 | Título + 6 grupos de logos, conforme a seção 5.5 |
| `tabela` | 15, 17 | Título + tabela como as do template: linhas finas `claro-suave` a 30%, sem fundo. Coluna "Requisito" em rótulo `rosado`, segunda coluna em texto grande `claro`. "Fonte:" embaixo |
| `tres-imagens` | 20, 22, 24 | Título + 3 imagens lado a lado, do mesmo tamanho, com **cantos bem arredondados** (como a foto do slide "Historical context"). Rótulo de cada tela acima, em `claro`. "Fonte:" embaixo. Sem ilustrações ou só uma pequena num canto livre |
| `imagem` | 27, 28, 30, 32, 34 | Título (e subtítulo, quando houver) + uma imagem grande com cantos arredondados, sobre um cartão `claro` (para os diagramas, que têm fundo branco, não ficarem soltos no escuro), ocupando o máximo de espaço disponível, em `object-contain`. "Fonte:" embaixo. Sem ilustrações ou só uma pequena num canto livre |
| `qrcode` | 35 | Título + QR code centralizado num cartão `claro` arredondado (seção 7.2). Ilustrações nos cantos, como no slide de destaque do template |
| `grafico` | 36 | Título + gráfico de 85% à esquerda + o motivo do percentual e as listas "O que foi feito" e "O que falta fazer" à direita (seção 7.3) |
| `lista` | 37 | Título + itens grandes com marcador de bolinha `vermelho`, um por linha, como as listas do template |
| `referencias` | 41 | Título + referências em 22–24 px, `claro-suave`, uma por parágrafo, com recuo deslocado (hanging indent), em duas colunas para caber sem rolagem. Sem ilustrações |

- "Fonte:" é sempre em negrito, seguido do texto normal, em rótulo `rosado`: "**Fonte:** Equipe_03 (Etec Uirapuru, 2026)".
- Nenhum slide pode ter rolagem ou texto cortado. Se algo não couber, ajuste dentro dos tamanhos da seção 4.4.

### 5.4 Ampliar imagens

Ao **clicar em qualquer imagem** do projeto, ela abre ampliada sobre um fundo `fundo` a 95%. `Esc` ou um clique fecha. Enquanto estiver ampliada, as setas não trocam de slide.

### 5.5 Slide 12 — Tecnologias em grupos

As 20 tecnologias são divididas em **6 grupos**, nesta ordem e com estes nomes exatos:

| # | Nome do grupo (exibido) | Tecnologias (nome exibido → arquivo), nesta ordem |
|---|---|---|
| 1 | Comunicação | Discord → `discord.png` · WhatsApp → `whatsapp.png` |
| 2 | Gestão, documentação e entregas | Notion → `notion.png` · Word → `word.png` · Teams → `teams.png` |
| 3 | Design e prototipagem | Figma → `figma.png` · Balsamiq → `balsamiq.png` · Canva → `canva.png` · SVG Repo → `svgrepo.svg` · logo.dev → `logodev.png` |
| 4 | Diagramas e modelagem | Lucidchart → `lucidchart.png` · draw.io → `drawio.png` · brModelo → `brmodelo.jpeg` |
| 5 | Desenvolvimento | Java → `java.svg` · IntelliJ IDEA → `intellij.svg` · MySQL → `mysql.svg` · Git → `git.svg` · GitHub → `github.svg` |
| 6 | Inteligência artificial | Claude → `claude.png` · ChatGPT → `chatgpt.png` |

**Atenção:** o Teams fica em **"Gestão, documentação e entregas"**, porque a equipe usou o Teams **somente para entregas**, não para comunicação.

**Layout:**

- Grade de **3 colunas × 2 linhas** de blocos, na ordem da tabela (linha 1: grupos 1, 2 e 3; linha 2: grupos 4, 5 e 6). Todos os blocos com a mesma largura e a mesma altura.
- Cada bloco tem o **nome do grupo** no topo, em DM Sans 600, 20–22 px, cor `rosado`, e uma linha fina `claro-suave` a 30% embaixo dele. Abaixo vêm as logos do grupo em linha, quebrando para a linha seguinte se não couberem.
- **Todas as 20 logos com exatamente o mesmo tamanho**, sem exceção:
  - cada logo fica dentro de um **quadrado do mesmo tamanho** (cerca de 104×104 px no canvas), com fundo `claro` e cantos arredondados de 16 px, para as cores originais das logos aparecerem no fundo escuro;
  - dentro do quadrado, a imagem ocupa uma **área interna fixa** (cerca de 72×72 px, com o mesmo respiro em todos os lados), centralizada, em `object-contain`;
  - as logos têm proporções muito diferentes (a do SVG Repo é larga e baixa, a do Java é alta com texto embaixo, a do Git é quadrada). O `object-contain` dentro da área fixa resolve isso: **nenhuma logo pode parecer maior ou menor que as outras por causa do formato**. Se alguma logo ficar visualmente pequena demais por ter muito espaço vazio no próprio arquivo, ajuste só o `padding` daquela logo, mantendo o quadrado igual;
  - o **nome da tecnologia** fica embaixo do quadrado, em rótulo DM Sans 14–15 px, cor `claro-suave`, centralizado e numa linha só.
- Espaçamento igual entre as logos de todos os grupos (cerca de 24 px) e entre os blocos (cerca de 40 px).
- Os grupos com 2 logos ficam alinhados à esquerda dentro do bloco (não esticar as logos para preencher).
- Tudo precisa caber no slide sem rolagem, respeitando a área segura e os elementos fixos. Se faltar espaço, reduza o quadrado das logos por igual (mínimo de 88×88 px), nunca só de algumas.
- Neste slide, no máximo uma ilustração pequena num canto livre, ou nenhuma.
- Os dados dos grupos ficam em `slides.ts` (array de grupos, cada um com `nome` e `itens: { nome, arquivo }[]`).

## 6. Checklist de design

Antes de considerar o design pronto, confira em todos os slides:

- [ ] Parece o template descrito: fundo escuro texturizado, ilustrações de cinema à mão nos cantos, títulos Heebo claros à esquerda.
- [ ] Usa **só as cores da seção 4.3**. Nenhum marrom, bege ou azul do template original.
- [ ] O centro do slide é limpo: nenhuma ilustração atrás de texto ou sobre imagens do projeto.
- [ ] As ilustrações variam de posição entre os slides e não cobrem os elementos fixos.
- [ ] **"Equipe_03" aparece só uma vez** (rodapé), além do "Fonte:" quando ele existe no texto original.
- [ ] Os elementos fixos estão pequenos, discretos e na mesma posição em todos os slides.
- [ ] O texto é confortável de ler de longe, num projetor.
- [ ] No slide 12, as 20 logos estão todas com o mesmo tamanho e nos 6 grupos certos, com o Teams em "Gestão, documentação e entregas".

## 7. Funcionalidades

### 7.1 Navegação

- Um slide por vez.
- Próximo: `→`, `↓`, `Espaço`, `PageDown`, `Enter` e clique na metade direita. Anterior: `←`, `↑`, `PageUp`, `Backspace` e clique na metade esquerda.
- `Home` vai para o slide 1 e `End` para o 41. `F` liga e desliga a tela cheia.
- Gesto de deslizar em telas de toque.
- Slide atual no hash (`/#12`). Abrir `/#12` vai direto ao slide 12, e o botão voltar do navegador funciona.
- `PageUp`/`PageDown` precisam funcionar, porque são as teclas dos passadores de slide.
- Sem barra de progresso: o número `07 / 41` no rodapé já basta.
- O cursor some depois de 2 segundos parado e volta ao mexer o mouse.

### 7.2 QR code (slide 35 — Documentação)

- Gerado no build com `qrcode`, como SVG inline, a partir de `PDF_DOCUMENTACAO_URL` em `src/data/config.ts`:
  `https://drive.google.com/file/d/1I2wo4Wl-f6QYIyzJWuabomuLYP0WesJR/view?usp=sharing`
- Módulos em `fundo` sobre `claro`, quiet zone de pelo menos 4 módulos, correção de erro `M`, cerca de 440×440 px no canvas.
- Também é um link clicável que abre o PDF numa nova aba.
- No slide aparece só o título "Documentação:" e o QR code, sem texto explicativo.

### 7.3 Slide 36 — Percentual de Conclusão (85%)

**Gráfico (lado esquerdo do slide, cerca de 40% da largura):**

- SVG feito à mão, sem biblioteca. Pizza no estilo dos gráficos do template, chapada, sem efeitos.
  - **Concluído — 85%** em `vermelho`;
  - **Não concluído — 15%** em `rosado`.
- Abaixo ou ao lado da pizza, os rótulos: "Concluído" com "85%" grande em Heebo 700 `claro` embaixo, e "Não concluído" com "15%" grande em Heebo 700 `rosado` embaixo.
- O valor fica em `src/data/config.ts` (`PERCENTUAL_CONCLUIDO = 85`) e o restante (15%) é calculado. O gráfico se ajusta sozinho se o valor mudar.

**Texto (lado direito do slide, cerca de 60% da largura):**

1. **Motivo do percentual:** um parágrafo curto no topo, em DM Sans 26–28 px, cor `claro-suave`, com o texto exato da seção 8.
2. Abaixo, **duas colunas lado a lado**, com a mesma largura:
   - **"O que foi feito"** à esquerda: título em Heebo 700, 28–32 px, cor `claro`; itens em DM Sans 22–24 px, cor `claro-suave`, cada um com um marcador de **check (✓)** em `vermelho`;
   - **"O que falta fazer"** à direita: título em Heebo 700, 28–32 px, cor `claro`; itens em DM Sans 22–24 px, cor `claro-suave`, cada um com um marcador de **círculo vazado** em `rosado`.
   - Itens separados por linhas finas `claro-suave` a 20%, com espaçamento confortável.
- Textos exatamente como na seção 8, na ordem dada.
- Tudo precisa caber sem rolagem. Se faltar espaço, reduza o gráfico antes de reduzir o texto (mínimo de 22 px nos itens).
- Neste slide, nenhuma ilustração ou só uma pequena num canto livre.
- Os textos ficam em `slides.ts` (campos `motivo`, `feito: string[]` e `falta: string[]`).

### 7.4 Versão para PDF (`/imprimir`)

- Todos os 41 slides em sequência, um por página, com o mesmo visual (fundo, textura, ilustrações, elementos fixos), sem navegação, sem transição e sem cursor escondido.
- `@page { size: 1920px 1080px; margin: 0; }`, `break-after: page` e `print-color-adjust: exact`.
- `Ctrl + P → Salvar como PDF` gera 41 páginas idênticas à apresentação, com QR code e gráfico.

### 7.5 Acessibilidade

- Cada slide é um `<section aria-label="Slide N de 41">`. Os slides inativos ficam com `aria-hidden="true"` e `inert`.
- Ilustrações decorativas com `aria-hidden="true"`.
- Contraste adequado: texto `claro`/`claro-suave` sobre `fundo`.
- Sem erros nem avisos no console.

## 8. Conteúdo dos slides (copiar EXATAMENTE)

O conteúdo fica em `src/data/slides.ts`, num array tipado (`{ numero, tipo, titulo?, subtitulo?, texto?, itens?, tabela?, imagens?, fonte? }`). Os componentes leem desse arquivo; nenhum texto de slide fica escrito direto num componente. **Confira se o `slides.ts` atual está idêntico ao texto abaixo**, caractere por caractere, e corrija qualquer diferença. O que está entre parênteses, como *(imagem: …)*, é instrução e não aparece no slide.

---

**Slide 1** — tipo `capa`
Curso: Desenvolvimento de Sistemas Integrado ao Ensino Médio
Bimestre: 3° de 2026
Componente Curricular: Desenvolvimento de Sistemas
Conceitos: Orientação a Objetos, Java e Banco de Dados
Metodologia: Metodologias Ágeis - Scrumban
Professor Orientador: Paulo Rogério Neves de Oliveira / Jonathas Cavalaro de Oliveira

**Slide 2** — tipo `equipe`
Anderson Melo do Nascimento
Arthur Augusto de Santana
Fabricio do Nascimento Nunes
Luiz Gustavo Nogueira de Quadros
Matheus dos Santos Ferreira

**Slide 3** — tipo `sumario`
Problematização
Solução
Público-alvo
Objetivos
Justificativa
Metodologias
Tecnologias
Levantamento de Requisitos
Requisitos: Funcionais e Não Funcionais
Protótipos: Baixa, Média e Alta Definição
Diagramas UML: Caso de Uso e Classe
Projeto de Banco de Dados: Conceitual e Lógico
Documentação
Percentual de Conclusão
Desafios
Hard Skills
Soft Skills
Conclusão
Bibliografia

**Slide 4** — tipo `definicao`
Título: Problematização:
Texto: O gerenciamento de um cinema envolve o controle de produtos disponíveis no estoque e das informações dos clientes cadastrados. A falta de organização desses dados pode dificultar as consultas, causar desatualizações nas informações e tornar a geração de relatórios mais trabalhosa.

**Slide 5** — tipo `definicao`
Título: Solução:
Texto: Foi desenvolvido um sistema desktop em Java para integrar o gerenciamento de clientes e estoque. A aplicação utiliza Swing, MySQL, JDBC e arquitetura de três camadas para garantir organização, segurança e confiabilidade.

**Slide 6** — tipo `definicao`
Título: Público-Alvo:
Texto: O sistema é destinado principalmente a cinemas de pequeno e médio porte, auxiliando funcionários e responsáveis pela administração no controle das informações de estoque, clientes e relatórios.

**Slide 7** — tipo `definicao`
Título: Objetivos Gerais:
Texto: Desenvolver um sistema desktop para gerenciar as operações de estoque de um cinema, como gerenciar produtos, clientes e gerar relatórios.

**Slide 8** — tipo `definicao`
Título: Objetivos Específicos:
Texto: Implementar banco de dados, interface gráfica e controle de acesso, além dos módulos de gerenciamento, cliente, estoque e relatórios.

**Slide 9** — tipo `definicao`
Título: Justificativa:
Texto: A criação do sistema se justifica pela necessidade de reduzir erros e facilitar o controle das operações de um cinema. A solução centraliza informações, agiliza processos e fornece dados confiáveis para auxiliar na gestão e na tomada de decisões.

**Slide 10** — tipo `definicao`
Título: Metodologias:
Texto: Metodologias ágeis são abordagens de desenvolvimento que priorizam a flexibilidade, a colaboração e a entrega contínua de resultados. Elas permitem adaptar o projeto às mudanças e melhorar a solução por meio de ciclos de desenvolvimento e acompanhamento constante.

**Slide 11** — tipo `definicao`
Título: Scrumban:
Texto: O desenvolvimento do CineDesk utilizou o Scrumban, combinando a organização de sprints do Scrum com o fluxo contínuo do Kanban. As atividades foram gerenciadas pelo Notion, com entregas via Teams e versionamento pelo GitHub.

**Slide 12** — tipo `tecnologias`
Título: Tecnologias:
*(6 grupos com as 20 tecnologias, exatamente como na tabela da seção 5.5: nomes dos grupos, nomes exibidos das tecnologias, arquivos e ordem.)*

**Slide 13** — tipo `definicao`
Título: Levantamento de Requisitos:
Texto: O levantamento de requisitos é o processo de identificar e documentar as necessidades, expectativas e funcionalidades que o sistema deve atender. Ele serve como base para orientar o desenvolvimento e garantir que a solução esteja de acordo com os objetivos do projeto.

**Slide 14** — tipo `definicao`
Título: Requisitos Funcionais:
Texto: Requisitos funcionais definem o que um sistema deve fazer, especificando as funções, ações e serviços que ele deve oferecer aos usuários. Eles descrevem os comportamentos e operações esperados do sistema.

**Slide 15** — tipo `tabela`
Título: Principais Requisitos Funcionais:
| Requisito | [RF01] Fazer Login |
| Requisito | [RF03] Cadastrar Cliente |
| Requisito | [RF07] Cadastrar Produto |
| Requisito | [RF11] Registrar Entrada de Estoque |
| Requisito | [RF12] Gerar Relatório de Produtos |
| Requisito | [RF13] Gerar Relatório de Clientes |
Fonte: Equipe_03 (Etec Uirapuru, 2026)

**Slide 16** — tipo `definicao`
Título: Requisitos Não Funcionais:
Texto: Requisitos não funcionais definem como o sistema deve funcionar, estabelecendo características e condições como segurança, desempenho, usabilidade, confiabilidade e tecnologias utilizadas.

**Slide 17** — tipo `tabela`
Título: Principais Requisitos Não Funcionais:
| Requisito | [RNF01] Desenvolvido em Java com interface gráfica em Swing |
| Requisito | [RNF02] Persistência em MySQL acessada via JDBC |
| Requisito | [RNF03] Implementação do padrão DAO para todas as entidades |
| Requisito | [RNF04] Interface navegável e intuitiva para uso no dia a dia |
| Requisito | [RNF06] Mensagem de confirmação antes de ações destrutivas |
| Requisito | [RNF11] Integridade dos dados |
Fonte: Equipe_03 (Etec Uirapuru, 2026)

**Slide 18** — tipo `definicao`
Título: Prototipagem:
Texto: Os protótipos são representações visuais do sistema que permitem planejar e validar sua interface antes do desenvolvimento. Eles ajudam a definir a organização das telas, a navegação e a experiência do usuário, reduzindo erros e facilitando ajustes durante o projeto.

**Slide 19** — tipo `definicao`
Título: Protótipos - Baixa Definição:
Texto: Protótipos de baixa definição são representações simples e iniciais da interface, geralmente com poucos detalhes visuais. Eles ajudam a definir a estrutura das telas, a disposição dos elementos e a navegação do sistema.

**Slide 20** — tipo `tres-imagens`
Título: Protótipos - Baixa Definição:
- Tela - Início *(imagem: `prototipo-baixa/tela-inicio.png`)*
- Tela - Produto *(imagem: `prototipo-baixa/tela-produto.png`)*
- Tela - Adicionar Produto *(imagem: `prototipo-baixa/tela-add-produto.png`)*
Fonte: Equipe_03 (Etec Uirapuru, 2026)

**Slide 21** — tipo `definicao`
Título: Protótipos - Média Definição:
Texto: Protótipos de média definição apresentam maior nível de detalhamento, incluindo elementos visuais, organização dos componentes e parte da navegação. Eles permitem avaliar melhor a estrutura e a experiência de uso antes da implementação.

**Slide 22** — tipo `tres-imagens`
Título: Protótipos - Média Definição:
- Tela - Início *(imagem: `prototipo-media/tela-inicio.png`)*
- Tela - Produto *(imagem: `prototipo-media/tela-produto.png`)*
- Tela - Adicionar Produto *(imagem: `prototipo-media/tela-add-produto.png`)*
Fonte: Equipe_03 (Etec Uirapuru, 2026)

**Slide 23** — tipo `definicao`
Título: Protótipos - Alta Definição:
Texto: Protótipos de alta fidelidade são representações mais próximas do sistema final, apresentando detalhes visuais, cores, tipografia, componentes e interações. Eles permitem validar a aparência e o funcionamento da interface antes do desenvolvimento.

**Slide 24** — tipo `tres-imagens`
Título: Protótipos - Alta Definição:
- Tela - Início *(imagem: `prototipo-alta/tela-inicio.png`)*
- Tela - Produto *(imagem: `prototipo-alta/tela-produto.png`)*
- Tela - Adicionar Produto *(imagem: `prototipo-alta/tela-add-produto.png`)*
Fonte: Equipe_03 (Etec Uirapuru, 2026)

**Slide 25** — tipo `definicao`
Título: Diagramas UML:
Texto: Os diagramas UML são representações visuais utilizadas para modelar e documentar a estrutura e o funcionamento de um sistema. Eles facilitam a compreensão do projeto e auxiliam na comunicação entre os envolvidos no desenvolvimento.

**Slide 26** — tipo `definicao`
Título: Diagramas UML - Casos de Uso:
Texto: O Diagrama de Caso de Uso representa as funcionalidades do sistema e a interação dos usuários com elas. Ele permite identificar os atores, suas responsabilidades e os principais processos que o sistema deve realizar.

**Slide 27** — tipo `imagem`
Título: Diagramas UML - Casos de Uso_01:
*(imagem: `diagramas/diagrama-UML_Casos-de-uso-01.png`)*
Fonte: Equipe_03 (Etec Uirapuru, 2026)

**Slide 28** — tipo `imagem`
Título: Diagramas UML - Casos de Uso_02:
*(imagem: `diagramas/diagrama-UML_Casos-de-uso-02.png`)*
Fonte: Equipe_03 (Etec Uirapuru, 2026)

**Slide 29** — tipo `definicao`
Título: Diagramas UML - Classe:
Texto: O Diagrama de Classe representa a estrutura do sistema, apresentando suas classes, atributos, métodos e relacionamentos. Ele serve como base para organizar e orientar a implementação do código da aplicação.

**Slide 30** — tipo `imagem`
Título: Diagramas UML - Classe:
*(imagem: `diagramas/diagrama-UML_Classe.png`)*
Fonte: Equipe_03 (Etec Uirapuru, 2026)

**Slide 31** — tipo `definicao`
Título: Projeto de Banco de Dados - Conceitual:
Texto: O modelo conceitual representa as principais informações do sistema e seus relacionamentos de forma independente da tecnologia utilizada. Ele permite visualizar entidades, atributos e relações, servindo como base para a estruturação do banco de dados.

**Slide 32** — tipo `imagem`
Título: Projeto de Banco de Dados - Conceitual:
Subtítulo: Modelo Conceitual de Banco de Dados
*(imagem: `db/Modelo-conceitual.png`)*
Fonte: Equipe_03 (Etec Uirapuru, 2026)

**Slide 33** — tipo `definicao`
Título: Projeto de Banco de Dados - Lógico:
Texto: O modelo lógico detalha a estrutura do banco de dados, definindo tabelas, campos, chaves primárias e estrangeiras. Ele estabelece como os dados serão organizados e relacionados dentro do banco de dados relacional.

**Slide 34** — tipo `imagem`
Título: Projeto de Banco de Dados - Lógico:
Subtítulo: Modelo Lógico de Banco de Dados
*(imagem: `db/Modelo-logico.png`)*
Fonte: Equipe_03 (Etec Uirapuru, 2026)

**Slide 35** — tipo `qrcode`
Título: Documentação:
*(QR code para `PDF_DOCUMENTACAO_URL`, ver seção 7.2. Nenhum outro texto.)*

**Slide 36** — tipo `grafico`
Título: Percentual de Conclusão:
*(gráfico de pizza, ver seção 7.3)*
Rótulos do gráfico: Concluído / 85% — Não concluído / 15%

Motivo: A documentação, a modelagem e a maior parte da codificação do sistema já foram concluídas. Os 15% restantes correspondem às etapas finais de testes, ajustes e entrega.

O que foi feito
- Levantamento e documentação dos requisitos
- Protótipos de baixa, média e alta definição
- Diagramas UML de casos de uso e de classe
- Modelos conceitual, lógico e físico do banco de dados
- Organização do projeto com Scrumban
- Telas do sistema em Java Swing
- Cadastro de clientes e de produtos
- Registro de entrada de estoque
- Conexão com o banco MySQL via JDBC e padrão DAO

O que falta fazer
- Geração dos relatórios de produtos e de clientes
- Testes finais e correção de erros
- Validações e mensagens de confirmação
- Ajustes finais de interface
- Entrega da versão final

**Slide 37** — tipo `lista`
Título: Desafios:
Trabalho em equipe
Comunicação
Prazo de entrega
Divisão de tarefas
Aprender enquanto havia tarefas

**Slide 38** — tipo `definicao`
Título: Hard Skills:
Texto: Hard Skills são conhecimentos e habilidades técnicas que podem ser aprendidos, praticados e avaliados, como programação, uso de ferramentas e domínio de tecnologias. São importantes porque permitem executar tarefas específicas com competência e aplicar conhecimentos de forma prática.

**Slide 39** — tipo `definicao`
Título: Soft Skills:
Texto: Soft Skills são habilidades comportamentais relacionadas à forma como uma pessoa se comunica, trabalha e lida com situações no ambiente profissional. São importantes para melhorar a colaboração, a comunicação, a organização e a resolução de problemas.

**Slide 40** — tipo `definicao`
Título: Conclusão:
Texto: O desenvolvimento do CineDesk demonstrou a aplicação prática de conceitos de engenharia de software, resultando em um sistema organizado, seguro e integrado. A solução contribui para otimizar o gerenciamento estoque, reduzindo falhas e fornecendo informações confiáveis para a gestão do cinema.

**Slide 41** — tipo `referencias`
Título: Referências:

ABINPET. História. [S. l.]: Abinpet, [s.d.]. Disponível em: http://abinpet.org.br/historia/. Acesso em: 12 set. 2026.

ALVES, William Pereira. Construindo uma aplicação web completa com PHP e MySQL. 1. ed. São Paulo: Novatec, 2018. 516 p. DEVMEDIA. MER e DER: modelagem de bancos de dados. [S. l.]: DevMedia, [s.d.]. Disponível em: https://www.devmedia.com.br/mer-e-der-modelagem-de-bancos-de-dados/14332. Acesso em: 12 set. 2026.

FRANÇA, Thaís. Modelagem conceitual de banco de dados: entidades, relacionamentos e atributos. [S. l.]: Medium, 22 nov. 2023. Disponível em: https://medium.com/@francethais/modelagem-de-banco-de-dados-entidades-relacionamentos-e-atributos-cada1a6e63d0. Acesso em: 12 set. 2026.

GUDWIN, Ricardo R. Engenharia de software: uma visão prática. 2. ed. Campinas: DCA-FEEC-UNICAMP, 2015. Disponível em: . Acesso em: 12 set. 2026.

IBM. Diagramas de classes. [S. l.], [s.d.]. Disponível em: https://www.ibm.com/docs/pt-br/rsas/7.5.0?topic=structure-class-diagrams. Acesso em: 12 set. 2026.

MODELAGEM de dados: modelo conceitual, modelo lógico e físico. Luis.blog.br, [S. l.], 2025. Disponível em: https://luis.blog.br/modelagem-de-dados-modelo-conceitual-modelo-logico-e-fisico.html. Acesso em: 12 set. 2026.

OLIVEIRA, Danielle. MER e DER: definições, banco de dados e exemplos. [S. l.]: Alura, 8 abr. 2021. Disponível em: https://www.alura.com.br/artigos/mer-e-der-funcoes. Acesso em: 12 set. 2026.

PASSARIN, Leonardo Menezes. Modelo conceitual e lógico para SEFAZ-SP. [S. l.]: Estratégia Concursos, 2 abr. 2024. Disponível em: https://www.estrategiaconcursos.com.br/blog/modelo-conceitual-logico-sefaz-sp/. Acesso em: 12 set. 2026.

SOMMERVILLE, Ian. Engenharia de software. 9. ed. São Paulo: Pearson, 2011. 595 p.

VILAVERDE, Ludmila. Infográfico: o que é design UX e por que é importante. [S. l.]: Tutano, [s.d.]. Disponível em: . Acesso em: 12 set. 2026.

*(URLs das referências são texto comum, não links. Use `overflow-wrap: anywhere` para não estourar a largura.)*

---

## 9. Organização do código

```
src/
├── assets/img/...
├── data/
│   ├── config.ts             (PDF_DOCUMENTACAO_URL, PERCENTUAL_CONCLUIDO, TOTAL_SLIDES)
│   └── slides.ts             (conteúdo tipado dos 41 slides + quais ilustrações e cantos cada slide usa)
├── components/
│   ├── SlideFrame.astro      (fundo, textura, área segura, ilustrações dos cantos)
│   ├── SlideHeader.astro     (etiqueta com as logos + cabeçalho do projeto)
│   ├── SlideFooter.astro     (Equipe_03 + número 07 / 41)
│   ├── illustrations/        (ReelIllustration, FilmStripIllustration, ProjectorIllustration,
│   │                          CameraIllustration, ClapperIllustration, FilmCansIllustration)
│   ├── layouts/              (Capa, Equipe, Sumario, Definicao, Tecnologias, Tabela,
│   │                          TresImagens, Imagem, QrCode, Grafico, Lista, Referencias)
│   ├── PieChart.astro
│   ├── QrCode.astro
│   └── Lightbox.astro
├── scripts/deck.ts           (navegação, hash, teclado, toque, tela cheia, cursor)
├── styles/global.css         (Tailwind, tokens, fontes, textura, CSS de impressão)
└── pages/
    ├── index.astro
    └── imprimir.astro
```

- A escolha das ilustrações de cada slide (quais objetos, em qual canto, tamanho e rotação) fica num campo `decoracao` em `slides.ts`, para ser fácil ajustar depois sem mexer nos componentes.
- **Apague** componentes, estilos, fontes e assets do design anterior que não forem mais usados.

## 10. Verificação final (obrigatória)

1. `npm run build` e `astro check` sem erros nem avisos.
2. Com `npm run preview`, percorra os **41 slides** um por um e confira o checklist da seção 6 em cada um.
3. Compare `slides.ts` com a seção 8, palavra por palavra. Nenhuma diferença.
4. Confirme que **"Equipe_03" aparece uma única vez por slide** (mais o "Fonte:" nos slides que o têm).
5. Teste a navegação da seção 7.1, o hash `/#N`, a tela cheia, o toque e a ampliação de imagens.
6. Leia o QR code (ou decodifique o SVG gerado) e confirme o link correto.
7. Confira o slide 36: gráfico com 85% / 15%, o motivo e as duas listas completas, sem rolagem.
8. Confira o slide 12: 20 logos, todas do mesmo tamanho, nos 6 grupos certos, e o texto novo do slide 11 ("com entregas via Teams").
9. Em `/imprimir`, `Ctrl + P → Salvar como PDF` gera 41 páginas com o visual da apresentação.
10. Com a rede em "Offline" no DevTools, tudo carrega sem nenhuma requisição externa.
11. **Não publique, não faça deploy e não faça push.**

No final, mostre um resumo curto do que mudou e qualquer decisão que você precisou tomar e que não estava neste prompt.
