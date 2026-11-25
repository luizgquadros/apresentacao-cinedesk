// Conteúdo dos 31 slides. Textos copiados exatamente do roteiro original.
// Os caminhos de imagem são relativos a src/assets/img/.

const FONTE = 'Equipe_03 (Etec Uirapuru, 2026)';

export interface ItemRotulado {
  rotulo: string;
  valor: string;
}

export interface ImagemSlide {
  arquivo: string;
  rotulo?: string;
  alt: string;
}

export interface LinhaTabela {
  requisito: string;
  descricao: string;
}

export interface Tecnologia {
  nome: string;
  arquivo: string;
}

export interface GrupoTecnologias {
  nome: string;
  itens: Tecnologia[];
}

interface SlideBase {
  numero: number;
}

export interface SlideCapa extends SlideBase {
  tipo: 'capa';
  itens: ItemRotulado[];
}
export interface SlideEquipe extends SlideBase {
  tipo: 'equipe';
  itens: string[];
}
export interface SlideSumario extends SlideBase {
  tipo: 'sumario';
  itens: string[];
}
export interface SlideDefinicao extends SlideBase {
  tipo: 'definicao';
  titulo: string;
  texto: string;
}
export interface SlideTecnologias extends SlideBase {
  tipo: 'tecnologias';
  titulo: string;
  grupos: GrupoTecnologias[];
}
export interface SlideTabela extends SlideBase {
  tipo: 'tabela';
  titulo: string;
  tabela: LinhaTabela[];
  fonte: string;
}
export interface SlideTresImagens extends SlideBase {
  tipo: 'tres-imagens';
  titulo: string;
  imagens: [ImagemSlide, ImagemSlide, ImagemSlide];
  fonte: string;
}
export interface SlideImagem extends SlideBase {
  tipo: 'imagem';
  titulo: string;
  subtitulo?: string;
  imagens: [ImagemSlide];
  fonte: string;
}
export interface SlideQrCode extends SlideBase {
  tipo: 'qrcode';
  titulo: string;
}
export interface SlideGrafico extends SlideBase {
  tipo: 'grafico';
  titulo: string;
  rotuloConcluido: string;
  rotuloNaoConcluido: string;
  tituloFeito: string;
  feito: string[];
}
export interface SlideLista extends SlideBase {
  tipo: 'lista';
  titulo: string;
  itens: string[];
}
export interface Integrante {
  nome: string;
  habilidades: string[];
}
export interface SlideSkills extends SlideBase {
  tipo: 'skills';
  titulo: string;
  integrantes: Integrante[];
}
export type IconeUsoIa = 'pergunta' | 'slides' | 'pincel' | 'codigo' | 'tarefas' | 'erro';
export interface UsoIa {
  texto: string;
  icone: IconeUsoIa;
}
export interface SlideIa extends SlideBase {
  tipo: 'ia';
  titulo: string;
  rotuloComIa: string;
  rotuloSemIa: string;
  tituloUsos: string;
  usos: UsoIa[];
}
export interface SlideAbertura extends SlideBase {
  tipo: 'abertura';
  titulo: string;
}
export interface SlideReferencias extends SlideBase {
  tipo: 'referencias';
  titulo: string;
  itens: string[];
}

export type Slide =
  | SlideCapa
  | SlideEquipe
  | SlideSumario
  | SlideDefinicao
  | SlideTecnologias
  | SlideTabela
  | SlideTresImagens
  | SlideImagem
  | SlideQrCode
  | SlideGrafico
  | SlideLista
  | SlideSkills
  | SlideIa
  | SlideAbertura
  | SlideReferencias;

export type TipoSlide = Slide['tipo'];

function telas(pasta: string, nivel: string): [ImagemSlide, ImagemSlide, ImagemSlide] {
  return [
    { rotulo: 'Tela - Início', arquivo: `${pasta}/tela-inicio.png`, alt: `Protótipo de ${nivel} — Tela Início` },
    { rotulo: 'Tela - Produto', arquivo: `${pasta}/tela-produto.png`, alt: `Protótipo de ${nivel} — Tela Produto` },
    {
      rotulo: 'Tela - Adicionar Produto',
      arquivo: `${pasta}/tela-add-produto.png`,
      alt: `Protótipo de ${nivel} — Tela Adicionar Produto`,
    },
  ];
}

