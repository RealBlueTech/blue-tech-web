export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export const projects: Project[] = [
  {
    id: "pharmacy-management",
    title: "Pharmacy Management System",
    description: "A comprehensive system for managing pharmacy operations, including inventory tracking, prescription management, and patient records.",
    category: "Web Application",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "https://img.freepik.com/free-photo/african-american-woman-pharmacist-standing-with-serious-expression-pharmacy_839833-20088.jpg?t=st=1746628333~exp=1746631933~hmac=9eb46f7b890098aa3d4569ce560f94e35a42e205f2dc8b7054c4aff5bbcb5624&w=2000",
    longDescription: "A state-of-the-art pharmacy management system designed to streamline operations and enhance patient care. This comprehensive solution integrates inventory management, prescription processing, and patient records into a single, efficient platform.",
    features: [
      "Real-time inventory tracking and automated reordering",
      "Digital prescription management system",
      "Patient record management with secure access",
      "Automated billing and insurance processing",
      "Analytics dashboard for business insights"
    ],
    challenges: [
      "Complex integration with existing pharmacy systems",
      "Strict compliance with healthcare regulations",
      "Need for real-time data synchronization",
      "High security requirements for patient data"
    ],
    solutions: [
      "Implemented microservices architecture for better scalability",
      "Built robust security measures with HIPAA compliance",
      "Developed real-time synchronization using WebSocket",
      "Created intuitive UI/UX for easy adoption"
    ],
    results: [
      "40% reduction in inventory management time",
      "60% faster prescription processing",
      "99.9% system uptime",
      "Improved patient satisfaction scores"
    ]
  },
  {
    id: "garage-management",
    title: "Garage Management System",
    description: "Complete solution for automotive repair shops, handling service scheduling, customer management, and vehicle maintenance tracking.",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "AWS"],
    image: "https://img.freepik.com/free-photo/repairman-showing-customer-car-changes_482257-76100.jpg?t=st=1746628383~exp=1746631983~hmac=a3938c1fb065b7776fe643de3e75d5b59a048bfdddb6a9129e608c8a314e8dd9&w=2000",
    longDescription: "A comprehensive mobile solution for automotive repair shops that revolutionizes how they manage their operations, customer relationships, and vehicle maintenance tracking.",
    features: [
      "Automated service scheduling system",
      "Customer vehicle history tracking",
      "Real-time service status updates",
      "Digital maintenance records",
      "Customer communication portal"
    ],
    challenges: [
      "Offline functionality requirements",
      "Complex scheduling algorithms",
      "Integration with various vehicle diagnostic systems",
      "Real-time notifications system"
    ],
    solutions: [
      "Implemented offline-first architecture",
      "Developed smart scheduling algorithm",
      "Created universal diagnostic system interface",
      "Built push notification system"
    ],
    results: [
      "30% increase in customer retention",
      "25% reduction in scheduling conflicts",
      "50% faster service completion",
      "Improved customer satisfaction"
    ]
  },
  {
    id: "pos-system",
    title: "Point of Sale System",
    description: "Modern retail management system with real-time sales tracking, inventory management, and customer relationship features.",
    category: "Data Platform",
    technologies: ["Python", "TensorFlow", "Google Cloud"],
    image: "https://img.freepik.com/free-photo/focused-african-american-cashier-scanning-goods-checkout_74855-3409.jpg?t=st=1746628475~exp=1746632075~hmac=6c7d8a02e7baab8c21ec88ba68afe23a008dffadff89b349c6b8b930b4c0906d&w=2000",
    longDescription: "An advanced point of sale system that combines traditional retail management with cutting-edge AI capabilities for predictive analytics and inventory optimization.",
    features: [
      "Real-time sales tracking and analytics",
      "AI-powered inventory management",
      "Customer loyalty program",
      "Multi-channel sales integration",
      "Advanced reporting dashboard"
    ],
    challenges: [
      "High transaction volume handling",
      "Real-time data synchronization",
      "Integration with multiple payment systems",
      "AI model accuracy requirements"
    ],
    solutions: [
      "Implemented scalable microservices architecture",
      "Developed real-time data pipeline",
      "Created universal payment gateway interface",
      "Built custom AI models for retail"
    ],
    results: [
      "35% increase in sales efficiency",
      "40% reduction in inventory costs",
      "25% growth in customer retention",
      "Improved profit margins"
    ]
  },
  {
    id: "fleetrun",
    title: "FleetRun",
    description: "A comprehensive fleet management system designed to help companies manage their trucking operations efficiently, including driver management, truck tracking, and incident management.",
    category: "Enterprise Platform",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "https://img.freepik.com/free-photo/truck-driving-highway_23-2148515087.jpg?t=st=1746628533~exp=1746632133~hmac=9eb46f7b890098aa3d4569ce560f94e35a42e205f2dc8b7054c4aff5bbcb5624&w=2000",
    longDescription: "FleetRun is a state-of-the-art fleet management platform that revolutionizes how companies manage their trucking operations. It provides comprehensive tools for driver management, truck tracking, incident management, and analytics, all designed to optimize fleet operations and improve efficiency.",
    features: [
      "Driver management with performance tracking and incident monitoring",
      "Truck fleet management with maintenance scheduling and utilization tracking",
      "Comprehensive incident management system with severity categorization",
      "Real-time analytics and reporting dashboard",
      "Facility management with resource tracking",
      "Role-based access control and secure data handling"
    ],
    challenges: [
      "Complex integration of multiple data sources",
      "Real-time data synchronization requirements",
      "High security and compliance requirements",
      "Scalability for large fleet operations",
      "Complex incident tracking and resolution workflows"
    ],
    solutions: [
      "Implemented microservices architecture for scalability",
      "Developed real-time data synchronization system",
      "Built robust security measures with role-based access",
      "Created intuitive UI/UX for easy adoption",
      "Implemented comprehensive analytics engine"
    ],
    results: [
      "40% improvement in fleet utilization",
      "35% reduction in incident resolution time",
      "50% better resource allocation efficiency",
      "Improved driver performance tracking",
      "Enhanced operational visibility and control"
    ]
  }
]; 