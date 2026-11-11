/* Conteúdo do portfólio de Marcell Felipe.
   Para editar textos, links ou imagens, altere apenas este arquivo. */

const PB = (r) => `https://app.powerbi.com/view?r=${r}`;
const DRIVE = (id) => `https://drive.google.com/file/d/${id}/view`;
const DRIVE_EMBED = (id) => `https://drive.google.com/file/d/${id}/preview`;

window.PORTFOLIO = {
  person: {
    name: "Marcell Felipe",
    fullName: "Marcell Felipe de Paula Oliveira",
    role: "Supervisor de Dados",
    tagline: "Analytics Engineering · Data Strategy · Dashboards · Agentes de IA",
    location: "Belo Horizonte, MG · Brasil",
    photo: "img/foto-perfil.png",
    bioTitle: "Quem sou eu",
    bio: "Olá! Sou Marcell Felipe, Analista de Dados. Iniciei minha carreira na Engenharia de Dados, uma área onde as responsabilidades incluem a criação e manutenção de arquiteturas de big data, garantindo a integração entre diferentes sistemas e fontes de dados. Aqui, me especializei em processos de ETL (Extração, Transformação e Carga), que são fundamentais para transformar dados brutos em informações estruturadas e utilizáveis. Também trabalhei na otimização de consultas e no design de bancos de dados, garantindo o armazenamento eficiente e a recuperação rápida de dados. E como Analista de Dados, passei a focar mais na interpretação e visualização dessas informações. Aqui, minha tarefa é identificar tendências, criar modelos preditivos e contar histórias a partir dos dados. Utilizando ferramentas de visualização e técnicas estatísticas, transformo grandes volumes de informação em insights claros e acionáveis, sempre apresentados de maneira envolvente e visualmente impactante. Em cada etapa, desenvolvi uma combinação única de precisão técnica com criatividade, que me permite oferecer análises avançadas e extrair informações valiosas. Convido-o a explorar meu portfólio para conhecer exemplos do meu trabalho. Estou à disposição para discutir como posso ajudar a levar seu projeto ao sucesso.",
    social: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/marcell-felipe-de-paula-oliveira-219525199/" },
      { label: "GitHub", url: "https://github.com/Pantercode/" }
    ],
    skillsImage: "img/biografia-1.jpg",
    skills: ["Metabase","Excel","Power BI","Power Automate","Power Apps","Python","NumPy","Pandas","Seaborn","Plotly","Matplotlib","Google Cloud","GA4","BigQuery","Looker","AWS S3","AWS Redshift","Microsoft Azure","Data Factory","SQL","MySQL","PostgreSQL","PySpark","dbt","Databricks","Figma","CSS","HTML","JavaScript","Google Apps Script"]
  },

  career: [
    { company: "Shopee", role: "Supervisor de Dados", period: "ago/2026 – atual", place: "Contagem, MG",
      text: "Contratado para liderar a área técnica de dados do SOC MG4 (estrutura COP), responsável pela liderança do time de dados e pela inteligência analítica de People, HSE, Planning, PCP e Operação Logística (Inbound, Esteiras/Sorting e Outbound).",
      stack: ["DataSuite", "Presto SQL", "Python", "Google Apps Script", "SeaTalk"] },
    { company: "DUX Company", role: "Analista de BI | Analytics Engineer", period: "set/2024 – ago/2026", place: "Remoto",
      text: "Arquitetura das camadas Gold e Diamond do Data Lakehouse com dbt e CI/CD, suportando FP&A, Crédito e Cobrança, Logística, S&OP, Contabilidade e Controladoria, Custos e CX.",
      stack: ["dbt", "BigQuery", "PySpark", "Databricks", "Power BI", "Looker Studio"] },
    { company: "Neobpo", role: "Analista de BI (Analytics Engineer)", period: "jul/2024 – set/2024", place: "Remoto",
      text: "Projetos de dados para clientes corporativos como Bunge, Audi, Record e Simplic: modelagem SQL integrada ao Databricks, automações em Python e painéis em Power BI.",
      stack: ["SQL", "Databricks", "Python", "Power BI"] },
    { company: "Saúde Petrobras", role: "Analista de Dados de Saúde Pleno", period: "jan/2024 – ago/2024", place: "Remoto",
      text: "Health Analytics: normalização de dados hospitalares, processamento com PySpark, KPIs de saúde em Power BI e modelos de machine learning em Python.",
      stack: ["PySpark", "Power BI", "Python", "Scikit-learn"] },
    { company: "Vale", role: "Especialista de Dados II", period: "abr/2023 – set/2023", place: "Nova Lima, MG",
      text: "Analytics em projetos de reestruturação: PySpark e Databricks, KPIs estratégicos em Power BI e automações com Power Apps, Power Automate e VBA.",
      stack: ["PySpark", "Databricks", "Power BI", "Power Platform"] },
    { company: "Linkmetric", role: "Analista de Dados", period: "jan/2023 – mai/2023", place: "Remoto",
      text: "ETL em PL-SQL, T-SQL e Python, marketing analytics com Google Analytics e dashboards em Power BI, Looker, Tableau e MicroStrategy.",
      stack: ["SQL", "Python", "Google Analytics", "Power BI"] },
    { company: "BlueShift Brasil", role: "Analista de Dados I", period: "jun/2022 – mar/2023", place: "Remoto",
      text: "Plataforma de gestão de reclamações com Azure Functions, CosmosDB, Docker, Kubernetes e Power Platform; soluções ponta a ponta para varejo.",
      stack: ["Azure", "CosmosDB", "Docker", "Power BI"] },
    { company: "RD Saúde", role: "Supervisor de Loja", period: "out/2020 – jun/2022", place: "Ipatinga, MG",
      text: "Gestão da filial: liderança de equipe, metas comerciais, gestão financeira e conformidade fiscal, com acompanhamento por indicadores.",
      stack: ["Liderança", "Gestão por indicadores"] }
  ],

  ai: {
    name: "Marcell.AI",
    greeting: "Oi! Sou o assistente do portfólio do Marcell. Posso explicar qualquer projeto, a stack que ele usa ou a trajetória dele. O que você quer saber?",
    suggestions: ["Quais projetos usam IA generativa?", "Quais idiomas ele fala?", "Me mostra um dashboard de Power BI", "Resuma a trajetória do Marcell"]
  },

  certifications: [
    { name: "PL-900", issuer: "Microsoft", img: "img/biografia-2.jpg" },
    { name: "DP-900", issuer: "Microsoft", img: "img/biografia-3.jpg" },
    { name: "AZ-900", issuer: "Microsoft", img: "img/biografia-4.jpg" },
    { name: "Scrum", issuer: "CertiProf", img: "img/biografia-5.jpg" },
    { name: "Business Intelligence", issuer: "CertiProf", img: "img/biografia-6.jpg" },
    { name: "Lean Six Sigma", issuer: "CertiProf", img: "img/biografia-7.jpg" },
    { name: "Databricks Lakehouse", issuer: "Databricks", img: "img/biografia-8.jpg" },
    { name: "Google Analytics", issuer: "Google", img: "img/biografia-9.jpg" }
  ],

  courses: [
    { name: "Xperium Power BI · Trilha Express", detail: "Trilha 1 · Power BI Fundamentals", url: DRIVE("1LEW-XuG6qz8kLv1rJj-G37D6zHwX_pM6"), kind: "PDF" },
    { name: "Excel Expert", detail: "Certificado", url: DRIVE("1LiZeT4yVqPE0kAXIDlai_m7ZHwCvAQ3m"), kind: "PDF" },
    { name: "Xperium Power BI · Trilha Completa", detail: "Curso Completo de Power BI", url: DRIVE("1q_pBMf7f0yVimiXypDLpppZO3xLQQfiz"), kind: "PDF" },
    { name: "MySQL · Trilha Completa", detail: "Formação SQL com MySQL Server da Oracle · Alura", url: "https://cursos.alura.com.br/degree/certificate/4f8eacf5-4f49-473d-b107-3efc07273b26", kind: "Alura", img: "img/biografia-10.jpg" },
    { name: "SQL Server · Trilha Completa", detail: "Formação SQL com Microsoft SQL Server 2017 · Alura", url: "https://cursos.alura.com.br/degree/certificate/831bac9a-adbc-42b7-a7d7-3608bb203162", kind: "Alura", img: "img/biografia-11.jpg" },
    { name: "Python · Trilha Completa", detail: "Formação Aprenda a programar em Python com Orientação a Objetos · Alura", url: "https://cursos.alura.com.br/degree/certificate/70ef1435-e4d9-4926-818f-5388525d19c8", kind: "Alura", img: "img/biografia-12.jpg" }
  ],

  categories: [
    { id: "powerbi", label: "Power BI", icon: "chart" },
    { id: "python", label: "Python", icon: "code" },
    { id: "sql", label: "SQL", icon: "db" },
    { id: "appscript", label: "Agentes de IA · Apps Script", icon: "spark" },
    { id: "etl-ia", label: "ETL ao Dash com IA", icon: "flow" },
    { id: "langchain", label: "LangChain · JS · Gemini", icon: "spark" },
    { id: "dbt", label: "dbt Core", icon: "layers" },
    { id: "looker", label: "Looker Studio", icon: "chart" },
    { id: "metabase", label: "Metabase", icon: "chart" }
  ],

  projects: [
    /* ===================== POWER BI ===================== */
    {
      id: "crime-mg", cat: "powerbi", title: "Crime em Minas Gerais",
      summary: "Realizei uma análise detalhada através de uma API pública disponível pelo estado no site, onde foram captados dados de 12 anos referentes a crimes, sendo eles estupros, homicídios, roubos e sequestros, e o total de registros feitos em toda Minas, divididos por cada segmento. O intuito aqui é quantificar os crimes e não denegrir o estado nem sua população.",
      stack: ["Power BI", "API pública", "DAX"],
      embed: { type: "powerbi", url: PB("eyJrIjoiMTA4MGI5MDgtNzg5ZS00ODRkLTk3Y2EtYzA3OGNlMmFhMzViIiwidCI6ImUzMTEwYjIyLTMyMGEtNGVkNy1hNzcxLWFhZWQ1ZWRmYTE4NCJ9") },
      links: [{ label: "Fonte dos dados (CGE-MG)", url: "https://homologa.cge.mg.gov.br/dataset/crimes-violentos" }],
      sections: [
        { h: "1. Registros", p: ["Realizamos o levantamento do total de boletins de ocorrência por cidade, conduzindo análises diárias, mensais e anuais. Além disso, fizemos um comparativo entre o ano atual e o ano anterior, relacionando os dados mês a mês."] },
        { h: "2. Estupros", p: ["Realizamos uma análise abrangente dos casos de estupro, incluindo tanto as tentativas quanto os atos consumados. Esta análise detalhada abrange todas as possíveis formas do crime de estupro. Os dados foram examinados anualmente e também desagregados por cidade, proporcionando uma visão ampla e detalhada desses incidentes."] },
        { h: "3. Homicídios", p: ["Nesta seção, analisamos a quantidade de homicídios tentados e consumados. Realizamos comparações diárias, mensais e anuais, desagregando os dados por município para obter um entendimento mais detalhado desses eventos."] },
        { h: "4. Sequestros", p: ["Neste segmento, conduzimos uma análise detalhada e um acompanhamento anual dos casos de sequestros tentados. Esta análise inclui uma média diária, mensal e anual por município, bem como uma desagregação dos dados por cidade, para oferecer uma visão mais completa sobre a incidência de sequestros."] },
        { h: "5. Roubos", p: ["Realizamos um levantamento detalhado de roubos, tanto tentados quanto consumados. A análise engloba dados anuais, mensais e trimestrais, incluindo também a percentagem e a média de roubos. Este estudo oferece um panorama abrangente sobre a incidência desses crimes."] },
        { h: "6. Geral", p: ["Por fim, realizamos uma análise geral englobando todos os tipos de crimes, relacionados à quantidade total de ocorrências. Esta análise permite examinar o total, o valor máximo, e a média percentual dos crimes, com dados detalhados diariamente, mensalmente e anualmente."] }
      ]
    },
    {
      id: "ambev", cat: "powerbi", title: "Análise Financeira AMBEV",
      summary: "Realizei uma análise detalhada do relatório em PDF fornecido pela Ambev, com foco específico nos dados da Demonstração do Resultado do Exercício (DRE), abrangendo custos, receita bruta e outros elementos financeiros pertinentes. É fundamental destacar que a análise foi executada de forma objetiva e imparcial, concentrando-se exclusivamente nos aspectos financeiros e operacionais. Os dados para análise foram obtidos de um PDF público disponibilizado pela AMBEV.",
      stack: ["Power BI", "DAX", "Finanças"],
      embed: { type: "powerbi", url: PB("eyJrIjoiZjU4YzI5NmItMDEzZi00NzZkLTlmYjMtNWM2Njc5NWJkZmJhIiwidCI6ImUzMTEwYjIyLTMyMGEtNGVkNy1hNzcxLWFhZWQ1ZWRmYTE4NCJ9") },
      links: [{ label: "Relatórios AMBEV (RI)", url: "https://ri.ambev.com.br/relatorios-publicacoes/divulgacao-de-resultados/" }],
      sections: [
        { h: "1. DRE (Demonstrativo de Resultados do Exercício)",
          p: ["Para melhorar a análise dos dados da Demonstração do Resultado do Exercício (DRE) para os anos de 2017, 2018 e 2019, é importante começar pela categorização correta das receitas e despesas. Aqui está uma forma estruturada de abordar a análise com base nos itens listados:"],
          ul: [
            "<b>Receita de Venda de Bens e/ou Serviços:</b> Analisar as tendências de vendas ao longo dos três anos e identificar qualquer padrão de crescimento ou declínio.",
            "<b>Custo dos Bens e/ou Serviços Vendidos:</b> Avaliar como os custos estão evoluindo em relação às vendas e calcular a margem bruta.",
            "<b>Resultado Bruto:</b> Derivar o resultado bruto subtraindo o custo dos bens/serviços vendidos da receita total de vendas.",
            "<b>Despesas/Receitas Operacionais:</b> Incluir itens como Despesas com Vendas, Despesas Gerais e Administrativas, entre outros, para calcular o lucro operacional.",
            "<b>Outras Receitas e Despesas Operacionais:</b> Considerar efeitos não recorrentes ou extraordinários.",
            "<b>Perdas pela Não Recuperabilidade de Ativos:</b> Identificar quaisquer baixas de ativos que possam ter impactado os resultados.",
            "<b>Resultado de Equivalência Patrimonial:</b> Se aplicável, analisar contribuições de investimentos em outras empresas.",
            "<b>Resultado Antes do Resultado Financeiro e dos Tributos:</b> Sumarizar o resultado operacional antes das despesas financeiras e impostos.",
            "<b>Resultado Financeiro:</b> Deduzir as Despesas Financeiras das Receitas Financeiras para entender o impacto das atividades financeiras.",
            "<b>Resultado Antes dos Tributos sobre o Lucro:</b> Apurar o lucro antes de considerar os impostos.",
            "<b>Imposto de Renda e Contribuição Social sobre o Lucro Corrente:</b> Calcular o efeito dos impostos sobre o lucro."
          ] },
        { h: "2. Simulador Financeiro", p: ["Nesta etapa, foi criado um simulador onde o usuário pode fazer suas comparações devidas. O simulador também oferece a possibilidade de ajustar parâmetros para simulação dos resultados baseados em mudanças percentuais na receita, custo e despesas. Além disso, variações entre os resultados reais e simulados são apresentadas, com destaques para o aumento na receita (var Receita), a redução nos custos (var Custo), aumento na margem (var Margem) e nas despesas (var Despesa), culminando em um aumento no EBIT (var EBIT)."] }
      ]
    },
    {
      id: "israel-palestina", cat: "powerbi", title: "Conflito Israel e Palestina",
      summary: "Examinei cuidadosamente os dados disponíveis em formato CSV no Kaggle. É fundamental enfatizar que a análise desses dados foi conduzida de maneira imparcial, sem qualquer viés político ou ideológico em relação à Palestina ou Israel. Isso se deve ao reconhecimento de que em conflitos armados, diversos atores estão envolvidos, cada um com suas próprias motivações e consequências.",
      stack: ["Power BI", "Kaggle", "DAX"],
      embed: { type: "powerbi", url: PB("eyJrIjoiNTk5NjIyM2QtMGU5YS00YjBiLTgzN2YtMGI3YTk0MjIxNTBlIiwidCI6ImUzMTEwYjIyLTMyMGEtNGVkNy1hNzcxLWFhZWQ1ZWRmYTE4NCJ9") },
      links: [{ label: "Dataset no Kaggle", url: "https://www.kaggle.com/datasets/willianoliveiragibin/fatalities-in-the-israeli-palestinian" }],
      intro: [
        "É importante lembrar que em uma guerra, existem múltiplas perspectivas e impactos. Há aqueles que lucram com a venda de armas, enquanto outros enfrentam a perda de entes queridos e as terríveis consequências da violência. Além disso, é crucial reconhecer que muitos líderes, por vezes, detêm influência sobre aqueles que têm menos informação e recursos, enquanto eles próprios desfrutam de privilégios em locais seguros.",
        "Ao adotar uma abordagem imparcial e centrada nos dados, nossa análise visa fornecer uma compreensão objetiva dos eventos e tendências relacionados ao conflito, buscando promover discussões informadas e baseadas em fatos, com o objetivo de aumentar a conscientização sobre o impacto humano nas situações de conflito."
      ],
      sections: [
        { h: "1. Fatalidades", p: ["Conduzi uma análise minuciosa das fatalidades, abordando diferentes perspectivas, incluindo a nacionalidade das vítimas, o total de fatalidades em níveis diários, mensais e anuais. Além disso, implementei diversos filtros que permitem a análise detalhada com base em critérios como o tipo de munição envolvida, a localização de residência das vítimas, os distritos afetados, o tipo de lesão sofrida e o ano correspondente.", "Essa abordagem multidimensional da análise dos dados visa proporcionar uma visão abrangente das fatalidades no contexto do conflito, permitindo-nos identificar padrões, correlações e tendências significativas que podem contribuir para uma compreensão mais profunda das implicações humanas dessa situação."] },
        { h: "2. Faixa etária", p: ["Nesta etapa, foi criada uma coluna calculada que transforma as idades em faixas etárias, seguindo padrões internacionais reconhecidos. Essa coluna permite uma análise mais aprofundada, facilitando a filtragem e a análise das fatalidades com base em região geográfica, faixa etária, percentual por faixa etária, percentual por gênero, tipo de munição utilizada, cidadania das vítimas e o tipo de lesão que resultou na fatalidade.", "Essa abordagem enriquecida da análise dos dados possibilita uma compreensão mais detalhada das características das vítimas e dos eventos relacionados às fatalidades. Ela contribui para uma visão mais completa e contextualizada do impacto humano do conflito, o que pode ser fundamental para a avaliação de suas implicações e a busca por soluções apropriadas."] },
        { h: "3. Distritos", p: ["Nessa análise, concentramos nosso estudo nas fatalidades ocorridas em diferentes distritos, com um foco específico na nacionalidade das pessoas que sofreram as fatalidades. Utilizamos filtros que nos permitem identificar os responsáveis pelas fatalidades, sejam eles grupos radicais ou forças militares de Israel. Além disso, devido ao grande número de óbitos em um curto espaço de tempo, uma parcela significativa desses casos foi categorizada como \"não informado\".", "Após uma análise detalhada das origens dos nomes, foi possível determinar que cerca de 85% das fatalidades estão relacionadas à origem palestina. Também implementamos filtros para distinguir se os números de fatalidades estão associados a grupos hostis, ou seja, se são causados por radicais. Além disso, é possível filtrar os dados por ano, o que permite uma análise temporal das fatalidades ao longo do conflito.", "Essa análise oferece uma visão abrangente e estruturada das fatalidades, permitindo identificar tendências, padrões e informações relevantes que contribuem para a compreensão do impacto humano desse conflito complexo."] }
      ]
    },
    {
      id: "polos", cat: "powerbi", title: "Performance de Clientes e Faturamento dos Polos",
      summary: "Realizei uma análise minuciosa dos dados contidos na planilha do Excel, que se concentra em polos educacionais e seus clientes. Essa análise foi dividida em três páginas ou seções distintas, cada uma com foco em aspectos específicos dos dados.",
      stack: ["Power BI", "Excel", "DAX"],
      embed: { type: "powerbi", url: PB("eyJrIjoiNDM2ZTA0NDUtM2RkMy00MTIxLWJjZmQtZGI0OGEzYjg0ZmM3IiwidCI6ImUzMTEwYjIyLTMyMGEtNGVkNy1hNzcxLWFhZWQ1ZWRmYTE4NCJ9") },
      sections: [
        { h: "1. Pagamentos e Cadastros", p: ["Realizei um levantamento detalhado dos pagamentos, analisando-os em bases semanais, mensais e anuais. Esta análise levou em consideração fatores como o estado (UF), o polo de ensino, a cidade, o canal de vendas utilizado, a forma de ingresso na faculdade e o valor da conversão."] },
        { h: "2. Alunos por Análises", p: ["Estou realizando uma análise detalhada sobre os alunos. Neste estudo, considero o total de alunos, diferenciados por gênero (masculino e feminino). Avalio também a quantidade de boletos vencidos e atrasados. Adicionalmente, analiso a conversão baseada no gênero dos alunos. Por fim, faço uma avaliação segmentada por estado, abordando cadastros e pagamentos."] },
        { h: "3. Semanas e Polos", p: ["Analisei os cadastros semanais, o tempo médio de pagamento de boletos e a duração entre o cadastro e o pagamento em dias."] }
      ]
    },
    {
      id: "faturamento-clientes", cat: "powerbi", title: "Análise de Faturamento e Clientes",
      summary: "Examinei os registros de vendas e clientes fornecidos em uma planilha Excel. Esta análise é apresentada em quatro páginas.",
      stack: ["Power BI", "Excel", "Pareto / ABC"],
      embed: { type: "powerbi", url: PB("eyJrIjoiMDU3OTMwYTMtNDFlMy00YjVjLWI2NzAtZDcwNTM2NmJlYTcxIiwidCI6ImUzMTEwYjIyLTMyMGEtNGVkNy1hNzcxLWFhZWQ1ZWRmYTE4NCJ9") },
      sections: [
        { h: "1. Faturamento", p: ["Nesta análise, avalio o faturamento ao longo do tempo, por mês e cidade. Além disso, examino a margem das vendas e o faturamento de acordo com diferentes planos, destacando também a performance por cidade."] },
        { h: "2. Clientes", p: ["Nesta análise, avalio a evolução de clientes em bases anual, mensal, trimestral e diária. Destaco o percentual de perdas voluntárias, quando um cliente opta por abandonar o plano de internet em um período de 1 ano, e as perdas involuntárias, resultantes de insatisfações como atendimento inadequado ou interrupção do plano devido a falta de pagamento."] },
        { h: "3. Pareto", p: ["Nesta análise, utilizo o método de Pareto para ranquear as cidades conforme a categorização ABC, baseando-me no faturamento gerado por cada uma. Além disso, examino os clientes específicos que têm uma contribuição significativa nas vendas."] },
        { h: "4. Funil", p: ["Nesta seção, examino as perdas categorizadas por mês, cidade e ano."] }
      ]
    },
    {
      id: "ecommerce", cat: "powerbi", title: "Análise E-commerce",
      summary: "Analisei os registros de vendas de um e-commerce utilizando um arquivo Excel de dados abertos disponível no site Kaggle.",
      stack: ["Power BI", "Kaggle", "DAX"],
      embed: { type: "powerbi", url: PB("eyJrIjoiYmNkZjAwNjgtNGRiMi00MmU3LTlkMzctNGYwMjU4ZDcxOWMwIiwidCI6ImUzMTEwYjIyLTMyMGEtNGVkNy1hNzcxLWFhZWQ1ZWRmYTE4NCJ9") },
      sections: [
        { h: "1. Evolução de Vendas", p: ["Analisamos a evolução do faturamento por categoria, avaliamos as tendências ao longo do tempo e ranqueamos as vendas por cidade e por vendedor. Além disso, examino a percentagem da margem, comparando o valor atual ao valor do mês anterior."] },
        { h: "2. Frete", p: ["Nesta seção, conduzo uma análise do frete segmentado por país, com opções de filtro por mês, categoria do produto, cidade e região. Além disso, realizo uma análise exploratória focada nos maiores valores de frete."] }
      ]
    },
    {
      id: "covid-pbi", cat: "powerbi", title: "Análise de SARS-CoV-2 (Covid-19)",
      summary: "Analisei os registros de Covid-19 através de um arquivo em Excel de dados abertos, disponível no site do Kaggle.",
      stack: ["Power BI", "Kaggle", "Séries temporais"],
      embed: { type: "powerbi", url: PB("eyJrIjoiMDJiMTAzMGQtMzVjMy00OWIzLTg2MGYtMTU4ZjI2ZGY5NTYxIiwidCI6ImUzMTEwYjIyLTMyMGEtNGVkNy1hNzcxLWFhZWQ1ZWRmYTE4NCJ9") },
      sections: [
        { h: "1. Mortes", p: ["Nesta etapa, avalio as fatalidades por mês e por país ao longo do tempo. Faço uma comparação entre as fatalidades e a quantidade de casos, além de acompanhar a proporção de mortes em relação ao total de casos."] },
        { h: "2. KPI", p: ["Aqui temos uma análise da evolução dos casos, alicerçada em tabelas com dados temporais sobre a evolução da Covid, além de fazer uma comparação dos casos acumulados."] },
        { h: "3. Casos", p: ["Aqui temos um ranking interativo que nos permite acompanhar a real evolução de como a doença avançou em cada país ao longo do tempo."] }
      ]
    },
    {
      id: "bebidas", cat: "powerbi", title: "Bebidas ao e pelo Mundo",
      summary: "Analisei os dados oriundos do Kaggle sobre bebidas destiladas, consumo de chopp ou cervejas, vinhos e o consumo de qualquer tipo de bebida alcoólica no mundo. Vale lembrar que, em alguns países, a religião proíbe o consumo. No entanto, independentemente da proibição, o ser humano encontra uma maneira de produzir a bebida e, nos países em que a repressão é maior, foi informada uma bebida típica, da qual coletei as imagens.",
      stack: ["Power BI", "Kaggle", "DAX"],
      embed: { type: "powerbi", url: PB("eyJrIjoiZTdhZWNhMmYtMTk5Mi00Y2RhLWE5NGEtZjI4YWQ3NDk0NGM5IiwidCI6ImUzMTEwYjIyLTMyMGEtNGVkNy1hNzcxLWFhZWQ1ZWRmYTE4NCJ9") },
      sections: [
        { h: "1. Bebidas alcoólicas", p: ["Nesta etapa, quantifico o consumo de diferentes tipos de bebidas, como destilados, vinhos, cervejas e chopp, e também avalio o consumo geral de álcool no mundo."] },
        { h: "2. Análise Percentual e Total", p: ["Aqui avalio o total absoluto e também os valores percentuais de cada país."] }
      ]
    },

    /* ===================== METABASE ===================== */
    {
      id: "comexstat", cat: "metabase", title: "Análise Integrada das Importações Brasileiras via API do ComexStat",
      summary: "Este projeto visa compreender o cenário das importações e exportações brasileiras a partir de dados oficiais disponibilizados pela API do ComexStat. A motivação surgiu diante das discussões recentes sobre políticas comerciais globais e taxações internacionais, como as propostas por Donald Trump, com foco analítico e técnico, sem viés político.",
      stack: ["Python", "API ComexStat", "PostgreSQL", "Metabase"],
      embed: { type: "pdf", url: DRIVE_EMBED("1Z_h15d6QDDtUj629ELlwLvLL_QYEHgAr") },
      links: [
        { label: "Repositório no GitHub", url: "https://github.com/Pantercode/comex_pipeline_metabasw/tree/main" },
        { label: "PDF do projeto", url: DRIVE("1Z_h15d6QDDtUj629ELlwLvLL_QYEHgAr") }
      ],
      sections: [
        { h: "Etapas do Processo", ol: [
          "<b>Extração dos Dados via API:</b> Foram utilizados scripts em Python para acessar a API do ComexStat, coletando dados detalhados sobre importações e exportações por município, produto, valor FOB, quantidade e modal de transporte.",
          "<b>Armazenamento em Banco de Dados:</b> Os dados extraídos foram transformados e normalizados antes de serem inseridos em um banco de dados PostgreSQL, permitindo consultas eficientes e integração com ferramentas analíticas.",
          "<b>Análise com Metabase:</b> O banco foi conectado ao Metabase, onde visualizações e dashboards foram desenvolvidos para facilitar a interpretação dos dados. Cada gráfico foi pensado para fornecer insights estratégicos sobre o comércio exterior brasileiro."
        ] },
        { h: "Valor FOB Total Importado por Ano", ul: ["Visualiza a evolução do valor total das importações brasileiras ao longo dos anos.", "Permite identificar tendências macroeconômicas e impactos de políticas comerciais.", "Destaca anos de crescimento ou queda expressiva nas importações."] },
        { h: "Quantidade de Produtos Importados por Ano", ul: ["Exibe a quantidade total de produtos importados anualmente.", "Ajuda a entender o volume físico das importações, independente do valor monetário.", "É útil para observar mudanças no consumo e na dependência de insumos."] },
        { h: "Principais Países de Origem das Importações (Top 10)", ul: ["Mostra os dez países que mais exportaram para o Brasil no período analisado.", "Permite visualizar a concentração das importações por país de origem.", "É essencial para avaliar a dependência comercial com determinadas nações."] },
        { h: "Participação por Modal de Transporte nas Importações", ul: ["Indica a porcentagem de uso de cada modal logístico (marítimo, aéreo, rodoviário etc.).", "Ajuda a entender a infraestrutura predominante nas importações.", "Revela a importância do transporte marítimo no comércio internacional brasileiro."] },
        { h: "Municípios que Mais Importam (Top 10)", ul: ["Aponta os municípios brasileiros com maior volume de importação em valor FOB.", "Facilita a identificação de polos logísticos e industriais estratégicos no país.", "É útil para decisões de investimento em infraestrutura e comércio exterior."] }
      ]
    },

    /* ===================== PYTHON ===================== */
    {
      id: "pop-carceraria", cat: "python", title: "População Carcerária de Minas Gerais",
      summary: "Este notebook apresenta uma análise abrangente da população carcerária do estado de Minas Gerais. Através de uma série de visualizações e tabelas de dados, exploramos diferentes aspectos dos dados para descobrir insights e padrões.",
      stack: ["Python", "Jupyter", "Pandas", "Plotly"],
      embed: { type: "pdf", url: DRIVE_EMBED("1XgbSMIFJ-nnbhLL4xVbr0v6kl3B_W58K") },
      links: [{ label: "PDF gerado do Jupyter Notebook", url: DRIVE("1XgbSMIFJ-nnbhLL4xVbr0v6kl3B_W58K") }],
      sections: [
        { ul: [
          "<b>Aquisição e Limpeza de Dados:</b> Inicialmente, adquirimos dados de fonte confiável, garantindo sua relevância e precisão. Esses dados são então limpos para remover quaisquer inconsistências ou valores ausentes, preparando-os para análise.",
          "<b>Visão Geral dos Dados:</b> Apresentamos o primeiro vislumbre dos dados através de uma tabela bem estruturada, fornecendo um instantâneo das diversas colunas como 'Penitenciaria' (Penitenciária), 'Cidade' (Cidade), 'Detentos' (Detidos), e outras, que incluem contagens e dados categóricos.",
          "<b>Insights iniciais:</b> estatísticas básicas são fornecidas para resumir as tendências centrais, dispersão e formato da distribuição do conjunto de dados. Estes incluem medidas como média, mediana e desvio padrão, que fornecem uma compreensão inicial dos dados.",
          "<b>Análise detalhada:</b> nos aprofundamos nos dados gerando representações visuais.",
          "<b>Histogramas:</b> Estes gráficos mostram a distribuição de frequência de detidos em diferentes penitenciárias, ilustrando as instalações mais e menos povoadas.",
          "<b>Gráficos de barras:</b> Esses gráficos comparam o número de detidos em diversas cidades, destacando áreas com maior concentração da população carcerária.",
          "<b>Análise de série temporal:</b> um gráfico de linhas com um controle deslizante de intervalo fornece uma visão dinâmica da tendência populacional ao longo do tempo, permitindo uma análise temporal dos dados.",
          "<b>Conclusão:</b> Cada visualização é acompanhada por uma interpretação concisa, chamando a atenção para descobertas importantes, como picos populacionais ou anomalias."
        ] },
        { p: ["Este caderno foi projetado para ser acessível a um público amplo, com visualizações e explicações claras que não requerem formação técnica para serem compreendidas. O objetivo é informar decisões políticas, alocação de recursos e conscientização pública sobre o sistema prisional em Minas Gerais."] }
      ]
    },
    {
      id: "violencia-mulher", cat: "python", title: "Violência Contra a Mulher",
      summary: "Este notebook detalha a análise de dados sobre violência contra a mulher em Minas Gerais, cobrindo o período de 2013 a 2023. Utilizando técnicas de ETL (Extração, Transformação e Carregamento) e a junção de diversas fontes de dados, conseguimos estruturar as informações em um modelo Star Schema. Através do Power BI, exploramos diversos aspectos desses dados para identificar padrões e insights significativos sobre a violência contra a mulher na região.",
      stack: ["PySpark", "Star Schema", "Parquet", "Cloud Storage", "BigQuery", "Power BI"],
      embed: { type: "pdf", url: DRIVE_EMBED("1rJGmepLhhKq6vudcHYZl5hGl3mf3y_y1") },
      links: [{ label: "PDF gerado do Jupyter Notebook", url: DRIVE("1rJGmepLhhKq6vudcHYZl5hGl3mf3y_y1") }],
      sections: [
        { p: ["Neste projeto avançado, começamos instalando as bibliotecas necessárias do PySpark para o ETL de 10 arquivos CSV. Após a leitura, unificamos os dados em um único arquivo compilado. Realizamos a limpeza de dados, removendo registros nulos ou em branco, renomeamos colunas e alteramos a tipagem da coluna de vítimas de String para Inteiro. Selecionamos os dados relevantes para criar tabelas em formato Star Schema, incluindo dimensões como Calendário, Município e Fatalidade. Finalmente, transformamos os dados em um arquivo Parquet para melhor desempenho e os armazenamos no BigQuery através do Google Cloud Storage."] }
      ],
      images: [
        { src: "img/python-0.jpg", cap: "Tabelas em formato Parquet armazenadas no bucket do Cloud Storage" },
        { src: "img/python-1.jpg", cap: "Tabelas criadas no BigQuery a partir do bucket" },
        { src: "img/python-2.jpg", cap: "Processo estrutural de como o projeto foi realizado" }
      ]
    },
    {
      id: "covid-python", cat: "python", title: "Covid-19 Mundial",
      summary: "Análise exploratória dos dados mundiais de Covid-19 em Python, com o relatório completo exportado em PDF.",
      stack: ["Python", "Jupyter", "Pandas"],
      embed: { type: "pdf", url: DRIVE_EMBED("1A2Kz4WncxSmCApvLm42sKnkobI4Qz6mp") },
      links: [{ label: "Relatório em PDF", url: DRIVE("1A2Kz4WncxSmCApvLm42sKnkobI4Qz6mp") }]
    },
    {
      id: "mercado-financeiro", cat: "python", title: "Finanças e Mercado Financeiro",
      summary: "Projeto de análise de finanças e mercado financeiro em Python, com o relatório completo exportado em PDF.",
      stack: ["Python", "Jupyter", "Finanças"],
      embed: { type: "pdf", url: DRIVE_EMBED("16yE_pFT0JI93Gey2ILe2zErIkaNceHiW") },
      links: [{ label: "Relatório em PDF", url: DRIVE("16yE_pFT0JI93Gey2ILe2zErIkaNceHiW") }]
    },
    {
      id: "imc-pdf", cat: "python", title: "Calculadora de IMC com Gerador de PDF",
      summary: "Aplicação em Python que calcula o IMC e gera automaticamente um relatório em PDF.",
      stack: ["Python", "Geração de PDF"],
      links: [{ label: "Repositório no GitHub", url: "https://github.com/Pantercode/Calculadora_imc_Gerador_pdf" }]
    },
    {
      id: "kaggle-snowflake", cat: "python", title: "Ingestão de dados Kaggle com Envio para o Snowflake",
      summary: "Pipeline de ingestão de dados do Kaggle com orquestração em Prefect e carga no Snowflake.",
      stack: ["Python", "Prefect", "Snowflake", "Kaggle API"],
      links: [{ label: "Repositório no GitHub", url: "https://github.com/Pantercode/Ingest-o-Prefect" }]
    },
    {
      id: "precos-imoveis", cat: "python", title: "Análise de Preço dos Imóveis",
      summary: "Notebook de análise de preços de imóveis, desenvolvido no Google Colab.",
      stack: ["Python", "Google Colab", "Pandas"],
      links: [{ label: "Abrir notebook no Colab", url: "https://colab.research.google.com/drive/1NLCf-xiCVp8MXt48-HVucsWRA2aNN2e0" }]
    },

    /* ===================== LOOKER STUDIO ===================== */
    {
      id: "performance-comercial", cat: "looker", title: "Performance Comercial",
      summary: "Este dashboard foi desenvolvido com o objetivo de monitorar os principais indicadores de desempenho comercial da empresa. A interface é interativa e responsiva, permitindo análises por filtros como Ano, Mês, Categoria, Linha e Estado.",
      stack: ["Looker Studio", "KPIs", "Geo"],
      embed: { type: "looker", url: "https://lookerstudio.google.com/embed/reporting/97d19117-2936-474e-a6d5-41a17e7270a7" },
      links: [{ label: "Abrir no Looker Studio", url: "https://lookerstudio.google.com/reporting/97d19117-2936-474e-a6d5-41a17e7270a7" }],
      sections: [
        { h: "Indicadores de Destaque (KPIs)", ul: [
          "<b>Faturamento:</b> Apresenta o total de vendas em valor monetário.",
          "<b>Quantidade de Vendas:</b> Informa o volume total de transações realizadas.",
          "<b>Ticket Médio:</b> Mostra o valor médio por venda, ajudando a avaliar o comportamento do consumidor.",
          "<b>Peso Total:</b> Quantidade física movimentada em quilos, útil para logística e abastecimento.",
          "<b>Cobertura:</b> Número total de pontos de venda ou clientes atendidos."
        ] },
        { h: "Indicadores ao Longo do Tempo", ul: ["Um gráfico de colunas exibe a evolução do faturamento ao longo dos anos.", "Permite identificar sazonalidades, tendências de crescimento ou retração comercial.", "Ideal para análises históricas e comparações anuais."] },
        { h: "Distribuição das Vendas", ul: [
          "<b>% Vendas por Linha:</b> Gráfico de pizza segmentando o total de vendas por linha de produto (como Biscoitos, Alimentos, etc.).",
          "Identifica quais linhas possuem maior representatividade nas vendas totais.",
          "Auxilia no foco comercial e em decisões de portfólio.",
          "<b>Vendas por Grupo de Produtos:</b> Gráfico de barras com os grupos de produtos mais vendidos.",
          "Permite identificar os principais impulsionadores de receita dentro de cada linha.",
          "Apoia decisões de marketing, sortimento e precificação."
        ] },
        { h: "Performance por Gerente", ul: ["Tabela comparativa com os principais indicadores individuais por gerente.", "Inclui dados de faturamento, quantidade de vendas, ticket médio e cobertura.", "Facilita o acompanhamento de metas comerciais e avaliação de desempenho da equipe."] },
        { h: "Cobertura Geográfica", ul: ["Mapa interativo com a distribuição geográfica das vendas realizadas.", "Permite análise por região, facilitando decisões estratégicas e táticas.", "Importante para identificar áreas com maior ou menor penetração comercial."] }
      ]
    },

    /* ===================== SQL ===================== */
    {
      id: "sql-ecommerce", cat: "sql", title: "Análise e Classificação de Empresas de E-commerce",
      subtitle: "Com foco em especialização por plataforma",
      summary: "Este projeto consiste em uma análise SQL complexa e otimizada, projetada para extrair insights valiosos de um conjunto de dados de empresas especializadas em desenvolvimento de e-commerce. O objetivo principal é identificar e classificar empresas com base em seu foco em plataformas específicas (Shopify, Magento, WooCommerce, Outras), determinar sua diversidade de atuação e correlacionar essas informações com o porte da empresa e sua localização geográfica.",
      stack: ["SQL", "BigQuery", "CTEs", "Window Functions", "Arrays"],
      links: [{ label: "Dataset no Kaggle", url: "https://www.kaggle.com/datasets/nuritasthedataist/ecommerce-companies-dataset" }],
      sections: [
        { h: "Objetivo da Análise", p: ["A query foi desenvolvida para responder a perguntas como:"], ul: [
          "Qual é o foco principal de cada empresa em termos de plataforma de e-commerce?",
          "Quantas plataformas de e-commerce uma empresa atua ativamente?",
          "Como o foco em e-commerce e o tamanho mínimo de projeto variam entre diferentes portes de empresa?",
          "Quais são as estatísticas de foco e diversidade por estado/país?",
          "Quais são as top empresas por cada plataforma principal de e-commerce, baseadas no foco e no tamanho do projeto?"
        ] }
      ],
      code: { label: "Query (BigQuery)", src: "assets/sql/ecommerce.sql.txt" },
      images: [{ src: "img/sql-0.jpg", cap: "Exemplo dos dados de saída" }]
    },
    {
      id: "sql-risco-cartoes", cat: "sql", title: "Análise e Monitoramento de Risco em Transações com Cartões de Crédito",
      subtitle: "Com foco em detecção de padrões de comportamento pós-exposição a risco",
      summary: "Este projeto consiste em uma análise SQL avançada com foco na detecção e acompanhamento de comportamentos de risco em clientes expostos a fatores de fraude. Através da integração de dados de transações financeiras, informações cadastrais de usuários e atributos dos cartões de crédito utilizados, buscamos identificar padrões suspeitos, calcular indicadores de risco e analisar a persistência de uso após detecção de fraudes.",
      stack: ["SQL", "BigQuery", "Score de risco", "Coorte", "Geo"],
      intro: ["A análise inclui também uma abordagem de coorte, permitindo visualizar como clientes se comportam nos meses seguintes ao primeiro indício de risco (como uso de cartão exposto na dark web)."],
      sections: [
        { h: "Objetivo da Análise", p: ["A análise foi desenvolvida para responder a perguntas como:"], ul: [
          "Quais clientes tiveram cartões associados à dark web e continuaram usando após o risco?",
          "Quais são os padrões de transações associadas a risco (valores altos, ausência de chip, MCCs suspeitos)?",
          "Qual o tempo médio de uso do cartão após o primeiro sinal de risco?",
          "Qual a porcentagem de transações acima de 80% do limite de crédito?",
          "Como se comporta o volume de transações em diferentes regiões ou estados após o risco?",
          "Há correlação entre crédito baixo e transações de valor elevado?",
          "Quais são os MCCs mais comuns em transações de clientes com alto endividamento?"
        ] }
      ],
      code: { label: "Query (BigQuery)", src: "assets/sql/risco-cartoes.sql.txt" },
      images: [{ src: "img/sql-1.jpg", cap: "Exemplo dos dados de saída" }]
    },

    /* ===================== DBT ===================== */
    {
      id: "educacao-dbt", cat: "dbt", title: "Educação · Pipeline ETL com Python + dbt em Docker",
      summary: "Este projeto implementa um pipeline de ETL completo para dados educacionais do INEP/IBGE, utilizando Python, dbt e PostgreSQL, todos orquestrados em contêineres Docker. O objetivo é extrair, organizar e disponibilizar dados em camadas estruturadas (Bronze → Silver → Gold), otimizando a análise e a visualização em ferramentas de BI como Power BI ou Looker Studio.",
      stack: ["Python 3.11", "dbt-core 1.7", "PostgreSQL 17", "Docker Compose", "Pandas"],
      links: [{ label: "Repositório no GitHub", url: "https://github.com/Pantercode/br-educacao-python-dbt-postgres" }],
      sections: [
        { h: "Objetivos do Projeto", ul: ["Centralizar e versionar a extração de dados públicos de educação.", "Organizar dados em camadas de arquitetura moderna para análises eficientes.", "Garantir reprodutibilidade e facilidade de implantação em qualquer ambiente.", "Automatizar a tipagem e transformação de dados com dbt.", "Criar base confiável para indicadores e dashboards analíticos."] },
        { h: "Arquitetura da Solução", pre: "API INEP/IBGE\n      │\n      ▼\nPython Extractor (Pipeline)\n      │\n      ├── dbt seed → Bronze (dados brutos em CSV)\n      └── dbt run  → Silver (dados tratados) / Gold (dados analíticos)" },
        { h: "Componentes Principais", ul: [
          "<b>Pipeline Python:</b> Responsável por consumir a API, gerar arquivos CSV e iniciar o processo dbt.",
          "<b>dbt-cli:</b> Materializa as camadas e executa testes e transformações.",
          "<b>PostgreSQL 17:</b> Banco de dados destino, exposto em localhost:5433 para consumo.",
          "<b>Docker Compose:</b> Orquestração dos serviços, garantindo isolamento e padronização."
        ] },
        { h: "Principais Entregas", ul: ["Ambiente Docker configurado com Postgres, dbt e pipeline Python.", "Estrutura de schemas separados (public_raw, public_silver, public_gold).", "Pipeline reprodutível e documentado.", "Automação da extração, transformação e carga (ETL).", "Dados prontos para integração direta com ferramentas de BI.", "Documentação para instalação, execução e contribuição."] },
        { h: "Tecnologias Utilizadas", ul: ["<b>Python 3.11</b> → Extração de dados e geração de seeds.", "<b>dbt-core 1.7</b> → Transformações, materializações e testes.", "<b>PostgreSQL 17</b> → Armazenamento estruturado dos dados.", "<b>Docker/Docker Compose</b> → Orquestração de serviços.", "<b>Pandas / Requests / PyYAML</b> → Manipulação e integração de dados."] }
      ]
    },

    /* ===================== ETL AO DASH COM IA ===================== */
    {
      id: "censo-escolar", cat: "etl-ia", title: "Educação · Pipeline ETL com PySpark e Dash com Agentes de IA",
      live: true,
      summary: "Este projeto implementa um pipeline de dados completo para os microdados do Censo Escolar da Educação Básica (INEP), utilizando PySpark, dbt e PostgreSQL (Supabase), e termina num dashboard público e gratuito publicado no Render, com inteligência artificial generativa (Google Gemini) para explicar os dados e responder perguntas em português.",
      stack: ["PySpark", "dbt", "Supabase (PostgreSQL)", "Plotly Dash", "Google Gemini", "Docker", "Render"],
      links: [
        { label: "Dashboard publicado", url: "https://censo-escolar-dashboard.onrender.com/", primary: true },
        { label: "Repositório no GitHub", url: "https://github.com/Pantercode/etl_completo_ao_dash_usando_ia" }
      ],
      intro: ["O objetivo é extrair, organizar e disponibilizar os dados em camadas estruturadas (Landing → Bronze → Gold → Diamond), deixando-os prontos para análise e visualização, sem depender de ferramentas de BI pagas, como Power BI ou Looker Studio."],
      sections: [
        { h: "Objetivos do Projeto", ul: [
          "Centralizar e versionar a extração dos microdados públicos de educação do INEP.",
          "Organizar os dados em camadas de uma arquitetura moderna (medalhão), para análises eficientes.",
          "Processar grande volume de dados localmente com PySpark (cerca de 217 mil escolas por ano) e levar para a nuvem apenas o dado agregado.",
          "Automatizar a modelagem e os testes de qualidade dos dados com dbt.",
          "Garantir reprodutibilidade, com scripts numerados, infraestrutura como código e deploy automatizado.",
          "Criar uma base confiável para indicadores de idade, etapa de ensino, localidade (urbana/rural) e rede (pública/privada).",
          "Democratizar o acesso: painel aberto, sem login, que pode ser incorporado em qualquer site e conta com chat de IA em linguagem natural."
        ] },
        { h: "Arquitetura da Solução", ol: [
          "<b>Fonte:</b> microdados oficiais do Censo Escolar, publicados pelo INEP.",
          "<b>Landing:</b> os arquivos são baixados e guardados exatamente como vieram.",
          "<b>Bronze:</b> o PySpark converte os arquivos CSV em formato Parquet, com tipos de dados e acentuação corrigidos.",
          "<b>Gold:</b> o PySpark soma as matrículas por ano, estado, município e rede de ensino.",
          "<b>Carga:</b> os dados agregados são enviados para o banco PostgreSQL na nuvem (Supabase).",
          "<b>Diamond:</b> o dbt transforma e testa os dados, criando uma tabela pronta para cada gráfico.",
          "<b>Dashboard:</b> o painel em Plotly Dash, publicado no Render, apresenta os indicadores e usa o Google Gemini para gerar análises automáticas e responder perguntas."
        ] },
        { h: "Componentes Principais", ul: [
          "<b>Pipeline PySpark:</b> baixa os microdados do INEP, converte e organiza os arquivos e agrega as matrículas por município e rede de ensino.",
          "<b>dbt:</b> materializa as camadas de dados no banco e executa testes automáticos de qualidade.",
          "<b>Supabase (PostgreSQL):</b> banco de dados na nuvem, gratuito, onde ficam as tabelas finais consumidas pelo painel.",
          "<b>Plotly Dash:</b> dashboard público com indicadores, gráficos interativos (clicar em um estado filtra o painel inteiro), tabelas acessíveis e chat.",
          "<b>Google Gemini:</b> gera uma leitura automática de cada gráfico e transforma perguntas em português em consultas seguras ao banco, somente de leitura.",
          "<b>Docker e Render:</b> empacotam e publicam o dashboard gratuitamente, com atualização automática a cada nova versão do código."
        ] }
      ]
    },

    /* ===================== APPS SCRIPT ===================== */
    {
      id: "nba", cat: "appscript", title: "LLM Agentes NBA",
      live: true,
      summary: "Este projeto é um app web feito em Google Apps Script que mostra a performance de cerca de 2.200 jogadores da NBA, das temporadas 1996-97 a 2022-23, cada um com sua foto oficial. Ele também tem um analista de inteligência artificial generativa (Google Gemini) que responde perguntas em português consultando os dados reais, sem inventar números.",
      stack: ["Google Apps Script", "Google Gemini", "Python · pandas", "Google Planilhas", "HTML · CSS · JS", "clasp"],
      links: [{ label: "Abrir o app publicado", url: "https://script.google.com/macros/s/AKfycbxT9CaMSY7RgzVili2RFphbmQQG4v1WdfjhKCWUdZAmr-WloGE02BytxfFdbQJgZcO19Q/exec", primary: true }],
      intro: ["O objetivo é transformar um dataset bruto de jogada a jogada (2,2 GB) em estatísticas por jogador e por temporada, e apresentá-las num app visual, gratuito e que roda 24 horas nos servidores do Google, sem precisar de servidor próprio nem de ferramenta de BI paga."],
      sections: [
        { h: "Objetivos do Projeto", ul: [
          "Calcular estatísticas por jogador a partir do play-by-play, porque o dataset do Kaggle não as traz prontas. As médias calculadas ficam a 0,1 ponto das oficiais (Kobe Bryant 2005-06: 35,5 contra 35,4).",
          "Processar o grande volume de dados localmente com Python e pandas e levar para a nuvem apenas o dado já agregado.",
          "Ligar cada jogador ao artigo certo da Wikipédia pelo id oficial da NBA no Wikidata, sem confundir homônimos.",
          "Criar um agente de IA que responde com base em consultas reais aos dados, usando chamada de funções.",
          "Manter custo zero e infraestrutura simples: tudo roda no Google (Apps Script, Planilhas, Cache), com deploy pelo clasp.",
          "Oferecer uma experiência cuidada no computador e no celular, com acessibilidade (teclado, leitores de tela, movimento reduzido)."
        ] },
        { h: "Arquitetura da Solução", ul: [
          "<b>Fonte:</b> dataset público wyattowalsh/basketball, no Kaggle.",
          "<b>Preparo (local):</b> o preparar_dados.py lê o play-by-play jogada a jogada e converte cada evento em estatística (pontos, arremessos, rebotes, assistências, roubos, tocos e erros).",
          "<b>Biografias:</b> o biografias.py consulta o Wikidata e liga 2.167 jogadores aos artigos da Wikipédia (1.253 em português e 914 traduzidos do inglês).",
          "<b>Carga:</b> os dados agregados são embutidos no projeto e enviados ao Google com o clasp.",
          "<b>Armazenamento:</b> no primeiro acesso, o app cria sozinho uma Planilha Google com os dados no Drive.",
          "<b>Backend:</b> o Code.gs lê a planilha, guarda os resultados em cache e expõe as funções do agente.",
          "<b>App:</b> a interface em HTML, CSS e JavaScript mostra a galeria, a ficha do jogador e os gráficos. O Gemini responde no chat com tabelas e as fotos dos jogadores citados."
        ] },
        { h: "Componentes Principais", ul: [
          "<b>Pipeline Python (pandas):</b> baixa o dataset do Kaggle, calcula as estatísticas a partir das jogadas e gera os arquivos de dados do app.",
          "<b>Google Apps Script:</b> backend e hospedagem do web app, gratuitos e sem servidor próprio.",
          "<b>Google Planilhas:</b> base de dados consultada pelo app e pelo agente.",
          "<b>Google Gemini:</b> analista de IA com chamada de funções (buscar_jogadores, performance_jogador, biografia_jogador, ranking_jogadores). Ele busca os números na planilha antes de responder e, se o modelo principal estiver sobrecarregado, o app tenta de novo e muda para um modelo mais leve.",
          "<b>Interface web:</b> galeria com busca instantânea e filtros (Em atividade, Top 75), ficha com médias, aproveitamento e totais, gráfico interativo por temporada (regular e playoffs), biografia com link da fonte e layout de celular com o chat em gaveta.",
          "<b>Wikidata e Wikipédia:</b> fonte das biografias, traduzidas pelo LanguageApp quando só existem em inglês.",
          "<b>CDN da NBA:</b> fonte das fotos oficiais dos jogadores.",
          "<b>clasp:</b> envia o código e publica novas versões mantendo a mesma URL."
        ] }
      ]
    },
    {
      id: "atlas", cat: "appscript", title: "LLM Agentes Atlas",
      live: true,
      summary: "Este projeto é um app web feito em Google Apps Script que mostra um mapa interativo de igualdade social dos 27 estados e 5.570 municípios brasileiros. Cada lugar aparece com sua bandeira oficial, e há 13 indicadores sociais e econômicos para pintar o mapa de calor. O app também tem um analista de inteligência artificial generativa (Google Gemini), que conta a história do nome de cada lugar e faz diagnósticos de desigualdade em português com base nos números reais do IBGE, sem inventar estatísticas.",
      stack: ["Google Apps Script", "Google Gemini", "D3.js", "APIs do IBGE", "Wikidata", "clasp"],
      links: [{ label: "Abrir o app publicado", url: "https://script.google.com/macros/s/AKfycbwIjbG9DX2GUEa0kLKeMOSr-ii15mqdJoupO65JxqBYzqppR-Ble_JvLGywpw4iVVkh/exec", primary: true }],
      intro: ["O objetivo é reunir dados públicos espalhados em várias fontes (IBGE, PNUD, Wikidata e Wikipédia) num único app visual. Ele é gratuito e roda 24 horas nos servidores do Google, sem servidor próprio, banco de dados nem ferramenta de BI paga."],
      sections: [
        { h: "Objetivos do Projeto", ul: [
          "Cruzar ao vivo dados oficiais de fontes diferentes: Censo 2022, PIB dos Municípios, IBGE Cidades, PNUD e Wikidata. Tudo fica ligado pelo código IBGE de cada município, sem confundir cidades de mesmo nome.",
          "Tornar a desigualdade visível, não só a média. O app mostra alfabetização por cor/raça e por sexo, com a diferença em pontos percentuais. Exemplo: em Belo Horizonte, 98,7% entre brancos contra 94,1% entre indígenas.",
          "Criar um Índice de Igualdade (0 a 100) que resume IDH, educação, saúde, saneamento e pobreza num número só, comparando cada município com os demais do mesmo estado.",
          "Levar a bandeira de cada estado e município até o usuário, buscando as imagens no Wikidata e no Wikimedia Commons.",
          "Usar IA generativa com dados reais. O Gemini recebe os indicadores e os rankings do lugar antes de responder e cita os números com ano e fonte.",
          "Manter custo zero e infraestrutura simples: tudo roda no Google (Apps Script e Cache), com deploy pelo clasp.",
          "Oferecer uma experiência visual fora do comum no computador e no celular. Há zoom animado ao entrar num estado, municípios que aparecem em onda a partir do clique, cartão flutuante com bandeira animada e bandeira em 3D que inclina com o mouse. O app tem atalhos de teclado e respeita a preferência de movimento reduzido."
        ] },
        { h: "Arquitetura da Solução", ul: [
          "<b>Fontes:</b> APIs públicas do IBGE (Malhas, Agregados/SIDRA, Pesquisas e Localidades), Wikidata (SPARQL), Wikimedia Commons e Wikipédia.",
          "<b>Carga sob demanda:</b> ao abrir, o app baixa só os estados. Os municípios de um estado (contornos, indicadores e bandeiras) são baixados na primeira vez que o usuário entra nele e ficam em memória.",
          "<b>Consultas em lote:</b> os indicadores municipais são pedidos em blocos de 80 municípios, com 4 requisições em paralelo. Minas Gerais, por exemplo, tem 853 municípios.",
          "<b>Plano B pelo servidor:</b> se o navegador não consegue acessar as APIs em até 20 segundos (por exemplo, numa rede corporativa), os dados passam a ser buscados pelo próprio servidor do Google, com cache de 6 horas e acesso restrito a uma lista de domínios permitidos.",
          "<b>Backend:</b> o Code.gs entrega a página, chama o Gemini com a chave guardada nas Propriedades do script (nunca no navegador) e guarda as respostas em cache.",
          "<b>App:</b> a interface em HTML, CSS e JavaScript (D3.js) desenha o mapa, a legenda com a distribuição dos valores, o painel do lugar e o chat."
        ] },
        { h: "Componentes Principais", ul: [
          "<b>Google Apps Script:</b> backend e hospedagem do web app, gratuitos e sem servidor próprio.",
          "<b>APIs do IBGE:</b> contornos dos estados e municípios, Censo 2022 (população, área, densidade, alfabetização por cor/raça e sexo), PIB e sua divisão por setor, mortalidade infantil, escolarização, emprego formal, salário médio, saneamento e renda.",
          "<b>Wikidata e Wikimedia Commons:</b> bandeiras e brasões municipais, IDH municipal e o link do artigo certo na Wikipédia.",
          "<b>Wikipédia:</b> resumo de cada estado e município.",
          "<b>Google Gemini:</b> analista de IA com três modos: <i>História do nome</i> (etimologia, linha do tempo e significado da bandeira, usando a busca do Google como fonte e listando os links), <i>Diagnóstico de igualdade</i> (onde está a desigualdade, os pontos fortes e três prioridades de política pública) e <i>Chat livre</i> (perguntas sobre o lugar selecionado). Se um modelo não estiver disponível, o app passa automaticamente para o próximo da lista.",
          "<b>D3.js:</b> desenho do mapa, zoom animado, escalas de cor e gráficos de evolução no tempo. A biblioteca fica embutida no projeto para não depender de site externo.",
          "<b>clasp:</b> envia o código do VS Code para o Apps Script e publica novas versões mantendo a mesma URL."
        ] },
        { h: "Interface web", ul: [
          "Mapa de calor com 13 indicadores.",
          "Cartão flutuante com bandeira, valor e posição no ranking.",
          "Legenda com distribuição, mediana, razão entre os 10% do topo e os 10% da base, e os 5 melhores e 5 piores.",
          "Painel com três abas (Visão geral, Igualdade, e História &amp; IA).",
          "Busca instantânea dos 5.570 municípios (Ctrl K).",
          "Layout de celular com o painel em gaveta."
        ] }
      ]
    },

    /* ===================== LANGCHAIN ===================== */
    {
      id: "revisa-in", cat: "langchain", title: "Revisa.In",
      live: true,
      summary: "O revisa.in é um app web que analisa perfis do LinkedIn com inteligência artificial generativa (Google Gemini), como um especialista sênior em Recrutamento e Seleção faria. A pessoa cola o link do perfil, informa o cargo que busca e, de preferência, envia o PDF que o próprio LinkedIn gera. Em menos de um minuto e meio, recebe um relatório visual com nota por seção, leitura da trajetória nas empresas, skills a desenvolver, textos reescritos prontos para colar e um plano de ação.",
      stack: ["Python", "FastAPI", "LangChain", "Google Gemini", "Pydantic", "HTML · CSS · JS", "Render"],
      links: [{ label: "Abrir o Revisa.In", url: "https://analisador-linkedin.onrender.com/", primary: true }],
      intro: ["O objetivo é transformar um perfil do LinkedIn em um diagnóstico prático e embasado. Antes de avaliar, a IA pesquisa na internet o que o mercado pede hoje para aquele cargo. O app funciona para qualquer profissão, roda 24 horas na nuvem e tem custo zero de infraestrutura."],
      sections: [
        { h: "Objetivos do Projeto", ul: [
          "Avaliar perfis de qualquer área (saúde, direito, vendas, engenharia, educação, tecnologia...) com os critérios de uma triagem real: aparecer nas buscas de recrutadores, clareza em poucos segundos, competências comprovadas, senioridade e sinais de alerta.",
          "Basear as recomendações em dados atuais de mercado. Uma etapa de pesquisa com a Busca Google integrada ao Gemini levanta skills, ferramentas, palavras-chave e certificações pedidas para o cargo e mostra as fontes consultadas.",
          "Contar a história profissional da pessoa: tempo em cada empresa, descrição de cada empresa e uma linha do tempo em capítulos, com cada experiência reescrita no formato que funciona melhor no LinkedIn.",
          "Garantir respostas confiáveis. A saída da IA segue um formato estruturado e validado, a IA nunca inventa números (usa marcadores como [X%] para a pessoa preencher) e só usa fatos do próprio perfil.",
          "Contornar o bloqueio do LinkedIn de forma legítima. O caminho principal é o PDF oficial do perfil. Sem ele, o app busca as informações públicas do perfil na internet e faz uma análise parcial, deixando isso claro no relatório.",
          "Manter custo zero e infraestrutura simples: API gratuita do Gemini, hospedagem gratuita no Render e deploy automático a cada push no GitHub.",
          "Oferecer uma experiência cuidada no computador e no celular, com gráficos interativos, PDF personalizado com a marca e acessibilidade (teclado, leitores de tela, movimento reduzido)."
        ] },
        { h: "Arquitetura da Solução", ul: [
          "<b>Entrada:</b> link do perfil, cargo desejado e, opcionalmente, o PDF exportado do LinkedIn ou o texto colado.",
          "<b>Leitura do perfil:</b> o extractor.py extrai o texto do PDF com pypdf e tenta ler a página pública com httpx e BeautifulSoup. Se o LinkedIn bloquear e não houver PDF, uma cadeia do LangChain usa o Gemini com Busca Google para encontrar as informações públicas daquele perfil exato, sem confundir pessoas com nomes parecidos.",
          "<b>Etapa 1, pesquisa de mercado:</b> o Gemini pesquisa na internet o que o mercado pede para o cargo e devolve um briefing com as fontes.",
          "<b>Etapa 2, análise:</b> o Gemini avalia o perfil com base nessa pesquisa e devolve uma resposta estruturada, validada por modelos Pydantic. Se a resposta vier incompleta, a cadeia tenta de novo automaticamente.",
          "<b>Backend:</b> o FastAPI recebe a requisição, aplica o limite de uso (5 análises a cada 10 minutos por pessoa, sem contar falhas da IA) e entrega a API e as páginas do app.",
          "<b>App:</b> a interface em HTML, CSS e JavaScript puro monta o relatório com gráficos em SVG e permite baixar o PDF personalizado.",
          "<b>Hospedagem:</b> o Render publica o app a partir do GitHub. A chave da API fica em variável de ambiente e nunca vai para o repositório."
        ] },
        { h: "Componentes Principais", ul: [
          "<b>Python + FastAPI:</b> backend, leitura de PDF, limite de uso, novas tentativas e entrega das páginas.",
          "<b>LangChain:</b> organiza três cadeias reutilizáveis: busca pública do perfil; pesquisa de mercado com fontes; análise com saída estruturada e nova tentativa automática.",
          "<b>Google Gemini (API gratuita):</b> analista de IA com papel de especialista em R&amp;S. Usa a Busca Google como ferramenta para pesquisar o mercado em tempo real.",
          "<b>Pydantic:</b> define o formato exato da resposta da IA (notas de 0 a 100, anos por empresa, níveis de skills), garantindo que os gráficos sempre recebam dados válidos.",
          "<b>PDF personalizado:</b> relatório com capa da marca revisa.in, cabeçalho, rodapé, numeração de páginas e layout próprio para impressão.",
          "<b>Layout responsivo:</b> testado em telas de celular de 360 px e 390 px, com gráficos que se adaptam e respondem ao toque.",
          "<b>Render:</b> hospedagem gratuita com HTTPS e deploy automático a cada git push."
        ] },
        { h: "Interface web", ul: [
          "Página inicial com efeitos visuais e gráficos de exemplo.",
          "Formulário com envio do PDF e botão \"Tentar de novo\" quando a análise falha.",
          "Relatório com medidor da nota geral e indicadores de encontrabilidade, clareza, prova de resultados e aderência ao cargo.",
          "Gráfico de tempo em cada empresa com o cartão da empresa e linha do tempo em capítulos.",
          "Gráfico de rosca dos pontos fortes e barras das skills (hoje × esperado).",
          "Cargos compatíveis, headlines, Sobre reescrito, palavras-chave e ideias de posts."
        ] }
      ]
    }
  ]
};
