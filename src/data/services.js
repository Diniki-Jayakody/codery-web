export const services = [
    {
      slug: 'software-development',
      title: 'Software Development',
      icon: 'Code2',
      shortDesc: 'End-to-end custom software engineered for scale and reliability.',
      fullDesc:
        'From greenfield builds to modernizing legacy systems, we design and ship robust software tailored to your business workflows and growth roadmap.',
      tech: ['Java', 'Spring Boot', '.NET', 'Node.js', 'REST APIs', 'Microservices'],
      features: [
        {
          icon: 'Boxes',
          title: 'Modular Architectures',
          desc: 'Design domain-driven, modular systems that can evolve as your product grows.',
        },
        {
          icon: 'GitBranch',
          title: 'Modern Engineering Practices',
          desc: 'CI/CD, automated testing, and trunk-based development baked into every engagement.',
        },
        {
          icon: 'ServerCog',
          title: 'Scalable Backends',
          desc: 'Battle-tested patterns for APIs, background jobs, and real-time messaging.',
        },
      ],
      useCases: [
        {
          icon: 'Building2',
          title: 'Enterprise Platforms',
          desc: 'Core systems that orchestrate complex business processes across teams.',
        },
        {
          icon: 'Briefcase',
          title: 'B2B Products',
          desc: 'Secure, multi-tenant platforms serving demanding enterprise clients.',
        },
        {
          icon: 'Workflow',
          title: 'Workflow Automation',
          desc: 'Automate repetitive tasks and approvals with robust backend services.',
        },
      ],
    },
    {
      slug: 'web-mobile-apps',
      title: 'Web & Mobile Apps',
      icon: 'Smartphone',
      shortDesc: 'Responsive web and mobile apps that feel native on every device.',
      fullDesc:
        'We craft performant, accessible, and visually refined experiences for web and mobile, optimized for conversion and long-term maintainability.',
      tech: ['React', 'React Native', 'Tailwind CSS', 'Next.js', 'TypeScript'],
      features: [
        {
          icon: 'MousePointer2',
          title: 'Delightful UX',
          desc: 'Design systems and interfaces that feel intuitive, fast, and trustworthy.',
        },
        {
          icon: 'MonitorSmartphone',
          title: 'Truly Responsive',
          desc: 'Mobile-first layouts that adapt elegantly to any screen size.',
        },
        {
          icon: 'Sparkles',
          title: 'Micro-Interactions',
          desc: 'Thoughtful animations that guide, not distract, users through flows.',
        },
      ],
      useCases: [
        {
          icon: 'ShoppingBag',
          title: 'E‑Commerce & Marketplaces',
          desc: 'High-converting storefronts and marketplace experiences.',
        },
        {
          icon: 'Users',
          title: 'Customer Portals',
          desc: 'Self-service portals and dashboards your customers will enjoy using.',
        },
        {
          icon: 'Route',
          title: 'Operational Dashboards',
          desc: 'Responsive dashboards that keep distributed teams aligned in real time.',
        },
      ],
    },
    {
      slug: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: 'CloudCog',
      shortDesc: 'Modern cloud infrastructure, CI/CD, and observability on leading platforms.',
      fullDesc:
        'We help teams design resilient cloud architectures, automate delivery pipelines, and gain deep visibility into production systems.',
      tech: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
      features: [
        {
          icon: 'Cloud',
          title: 'Cloud-Native Architectures',
          desc: 'Design for elasticity, fault tolerance, and global reach from day one.',
        },
        {
          icon: 'Cogs',
          title: 'Automated Delivery',
          desc: 'CI/CD pipelines that make deployments boring and predictable.',
        },
        {
          icon: 'Activity',
          title: 'Observability First',
          desc: 'Logging, metrics, and tracing to detect and resolve issues quickly.',
        },
      ],
      useCases: [
        {
          icon: 'Rocket',
          title: 'Cloud Migrations',
          desc: 'Safely move from on-prem to the cloud without disrupting operations.',
        },
        {
          icon: 'Gauge',
          title: 'Cost Optimization',
          desc: 'Tune your infrastructure for performance and spend efficiency.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Production Hardening',
          desc: 'Harden environments with backup, DR, and security best practices.',
        },
      ],
    },
    {
      slug: 'data-analytics',
      title: 'Data & Analytics',
      icon: 'LineChart',
      shortDesc: 'Turn raw data into trustworthy, decision-ready insight.',
      fullDesc:
        'We design data pipelines, warehouses, and analytics experiences that surface the right metrics to the right people, at the right time.',
      tech: ['SQL', 'Apache Superset', 'Power BI', 'dbt', 'Python'],
      features: [
        {
          icon: 'Database',
          title: 'Modern Data Stack',
          desc: 'Centralize your data with robust modeling and governance.',
        },
        {
          icon: 'BarChart3',
          title: 'Executive Dashboards',
          desc: 'Curated views that align leadership around key metrics.',
        },
        {
          icon: 'Brain',
          title: 'Applied Analytics',
          desc: 'Pragmatic models that support daily decisions, not just reports.',
        },
      ],
      useCases: [
        {
          icon: 'ChartSpline',
          title: 'Revenue Intelligence',
          desc: 'Understand pipeline, churn, and growth in a unified view.',
        },
        {
          icon: 'PackageSearch',
          title: 'Operational Analytics',
          desc: 'Quantify process bottlenecks and improvement opportunities.',
        },
        {
          icon: 'PieChart',
          title: 'Customer Insights',
          desc: 'Segment and understand behavior across your customer base.',
        },
      ],
    },
    {
      slug: 'product-ux-design',
      title: 'Product & UX Design',
      icon: 'PenTool',
      shortDesc: 'Product strategy and UX design that de-risks what you build.',
      fullDesc:
        'We partner from discovery through delivery to shape products that align user needs, business goals, and technical constraints.',
      tech: ['Figma', 'Design Systems', 'Prototyping', 'User Interviews'],
      features: [
        {
          icon: 'Compass',
          title: 'Product Discovery',
          desc: 'Clarify the problem, audience, and success metrics before coding.',
        },
        {
          icon: 'LayoutPanelTop',
          title: 'Design Systems',
          desc: 'Reusable components and tokens that keep teams moving fast.',
        },
        {
          icon: 'UserCheck',
          title: 'User Research',
          desc: 'Qualitative and quantitative insights baked into decisions.',
        },
      ],
      useCases: [
        {
          icon: 'Lightbulb',
          title: 'MVP Definition',
          desc: 'Scope the smallest valuable product for your next milestone.',
        },
        {
          icon: 'Pointer',
          title: 'UX Audits',
          desc: 'Identify friction and conversion leaks in existing products.',
        },
        {
          icon: 'Globe2',
          title: 'Design Refresh',
          desc: 'Refresh your visual language without rewriting your product.',
        },
      ],
    },
    {
      slug: 'dedicated-teams',
      title: 'Dedicated Engineering Teams',
      icon: 'Users2',
      shortDesc: 'High-performing Sri Lankan teams embedded into your organization.',
      fullDesc:
        'Scale your engineering capacity with dedicated, long-term teams that work in your tools, time zones, and rituals.',
      tech: ['Distributed Teams', 'Scrum', 'Kanban', 'Nearshore', 'Remote Collaboration'],
      features: [
        {
          icon: 'Users',
          title: 'Curated Talent',
          desc: 'Engineers vetted for communication, craft, and problem-solving.',
        },
        {
          icon: 'Clock',
          title: 'Aligned Time Zones',
          desc: 'Collaborate in overlapping working hours that suit your team.',
        },
        {
          icon: 'Handshake',
          title: 'Embedded Collaboration',
          desc: 'Teams that feel like an extension of your in-house org.',
        },
      ],
      useCases: [
        {
          icon: 'Layers',
          title: 'Product Squads',
          desc: 'Cross-functional pods shipping end-to-end product verticals.',
        },
        {
          icon: 'Code2',
          title: 'Platform Teams',
          desc: 'Teams focused on internal platforms and developer experience.',
        },
        {
          icon: 'Repeat',
          title: 'Capacity Augmentation',
          desc: 'Quickly add capacity for big roadmaps without long hiring cycles.',
        },
      ],
    },
  ];
  
  export default services;