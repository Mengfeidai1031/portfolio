import type { Translation } from './types';

// 简体中文 (zh-Hans).
//
// ⚠️ NOTA PARA REVISIÓN POR NATIVO:
// Estas traducciones se han generado automáticamente. Aunque son correctas
// gramaticalmente, el contenido técnico y de marketing puede sonar poco
// natural. Las cadenas marcadas con «REVISAR» son las más delicadas
// (pitch, "sobre mí" y descripciones de proyectos). El nombre propio se
// mantiene en alfabeto latino ("Meng Fei Dai") a propósito: solo el dueño
// del sitio conoce los caracteres correctos de su nombre.
export const zh: Translation = {
  meta: {
    title: 'Meng Fei Dai — 全栈开发工程师',
    // REVISAR: descripción SEO.
    description:
      'Meng Fei Dai 的个人作品集：计算机工程师、全栈开发者，技术栈涵盖 Laravel、React、Node.js 与 AWS。项目、经历与联系方式。',
    ogLocale: 'zh_CN',
  },
  nav: {
    about: '关于我',
    stack: '技术栈',
    experience: '工作经历',
    projects: '项目',
    education: '教育背景',
    contact: '联系我',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    toggleTheme: '切换主题',
    changeLanguage: '切换语言',
  },
  hero: {
    greeting: '你好，我是',
    name: 'Meng Fei Dai',
    role: '全栈开发工程师 · 计算机工程师',
    // REVISAR: frase de presentación principal.
    pitch: '我构建端到端的 Web 应用：从数据模型到生产环境部署。',
    ctaProjects: '查看项目',
    ctaCv: '下载简历',
    scrollHint: '向下滚动查看更多',
  },
  about: {
    title: '关于我',
    // REVISAR: párrafos de presentación personal.
    p1: '我毕业于拉斯帕尔马斯大加那利大学（ULPGC）计算机工程专业，目前在 Grupo Ari Motor 担任全栈开发工程师，负责企业 ERP 系统及其与外部系统的集成。从数据建模、API、界面到部署，应用开发的每个环节我都能胜任。',
    p2: '目前我正在加泰罗尼亚开放大学（UOC）攻读 Web 开发硕士。工作之余，我喜欢研究 3D 图形、把 AI 应用到实际问题上，并把一切重复两次以上的事情自动化。',
    facts: {
      location: '西班牙大加那利岛',
      role: 'Grupo Ari Motor 全栈开发',
      degree: '计算机工程 — ULPGC',
      master: 'Web 开发硕士 — UOC（在读）',
    },
    mascotHint: '把鼠标移到它身上试试',
  },
  stack: {
    title: '技术栈',
    subtitle: '我日常使用的工具。',
    groups: {
      backend: '后端',
      frontend: '前端',
      cloud: '云与 DevOps',
    },
  },
  experience: {
    title: '工作经历',
    subtitle: '我工作过的地方和构建过的东西。',
    jobs: [
      {
        role: '全栈开发工程师',
        company: 'Grupo Ari Motor',
        period: '2026年1月 — 至今',
        badge: '实习 → 正式录用',
        // REVISAR: terminología técnica de los logros.
        bullets: [
          '将三个拖车管理应用统一为一个多租户 Laravel 应用，并对代码进行了全面重构。',
          '将企业 ERP 与外部系统集成：基于内网的身份认证，以及与 Factorial 和 Azure AD 的员工双向同步。',
          '根据车辆所在岛屿，从 ERP 车辆流转记录自动生成拖车服务。',
          '开发定制模块与数据迁移命令，并为多个部门实时处理系统问题。',
        ],
        tech: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Azure AD'],
      },
      {
        role: 'IT 支持 · 客户服务',
        company: 'Restaurante Dai Montaña',
        period: '2019年10月 — 2025年12月',
        bullets: [
          '开发并维护餐厅网站及线上形象（Instagram、Google My Business），同时负责 IT 支持、收银与客户服务。',
        ],
        tech: ['网站', '数字化运营'],
      },
    ],
  },
  projects: {
    title: '项目',
    subtitle: '我独立完成和团队协作的一些作品。',
    featuredBadge: '毕业设计 · 成绩：9.4',
    repo: '源码',
    demo: '在线演示',
    moreTitle: '更多项目',
    // REVISAR: todas las descripciones de proyectos.
    items: {
      vexis: {
        name: 'Vexis',
        description: '我的毕业设计：面向汽车经销商集团的一体化管理平台，已部署到真实生产环境。',
        highlights: [
          '八大功能区域：销售与税务（符合 Verifactu 规范）、配件、维修车间、工单、客户门户与数据分析。',
          '内置 Google Gemini AI：客服聊天机器人与车辆预估价，并带有 API 用量控制面板。',
          '多层安全机制：角色、细粒度权限、按资源的访问策略、限流与实时日志查看器。',
          '从零到生产环境的自动化部署，含 SSL。',
        ],
      },
      brindi: {
        name: 'Brindi',
        description:
          '为线下聚会的朋友群体打造的 PWA：AI 小票识别分账、帮助做决定的小游戏、根据位置和预算生成聚会计划。全栈 monorepo，隐私优先设计。',
      },
      restaurant: {
        name: 'Restaurant Ordering System',
        description:
          '同一个点餐系统用两种 AWS 架构实现并对比——容器与无服务器——附真实成本分析：无服务器方案节省 95%。',
      },
      airquality: {
        name: 'Air Quality Pipeline',
        description:
          '实时数据管道：用 Kinesis 接入物联网传感器数据，在 AWS Glue 上用 Spark 做 ETL 处理，再通过 Athena 进行交互式 SQL 查询。',
      },
      ticketscraper: {
        name: 'Ticket Scraper',
        description:
          '从 VividSeats 和 SeatGeek 实时提取门票信息：用无头浏览器应对反爬虫防护，在无法突破时可控降级。',
      },
      graphics: {
        name: 'Graphics Playground',
        description:
          '计算机图形学实验合集：3D 太阳系、空中交通可视化、生成式 GLSL 着色器、WebXR VR 游戏和 Unity 赛车游戏。',
      },
      mindweaver: {
        name: 'MindWeaver',
        description: '团队开发的桌面笔记应用，支持 Markdown、KaTeX 和记忆卡片。',
      },
      splitlight: {
        name: 'Split-Light',
        description: '密室逃脱风格的解谜游戏，两名角色各有独特能力，由六人团队开发。',
      },
      dollyshare: {
        name: 'DollyShare',
        description: '在设备之间快速、简单地分享文件和文本。',
      },
      imagegallery: {
        name: 'Serverless Image Gallery',
        description: '事件驱动的图片库，自动生成缩略图。',
      },
      javaplayground: {
        name: 'Java Playground',
        description: '设计与重构练习（kata），以及一些小型 Java 桌面应用。',
      },
      // REVISAR
      aiplayground: {
        name: 'AI Playground',
        description: '经典搜索算法（BFS、DFS、分支限界）与 PyTorch 图像分类器，通过迁移学习将准确率从 77% 提升到 89%。',
      },
    },
  },
  education: {
    title: '教育背景与证书',
    degreesTitle: '学历',
    certsTitle: '证书',
    degrees: [
      {
        name: 'Web 应用开发硕士',
        school: '加泰罗尼亚开放大学（UOC）',
        period: '2026年9月起',
        detail: '信息学、多媒体与电信学院。',
      },
      {
        name: '计算机工程学士',
        school: '拉斯帕尔马斯大加那利大学（ULPGC）',
        period: '2022 — 2026',
        detail: '编程、云计算、应用开发与信息安全四门课程获荣誉学分（Matrícula de Honor）。四年级平均分 9.2；毕业设计 9.4。',
      },
    ],
    certs: [
      {
        name: 'Getting Started with Linux Fundamentals (RH104)',
        issuer: 'Red Hat Academy',
        date: '2024年10月',
        file: '/certs/redhat-rh104.pdf',
      },
      {
        name: 'Red Hat System Administration I (RH124)',
        issuer: 'Red Hat Academy',
        date: '2024年12月',
        file: '/certs/redhat-rh124.pdf',
      },
      {
        name: 'Red Hat System Administration II (RH134)',
        issuer: 'Red Hat Academy',
        date: '2025年1月',
        file: '/certs/redhat-rh134.pdf',
      },
      {
        name: 'AI 开发：智能体编程',
        issuer: 'BIG school',
        date: '2026年6月',
        file: '/certs/bigschool-desarrollo-ia.pdf',
      },
    ],
    viewPdf: '查看证书',
  },
  languages: {
    title: '语言与其他信息',
    items: [
      { name: '西班牙语', level: '母语' },
      { name: '中文', level: '母语' },
      { name: '英语', level: '中级' },
    ],
    extraTitle: '其他',
    extra: ['B 类驾照', '西班牙大加那利岛'],
  },
  contact: {
    // REVISAR: tono del cierre.
    title: '一起做点什么吧？',
    subtitle: '我对新的机会和有趣的项目持开放态度。欢迎来信，我会尽快回复。',
    emailCta: '发送邮件',
    cvCta: '下载简历',
    footerNote: '使用 Astro 与 Three.js 构建',
    footerSource: '源代码',
  },
  a11y: {
    skip: '跳转到正文',
    mascot: '会跟随光标的 3D 机器人吉祥物',
    cvFileName: 'CV-Meng-Fei-Dai.pdf',
  },
};
