import type React from "react";
import {
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Code,
  Briefcase,
  Palette,
} from "lucide-react";

export interface ServicePricing {
  tier: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceTechnology {
  name: string;
  logo: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: React.ReactNode;
  shortDescription: string;
  longDescription: string;
  image: string;
  features: ServiceFeature[];
  benefits: string[];
  pricing: ServicePricing[];
  process: ServiceProcess[];
  technologies: ServiceTechnology[];
  faq: { question: string; answer: string }[];
  caseStudies: string[]; // IDs of related case studies
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    slug: "web-development",
    icon: <Globe className='h-6 w-6' />,
    shortDescription:
      "Building responsive, high-performance websites and web applications tailored to your business needs.",
    longDescription:
      "Our web development services deliver custom, high-performance websites and applications that engage your audience and drive business growth. We combine cutting-edge technologies with user-centered design to create digital experiences that stand out in today's competitive landscape.",
    image: "/web.jpg",
    features: [
      {
        title: "Custom Website Development",
        description:
          "Bespoke websites designed and developed to meet your specific business requirements and brand identity.",
        icon: <Code className='h-5 w-5' />,
      },
      {
        title: "E-commerce Solutions",
        description:
          "Powerful online stores with secure payment processing, inventory management, and seamless user experience.",
        icon: <Database className='h-5 w-5' />,
      },
      {
        title: "Progressive Web Apps",
        description:
          "Fast, reliable, and engaging web applications that work offline and provide a native app-like experience.",
        icon: <Smartphone className='h-5 w-5' />,
      },
      {
        title: "Content Management Systems",
        description:
          "User-friendly CMS implementations that make it easy to update and manage your website content.",
        icon: <Briefcase className='h-5 w-5' />,
      },
      {
        title: "API Development & Integration",
        description:
          "Custom API development and third-party integrations to extend your website's functionality.",
        icon: <Cloud className='h-5 w-5' />,
      },
      {
        title: "Performance Optimization",
        description:
          "Speed optimization, caching strategies, and code refinement to ensure your website loads quickly.",
        icon: <Shield className='h-5 w-5' />,
      },
    ],
    benefits: [
      "Increased online visibility and brand awareness",
      "Improved user engagement and conversion rates",
      "Enhanced customer experience across all devices",
      "Streamlined business operations and processes",
      "Scalable solutions that grow with your business",
      "Reduced maintenance costs through quality code",
    ],
    pricing: [
      {
        tier: "Basic",
        price: "$5,000",
        period: "starting at",
        features: [
          "Responsive website design",
          "Up to 10 pages",
          "Basic SEO optimization",
          "Contact form integration",
          "3 months of support",
        ],
      },
      {
        tier: "Professional",
        price: "$12,000",
        period: "starting at",
        features: [
          "Everything in Basic",
          "Custom CMS implementation",
          "E-commerce functionality",
          "Advanced SEO optimization",
          "Performance optimization",
          "6 months of support",
        ],
        isPopular: true,
      },
      {
        tier: "Enterprise",
        price: "$25,000+",
        period: "starting at",
        features: [
          "Everything in Professional",
          "Custom web application",
          "Third-party integrations",
          "Advanced analytics",
          "User authentication",
          "12 months of support",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "We begin by understanding your business, goals, and requirements through in-depth consultations.",
      },
      {
        step: 2,
        title: "Planning",
        description:
          "We create a detailed project plan, including sitemap, wireframes, and technical specifications.",
      },
      {
        step: 3,
        title: "Design",
        description:
          "Our designers create visually appealing mockups that align with your brand and user expectations.",
      },
      {
        step: 4,
        title: "Development",
        description:
          "Our developers build your website using the latest technologies and best practices.",
      },
      {
        step: 5,
        title: "Testing",
        description:
          "We rigorously test your website for functionality, performance, and compatibility across devices.",
      },
      {
        step: 6,
        title: "Deployment",
        description:
          "We launch your website and ensure everything is working properly in the live environment.",
      },
      {
        step: 7,
        title: "Support",
        description:
          "We provide ongoing support and maintenance to keep your website running smoothly.",
      },
    ],
    technologies: [
      {
        name: "React",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Next.js",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Node.js",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "TypeScript",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Tailwind CSS",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "MongoDB",
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],
    faq: [
      {
        question: "How long does it take to develop a website?",
        answer:
          "The timeline for website development varies depending on the complexity and scope of the project. A simple website might take 4-6 weeks, while a complex web application could take several months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
      },
      {
        question: "Do you provide website maintenance services?",
        answer:
          "Yes, we offer various website maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance services include regular updates, security patches, performance monitoring, and technical support.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "We specialize in website redesigns that improve both aesthetics and functionality. We'll analyze your current website, identify areas for improvement, and develop a modern, high-performing website that better serves your business goals.",
      },
      {
        question: "Do you provide content for the website?",
        answer:
          "While we primarily focus on design and development, we can recommend trusted partners for content creation or work with your team to implement your content effectively. We can also provide guidance on content strategy to maximize the impact of your website.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes, all websites we develop are fully responsive and optimized for all devices, including smartphones, tablets, and desktop computers. We follow a mobile-first approach to ensure excellent user experience across all screen sizes.",
      },
    ],
    caseStudies: ["ecommerce-platform", "corporate-website", "web-application"],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: <Smartphone className='h-6 w-6' />,
    shortDescription:
      "Creating intuitive native and cross-platform mobile applications that engage users and drive results.",
    longDescription:
      "Our mobile app development services deliver innovative, user-friendly applications that help businesses connect with their audience on iOS and Android devices. We combine technical expertise with creative design to create mobile experiences that users love and that deliver measurable business results.",
    image: "/mobile-app.jpg",
    features: [
      {
        title: "Native iOS Development",
        description:
          "Custom iOS applications built with Swift for optimal performance and user experience.",
        icon: <Code className='h-5 w-5' />,
      },
      {
        title: "Native Android Development",
        description:
          "Custom Android applications built with Kotlin for optimal performance and user experience.",
        icon: <Database className='h-5 w-5' />,
      },
      {
        title: "Cross-Platform Development",
        description:
          "Efficient app development for both iOS and Android using React Native or Flutter.",
        icon: <Smartphone className='h-5 w-5' />,
      },
      {
        title: "UI/UX Design for Mobile",
        description:
          "Intuitive, engaging user interfaces designed specifically for mobile devices.",
        icon: <Palette className='h-5 w-5' />,
      },
      {
        title: "App Store Optimization",
        description:
          "Strategies to improve your app's visibility and downloads in the App Store and Google Play.",
        icon: <Briefcase className='h-5 w-5' />,
      },
      {
        title: "App Maintenance & Support",
        description:
          "Ongoing updates, bug fixes, and enhancements to keep your app running smoothly.",
        icon: <Shield className='h-5 w-5' />,
      },
    ],
    benefits: [
      "Enhanced customer engagement and loyalty",
      "New revenue streams through mobile channels",
      "Improved brand presence on mobile devices",
      "Streamlined business processes and operations",
      "Valuable user data and insights",
      "Competitive advantage in your industry",
    ],
    pricing: [
      {
        tier: "Basic",
        price: "$15,000",
        period: "starting at",
        features: [
          "Single platform (iOS or Android)",
          "Basic functionality",
          "Standard UI components",
          "Local data storage",
          "3 months of support",
        ],
      },
      {
        tier: "Professional",
        price: "$30,000",
        period: "starting at",
        features: [
          "Cross-platform (iOS and Android)",
          "Custom UI/UX design",
          "API integration",
          "User authentication",
          "Push notifications",
          "6 months of support",
        ],
        isPopular: true,
      },
      {
        tier: "Enterprise",
        price: "$50,000+",
        period: "starting at",
        features: [
          "Everything in Professional",
          "Advanced features",
          "Third-party integrations",
          "Analytics implementation",
          "Admin dashboard",
          "12 months of support",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "We begin by understanding your business, target audience, and app requirements through in-depth consultations.",
      },
      {
        step: 2,
        title: "Planning",
        description:
          "We create a detailed project plan, including user stories, technical specifications, and development roadmap.",
      },
      {
        step: 3,
        title: "Design",
        description:
          "Our designers create wireframes and high-fidelity mockups that focus on user experience and visual appeal.",
      },
      {
        step: 4,
        title: "Development",
        description:
          "Our developers build your app using the latest technologies and best practices for mobile development.",
      },
      {
        step: 5,
        title: "Testing",
        description:
          "We rigorously test your app for functionality, performance, and user experience across different devices.",
      },
      {
        step: 6,
        title: "Deployment",
        description:
          "We help you launch your app on the App Store and/or Google Play and ensure everything is working properly.",
      },
      {
        step: 7,
        title: "Support",
        description:
          "We provide ongoing support and updates to keep your app running smoothly and address user feedback.",
      },
    ],
    technologies: [
      {
        name: "Swift",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Kotlin",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "React Native",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Flutter",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Firebase",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "AWS Amplify",
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],
    faq: [
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "The timeline for mobile app development varies depending on the complexity and scope of the project. A simple app might take 3-4 months, while a complex app could take 6-12 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
      },
      {
        question: "Should I build a native app or a cross-platform app?",
        answer:
          "The choice between native and cross-platform development depends on your specific requirements, budget, and timeline. Native apps offer the best performance and user experience but require separate development for iOS and Android. Cross-platform apps allow you to reach both platforms with a single codebase, reducing development time and cost. We'll help you make the right choice based on your business goals.",
      },
      {
        question: "How much does it cost to maintain a mobile app?",
        answer:
          "App maintenance typically costs about 15-20% of the initial development cost per year. This includes regular updates, bug fixes, compatibility updates for new OS versions, and server maintenance. We offer various maintenance packages to keep your app running smoothly and up-to-date.",
      },
      {
        question: "Can you update my existing mobile app?",
        answer:
          "Yes, we can update and enhance your existing mobile app. We'll start by analyzing your current app, identifying areas for improvement, and developing a plan to implement the necessary updates while minimizing disruption to your users.",
      },
      {
        question: "How do you ensure the security of mobile apps?",
        answer:
          "We implement multiple security measures, including secure authentication, data encryption, secure API communication, and regular security testing. We follow industry best practices and stay updated on the latest security threats to ensure your app and user data remain protected.",
      },
    ],
    caseStudies: ["healthcare-app", "inventory-app", "fitness-app"],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    slug: "cloud-computing",
    icon: <Cloud className='h-6 w-6' />,
    shortDescription:
      "Providing scalable, secure cloud solutions that optimize operations and reduce infrastructure costs.",
    longDescription: "",
    image: "/cloud.jpg",
    features: [
      {
        title: "Scalable infrastructure",
        description:
          "Easily scale resources up or down based on your business needs.",
      },
      {
        title: "High availability and uptime",
        description:
          "Ensure your applications and services remain accessible around the clock.",
      },
      {
        title: "Cost-effective resource management",
        description: "Reduce capital expenses by paying only for what you use.",
      },
      {
        title: "Automated backups and disaster recovery",
        description:
          "Protect your data with reliable backup and recovery solutions.",
      },
      {
        title: "Secure data storage and access",
        description:
          "Use encryption and access controls to protect sensitive information.",
      },
      {
        title: "Cloud-native application development",
        description:
          "Build and deploy applications optimized for the cloud environment.",
      },
      {
        title: "Multi-cloud and hybrid-cloud support",
        description:
          "Integrate across public, private, or hybrid cloud environments seamlessly.",
      },
      {
        title: "Monitoring and performance optimization",
        description:
          "Track usage, detect issues, and improve performance with real-time analytics.",
      },
    ],

    benefits: [
      "Scalability to meet changing business demands",
      "Reduced infrastructure and maintenance costs",
      "Faster deployment and time-to-market",
      "Enhanced data backup and disaster recovery",
      "Improved collaboration and remote access",
      "Access to the latest technologies and updates",
    ],

    pricing: [
      {
        tier: "Basic",
        price: "$5,000",
        period: "starting at",
        features: [
          "Cloud hosting setup",
          "1TB of storage",
          "Basic security measures",
          "5GB of backup storage",
          "3 months of support",
        ],
      },
      {
        tier: "Professional",
        price: "$15,000",
        period: "starting at",
        features: [
          "Everything in Basic",
          "High availability setup",
          "10TB of storage",
          "Enhanced security protocols",
          "Automated backups",
          "6 months of support",
        ],
        isPopular: true,
      },
      {
        tier: "Enterprise",
        price: "$30,000+",
        period: "starting at",
        features: [
          "Everything in Professional",
          "Dedicated cloud infrastructure",
          "Unlimited storage",
          "24/7 monitoring and support",
          "Custom cloud architecture",
          "12 months of support",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "We begin by assessing your business needs, existing infrastructure, and cloud requirements to determine the best solution.",
      },
      {
        step: 2,
        title: "Planning",
        description:
          "We create a detailed cloud adoption strategy, including resource allocation, security considerations, and scalability planning.",
      },
      {
        step: 3,
        title: "Design",
        description:
          "Our cloud architects design a custom solution tailored to your needs, ensuring optimal performance and cost efficiency.",
      },
      {
        step: 4,
        title: "Implementation",
        description:
          "We deploy your cloud infrastructure, configure resources, and ensure a seamless integration with your existing systems.",
      },
      {
        step: 5,
        title: "Testing",
        description:
          "We rigorously test the cloud solution to ensure it meets performance, security, and scalability requirements.",
      },
      {
        step: 6,
        title: "Optimization",
        description:
          "We optimize your cloud environment for cost savings, performance improvements, and resource utilization.",
      },
      {
        step: 7,
        title: "Support & Maintenance",
        description:
          "We provide ongoing monitoring, support, and updates to ensure your cloud infrastructure remains secure and efficient.",
      },
    ],

    technologies: [
      {
        name: "Amazon Web Services (AWS)",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Microsoft Azure",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Google Cloud Platform (GCP)",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Docker",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Kubernetes",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Terraform",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Cloudflare",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Firebase",
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],

    faq: [
      {
        question: "What is cloud computing?",
        answer:
          "Cloud computing refers to the delivery of computing services like storage, processing power, and applications over the internet. It allows businesses to access scalable resources without maintaining on-premise infrastructure.",
      },
      {
        question: "What are the benefits of cloud computing?",
        answer:
          "Cloud computing offers benefits such as scalability, cost savings, enhanced collaboration, security, and the ability to access the latest technologies. It also helps businesses reduce operational costs and streamline processes.",
      },
      {
        question: "How secure is cloud computing?",
        answer:
          "Cloud providers implement strong security measures such as encryption, firewalls, and identity management. However, the security of cloud services also depends on how they are configured and managed. We ensure your cloud environment is fully secure and compliant.",
      },
      {
        question: "Can I migrate my existing systems to the cloud?",
        answer:
          "Yes, we offer migration services to help businesses transition from on-premise infrastructure to the cloud. Our team ensures a smooth migration with minimal downtime and disruption.",
      },
      {
        question: "What type of cloud computing services do you offer?",
        answer:
          "We offer a range of cloud computing services, including cloud infrastructure setup, managed services, disaster recovery, security solutions, and cloud-based application development.",
      },
    ],

    caseStudies: [
      "ecommerce-cloud-migration",
      "financial-institution-cloud-architecture",
      "saas-platform-cloud-optimization",
    ],
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    slug: "cyber-security",
    icon: <Shield className='h-6 w-6' />,
    shortDescription:
      "Implementing robust security measures to protect your valuable data and systems from threats.",
    longDescription: "",
    image: "/security.jpg",
    features: [
      { title: "Real-time threat detection and response", description: "" },
      {
        title: "Data encryption and secure communication protocols",
        description: "",
      },
      {
        title: "Network vulnerability assessments and penetration testing",
        description: "",
      },
      {
        title: "Multi-factor authentication and access control",
        description: "",
      },
      { title: "Security compliance (GDPR, ISO 27001, etc.)", description: "" },
      { title: "Regular security audits and monitoring", description: "" },
      { title: "Incident response planning and recovery", description: "" },
      { title: "Firewall and intrusion prevention systems", description: "" },
    ],
    benefits: [
      "Protection against data breaches and cyber threats",
      "Improved customer trust and brand reputation",
      "Compliance with industry regulations and standards",
      "Reduced downtime and operational disruption",
      "Safeguarding of intellectual property and sensitive data",
      "Continuous threat monitoring and rapid incident response",
    ],

    pricing: [
      {
        tier: "Basic",
        price: "$10,000",
        period: "starting at",
        features: [
          "Vulnerability scanning",
          "Basic firewall configuration",
          "Antivirus setup",
          "Monthly security reports",
          "3 months of support",
        ],
      },
      {
        tier: "Professional",
        price: "$25,000",
        period: "starting at",
        features: [
          "Everything in Basic",
          "Penetration testing",
          "SIEM setup (e.g., Splunk)",
          "Multi-factor authentication",
          "Incident response planning",
          "6 months of support",
        ],
        isPopular: true,
      },
      {
        tier: "Enterprise",
        price: "$45,000+",
        period: "starting at",
        features: [
          "Everything in Professional",
          "24/7 threat monitoring",
          "Compliance management (GDPR, ISO 27001)",
          "Security awareness training",
          "Dedicated security team",
          "12 months of support",
        ],
      },
    ],

    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "We begin by assessing your current security posture, identifying vulnerabilities and compliance gaps.",
      },
      {
        step: 2,
        title: "Planning",
        description:
          "We develop a tailored security strategy based on your business needs, risk profile, and industry standards.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "We deploy security measures such as firewalls, encryption, intrusion detection, and access controls.",
      },
      {
        step: 4,
        title: "Testing",
        description:
          "We conduct penetration testing, vulnerability scans, and threat simulations to validate your defenses.",
      },
      {
        step: 5,
        title: "Monitoring",
        description:
          "We set up continuous monitoring systems to detect and respond to real-time threats and anomalies.",
      },
      {
        step: 6,
        title: "Training",
        description:
          "We provide employee training and awareness programs to reduce human error and phishing risks.",
      },
      {
        step: 7,
        title: "Maintenance",
        description:
          "We offer ongoing updates, audits, and compliance checks to ensure your security remains up to date.",
      },
    ],

    technologies: [
      {
        name: "Wireshark",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Nessus",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Metasploit",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Snort",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "OSSEC",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Splunk",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Fail2Ban",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "OpenVAS",
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],

    faq: [
      {
        question: "What is a cybersecurity assessment?",
        answer:
          "A cybersecurity assessment evaluates your organization’s current security posture, identifies vulnerabilities, and provides recommendations for improvement. It’s a crucial first step in protecting your data and systems.",
      },
      {
        question: "How often should we conduct penetration testing?",
        answer:
          "We recommend conducting penetration testing at least once a year or after any significant system change. Regular testing ensures that vulnerabilities are discovered and addressed before they can be exploited.",
      },
      {
        question: "Can you help us become compliant with GDPR or ISO 27001?",
        answer:
          "Yes, we offer comprehensive compliance services to help your organization meet regulations like GDPR, ISO 27001, HIPAA, and others. We guide you through documentation, implementation, and audits.",
      },
      {
        question: "What is the role of a firewall in cybersecurity?",
        answer:
          "A firewall acts as a barrier between your internal network and external threats, filtering traffic and blocking malicious activity. It’s a foundational layer of defense in any cybersecurity strategy.",
      },
      {
        question: "Do you provide 24/7 threat monitoring?",
        answer:
          "Yes, we offer continuous threat monitoring services to detect and respond to suspicious activities in real time, ensuring your systems are always protected, even outside business hours.",
      },
    ],

    caseStudies: [
      "financial-institution-security",
      "ecommerce-data-protection",
      "enterprise-threat-monitoring",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    slug: "data-analytics",
    icon: <Database className='h-6 w-6' />,
    shortDescription:
      "Transforming your raw data into actionable insights that drive better business decisions and outcomes.",
    longDescription: "",
    image: "",
    features: [
      {
        title: "Data Collection and Integration",
        description:
          "Seamlessly gather data from multiple sources and integrate it for analysis.",
      },
      {
        title: "Data Visualization",
        description:
          "Create interactive dashboards and visualizations to make data insights accessible.",
      },
      {
        title: "Predictive Analytics",
        description:
          "Leverage machine learning models to forecast future trends and outcomes.",
      },
      {
        title: "Real-time Analytics",
        description:
          "Monitor and analyze data in real time to drive quick decision-making.",
      },
      {
        title: "Advanced Reporting",
        description:
          "Generate detailed reports to support strategic business decisions.",
      },
      {
        title: "Data Cleansing and Transformation",
        description:
          "Ensure the accuracy and consistency of data through cleaning and transformation processes.",
      },
      {
        title: "Custom Analytics Solutions",
        description:
          "Tailor analytics tools to meet the unique needs of your business.",
      },
      {
        title: "Business Intelligence",
        description:
          "Utilize data to uncover insights and drive business strategies.",
      },
    ],
    benefits: [
      "Improved decision-making through data-driven insights",
      "Increased operational efficiency and productivity",
      "Enhanced customer experience by understanding preferences and behaviors",
      "Real-time insights for faster, more informed actions",
      "Identification of new business opportunities and growth areas",
      "Cost savings by optimizing resource allocation and operations",
      "Predictive capabilities to forecast trends and prevent potential issues",
      "Competitive advantage through a deeper understanding of market dynamics",
    ],

    pricing: [
      {
        tier: "Basic",
        price: "$2,000",
        period: "starting at",
        features: [
          "Basic data analysis",
          "Integration with up to 2 data sources",
          "Standard reporting and visualizations",
          "Basic predictive analytics",
          "1 month of support",
        ],
      },
      {
        tier: "Professional",
        price: "$7,500",
        period: "starting at",
        features: [
          "Everything in Basic",
          "Integration with up to 5 data sources",
          "Advanced reporting and visualizations",
          "Real-time analytics",
          "Custom dashboards",
          "3 months of support",
        ],
        isPopular: true,
      },
      {
        tier: "Enterprise",
        price: "$15,000+",
        period: "starting at",
        features: [
          "Everything in Professional",
          "Unlimited data source integrations",
          "Advanced machine learning models",
          "Custom analytics solutions",
          "Comprehensive predictive analytics",
          "6 months of support",
        ],
      },
    ],

    process: [
      {
        step: 1,
        title: "Consultation & Discovery",
        description:
          "We begin by understanding your business goals, data sources, and analytics needs through a detailed consultation.",
      },
      {
        step: 2,
        title: "Data Collection & Integration",
        description:
          "We collect and integrate data from various sources, ensuring that all relevant information is available for analysis.",
      },
      {
        step: 3,
        title: "Data Cleansing & Transformation",
        description:
          "We clean and transform the data to ensure accuracy, consistency, and relevance for analysis.",
      },
      {
        step: 4,
        title: "Data Analysis & Modeling",
        description:
          "Our data analysts and data scientists apply advanced analytics techniques to extract valuable insights and create predictive models.",
      },
      {
        step: 5,
        title: "Visualization & Reporting",
        description:
          "We create intuitive visualizations and detailed reports that make it easy to understand and act on the data insights.",
      },
      {
        step: 6,
        title: "Implementation & Optimization",
        description:
          "We help implement the insights into your business operations and continuously optimize the analytics models for better performance.",
      },
      {
        step: 7,
        title: "Ongoing Support & Maintenance",
        description:
          "We provide ongoing support to ensure that your analytics tools and insights remain relevant and continue to drive value for your business.",
      },
    ],

    technologies: [
      {
        name: "Python",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "R",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "SQL",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Tableau",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Power BI",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Apache Hadoop",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Apache Spark",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Google BigQuery",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "AWS Redshift",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Machine Learning (ML) Models",
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],

    faq: [
      {
        question: "What types of data can you analyze?",
        answer:
          "We can analyze structured, semi-structured, and unstructured data from various sources, including databases, social media, IoT devices, and more. Our team ensures that all types of data are processed to generate meaningful insights.",
      },
      {
        question: "How long does it take to get actionable insights from data?",
        answer:
          "The timeline depends on the complexity and volume of the data. For smaller datasets, insights can be delivered in a few days, while larger or more complex datasets might take a few weeks. We work closely with clients to set expectations and timelines.",
      },
      {
        question: "How do you ensure data security during analysis?",
        answer:
          "We follow industry-standard best practices for data security, including encryption, secure data transfer protocols, and access control. We also comply with regulations such as GDPR and ISO 27001 to ensure your data remains secure.",
      },
      {
        question:
          "Can you help integrate data analytics into our existing systems?",
        answer:
          "Yes, we can seamlessly integrate data analytics solutions with your current systems, such as CRM, ERP, and other business applications, to ensure that data flows smoothly and insights are actionable within your existing workflows.",
      },
      {
        question: "Do you provide training on how to use the analytics tools?",
        answer:
          "Absolutely! We offer training sessions to ensure your team can effectively use the analytics tools, understand the reports and dashboards, and make data-driven decisions. Our goal is to empower your team with the skills to use the insights effectively.",
      },
      {
        question: "Can we track the ROI from data analytics?",
        answer:
          "Yes, our analytics solutions are designed to track key performance indicators (KPIs) that align with your business objectives, allowing you to measure the ROI of data-driven initiatives. We help you set up the right metrics to track and assess the impact on your business.",
      },
    ],

    caseStudies: [
      "ecommerce-analytics",
      "financial-forecasting",
      "customer-behavior-analysis",
      "sales-performance-analysis",
      "market-trend-prediction",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software",
    slug: "custom-software",
    icon: <Code className='h-6 w-6' />,
    shortDescription:
      "Developing bespoke software solutions that address your unique business challenges and needs.",
    longDescription: "",
    image: "",
    features: [
      {
        title: "Tailored solutions",
        description:
          "Custom-built to meet your business's specific requirements.",
      },
      {
        title: "Scalability",
        description: "Designed to grow with your business as demands increase.",
      },
      {
        title: "Integration",
        description:
          "Seamless integration with your existing tools and systems.",
      },
      {
        title: "Security",
        description:
          "Robust security features to safeguard your business data.",
      },
      {
        title: "User-friendly interfaces",
        description:
          "Intuitive and easy-to-use designs for both employees and customers.",
      },
      {
        title: "Maintenance and support",
        description:
          "Ongoing support to ensure your software runs smoothly post-deployment.",
      },
    ],

    benefits: [
      "Improved efficiency and productivity",
      "Tailored to your business processes",
      "Competitive advantage through unique solutions",
      "Increased flexibility and scalability",
      "Enhanced security and data protection",
      "Seamless integration with existing systems",
    ],

    pricing: [
      {
        tier: "Basic",
        price: "$10,000",
        period: "starting at",
        features: [
          "Single platform deployment",
          "Basic functionality",
          "Standard UI design",
          "1 month of support",
        ],
      },
      {
        tier: "Professional",
        price: "$30,000",
        period: "starting at",
        features: [
          "Cross-platform deployment",
          "Advanced UI/UX design",
          "Custom API integrations",
          "Advanced analytics features",
          "6 months of support",
        ],
        isPopular: true,
      },
      {
        tier: "Enterprise",
        price: "$50,000+",
        period: "starting at",
        features: [
          "Everything in Professional",
          "Dedicated infrastructure",
          "High availability and failover systems",
          "Advanced security and compliance",
          "12 months of support",
        ],
      },
    ],

    process: [
      {
        step: 1,
        title: "Consultation & Discovery",
        description:
          "We begin by understanding your business goals, challenges, and technical requirements through consultations.",
      },
      {
        step: 2,
        title: "Planning & Architecture",
        description:
          "We develop a detailed plan and software architecture that aligns with your business needs.",
      },
      {
        step: 3,
        title: "Design & Prototyping",
        description:
          "Our designers create wireframes and prototypes for your feedback and approval before development starts.",
      },
      {
        step: 4,
        title: "Development",
        description:
          "We begin coding your custom solution, following best practices for software development.",
      },
      {
        step: 5,
        title: "Testing",
        description:
          "We rigorously test the software to ensure it functions as expected and meets all quality standards.",
      },
      {
        step: 6,
        title: "Deployment",
        description:
          "We deploy the software to your live environment and ensure smooth integration with existing systems.",
      },
      {
        step: 7,
        title: "Ongoing Support & Updates",
        description:
          "We offer ongoing support, regular updates, and maintenance to keep your software up-to-date and running smoothly.",
      },
    ],

    technologies: [
      {
        name: "JavaScript",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Python",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Java",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "C#",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Node.js",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "React",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Angular",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "SQL",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "AWS",
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Azure",
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],

    faq: [
      {
        question: "How long does it take to develop custom software?",
        answer:
          "The timeline varies based on complexity, but typically, custom software development takes between 3 to 6 months, depending on the scope and features.",
      },
      {
        question: "How much does custom software development cost?",
        answer:
          "The cost depends on the complexity, features, and platform of the software. Our pricing starts at $10,000 for basic projects and can go up to $50,000+ for enterprise-level solutions.",
      },
      {
        question: "Can you integrate the software with our existing systems?",
        answer:
          "Yes, we specialize in building solutions that integrate seamlessly with your existing systems, whether it's CRM, ERP, or other tools.",
      },
      {
        question: "What support do you offer after the software is deployed?",
        answer:
          "We provide ongoing support, including updates, bug fixes, and enhancements, as well as technical assistance to ensure smooth operation.",
      },
      {
        question: "Will my custom software be scalable?",
        answer:
          "Absolutely! We design your custom software to be scalable, ensuring it can grow and evolve with your business needs.",
      },
    ],

    caseStudies: [
      "inventory-management-system",
      "custom-crm-development",
      "ecommerce-platform",
      "enterprise-resource-planning-system",
      "workflow-automation-tool",
    ],
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    slug: "digital-strategy",
    icon: <Briefcase className='h-6 w-6' />,
    shortDescription:
      "Creating comprehensive digital roadmaps that align technology initiatives with your business objectives.",
    longDescription: "",
    image: "",
    features: [],
    benefits: [],
    pricing: [],
    process: [],
    technologies: [],
    faq: [],
    caseStudies: [],
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    icon: <Palette className='h-6 w-6' />,
    shortDescription:
      "Leveraging artificial intelligence and machine learning to automate processes and uncover new opportunities.",
    longDescription: "",
    image: "",
    features: [],
    benefits: [],
    pricing: [],
    process: [],
    technologies: [],
    faq: [],
    caseStudies: [],
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    slug: "it-consulting",
    icon: <Shield className='h-6 w-6' />,
    shortDescription:
      "Offering strategic guidance to align your technology investments with your business objectives.",
    longDescription: "",
    image: "",
    features: [],
    benefits: [],
    pricing: [],
    process: [],
    technologies: [],
    faq: [],
    caseStudies: [],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: <Palette className='h-6 w-6' />,
    shortDescription:
      "Designing intuitive, engaging user interfaces that enhance user satisfaction and conversion rates.",
    longDescription: "",
    image: "",
    features: [],
    benefits: [],
    pricing: [],
    process: [],
    technologies: [],
    faq: [],
    caseStudies: [],
  },
];

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
