/* English version of the portfolio content.
   Each entry here overrides the matching text in data.js when the site is in English
   (see assets/i18n.js). Links, images, embeds and ids stay in data.js.
   - person/ai: fields replaced as-is.
   - skillGroups/career/courses: same order as in data.js.
   - categories/projects: keyed by id. In projects, "links" and "images" are lists of
     labels/captions in the same order as in data.js; "sections" replaces the whole list.
   - terms: translation of technology tags that are written in Portuguese. */

window.PORTFOLIO_EN = {
  person: {
    role: "Data Supervisor",
    tagline: "Analytics Engineering · Data Strategy · Dashboards · AI Agents",
    location: "Belo Horizonte, MG · Brazil",
    bioTitle: "About me",
    bio: "Hi! I'm Marcell Felipe, a Data Analyst. I started my career in Data Engineering, where the work includes building and maintaining big data architectures and making sure different systems and data sources integrate. There I specialized in ETL (Extract, Transform, Load) processes, which are essential to turn raw data into structured, usable information. I also worked on query optimization and database design, ensuring efficient storage and fast data retrieval. As a Data Analyst, I shifted my focus to interpreting and visualizing that information. My job is to identify trends, build predictive models and tell stories with data. Using visualization tools and statistical techniques, I turn large volumes of information into clear, actionable insights, always presented in an engaging and visually striking way. Along the way, I developed a unique mix of technical precision and creativity that lets me deliver advanced analyses and extract valuable information. I invite you to explore my portfolio to see examples of my work. I'd be glad to discuss how I can help take your project to success."
  },

  skillGroups: [
    "BI and Visualization",
    "Languages and Python",
    "Data Engineering and Orchestration",
    "Analytics Engineering",
    "Databases and Data Warehouses",
    "Cloud",
    "Automation and Low-code",
    "Generative AI and Agents",
    "Web and Design"
  ],

  career: [
    { role: "Data Supervisor", period: "Aug 2026 – present", place: "Contagem, MG",
      text: "Hired to lead the technical data area of SOC MG4 (COP structure), responsible for leading the data team and for the analytical intelligence of People, HSE, Planning, PCP and Logistics Operations (Inbound, Conveyors/Sorting and Outbound)." },
    { role: "BI Analyst | Analytics Engineer", period: "Sep 2024 – Aug 2026", place: "Remote",
      text: "Architecture of the Gold and Diamond layers of the Data Lakehouse with dbt and CI/CD, supporting FP&A, Credit and Collections, Logistics, S&OP, Accounting and Controllership, Costs and CX." },
    { role: "BI Analyst (Analytics Engineer)", period: "Jul 2024 – Sep 2024", place: "Remote",
      text: "Data projects for corporate clients such as Bunge, Audi, Record and Simplic: SQL modeling integrated with Databricks, Python automations and Power BI dashboards." },
    { role: "Senior Health Data Analyst", period: "Jan 2024 – Aug 2024", place: "Remote",
      text: "Health Analytics: normalization of hospital data, processing with PySpark, health KPIs in Power BI and machine learning models in Python." },
    { role: "Data Specialist II", period: "Apr 2023 – Sep 2023", place: "Nova Lima, MG",
      text: "Analytics for restructuring projects: PySpark and Databricks, strategic KPIs in Power BI and automations with Power Apps, Power Automate and VBA." },
    { role: "Data Analyst", period: "Jan 2023 – May 2023", place: "Remote",
      text: "ETL in PL-SQL, T-SQL and Python, marketing analytics with Google Analytics and dashboards in Power BI, Looker, Tableau and MicroStrategy." },
    { role: "Data Analyst I", period: "Jun 2022 – Mar 2023", place: "Remote",
      text: "Complaint management platform with Azure Functions, CosmosDB, Docker, Kubernetes and Power Platform; end-to-end solutions for retail." },
    { role: "Store Supervisor", period: "Oct 2020 – Jun 2022", place: "Ipatinga, MG",
      text: "Branch management: team leadership, sales targets, financial management and tax compliance, tracked through KPIs." }
  ],

  ai: {
    greeting: "Hi! I'm the assistant for Marcell's portfolio. I can explain any project, the stack he uses or his career path. What would you like to know?",
    suggestions: ["Which projects use generative AI?", "Which languages does he speak?", "Show me a Power BI dashboard", "Summarize Marcell's career"]
  },

  courses: [
    { name: "Xperium Power BI · Express Track", detail: "Track 1 · Power BI Fundamentals" },
    { name: "Excel Expert", detail: "Certificate" },
    { name: "Xperium Power BI · Full Track", detail: "Complete Power BI Course" },
    { name: "MySQL · Full Track", detail: "SQL with Oracle's MySQL Server program · Alura" },
    { name: "SQL Server · Full Track", detail: "SQL with Microsoft SQL Server 2017 program · Alura" },
    { name: "Python · Full Track", detail: "Learn to program in Python with Object Orientation program · Alura" }
  ],

  categories: {
    appscript: "AI Agents · Apps Script",
    "agentes-py-js": "AI Agents · Python · JavaScript"
  },

  terms: {
    "Modelagem Dimensional (Kimball)": "Dimensional Modeling (Kimball)",
    "SCD Tipo 2": "SCD Type 2",
    "Arquitetura Medalhão": "Medallion Architecture",
    "Agentes de IA": "AI Agents",
    "API pública": "Public API",
    "Finanças": "Finance",
    "Séries temporais": "Time series",
    "Geração de PDF": "PDF generation",
    "Score de risco": "Risk score",
    "Coorte": "Cohort",
    "RAG híbrido": "Hybrid RAG",
    "Google Planilhas": "Google Sheets",
    "APIs do IBGE": "IBGE APIs",
    "API ComexStat": "ComexStat API",
    "Texto-para-SQL": "Text-to-SQL",
    "Liderança": "Leadership",
    "Gestão por indicadores": "KPI-based management"
  },

  projects: {
    /* ===================== POWER BI ===================== */
    "crime-mg": {
      title: "Crime in Minas Gerais",
      summary: "I carried out a detailed analysis using a public API provided by the state on its website, capturing 12 years of crime data (rapes, homicides, robberies and kidnappings) and the total number of records across Minas Gerais, broken down by segment. The goal is to quantify crime, not to disparage the state or its people.",
      links: ["Data source (CGE-MG)"],
      sections: [
        { h: "1. Records", p: ["We surveyed the total number of police reports by city, with daily, monthly and yearly analyses. We also compared the current year with the previous one, month by month."] },
        { h: "2. Rapes", p: ["We carried out a comprehensive analysis of rape cases, including both attempts and completed acts. This detailed analysis covers every possible form of the crime. The data was examined yearly and also broken down by city, giving a broad and detailed view of these incidents."] },
        { h: "3. Homicides", p: ["In this section, we analyzed the number of attempted and completed homicides. We made daily, monthly and yearly comparisons, breaking the data down by municipality for a more detailed understanding of these events."] },
        { h: "4. Kidnappings", p: ["In this segment, we carried out a detailed analysis and yearly tracking of attempted kidnappings. It includes daily, monthly and yearly averages per municipality, as well as a breakdown by city, for a more complete view of how often kidnappings occur."] },
        { h: "5. Robberies", p: ["We carried out a detailed survey of robberies, both attempted and completed. The analysis covers yearly, monthly and quarterly data, including the percentage and average of robberies. It gives a comprehensive overview of how often these crimes occur."] },
        { h: "6. Overall", p: ["Finally, we carried out an overall analysis covering all crime types against the total number of occurrences. It shows the total, the maximum and the average percentage of crimes, with detailed daily, monthly and yearly data."] }
      ]
    },
    "ambev": {
      title: "AMBEV Financial Analysis",
      summary: "I carried out a detailed analysis of the PDF report published by Ambev, focusing on the Income Statement (DRE) data: costs, gross revenue and other relevant financial items. The analysis was objective and impartial, focusing only on financial and operational aspects. The data came from a public PDF released by AMBEV.",
      links: ["AMBEV reports (Investor Relations)"],
      sections: [
        { h: "1. Income Statement (DRE)",
          p: ["To improve the analysis of the Income Statement for 2017, 2018 and 2019, the first step is to categorize revenues and expenses correctly. Here is a structured way to approach the analysis based on the listed items:"],
          ul: [
            "<b>Revenue from Sales of Goods and/or Services:</b> Analyze sales trends over the three years and identify any growth or decline pattern.",
            "<b>Cost of Goods and/or Services Sold:</b> Assess how costs evolve relative to sales and calculate the gross margin.",
            "<b>Gross Profit:</b> Derive gross profit by subtracting the cost of goods/services sold from total sales revenue.",
            "<b>Operating Expenses/Income:</b> Include items such as Selling Expenses and General and Administrative Expenses, among others, to calculate operating profit.",
            "<b>Other Operating Income and Expenses:</b> Consider non-recurring or extraordinary effects.",
            "<b>Impairment Losses:</b> Identify any asset write-downs that may have affected results.",
            "<b>Equity Method Result:</b> Where applicable, analyze contributions from investments in other companies.",
            "<b>Result Before Financial Result and Taxes:</b> Summarize operating results before financial expenses and taxes.",
            "<b>Financial Result:</b> Deduct Financial Expenses from Financial Income to understand the impact of financial activities.",
            "<b>Result Before Income Taxes:</b> Calculate profit before taxes.",
            "<b>Current Income Tax and Social Contribution:</b> Calculate the effect of taxes on profit."
          ] },
        { h: "2. Financial Simulator", p: ["In this step, I built a simulator where users can make their own comparisons. It lets them adjust parameters to simulate results based on percentage changes in revenue, cost and expenses. It also shows the variance between actual and simulated results, highlighting the increase in revenue (Revenue var), the reduction in costs (Cost var), the increase in margin (Margin var) and in expenses (Expense var), leading to an increase in EBIT (EBIT var)."] }
      ]
    },
    "israel-palestina": {
      title: "Israel and Palestine Conflict",
      summary: "I carefully examined the data available in CSV format on Kaggle. It is essential to stress that the analysis was conducted impartially, without any political or ideological bias toward Palestine or Israel, in recognition that armed conflicts involve many actors, each with their own motivations and consequences.",
      links: ["Dataset on Kaggle"],
      intro: [
        "It is important to remember that a war has many perspectives and impacts. Some profit from selling weapons, while others face the loss of loved ones and the terrible consequences of violence. It is also crucial to recognize that many leaders often hold influence over those with less information and fewer resources, while they themselves enjoy privileges in safe places.",
        "By taking an impartial, data-centered approach, our analysis aims to provide an objective understanding of the events and trends related to the conflict, encouraging informed, fact-based discussion and raising awareness of the human impact of conflict."
      ],
      sections: [
        { h: "1. Fatalities", p: ["I conducted a thorough analysis of fatalities from different perspectives, including the victims' nationality and total fatalities at daily, monthly and yearly levels. I also built several filters for detailed analysis by criteria such as the type of ammunition involved, the victims' place of residence, the affected districts, the type of injury and the year.", "This multidimensional approach aims to give a comprehensive view of fatalities in the context of the conflict, helping identify significant patterns, correlations and trends that contribute to a deeper understanding of its human implications."] },
        { h: "2. Age group", p: ["In this step, I created a calculated column that turns ages into age groups following recognized international standards. It allows deeper analysis, making it easier to filter and analyze fatalities by geographic region, age group, percentage by age group, percentage by gender, type of ammunition used, victims' citizenship and the type of injury that caused the death.", "This enriched approach gives a more detailed understanding of the victims' characteristics and of the events related to the fatalities. It contributes to a more complete and contextualized view of the conflict's human impact, which can be essential to assess its implications and look for appropriate solutions."] },
        { h: "3. Districts", p: ["In this analysis, we focused on fatalities in different districts, with a specific focus on the nationality of the people who died. We used filters to identify those responsible for the fatalities, whether radical groups or Israeli military forces. Because of the large number of deaths in a short period, a significant share of cases was categorized as \"not reported\".", "After a detailed analysis of name origins, we found that about 85% of fatalities are related to Palestinian origin. We also built filters to distinguish whether fatalities are associated with hostile groups, that is, caused by radicals. The data can also be filtered by year, allowing a time-based analysis of fatalities throughout the conflict.", "This analysis offers a comprehensive, structured view of the fatalities, helping identify trends, patterns and relevant information that contribute to understanding the human impact of this complex conflict."] }
      ]
    },
    "polos": {
      title: "Customer Performance and Revenue by Learning Center",
      summary: "I carried out a thorough analysis of the data in an Excel spreadsheet focused on education centers and their customers. The analysis is split into three pages, each focusing on specific aspects of the data.",
      sections: [
        { h: "1. Payments and Sign-ups", p: ["I surveyed payments in detail on a weekly, monthly and yearly basis. The analysis considered the state, the learning center, the city, the sales channel, the admission method and the conversion value."] },
        { h: "2. Student Analysis", p: ["A detailed analysis of students: the total number of students by gender (male and female), the number of overdue and late payment slips, conversion by gender and, finally, a breakdown by state covering sign-ups and payments."] },
        { h: "3. Weeks and Centers", p: ["I analyzed weekly sign-ups, the average time to pay payment slips and the number of days between sign-up and payment."] }
      ]
    },
    "faturamento-clientes": {
      title: "Revenue and Customer Analysis",
      summary: "I examined sales and customer records provided in an Excel spreadsheet. The analysis is presented in four pages.",
      sections: [
        { h: "1. Revenue", p: ["Here I assess revenue over time, by month and city. I also examine sales margin and revenue by plan, highlighting performance by city."] },
        { h: "2. Customers", p: ["Here I assess customer evolution on a yearly, monthly, quarterly and daily basis. I highlight the share of voluntary churn, when a customer chooses to leave their internet plan within 1 year, and involuntary churn, caused by dissatisfaction such as poor service or plan suspension for non-payment."] },
        { h: "3. Pareto", p: ["Here I use the Pareto method to rank cities using ABC classification, based on the revenue each one generates. I also examine the specific customers who contribute significantly to sales."] },
        { h: "4. Funnel", p: ["In this section, I examine churn by month, city and year."] }
      ]
    },
    "ecommerce": {
      title: "E-commerce Analysis",
      summary: "I analyzed the sales records of an e-commerce business using an open-data Excel file available on Kaggle.",
      sections: [
        { h: "1. Sales Evolution", p: ["We analyzed revenue by category, assessed trends over time and ranked sales by city and by seller. I also examine the margin percentage, comparing the current value with the previous month."] },
        { h: "2. Shipping", p: ["In this section, I analyze shipping by country, with filters by month, product category, city and region. I also run an exploratory analysis focused on the highest shipping costs."] }
      ]
    },
    "covid-pbi": {
      title: "SARS-CoV-2 (Covid-19) Analysis",
      summary: "I analyzed Covid-19 records from an open-data Excel file available on Kaggle.",
      sections: [
        { h: "1. Deaths", p: ["In this step, I assess fatalities by month and by country over time. I compare fatalities with the number of cases and track the ratio of deaths to total cases."] },
        { h: "2. KPI", p: ["An analysis of how cases evolved, based on tables with time-series data on the spread of Covid, plus a comparison of cumulative cases."] },
        { h: "3. Cases", p: ["An interactive ranking that shows how the disease actually progressed in each country over time."] }
      ]
    },
    "bebidas": {
      title: "Drinks Around the World",
      summary: "I analyzed Kaggle data on spirits, draft beer and beer, wine and the consumption of any kind of alcoholic beverage worldwide. In some countries, religion forbids drinking. Even so, people find a way to make their own drinks, and for the countries with the strictest bans a typical local drink was listed, for which I collected images.",
      sections: [
        { h: "1. Alcoholic drinks", p: ["In this step, I quantify the consumption of different types of drinks, such as spirits, wine, beer and draft beer, and assess overall alcohol consumption worldwide."] },
        { h: "2. Percentage and Total Analysis", p: ["Here I assess the absolute total and the percentage values for each country."] }
      ]
    },

    /* ===================== METABASE ===================== */
    "comexstat": {
      title: "Integrated Analysis of Brazilian Imports via the ComexStat API",
      summary: "This project aims to understand Brazil's import and export landscape using official data from the ComexStat API. It was motivated by recent discussions about global trade policy and international tariffs, such as those proposed by Donald Trump, with an analytical and technical focus and no political bias.",
      links: ["GitHub repository", "Project PDF"],
      sections: [
        { h: "Process Steps", ol: [
          "<b>Data Extraction via API:</b> Python scripts accessed the ComexStat API, collecting detailed import and export data by municipality, product, FOB value, quantity and transport mode.",
          "<b>Database Storage:</b> The extracted data was transformed and normalized before being loaded into a PostgreSQL database, allowing efficient queries and integration with analytics tools.",
          "<b>Analysis with Metabase:</b> The database was connected to Metabase, where visualizations and dashboards were built to make the data easier to interpret. Each chart was designed to provide strategic insights into Brazilian foreign trade."
        ] },
        { h: "Total FOB Value Imported per Year", ul: ["Shows how the total value of Brazilian imports has evolved over the years.", "Helps identify macroeconomic trends and the impact of trade policies.", "Highlights years of significant growth or decline in imports."] },
        { h: "Number of Products Imported per Year", ul: ["Shows the total quantity of products imported each year.", "Helps understand the physical volume of imports, regardless of monetary value.", "Useful for spotting changes in consumption and dependence on inputs."] },
        { h: "Top Countries of Origin for Imports (Top 10)", ul: ["Shows the ten countries that exported the most to Brazil in the period analyzed.", "Shows how concentrated imports are by country of origin.", "Essential to assess trade dependence on specific nations."] },
        { h: "Share of Imports by Transport Mode", ul: ["Shows the share of each logistics mode (sea, air, road, etc.).", "Helps understand the dominant infrastructure for imports.", "Reveals the importance of sea freight in Brazil's international trade."] },
        { h: "Top Importing Municipalities (Top 10)", ul: ["Lists the Brazilian municipalities with the highest import volume in FOB value.", "Makes it easier to identify strategic logistics and industrial hubs in the country.", "Useful for investment decisions in infrastructure and foreign trade."] }
      ]
    },

    /* ===================== PYTHON ===================== */
    "pop-carceraria": {
      title: "Prison Population of Minas Gerais",
      summary: "This notebook presents a comprehensive analysis of the prison population of the state of Minas Gerais. Through a series of visualizations and data tables, we explore different aspects of the data to uncover insights and patterns.",
      links: ["PDF generated from the Jupyter Notebook"],
      sections: [
        { ul: [
          "<b>Data Acquisition and Cleaning:</b> First, we acquired data from a reliable source, ensuring relevance and accuracy. The data is then cleaned to remove inconsistencies or missing values, preparing it for analysis.",
          "<b>Data Overview:</b> We present a first look at the data in a well-structured table, giving a snapshot of columns such as 'Penitenciaria' (Penitentiary), 'Cidade' (City), 'Detentos' (Inmates) and others, which include counts and categorical data.",
          "<b>Initial insights:</b> basic statistics summarize the central tendency, spread and shape of the dataset's distribution, including mean, median and standard deviation, for an initial understanding of the data.",
          "<b>Detailed analysis:</b> we dig deeper into the data with visual representations.",
          "<b>Histograms:</b> show the frequency distribution of inmates across penitentiaries, illustrating the most and least crowded facilities.",
          "<b>Bar charts:</b> compare the number of inmates across cities, highlighting areas with the highest concentration of the prison population.",
          "<b>Time-series analysis:</b> a line chart with a range slider gives a dynamic view of the population trend over time.",
          "<b>Conclusion:</b> Each visualization comes with a short interpretation, pointing out key findings such as population peaks or anomalies."
        ] },
        { p: ["This notebook was designed to be accessible to a broad audience, with clear visualizations and explanations that require no technical background. The goal is to inform policy decisions, resource allocation and public awareness of the prison system in Minas Gerais."] }
      ]
    },
    "violencia-mulher": {
      title: "Violence Against Women",
      summary: "This notebook details a data analysis of violence against women in Minas Gerais from 2013 to 2023. Using ETL (Extract, Transform, Load) techniques and joining several data sources, we structured the information in a Star Schema model. In Power BI, we explored several aspects of this data to identify significant patterns and insights about violence against women in the region.",
      links: ["PDF generated from the Jupyter Notebook"],
      sections: [
        { p: ["In this advanced project, we start by installing the PySpark libraries needed for the ETL of 10 CSV files. After reading them, we merge the data into a single compiled file. We clean the data by removing null or blank records, rename columns and change the victims column from String to Integer. We select the relevant data to build Star Schema tables, including Calendar, Municipality and Fatality dimensions. Finally, we convert the data to Parquet for better performance and store it in BigQuery through Google Cloud Storage."] }
      ],
      images: [
        "Parquet tables stored in the Cloud Storage bucket",
        "Tables created in BigQuery from the bucket",
        "Structural diagram of how the project was built"
      ]
    },
    "pyspark-cotacoes": {
      title: "Stock Quotes · PySpark Pipeline with Airflow and Docker",
      subtitle: "Incremental load with validation, quarantine and reprocessing of failed records only",
      summary: "A PySpark pipeline orchestrated by Apache Airflow that fetches daily stock quotes (IBM, AAPL, MSFT) from the Alpha Vantage API and writes them through raw → staging → intermediate → marts layers, all running in Docker. The load is incremental: it only processes what is new or what failed in a previous run. Data that is already validated is neither reprocessed nor rewritten, and invalid records go to quarantine with the reason.",
      links: ["GitHub repository"],
      sections: [
        { h: "Solution Architecture", pre: "Alpha Vantage API\n      │\n      ▼\nraw          JSON as returned by the API (never changed)\n      │\n      ▼\nstaging      typed table, one row per stock/day\n      │\n      ▼\nintermediate validation ─┬─ valid   → int_cotacoes_validadas\n                         ├─ invalid → int_quarentena (with the reason)\n                         └─ status  → controle_processamento\n      │\n      ▼\nmarts        mart_cotacoes_diarias · mart_resumo_mensal\n\nAirflow DAG: raw >> staging >> intermediate >> marts" },
        { h: "Layers and Tables", ul: [
          "<b>raw:</b> the API response as returned, partitioned by <code>run_id</code>. Never changed.",
          "<b>staging · stg_cotacoes_diarias:</b> one row per stock/day, already typed. Values that fail to convert become null.",
          "<b>intermediate · int_cotacoes_validadas:</b> only records that passed validation, partitioned by stock and trading date.",
          "<b>intermediate · int_quarentena:</b> rejected records with the list of errors.",
          "<b>control · controle_processamento:</b> OK/ERROR status of each stock/day in each run.",
          "<b>marts · mart_cotacoes_diarias:</b> daily return %, range % and 5- and 20-day moving averages.",
          "<b>marts · mart_resumo_mensal:</b> monthly open, close, high, low, volume and change.",
          "All tables except raw are written as Parquet."
        ] },
        { h: "Incremental Logic", p: ["Uses Spark's <code>partitionOverwriteMode = dynamic</code>: the overwrite only replaces the partitions present in the DataFrame being written."], ol: [
          "Reads the staging data from the current run.",
          "Reads the control table and takes the latest status of each stock/day.",
          "Removes everything already OK with a <code>left_anti join</code>. Only new days and days that previously FAILED remain.",
          "Applies the validation rules to what remains.",
          "Writes valid records overwriting only their partitions, invalid ones to quarantine, and the status of all of them to the control table."
        ] },
        { h: "Data Quality", p: ["The rules live in a dictionary in <code>validacao.py</code>; to create a new one, just add an entry."], ul: [
          "Empty ticker, invalid date or date in the future.",
          "Null, non-numeric or non-positive price.",
          "High lower than low; open or close outside the low–high range.",
          "Null or negative volume and duplicate records on the same day.",
          "<b>Tested:</b> in a simulated scenario, two days arrive wrong in the first run and go to quarantine; in the second, the source sends the corrected days and only those are reprocessed."
        ] },
        { h: "Main Components", ul: [
          "<b>PySpark:</b> reading, typing with a fixed schema, validation, incremental load and indicator calculation with window functions (returns, moving averages).",
          "<b>Apache Airflow:</b> DAG with one task per layer. A failed task can be rerun with <i>Clear</i> without redoing the previous ones, and rerunning the same <code>run_id</code> gives the same result.",
          "<b>Docker and Docker Compose:</b> one image with Airflow, Java 17 and PySpark; a single <code>docker compose up</code> starts everything.",
          "<b>pytest:</b> tests for validation and the incremental load (error followed by a fix), without calling the API.",
          "<b>Alpha Vantage API:</b> daily quotes for the last 100 trading sessions, with the key stored in an environment variable."
        ] }
      ]
    },
    "covid-python": {
      title: "Covid-19 Worldwide",
      summary: "Exploratory analysis of worldwide Covid-19 data in Python, with the full report exported to PDF.",
      links: ["PDF report"]
    },
    "mercado-financeiro": {
      title: "Finance and Financial Markets",
      summary: "A Python analysis project on finance and financial markets, with the full report exported to PDF.",
      links: ["PDF report"]
    },
    "imc-pdf": {
      title: "BMI Calculator with PDF Generator",
      summary: "A Python application that calculates BMI and automatically generates a PDF report.",
      links: ["GitHub repository"]
    },
    "kaggle-snowflake": {
      title: "Kaggle Data Ingestion into Snowflake",
      summary: "A Kaggle data ingestion pipeline orchestrated with Prefect and loaded into Snowflake.",
      links: ["GitHub repository"]
    },
    "precos-imoveis": {
      title: "Real Estate Price Analysis",
      summary: "A notebook analyzing real estate prices, built in Google Colab.",
      links: ["Open notebook in Colab"]
    },

    /* ===================== LOOKER STUDIO ===================== */
    "performance-comercial": {
      title: "Sales Performance",
      summary: "This dashboard was built to monitor the company's main sales performance indicators. The interface is interactive and responsive, with filters for Year, Month, Category, Product Line and State.",
      links: ["Open in Looker Studio"],
      sections: [
        { h: "Key Indicators (KPIs)", ul: [
          "<b>Revenue:</b> Total sales in monetary value.",
          "<b>Number of Sales:</b> Total volume of transactions.",
          "<b>Average Ticket:</b> Average value per sale, helping assess consumer behavior.",
          "<b>Total Weight:</b> Physical quantity moved in kilograms, useful for logistics and supply.",
          "<b>Coverage:</b> Total number of points of sale or customers served."
        ] },
        { h: "Indicators Over Time", ul: ["A column chart shows how revenue has evolved over the years.", "Helps identify seasonality and periods of growth or decline.", "Ideal for historical analysis and year-over-year comparisons."] },
        { h: "Sales Distribution", ul: [
          "<b>% Sales by Line:</b> A pie chart splitting total sales by product line (such as Biscuits, Food, etc.).",
          "Shows which lines account for the largest share of total sales.",
          "Helps focus sales efforts and make portfolio decisions.",
          "<b>Sales by Product Group:</b> A bar chart with the best-selling product groups.",
          "Shows the main revenue drivers within each line.",
          "Supports marketing, assortment and pricing decisions."
        ] },
        { h: "Performance by Manager", ul: ["A comparison table with each manager's main indicators.", "Includes revenue, number of sales, average ticket and coverage.", "Makes it easier to track sales targets and assess team performance."] },
        { h: "Geographic Coverage", ul: ["An interactive map with the geographic distribution of sales.", "Allows analysis by region, supporting strategic and tactical decisions.", "Important to identify areas with higher or lower market penetration."] }
      ]
    },

    /* ===================== SQL ===================== */
    "sql-ecommerce": {
      title: "Analysis and Classification of E-commerce Companies",
      subtitle: "Focused on platform specialization",
      summary: "This project is a complex, optimized SQL analysis designed to extract valuable insights from a dataset of companies specialized in e-commerce development. The main goal is to identify and classify companies by their focus on specific platforms (Shopify, Magento, WooCommerce, Others), determine how diverse their work is, and correlate this with company size and geographic location.",
      links: ["Dataset on Kaggle"],
      code: "Query (BigQuery)",
      images: ["Sample of the output data"],
      sections: [
        { h: "Analysis Goal", p: ["The query was built to answer questions such as:"], ul: [
          "What is each company's main focus in terms of e-commerce platform?",
          "On how many e-commerce platforms is a company actively working?",
          "How do e-commerce focus and minimum project size vary across company sizes?",
          "What are the focus and diversity statistics by state/country?",
          "Which are the top companies for each main e-commerce platform, based on focus and project size?"
        ] }
      ]
    },
    "sql-risco-cartoes": {
      title: "Risk Analysis and Monitoring of Credit Card Transactions",
      subtitle: "Focused on detecting behavior patterns after risk exposure",
      summary: "This project is an advanced SQL analysis focused on detecting and tracking risky behavior among customers exposed to fraud factors. By integrating financial transaction data, customer records and the attributes of the credit cards used, we look for suspicious patterns, calculate risk indicators and analyze whether cards keep being used after fraud is detected.",
      code: "Query (BigQuery)",
      images: ["Sample of the output data"],
      intro: ["The analysis also includes a cohort approach, showing how customers behave in the months after the first sign of risk (such as using a card exposed on the dark web)."],
      sections: [
        { h: "Analysis Goal", p: ["The analysis was built to answer questions such as:"], ul: [
          "Which customers had cards linked to the dark web and kept using them after the risk?",
          "What transaction patterns are associated with risk (high amounts, no chip, suspicious MCCs)?",
          "What is the average card usage time after the first sign of risk?",
          "What percentage of transactions exceed 80% of the credit limit?",
          "How does transaction volume behave in different regions or states after the risk?",
          "Is there a correlation between low credit and high-value transactions?",
          "Which MCCs are most common in transactions by highly indebted customers?"
        ] }
      ]
    },

    /* ===================== DBT ===================== */
    "educacao-dbt": {
      title: "Education · ETL Pipeline with Python + dbt in Docker",
      summary: "This project implements a complete ETL pipeline for INEP/IBGE education data using Python, dbt and PostgreSQL, all orchestrated in Docker containers. The goal is to extract, organize and serve data in structured layers (Bronze → Silver → Gold), optimizing analysis and visualization in BI tools such as Power BI or Looker Studio.",
      links: ["GitHub repository"],
      sections: [
        { h: "Project Goals", ul: ["Centralize and version the extraction of public education data.", "Organize data in a modern layered architecture for efficient analysis.", "Ensure reproducibility and easy deployment in any environment.", "Automate data typing and transformation with dbt.", "Build a reliable foundation for indicators and analytical dashboards."] },
        { h: "Solution Architecture", pre: "INEP/IBGE API\n      │\n      ▼\nPython Extractor (Pipeline)\n      │\n      ├── dbt seed → Bronze (raw data in CSV)\n      └── dbt run  → Silver (cleaned data) / Gold (analytical data)" },
        { h: "Main Components", ul: [
          "<b>Python pipeline:</b> Consumes the API, generates CSV files and starts the dbt process.",
          "<b>dbt-cli:</b> Materializes the layers and runs tests and transformations.",
          "<b>PostgreSQL 17:</b> Target database, exposed on localhost:5433 for consumption.",
          "<b>Docker Compose:</b> Orchestrates the services, ensuring isolation and standardization."
        ] },
        { h: "Key Deliverables", ul: ["Docker environment configured with Postgres, dbt and the Python pipeline.", "Separate schemas (public_raw, public_silver, public_gold).", "Reproducible, documented pipeline.", "Automated extraction, transformation and loading (ETL).", "Data ready for direct integration with BI tools.", "Documentation for installation, execution and contribution."] },
        { h: "Technologies Used", ul: ["<b>Python 3.11</b> → Data extraction and seed generation.", "<b>dbt-core 1.7</b> → Transformations, materializations and tests.", "<b>PostgreSQL 17</b> → Structured data storage.", "<b>Docker/Docker Compose</b> → Service orchestration.", "<b>Pandas / Requests / PyYAML</b> → Data handling and integration."] }
      ]
    },
    "museus-brasil": {
      title: "Museums of Brazil · ETL with dbt and DuckDB, Python Dashboard, AI Agents and GoodData",
      summary: "Where Brazil has museums, where it doesn't, and how they are organized. A complete Analytics Engineering pipeline: partitioned lake → dbt with Write-Audit-Publish and quarantine → Python dashboard → AI agent → GoodData. It uses real data from the National Museum Registry (Ibram) crossed with the 2022 Census.",
      links: ["Published dashboard", "GitHub repository", "GoodData dashboard (PDF)"],
      intro: ["The project starts from a question: how many Brazilians live far from any museum, and how are the existing museums organized? The answer: <b>3,775 active museums</b>, but in only <b>25% of municipalities</b>. <b>64 million people (31.5%)</b> live in a city with no museum; in Maranhão, 71%."],
      sections: [
        { h: "In one minute", ul: [
          "<b>The data:</b> 4,159 museums and 536 Memory Points from Ibram (public API), 5,571 municipalities and the population from the 2022 Census (IBGE).",
          "<b>Indicators:</b> 3,775 active museums · 1.86 per 100k inhabitants · 25% of municipalities have a museum · 31.5% of the population has no museum in their city · 24% have a museum plan · 50% have no accessibility features.",
          "<b>What's here:</b> a complete Analytics Engineering pipeline, with data quality checks that block what's wrong, a dashboard, an agent that answers in Portuguese and the same model in GoodData.",
          "<b>Tests:</b> 112 dbt tests, 3 unit tests and 69 pytest tests; the agent got 8 out of 8 questions right in the evaluation."
        ] },
        { h: "The dashboard", ul: [
          "<b>Pages:</b> Overview, Territory (coverage by municipality size, largest cities without a museum and the 3,659 museums with coordinates), Management (museum plan, bylaws and collection policy by administrative type), Accessibility and Quality (health of each collection run, pipeline steps and every test).",
          "<b>Filters:</b> region and state in the URL (<code>/?regiao=NE</code>). Clicking a state on the map filters the whole dashboard.",
          "<b>Ctrl + K:</b> command palette to type a state, a page or a question in Portuguese.",
          "<b>AI in context:</b> every chart has <i>Ask about this</i>; the assistant opens alongside already knowing which chart and which slice you're looking at.",
          "<b>Purposeful motion:</b> blocks enter in sequence, numbers count up and bars grow. Everything turns off with <code>prefers-reduced-motion</code>.",
          "<b>Accessible:</b> colorblind-safe palette, a table with the same numbers for every chart and keyboard navigation.",
          "<b>Stateless server:</b> FastAPI builds the Plotly figures and the browser only draws them."
        ] },
        { h: "How it works", ol: [
          "<b>Collection (ingestao/):</b> downloads the Ibram (Tainacan) and IBGE APIs with retries and parallel pagination; writes one file per day with a manifest (count and hash).",
          "<b>Transformation (dbt/):</b> 35 models in 3 layers: star schema, incremental SCD2, One Big Table with STRUCT/ARRAY and a semantic layer.",
          "<b>Quality (dbt/macros/):</b> validates each collection run, runs 112 tests and only publishes what passed (Write-Audit-Publish).",
          "<b>Orchestration (orquestracao/):</b> one command runs everything and reports whether it published, blocked or quarantined a bad collection run.",
          "<b>Consumption (painel/, agente/, gooddata/):</b> the dashboard, the AI assistant and GoodData read the same published layer, with the same metrics."
        ] },
        { h: "Modeling", ul: [
          "<b>fct_museus_diario:</b> one record per museum per day, incremental by partition (only new days are reprocessed: <code>delete+insert</code> in DuckDB, partitioned and clustered <code>insert_overwrite</code> in BigQuery).",
          "<b>dim_museu:</b> incremental history of each museum (SCD2), comparing new days with the roughly 4,000 open versions without rereading the history.",
          "<b>bridge_museu_tipologia:</b> museum × collection type, with <code>weight = 1/n</code> so each museum counts only once.",
          "<b>obt_museus:</b> One Big Table, one museum per row, with nested groups in STRUCT and lists in ARRAY; it's the agent's preferred table.",
          "<b>agg_*:</b> ready-made indicators by country, state and municipality, with ratios calculated only once (nobody averages a ratio).",
          "<b>Dimensions:</b> date, museum, municipality, state, administrative level, museum type, theme and collection type."
        ] },
        { h: "Quality and quarantine", p: ["If tomorrow's collection run comes in broken, the dashboard stays correct. Each collected day is validated before it goes in: does it match the manifest? Is the volume within range? Are required fields filled in? Are there duplicates?"], ul: [
          "<b>Broken collection</b> (half the museums, empty fields): the day goes to quarantine with the reason spelled out. The marts stay on the previous day and publishing goes ahead normally.",
          "<b>Broken business rule</b> (index weights adding up to 101): the circuit breaker blocks the whole publication and the dashboard stays on the last approved version.",
          "<b>All good:</b> publish. All 22 marts switch together, in one transaction.",
          "<b>Actually tested:</b> a simulated collection with half the museums and 14% without a state went to quarantine with the reason <i>\"volume 2079 out of range (baseline 4159); required fields empty (no state 14.4%)\"</i>, and the dashboard kept showing 3,775 active museums. CI repeats this scenario on every PR."
        ] },
        { h: "AI agent", p: ["Ask in Portuguese and the answer arrives live: each step shows up as it happens (<i>Querying…</i>, <i>Drawing…</i>), a chart is drawn in the conversation when it makes sense, the text cites its source and shows the SQL that ran, and the answer ends with three clickable follow-up questions. Measured accuracy: 8 out of 8 questions with the right number, averaging 1.5 steps."], ul: [
          "<b>Example memory:</b> 17 questions with verified SQL. The 3 most similar ones go into the context of each question, with the pitfall noted. CI runs every SQL.",
          "<b>Learns from use:</b> 👍/👎 on each answer; approved answers become new examples, via PR.",
          "<b>Knows what you see:</b> the dashboard filter (state, region) goes in as context.",
          "<b>Safe:</b> read-only. The SQL is validated through its syntax tree (SELECT only, published layer only) and the connection has no file or network access.",
          "<b>Resilient:</b> if a Gemini model is out of quota or slow, the agent switches to the next one on its own."
        ] },
        { h: "GoodData", p: ["The same model published on <b>GoodData Cloud</b>, built as code:"], ul: [
          "Data stored in GoodData's own storage (no external database).",
          "Logical model with Municipality and Museum linked.",
          "11 MAQL metrics.",
          "Dashboard with 10 visualizations in 4 sections and region and state filters.",
          "<b>The numbers match the dashboard:</b> 3,775 active, 4,159 registered, 25.1% of municipalities with a museum and 31.5% of the population without one.",
          "📄 <a href=\"https://github.com/Pantercode/DBT_Agente_Goodata/blob/main/docs/gooddata-dashboard.pdf\" target=\"_blank\" rel=\"noopener\">Download the dashboard as PDF</a>"
        ] }
      ]
    },

    "censo-escolar": {
      title: "School Census · ETL + Dashboard with Generative AI",
      summary: "<b>Age · Education level · Location</b> of students enrolled in Brazil, from INEP's raw data to a free public dashboard. A complete data pipeline on the <b>Basic Education School Census (INEP)</b>, with PySpark, dbt and Supabase (PostgreSQL), ending in a <b>free public dashboard</b> that can be embedded via <code>&lt;iframe&gt;</code>, with a <b>generative AI</b> chat (Google Gemini) to ask questions about the data in Portuguese. 🌐 <a href=\"https://censo-escolar-dashboard.onrender.com/\" target=\"_blank\" rel=\"noopener\">Open the web app</a>",
      links: ["Web app (Dashboard)", "GitHub repository"],
      intro: ["The goal is to extract, organize and serve the data in structured layers (Landing → Bronze → Gold → Diamond), ready for analysis and visualization, without relying on paid BI tools such as Power BI or Looker Studio."],
      sections: [
        { h: "Project Goals", ul: [
          "Centralize and version the extraction of INEP's public education microdata.",
          "Organize the data in the layers of a modern (medallion) architecture for efficient analysis.",
          "Process large data volumes locally with PySpark (about 217,000 schools per year) and send only aggregated data to the cloud.",
          "Automate data modeling and quality tests with dbt.",
          "Ensure reproducibility, with numbered scripts, infrastructure as code and automated deployment.",
          "Build a reliable foundation for indicators by age, school stage, location (urban/rural) and network (public/private).",
          "Democratize access: an open dashboard, no login, that can be embedded in any website and includes a natural-language AI chat."
        ] },
        { h: "Solution Architecture", ol: [
          "<b>Source:</b> official School Census microdata published by INEP.",
          "<b>Landing:</b> files are downloaded and stored exactly as they came.",
          "<b>Bronze:</b> PySpark converts the CSV files to Parquet, with data types and accents fixed.",
          "<b>Gold:</b> PySpark sums enrollments by year, state, municipality and school network.",
          "<b>Load:</b> the aggregated data is sent to the cloud PostgreSQL database (Supabase).",
          "<b>Diamond:</b> dbt transforms and tests the data, creating a ready-made table for each chart.",
          "<b>Dashboard:</b> the Plotly Dash dashboard, published on Render, shows the indicators and uses Google Gemini to generate automatic analyses and answer questions."
        ] },
        { h: "Main Components", ul: [
          "<b>PySpark pipeline:</b> downloads INEP's microdata, converts and organizes the files and aggregates enrollments by municipality and school network.",
          "<b>dbt:</b> materializes the data layers in the database and runs automated quality tests.",
          "<b>Supabase (PostgreSQL):</b> free cloud database holding the final tables used by the dashboard.",
          "<b>Plotly Dash:</b> public dashboard with indicators, interactive charts (clicking a state filters the whole dashboard), accessible tables and chat.",
          "<b>Google Gemini:</b> writes an automatic reading of each chart and turns questions in Portuguese into safe, read-only database queries.",
          "<b>Docker and Render:</b> package and publish the dashboard for free, updating automatically with every new version of the code."
        ] }
      ]
    },

    "gharchive-beam": {
      title: "GH Archive · Medallion Pipeline with Apache Beam, PySpark and DuckDB",
      summary: "A data pipeline on GitHub's public events (<a href=\"https://www.gharchive.org/\" target=\"_blank\" rel=\"noopener\">GH Archive</a>) in a medallion architecture up to the <b>diamond</b> layer. Bronze uses <b>Apache Beam</b>, silver uses <b>PySpark</b>, and gold and diamond run on <b>DuckDB</b> with procedures, <b>SCD Type 2</b> dimensions and quality gates. Orchestration is done by <b>Airflow 3</b>, infrastructure is provisioned with <b>Terraform</b> and a <b>CI/CD</b> pipeline, and a <b>RAG</b> assistant (Gemini) answers questions about the data and the project itself.",
      links: ["GitHub repository"],
      intro: ["Flow: data.gharchive.org → landing (requests, SHA-256) → bronze (Apache Beam, dead-letter) → silver (PySpark, 5 typed tables) → gold (DuckDB, star schema + SCD2, procedures) → diamond (DuckDB, KPIs and rankings) → RAG assistant (Gemini, text-to-SQL + cited documentation)."],
      sections: [
        { h: "Load result (Jan 15, 2024, 3 pm to 5 pm UTC)", ul: [
          "<b>785,389 events</b> reconciled from bronze to diamond, with 0 rejected rows and 0 keys on the unknown member.",
          "About 260k events, 60k actors and 80k repositories per hour; PR merge rate between 75% and 78%.",
          "<b>SCD2 with real history:</b> 3,348 repositories and 8 actors gained more than one version in 3 hours (renames, language changes, discovered metadata).",
          "Top 3 of the day by engagement: <code>DataTalksClub/data-engineering-zoomcamp</code>, <code>maybe-finance/maybe</code> and <code>vanna-ai/vanna</code>.",
          "Every quality gate passed in all 3 hours."
        ] },
        { h: "Layers", ol: [
          "<b>Landing (requests):</b> the hour's <code>.json.gz</code> file with a manifest of bytes and SHA-256; atomic download with retries.",
          "<b>Bronze (Apache Beam):</b> raw Parquet, one row per valid event; invalid ones go to a JSONL dead-letter with the reason.",
          "<b>Silver (PySpark):</b> <code>events</code>, <code>push_commits</code>, <code>pull_requests</code>, <code>issues</code> and <code>repo_metadata</code>, with explicit schema, deduplication and pseudonymized e-mail.",
          "<b>Gold (DuckDB):</b> star schema with <code>dim_actor</code> and <code>dim_repo</code> (SCD2), <code>dim_date</code>, <code>dim_event_type</code> and fact tables for events, pushes and pull requests.",
          "<b>Diamond (DuckDB):</b> hourly platform KPIs, daily repository scorecard, language trends and contributor profiles."
        ] },
        { h: "Engineering highlights", ul: [
          "<b>Procedures in DuckDB:</b> DuckDB has no stored procedures, so each one is a versioned <code>.sql</code> file run inside a transaction, with parameters via <code>SET VARIABLE</code> and metrics logged to <code>etl.procedure_run</code>.",
          "<b>SCD2 independent of load order:</b> an hour that failed can be loaded after the following ones; versions slot into the middle of the history, existing keys are preserved and affected facts are re-pointed. A script proves on real data that the result is identical to an in-order load.",
          "<b>Failure protection:</b> an incomplete load never replaces the published one, gold is protected by a gate before receiving silver, and only missing hours are reprocessed (<code>gaps</code> and <code>backfill</code> commands and a dedicated DAG)."
        ] },
        { h: "RAG assistant", ul: [
          "<b>Hybrid retrieval:</b> BM25 and Gemini embeddings, fused with Reciprocal Rank Fusion and reranked by the model itself.",
          "<b>Numbers never come from the model's memory:</b> data questions become SQL, run on a read-only connection, with single-<code>SELECT</code> validation, row limit, timeout and up to 2 self-corrections.",
          "<b>Corpus:</b> documentation, SQL, Python code, DAGs, Terraform, CI/CD and a catalog with real statistics for each table.",
          "<b>Validation:</b> 100% accuracy on 23 questions (13/13 on data and 10/10 on the project), with an 80% minimum required as a deployment gate; median latency of 5.2 s.",
          "Streamlit interface with the chat at the top and visual documentation of each step below."
        ] },
        { h: "Orchestration, infrastructure and CI/CD", ul: [
          "<b>Airflow 3:</b> hourly DAG from download to the diamond procedures, with quality gates per layer and a failure task that fires if any step breaks.",
          "<b>Terraform on GCP:</b> one bucket per layer with retention, Secret Manager, Artifact Registry and service accounts with Workload Identity Federation, with no keys stored in the repository.",
          "<b>GitHub Actions:</b> CI with ruff, 29 tests (including SCD2 in DuckDB), image build and an end-to-end pipeline on a sample; CD with <code>terraform apply</code>, image push and the 80% RAG gate."
        ] }
      ]
    },

    "raiz-rag": {
      title: "RAIZ · RAG and AI Agent Against the Root Causes of Crime in Rio",
      subtitle: "Territorial intelligence with real ISP-RJ data, hybrid RAG and an LLM agent",
      summary: "RAIZ is a dashboard for public policy makers in Rio de Janeiro. It uses official crime data from the Institute of Public Security (ISP-RJ) to answer a question that policing alone can't: where, and with whom, does social prevention avoid the most crime per real invested? Everything can be asked in Portuguese to an AI agent and sent by e-mail as a personalized PDF report.",
      links: ["Open RAIZ", "GitHub repository"],
      intro: ["Most people imprisoned in Rio are young, early in life, out of school and low-income, and most crimes are against property. Even so, the State's response usually comes only after the crime. ISP-RJ publishes, month by month and by police station, what happens in each territory, but these numbers rarely reach those in charge of education, social assistance, labor, health and urban planning in a usable form. RAIZ bridges that gap: it turns the ISP database into diagnoses by neighborhood and community and recommends concrete actions, with cost, target audience and a way to measure results."],
      sections: [
        { h: "What it answers", ul: [
          "<b>Which crime dominates each neighborhood and community</b>, and which are above the city average.",
          "<b>Who is entering crime in each place:</b> age, education, work and income.",
          "<b>Which social program fits each profile:</b> protective income for families of teenagers, full-time school, first job, exit from drug trafficking, groups for domestic violence offenders, among others.",
          "<b>With a budget of X, what to fund first</b>, how many repeat offenses it prevents and how much prison cost it avoids.",
          "<b>A final recommendation</b> for the selected slice: where to act, for whom, what to do, how much it costs, how to measure it and a 90-day plan."
        ] },
        { h: "Hybrid RAG (runs locally, no embedding costs)", ol: [
          "<b>Query understanding:</b> detects the neighborhoods, communities, crimes, age groups and zones mentioned, tolerant of accents and capitalization, and turns them into filters.",
          "<b>Three searches in parallel:</b> by words (TF-IDF, BM25-like behavior), by word fragments (handles typos like \"trafco\") and semantic (LSA, which brings synonyms like \"assalto\" and \"roubo\" closer).",
          "<b>Result fusion</b> with Reciprocal Rank Fusion (RRF), boosting the entities found.",
          "<b>MMR diversification</b>, to avoid returning several identical records.",
          "<b>Evidence trail:</b> each result comes back with its type, score and which search it came from, and the dashboard shows this to the user."
        ] },
        { h: "AI agent", ul: [
          "<b>LLM with tools:</b> Google Gemini calls Python functions to fetch context from the RAG, calculate statistics, build neighborhood rankings, look up records and bring the real data for each territory.",
          "<b>Resilient:</b> if a model is out of quota or overloaded, it automatically switches to the next one on the list.",
          "<b>Report:</b> generates a personalized PDF with charts and e-mails it to the manager in charge."
        ] },
        { h: "AI quality (measured)", ul: [
          "<b>Information retrieval (RAG): 81/100</b> on 323 questions with an answer key, including typos and synonyms.",
          "<b>Agent answers: 10 out of 10</b> on questions with a known answer.",
          "The scores are shown on the dashboard itself."
        ] },
        { h: "Principles and limits", ul: [
          "<b>Prevention, not punishment:</b> the goal is to fund what takes people off the path to crime before prison.",
          "<b>Real data by territory, no real people:</b> neighborhood figures come from ISP-RJ; individual records are fictitious, generated to comply with Brazil's data protection law (LGPD) and calibrated to each police station's real numbers.",
          "<b>Territories are not to blame:</b> the dashboard talks about a place's crime dynamics, never about its residents.",
          "<b>Assumptions in plain sight:</b> program effects and prison costs are adjustable in the simulator, and the recommendation always proposes a pilot with a comparison group."
        ] },
        { h: "Main Components", ul: [
          "<b>Python + Plotly Dash:</b> interactive dashboard where filtering by zone, neighborhood, age or crime (or clicking a chart) recalculates the whole page; charts with the conclusion in the title and a budget simulator.",
          "<b>JavaScript:</b> in-browser dashboard interactions and a three-step guide on the first visit.",
          "<b>Scikit-learn:</b> TF-IDF and LSA (SVD) indexes for the RAG; classification of profile, risk and recommended program.",
          "<b>ReportLab + Matplotlib:</b> PDF report generated on the server, without a browser.",
          "<b>Docker + Render:</b> the image downloads the ISP database and builds the AI index during the build; published on the free plan, with GitHub Actions keeping the app awake."
        ] }
      ]
    },

    /* ===================== APPS SCRIPT ===================== */
    "nba": {
      title: "NBA LLM Agents",
      summary: "A web app built with Google Apps Script that shows the performance of about 2,200 NBA players from the 1996-97 to 2022-23 seasons, each with their official photo. It also includes a generative AI analyst (Google Gemini) that answers questions in Portuguese by querying the real data, without making up numbers.",
      links: ["Open the published app"],
      intro: ["The goal is to turn a raw play-by-play dataset (2.2 GB) into per-player, per-season statistics and present them in a visual, free app that runs 24/7 on Google's servers, with no server of its own and no paid BI tool."],
      sections: [
        { h: "Project Goals", ul: [
          "Calculate player statistics from the play-by-play data, since the Kaggle dataset doesn't include them. The calculated averages are within 0.1 points of the official ones (Kobe Bryant 2005-06: 35.5 vs 35.4).",
          "Process the large data volume locally with Python and pandas and send only aggregated data to the cloud.",
          "Link each player to the right Wikipedia article through their official NBA id in Wikidata, without mixing up namesakes.",
          "Build an AI agent that answers based on real data queries, using function calling.",
          "Keep costs at zero and infrastructure simple: everything runs on Google (Apps Script, Sheets, Cache), deployed with clasp.",
          "Deliver a polished experience on desktop and mobile, with accessibility (keyboard, screen readers, reduced motion)."
        ] },
        { h: "Solution Architecture", ul: [
          "<b>Source:</b> the public wyattowalsh/basketball dataset on Kaggle.",
          "<b>Preparation (local):</b> preparar_dados.py reads the play-by-play data and turns each event into a statistic (points, shots, rebounds, assists, steals, blocks and turnovers).",
          "<b>Biographies:</b> biografias.py queries Wikidata and links 2,167 players to Wikipedia articles (1,253 in Portuguese and 914 translated from English).",
          "<b>Load:</b> the aggregated data is embedded in the project and sent to Google with clasp.",
          "<b>Storage:</b> on first access, the app automatically creates a Google Sheet with the data in Drive.",
          "<b>Backend:</b> Code.gs reads the sheet, caches the results and exposes the agent's functions.",
          "<b>App:</b> the HTML, CSS and JavaScript interface shows the gallery, the player profile and the charts. Gemini answers in the chat with tables and photos of the players mentioned."
        ] },
        { h: "Main Components", ul: [
          "<b>Python pipeline (pandas):</b> downloads the Kaggle dataset, calculates statistics from the plays and generates the app's data files.",
          "<b>Google Apps Script:</b> backend and hosting for the web app, free and with no server of its own.",
          "<b>Google Sheets:</b> the database queried by the app and the agent.",
          "<b>Google Gemini:</b> AI analyst with function calling (buscar_jogadores, performance_jogador, biografia_jogador, ranking_jogadores). It fetches the numbers from the sheet before answering and, if the main model is overloaded, the app retries and switches to a lighter model.",
          "<b>Web interface:</b> gallery with instant search and filters (Active, Top 75), profile with averages, shooting percentages and totals, interactive per-season chart (regular season and playoffs), biography with a source link and a mobile layout with the chat in a drawer.",
          "<b>Wikidata and Wikipedia:</b> source of the biographies, translated by LanguageApp when only available in English.",
          "<b>NBA CDN:</b> source of the players' official photos.",
          "<b>clasp:</b> pushes the code and publishes new versions while keeping the same URL."
        ] }
      ]
    },
    "atlas": {
      title: "Atlas LLM Agents",
      summary: "A web app built with Google Apps Script that shows an interactive social equality map of Brazil's 27 states and 5,570 municipalities. Each place appears with its official flag, and 13 social and economic indicators can color the heat map. The app also has a generative AI analyst (Google Gemini) that tells the story behind each place's name and writes inequality diagnoses in Portuguese based on real IBGE figures, without making up statistics.",
      links: ["Open the published app"],
      intro: ["The goal is to bring public data scattered across several sources (IBGE, UNDP, Wikidata and Wikipedia) into a single visual app. It is free and runs 24/7 on Google's servers, with no server of its own, no database and no paid BI tool."],
      sections: [
        { h: "Project Goals", ul: [
          "Cross official data from different sources live: 2022 Census, Municipal GDP, IBGE Cidades, UNDP and Wikidata. Everything is linked by each municipality's IBGE code, without mixing up cities with the same name.",
          "Make inequality visible, not just the average. The app shows literacy by race and by sex, with the gap in percentage points. Example: in Belo Horizonte, 98.7% among white people versus 94.1% among Indigenous people.",
          "Create an Equality Index (0 to 100) that sums up HDI, education, health, sanitation and poverty in a single number, comparing each municipality with the others in the same state.",
          "Show the flag of every state and municipality, fetching the images from Wikidata and Wikimedia Commons.",
          "Use generative AI with real data. Gemini receives the place's indicators and rankings before answering and cites the numbers with year and source.",
          "Keep costs at zero and infrastructure simple: everything runs on Google (Apps Script and Cache), deployed with clasp.",
          "Deliver an unusual visual experience on desktop and mobile: animated zoom when entering a state, municipalities appearing in a wave from the click, a floating card with an animated flag and a 3D flag that tilts with the mouse. The app has keyboard shortcuts and respects the reduced-motion preference."
        ] },
        { h: "Solution Architecture", ul: [
          "<b>Sources:</b> IBGE public APIs (Meshes, Aggregates/SIDRA, Surveys and Locations), Wikidata (SPARQL), Wikimedia Commons and Wikipedia.",
          "<b>On-demand loading:</b> on open, the app downloads only the states. A state's municipalities (boundaries, indicators and flags) are downloaded the first time the user enters it and kept in memory.",
          "<b>Batch queries:</b> municipal indicators are requested in blocks of 80 municipalities, with 4 parallel requests. Minas Gerais, for example, has 853 municipalities.",
          "<b>Server fallback:</b> if the browser can't reach the APIs within 20 seconds (on a corporate network, for example), the data is fetched by Google's own server instead, with a 6-hour cache and access restricted to an allowlist of domains.",
          "<b>Backend:</b> Code.gs serves the page, calls Gemini with the key stored in the script Properties (never in the browser) and caches the answers.",
          "<b>App:</b> the HTML, CSS and JavaScript (D3.js) interface draws the map, the legend with the value distribution, the place panel and the chat."
        ] },
        { h: "Main Components", ul: [
          "<b>Google Apps Script:</b> backend and hosting for the web app, free and with no server of its own.",
          "<b>IBGE APIs:</b> state and municipal boundaries, 2022 Census (population, area, density, literacy by race and sex), GDP and its breakdown by sector, infant mortality, school enrollment, formal employment, average salary, sanitation and income.",
          "<b>Wikidata and Wikimedia Commons:</b> municipal flags and coats of arms, municipal HDI and the link to the right Wikipedia article.",
          "<b>Wikipedia:</b> summary of each state and municipality.",
          "<b>Google Gemini:</b> AI analyst with three modes: <i>Name history</i> (etymology, timeline and the meaning of the flag, using Google Search as a source and listing the links), <i>Equality diagnosis</i> (where the inequality is, the strengths and three public policy priorities) and <i>Free chat</i> (questions about the selected place). If a model is unavailable, the app automatically switches to the next one on the list.",
          "<b>D3.js:</b> map drawing, animated zoom, color scales and time-series charts. The library is bundled with the project so it doesn't depend on an external site.",
          "<b>clasp:</b> pushes the code from VS Code to Apps Script and publishes new versions while keeping the same URL."
        ] },
        { h: "Web interface", ul: [
          "Heat map with 13 indicators.",
          "Floating card with flag, value and ranking position.",
          "Legend with distribution, median, top-10%-to-bottom-10% ratio, and the 5 best and 5 worst.",
          "Panel with three tabs (Overview, Equality, and History &amp; AI).",
          "Instant search across all 5,570 municipalities (Ctrl K).",
          "Mobile layout with the panel in a drawer."
        ] }
      ]
    },

    /* ===================== LANGCHAIN ===================== */
    "revisa-in": {
      title: "Revisa.In",
      summary: "revisa.in is a web app that reviews LinkedIn profiles with generative AI (Google Gemini) the way a senior Recruitment and Selection specialist would. The user pastes the profile link, enters the role they're looking for and, ideally, uploads the PDF that LinkedIn itself generates. In under a minute and a half, they get a visual report with a score per section, a reading of their career at each company, skills to develop, rewritten texts ready to paste and an action plan.",
      links: ["Open Revisa.In"],
      intro: ["The goal is to turn a LinkedIn profile into a practical, well-grounded diagnosis. Before evaluating, the AI searches the web for what the market asks for that role today. The app works for any profession, runs 24/7 in the cloud and has zero infrastructure cost."],
      sections: [
        { h: "Project Goals", ul: [
          "Evaluate profiles from any field (health, law, sales, engineering, education, technology...) with the criteria of a real screening: showing up in recruiter searches, clarity within seconds, proven skills, seniority and red flags.",
          "Base recommendations on current market data. A research step with Google Search built into Gemini gathers the skills, tools, keywords and certifications asked for the role and shows the sources consulted.",
          "Tell the person's professional story: time at each company, a description of each company and a chapter-based timeline, with each experience rewritten in the format that works best on LinkedIn.",
          "Ensure reliable answers. The AI output follows a structured, validated format, the AI never makes up numbers (it uses placeholders such as [X%] for the person to fill in) and only uses facts from the profile itself.",
          "Work around LinkedIn's blocking legitimately. The main path is the profile's official PDF. Without it, the app searches the web for the profile's public information and runs a partial analysis, stating this clearly in the report.",
          "Keep costs at zero and infrastructure simple: free Gemini API, free hosting on Render and automatic deployment on every push to GitHub.",
          "Deliver a polished experience on desktop and mobile, with interactive charts, a branded custom PDF and accessibility (keyboard, screen readers, reduced motion)."
        ] },
        { h: "Solution Architecture", ul: [
          "<b>Input:</b> profile link, target role and, optionally, the PDF exported from LinkedIn or pasted text.",
          "<b>Profile reading:</b> extractor.py extracts the text from the PDF with pypdf and tries to read the public page with httpx and BeautifulSoup. If LinkedIn blocks it and there's no PDF, a LangChain chain uses Gemini with Google Search to find the public information for that exact profile, without confusing people with similar names.",
          "<b>Step 1, market research:</b> Gemini searches the web for what the market asks for the role and returns a briefing with sources.",
          "<b>Step 2, analysis:</b> Gemini evaluates the profile based on that research and returns a structured answer validated by Pydantic models. If the answer comes back incomplete, the chain automatically retries.",
          "<b>Backend:</b> FastAPI receives the request, applies the usage limit (5 analyses every 10 minutes per person, not counting AI failures) and serves the API and the app pages.",
          "<b>App:</b> the plain HTML, CSS and JavaScript interface builds the report with SVG charts and lets the user download the custom PDF.",
          "<b>Hosting:</b> Render publishes the app from GitHub. The API key lives in an environment variable and never goes into the repository."
        ] },
        { h: "Main Components", ul: [
          "<b>Python + FastAPI:</b> backend, PDF reading, usage limits, retries and page serving.",
          "<b>LangChain:</b> organizes three reusable chains: public profile search; market research with sources; analysis with structured output and automatic retry.",
          "<b>Google Gemini (free API):</b> AI analyst acting as a recruitment specialist. Uses Google Search as a tool to research the market in real time.",
          "<b>Pydantic:</b> defines the exact format of the AI's answer (scores from 0 to 100, years per company, skill levels), ensuring the charts always receive valid data.",
          "<b>Custom PDF:</b> report with a revisa.in branded cover, header, footer, page numbers and a print-ready layout.",
          "<b>Responsive layout:</b> tested on 360 px and 390 px phone screens, with charts that adapt and respond to touch.",
          "<b>Render:</b> free hosting with HTTPS and automatic deployment on every git push."
        ] },
        { h: "Web interface", ul: [
          "Home page with visual effects and sample charts.",
          "Form with PDF upload and a \"Try again\" button when the analysis fails.",
          "Report with an overall score gauge and indicators for findability, clarity, proof of results and fit for the role.",
          "Chart of time at each company with a company card and a chapter-based timeline.",
          "Donut chart of strengths and skill bars (current × expected).",
          "Matching roles, headlines, a rewritten About section, keywords and post ideas."
        ] }
      ]
    }
  }
};