export const slides: Slide[] = [
  {
    numero: 1,
    tipo: 'capa',
    itens: [
      { rotulo: 'Curso:', valor: 'Desenvolvimento de Sistemas Integrado ao Ensino Médio' },
      { rotulo: 'Bimestre:', valor: '4° de 2026' },
      { rotulo: 'Componente Curricular:', valor: 'Desenvolvimento de Sistemas' },
      { rotulo: 'Conceitos:', valor: 'Orientação a Objetos, Java e Banco de Dados' },
      { rotulo: 'Metodologia:', valor: 'Metodologias Ágeis - Scrumban' },
      {
        rotulo: 'Professor Orientador:',
        valor: 'Paulo Rogério Neves de Oliveira / Jonathas Cavalaro de Oliveira',
      },
    ],
  },
  {
    numero: 2,
    tipo: 'equipe',
    itens: [
      'Anderson Melo do Nascimento',
      'Arthur Augusto de Santana',
      'Fabricio do Nascimento Nunes',
      'Luiz Gustavo Nogueira de Quadros',
      'Matheus dos Santos Ferreira',
    ],
  },
  {
    numero: 3,
    tipo: 'sumario',
    itens: [
      'Problematização',
      'Solução',
      'Público-alvo',
      'Objetivos',
      'Justificativa',
      'Metodologias',
      'Tecnologias',
      'Levantamento de Requisitos',
      'Requisitos: Funcionais e Não Funcionais',
      'Protótipos: Baixa, Média e Alta Definição',
      'Diagramas UML: Caso de Uso e Classe',
      'Projeto de Banco de Dados: Conceitual e Lógico',
      'Documentação',
      'Percentual de Conclusão',
      'Desafios',
      'Hard Skills',
      'Soft Skills',
      'Uso de Inteligência Artificial',
      'Conclusão',
      'Bibliografia',
      'Demonstração da Aplicação',
    ],
  },
  {
    numero: 4,
    tipo: 'definicao',
    titulo: 'Problematização:',
    texto:
      'O gerenciamento de um cinema envolve o controle de produtos disponíveis no estoque e das informações dos clientes cadastrados. A falta de organização desses dados pode dificultar as consultas, causar desatualizações nas informações e tornar a geração de relatórios mais trabalhosa.',
  },
  {
    numero: 5,
    tipo: 'definicao',
    titulo: 'Solução:',
    texto:
      'Foi desenvolvido um sistema desktop em Java para integrar o gerenciamento de clientes e estoque. A aplicação utiliza Swing, MySQL, JDBC e arquitetura de três camadas para garantir organização, segurança e confiabilidade.',
  },
  {
    numero: 6,
    tipo: 'definicao',
    titulo: 'Público-Alvo:',
    texto:
      'O sistema é destinado principalmente a cinemas de pequeno e médio porte, auxiliando funcionários e responsáveis pela administração no controle das informações de estoque, clientes e relatórios.',
  },
  {
    numero: 7,
    tipo: 'definicao',
    titulo: 'Objetivos Gerais:',
    texto:
      'Desenvolver um sistema desktop para gerenciar as operações de estoque de um cinema, como gerenciar produtos, clientes e gerar relatórios.',
  },
  {
    numero: 8,
    tipo: 'definicao',
    titulo: 'Objetivos Específicos:',
    texto:
      'Implementar banco de dados, interface gráfica e controle de acesso, além dos módulos de gerenciamento, cliente, estoque e relatórios.',
  },
  {
    numero: 9,
    tipo: 'definicao',
    titulo: 'Justificativa:',
    texto:
      'A criação do sistema se justifica pela necessidade de reduzir erros e facilitar o controle das operações de um cinema. A solução centraliza informações, agiliza processos e fornece dados confiáveis para auxiliar na gestão e na tomada de decisões.',
  },
  {
    numero: 10,
    tipo: 'definicao',
    titulo: 'Metodologias:',
    texto:
      'Metodologias ágeis são abordagens de desenvolvimento que priorizam a flexibilidade, a colaboração e a entrega contínua de resultados. Elas permitem adaptar o projeto às mudanças e melhorar a solução por meio de ciclos de desenvolvimento e acompanhamento constante.',
  },
  {
    numero: 11,
    tipo: 'definicao',
    titulo: 'Scrumban:',
    texto:
      'O desenvolvimento do CineDesk utilizou o Scrumban, combinando a organização de sprints do Scrum com o fluxo contínuo do Kanban. As atividades foram gerenciadas pelo Notion, com entregas via Teams e versionamento pelo GitHub.',
  },
  {
    numero: 12,
    tipo: 'tecnologias',
    titulo: 'Tecnologias:',
    grupos: [
      {
        nome: 'Comunicação',
        itens: [
          { nome: 'Discord', arquivo: 'tecnologias/discord.png' },
          { nome: 'WhatsApp', arquivo: 'tecnologias/whatsapp.png' },
        ],
      },
      {
        nome: 'Gestão, documentação e entregas',
        itens: [
          { nome: 'Notion', arquivo: 'tecnologias/notion.png' },
          { nome: 'Word', arquivo: 'tecnologias/word.png' },
          { nome: 'Teams', arquivo: 'tecnologias/teams.png' },
        ],
      },
      {
        nome: 'Design e prototipagem',
        itens: [
          { nome: 'Figma', arquivo: 'tecnologias/figma.png' },
          { nome: 'Balsamiq', arquivo: 'tecnologias/balsamiq.png' },
          { nome: 'Canva', arquivo: 'tecnologias/canva.png' },
          { nome: 'SVG Repo', arquivo: 'tecnologias/svgrepo.svg' },
          { nome: 'logo.dev', arquivo: 'tecnologias/logodev.png' },
        ],
      },
      {
        nome: 'Diagramas e modelagem',
        itens: [
          { nome: 'Lucidchart', arquivo: 'tecnologias/lucidchart.png' },
          { nome: 'draw.io', arquivo: 'tecnologias/drawio.png' },
          { nome: 'brModelo', arquivo: 'tecnologias/brmodelo.jpeg' },
        ],
      },
      {
        nome: 'Desenvolvimento',
        itens: [
          { nome: 'Java', arquivo: 'tecnologias/java.svg' },
          { nome: 'IntelliJ IDEA', arquivo: 'tecnologias/intellij.svg' },
          { nome: 'MySQL', arquivo: 'tecnologias/mysql.svg' },
          { nome: 'Git', arquivo: 'tecnologias/git.svg' },
          { nome: 'GitHub', arquivo: 'tecnologias/github.svg' },
        ],
      },
      {
        nome: 'Inteligência artificial',
        itens: [
          { nome: 'Claude', arquivo: 'tecnologias/claude.png' },
          { nome: 'ChatGPT', arquivo: 'tecnologias/chatgpt.png' },
        ],
      },
    ],
  },
  {
    numero: 13,
    tipo: 'tabela',
    titulo: 'Principais Requisitos Funcionais:',
    tabela: [
      { requisito: 'Requisito', descricao: '[RF01] Fazer Login' },
      { requisito: 'Requisito', descricao: '[RF03] Cadastrar Cliente' },
      { requisito: 'Requisito', descricao: '[RF07] Cadastrar Produto' },
      { requisito: 'Requisito', descricao: '[RF11] Registrar Entrada de Estoque' },
      { requisito: 'Requisito', descricao: '[RF12] Gerar Relatório de Produtos' },
      { requisito: 'Requisito', descricao: '[RF13] Gerar Relatório de Clientes' },
    ],
    fonte: FONTE,
  },
  {
    numero: 14,
    tipo: 'tabela',
    titulo: 'Principais Requisitos Não Funcionais:',
    tabela: [
      { requisito: 'Requisito', descricao: '[RNF01] Desenvolvido em Java com interface gráfica em Swing' },
      { requisito: 'Requisito', descricao: '[RNF02] Persistência em MySQL acessada via JDBC' },
      { requisito: 'Requisito', descricao: '[RNF03] Implementação do padrão DAO para todas as entidades' },
      { requisito: 'Requisito', descricao: '[RNF04] Interface navegável e intuitiva para uso no dia a dia' },
      { requisito: 'Requisito', descricao: '[RNF06] Mensagem de confirmação antes de ações destrutivas' },
      { requisito: 'Requisito', descricao: '[RNF11] Integridade dos dados' },
    ],
    fonte: FONTE,
  },
  {
    numero: 15,
    tipo: 'tres-imagens',
    titulo: 'Protótipos - Baixa Definição:',
    imagens: telas('prototipo-baixa', 'baixa definição'),
    fonte: FONTE,
  },
  {
    numero: 16,
    tipo: 'tres-imagens',
    titulo: 'Protótipos - Média Definição:',
    imagens: telas('prototipo-media', 'média definição'),
    fonte: FONTE,
  },
  {
    numero: 17,
    tipo: 'tres-imagens',
    titulo: 'Protótipos - Alta Definição:',
    imagens: telas('prototipo-alta', 'alta definição'),
    fonte: FONTE,
  },
  {
    numero: 18,
    tipo: 'imagem',
    titulo: 'Diagramas UML - Casos de Uso_01:',
    imagens: [{ arquivo: 'diagramas/diagrama-UML_Casos-de-uso-01.png', alt: 'Diagrama UML de Casos de Uso — parte 1' }],
    fonte: FONTE,
  },
  {
    numero: 19,
    tipo: 'imagem',
    titulo: 'Diagramas UML - Casos de Uso_02:',
    imagens: [{ arquivo: 'diagramas/diagrama-UML_Casos-de-uso-02.png', alt: 'Diagrama UML de Casos de Uso — parte 2' }],
    fonte: FONTE,
  },
  {
    numero: 20,
    tipo: 'imagem',
    titulo: 'Diagramas UML - Classe:',
    imagens: [{ arquivo: 'diagramas/diagrama-UML_Classe.png', alt: 'Diagrama UML de Classe do CineDesk' }],
    fonte: FONTE,
  },
  {
    numero: 21,
    tipo: 'imagem',
    titulo: 'Projeto de Banco de Dados - Conceitual:',
    subtitulo: 'Modelo Conceitual de Banco de Dados',
    imagens: [{ arquivo: 'db/Modelo-conceitual.png', alt: 'Modelo conceitual do banco de dados do CineDesk' }],
    fonte: FONTE,
  },
  {
    numero: 22,
    tipo: 'imagem',
    titulo: 'Projeto de Banco de Dados - Lógico:',
    subtitulo: 'Modelo Lógico de Banco de Dados',
    imagens: [{ arquivo: 'db/Modelo-logico.png', alt: 'Modelo lógico do banco de dados do CineDesk' }],
    fonte: FONTE,
  },
  {
    numero: 23,
    tipo: 'qrcode',
    titulo: 'Documentação:',
  },
  {
    numero: 24,
    tipo: 'grafico',
    titulo: 'Percentual de Conclusão:',
    rotuloConcluido: 'Concluído',
    rotuloNaoConcluido: 'Não concluído',
    tituloFeito: 'O que foi feito',
    feito: [
      'Levantamento e documentação dos requisitos',
      'Protótipos de baixa, média e alta definição',
      'Diagramas UML e modelos do banco de dados',
      'Organização do projeto com Scrumban',
      'Telas do sistema em Java Swing',
      'Cadastro de clientes, produtos e entrada de estoque',
      'Conexão com o MySQL via JDBC e padrão DAO',
      'Geração dos relatórios de produtos, de clientes e de estoque',
      'Testes, validações e ajustes finais',
      'Entrega da versão final do CRUD',
    ],
  },
  {
    numero: 25,
    tipo: 'lista',
    titulo: 'Desafios:',
    itens: [
      'Trabalho em equipe',
      'Comunicação',
      'Prazo de entrega',
      'Divisão de tarefas',
      'Aprender enquanto havia tarefas',
    ],
  },
  {
    numero: 26,
    tipo: 'skills',
    titulo: 'Hard Skills:',
    integrantes: [
      { nome: 'Anderson Melo', habilidades: ['Codificação', 'Documentação', 'Modelagem de dados'] },
      { nome: 'Arthur Santana', habilidades: ['Codificação', 'Modelagem UML', 'Prototipagem'] },
      { nome: 'Fabricio Nunes', habilidades: ['Codificação', 'Modelagem de dados', 'Prototipagem'] },
      { nome: 'Luiz Quadros', habilidades: ['Codificação', 'Documentação', 'Modelagem UML'] },
      { nome: 'Matheus Santos', habilidades: ['Codificação', 'Design', 'Prototipagem'] },
    ],
  },
  {
    numero: 27,
    tipo: 'skills',
    titulo: 'Soft Skills:',
    integrantes: [
      { nome: 'Anderson Melo', habilidades: ['Comunicação', 'Gestão de tempo', 'Trabalho em equipe'] },
      { nome: 'Arthur Santana', habilidades: ['Adaptabilidade', 'Gestão de tempo', 'Trabalho em equipe'] },
      { nome: 'Fabricio Nunes', habilidades: ['Comunicação', 'Gestão de tempo', 'Trabalho em equipe'] },
      { nome: 'Luiz Quadros', habilidades: ['Comunicação', 'Tomada de decisão', 'Trabalho em equipe'] },
      { nome: 'Matheus Santos', habilidades: ['Comunicação', 'Liderança', 'Trabalho em equipe'] },
    ],
  },
  {
    numero: 28,
    tipo: 'ia',
    titulo: 'Uso de Inteligência Artificial:',
    rotuloComIa: 'Com apoio de IA',
    rotuloSemIa: 'Desenvolvido pela equipe',
    tituloUsos: 'Onde a IA foi utilizada',
    usos: [
      { texto: 'Dúvidas sobre os requisitos', icone: 'pergunta' },
      { texto: 'Apresentação de slides', icone: 'slides' },
      { texto: 'Ideias de design', icone: 'pincel' },
      { texto: 'Construção da lógica', icone: 'codigo' },
      { texto: 'Organização de tarefas', icone: 'tarefas' },
      { texto: 'Correção de erros', icone: 'erro' },
    ],
  },
  {
    numero: 29,
    tipo: 'definicao',
    titulo: 'Conclusão:',
    texto:
      'O desenvolvimento do CineDesk demonstrou a aplicação prática de conceitos de engenharia de software, resultando em um sistema organizado, seguro e integrado. A solução contribui para otimizar o gerenciamento estoque, reduzindo falhas e fornecendo informações confiáveis para a gestão do cinema.',
  },
  {
    numero: 30,
    tipo: 'referencias',
    titulo: 'Referências:',
    itens: [
      'ABINPET. História. [S. l.]: Abinpet, [s.d.]. Disponível em: http://abinpet.org.br/historia/. Acesso em: 12 set. 2026.',
      'ALVES, William Pereira. Construindo uma aplicação web completa com PHP e MySQL. 1. ed. São Paulo: Novatec, 2018. 516 p. DEVMEDIA. MER e DER: modelagem de bancos de dados. [S. l.]: DevMedia, [s.d.]. Disponível em: https://www.devmedia.com.br/mer-e-der-modelagem-de-bancos-de-dados/14332. Acesso em: 12 set. 2026.',
      'FRANÇA, Thaís. Modelagem conceitual de banco de dados: entidades, relacionamentos e atributos. [S. l.]: Medium, 22 nov. 2023. Disponível em: https://medium.com/@francethais/modelagem-de-banco-de-dados-entidades-relacionamentos-e-atributos-cada1a6e63d0. Acesso em: 12 set. 2026.',
      'GUDWIN, Ricardo R. Engenharia de software: uma visão prática. 2. ed. Campinas: DCA-FEEC-UNICAMP, 2015. Disponível em: . Acesso em: 12 set. 2026.',
      'IBM. Diagramas de classes. [S. l.], [s.d.]. Disponível em: https://www.ibm.com/docs/pt-br/rsas/7.5.0?topic=structure-class-diagrams. Acesso em: 12 set. 2026.',
      'MODELAGEM de dados: modelo conceitual, modelo lógico e físico. Luis.blog.br, [S. l.], 2025. Disponível em: https://luis.blog.br/modelagem-de-dados-modelo-conceitual-modelo-logico-e-fisico.html. Acesso em: 12 set. 2026.',
      'OLIVEIRA, Danielle. MER e DER: definições, banco de dados e exemplos. [S. l.]: Alura, 8 abr. 2021. Disponível em: https://www.alura.com.br/artigos/mer-e-der-funcoes. Acesso em: 12 set. 2026.',
      'PASSARIN, Leonardo Menezes. Modelo conceitual e lógico para SEFAZ-SP. [S. l.]: Estratégia Concursos, 2 abr. 2024. Disponível em: https://www.estrategiaconcursos.com.br/blog/modelo-conceitual-logico-sefaz-sp/. Acesso em: 12 set. 2026.',
      'SOMMERVILLE, Ian. Engenharia de software. 9. ed. São Paulo: Pearson, 2011. 595 p.',
      'VILAVERDE, Ludmila. Infográfico: o que é design UX e por que é importante. [S. l.]: Tutano, [s.d.]. Disponível em: . Acesso em: 12 set. 2026.',
    ],
  },
  {
    numero: 31,
    tipo: 'abertura',
    titulo: 'Demonstração da Aplicação',
  },
];


