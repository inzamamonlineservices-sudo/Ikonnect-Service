import { BarChart3, Code, Megaphone, MessageSquare, Zap, Bot, Search, Users } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: any;
  fullDescription: string;
  benefits: string[];
  process: string[];
  technologies: string[];
  results: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  result: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  readTime: number;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: any;
  details: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Data Automation",
    slug: "data-automation",
    description: "Streamline your operations with intelligent automation systems that process, analyze, and act on your data in real-time.",
    icon: BarChart3,
    fullDescription: "Transform your business operations with our comprehensive data automation solutions. We design and implement intelligent systems that automatically collect, process, analyze, and act on your data, reducing manual work by up to 80% while improving accuracy and speed.",
    benefits: [
      "Reduce manual data processing by up to 80%",
      "Improve data accuracy and consistency",
      "Real-time insights and automated reporting",
      "Scalable solutions that grow with your business",
      "Integration with existing systems and workflows"
    ],
    process: [
      "Data audit and process mapping",
      "Automation strategy development",
      "System design and implementation",
      "Testing and quality assurance",
      "Deployment and training",
      "Ongoing monitoring and optimization"
    ],
    technologies: ["Python", "Apache Airflow", "SQL", "REST APIs", "Cloud Platforms", "ETL Tools"],
    results: [
      "75% reduction in manual processing time",
      "99.9% data accuracy improvement",
      "Real-time automated reporting",
      "50% cost reduction in data operations"
    ]
  },
  {
    id: "2",
    title: "AI Web Development",
    slug: "ai-web-development",
    description: "Build intelligent web applications with AI-powered features that adapt, learn, and deliver personalized user experiences.",
    icon: Code,
    fullDescription: "Create next-generation web applications that leverage artificial intelligence to provide personalized experiences, intelligent recommendations, and automated decision-making capabilities.",
    benefits: [
      "Personalized user experiences",
      "Intelligent content recommendations",
      "Automated customer interactions",
      "Predictive analytics integration",
      "Enhanced user engagement and conversion"
    ],
    process: [
      "Requirements analysis and AI strategy",
      "Architecture design and planning",
      "AI model development and training",
      "Web application development",
      "Integration and testing",
      "Deployment and optimization"
    ],
    technologies: ["React", "Node.js", "TensorFlow", "OpenAI API", "MongoDB", "AWS/Azure"],
    results: [
      "45% increase in user engagement",
      "60% improvement in conversion rates",
      "Personalized experiences for 100% of users",
      "30% reduction in customer support tickets"
    ]
  },
  {
    id: "3",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Data-driven marketing strategies that reach your target audience with precision and deliver measurable growth.",
    icon: Megaphone,
    fullDescription: "Accelerate your business growth with our comprehensive digital marketing solutions that combine data analytics, creative strategy, and cutting-edge technology to deliver exceptional ROI.",
    benefits: [
      "Targeted audience reach and engagement",
      "Measurable ROI and performance tracking",
      "Multi-channel marketing automation",
      "Brand awareness and authority building",
      "Lead generation and conversion optimization"
    ],
    process: [
      "Market research and audience analysis",
      "Strategy development and planning",
      "Content creation and campaign design",
      "Campaign launch and management",
      "Performance monitoring and optimization",
      "Reporting and analysis"
    ],
    technologies: ["Google Analytics", "Facebook Ads", "HubSpot", "Mailchimp", "SEMrush", "Hootsuite"],
    results: [
      "300% increase in qualified leads",
      "250% improvement in conversion rates",
      "400% growth in social media engagement",
      "200% increase in organic traffic"
    ]
  },
  {
    id: "4",
    title: "Social Media Management",
    slug: "social-media-management",
    description: "Amplify your brand presence across all platforms with strategic content and community engagement that converts.",
    icon: Users,
    fullDescription: "Build a powerful social media presence that drives engagement, builds community, and converts followers into customers through strategic content creation and community management.",
    benefits: [
      "Consistent brand presence across platforms",
      "Increased audience engagement and reach",
      "Community building and customer loyalty",
      "Lead generation through social channels",
      "Brand reputation management"
    ],
    process: [
      "Social media audit and strategy",
      "Content calendar development",
      "Content creation and curation",
      "Community management and engagement",
      "Performance tracking and optimization",
      "Monthly reporting and analysis"
    ],
    technologies: ["Hootsuite", "Buffer", "Canva", "Adobe Creative Suite", "Sprout Social", "Analytics Tools"],
    results: [
      "500% increase in social media followers",
      "350% improvement in engagement rates",
      "40% increase in website traffic from social",
      "25% of leads generated from social channels"
    ]
  },
  {
    id: "5",
    title: "AI Integration",
    slug: "ai-integration",
    description: "Seamlessly integrate AI capabilities into your existing systems to unlock new efficiencies and competitive advantages.",
    icon: Zap,
    fullDescription: "Transform your existing business processes by integrating artificial intelligence capabilities that enhance decision-making, automate complex tasks, and provide intelligent insights.",
    benefits: [
      "Enhanced decision-making capabilities",
      "Automated complex business processes",
      "Predictive analytics and forecasting",
      "Improved operational efficiency",
      "Competitive advantage through AI adoption"
    ],
    process: [
      "System analysis and AI opportunity assessment",
      "Integration strategy and roadmap",
      "AI model selection and customization",
      "System integration and testing",
      "Staff training and change management",
      "Ongoing support and optimization"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Azure AI", "Google Cloud AI", "Custom ML Models"],
    results: [
      "60% improvement in decision accuracy",
      "40% reduction in processing time",
      "90% automation of routine tasks",
      "35% increase in operational efficiency"
    ]
  },
  {
    id: "6",
    title: "Chatbot Development",
    slug: "chatbot-development",
    description: "Create intelligent conversational interfaces that provide 24/7 customer support and drive engagement.",
    icon: Bot,
    fullDescription: "Develop sophisticated chatbots that understand natural language, provide instant customer support, qualify leads, and enhance user experience across multiple platforms.",
    benefits: [
      "24/7 automated customer support",
      "Instant response to customer inquiries",
      "Lead qualification and nurturing",
      "Reduced support costs",
      "Improved customer satisfaction"
    ],
    process: [
      "Use case analysis and bot design",
      "Conversation flow development",
      "Natural language processing setup",
      "Integration with existing systems",
      "Testing and refinement",
      "Deployment and monitoring"
    ],
    technologies: ["Dialogflow", "Microsoft Bot Framework", "OpenAI GPT", "Rasa", "Webhook APIs", "NLP Libraries"],
    results: [
      "90% of inquiries handled automatically",
      "75% reduction in response time",
      "50% decrease in support costs",
      "35% increase in customer satisfaction"
    ]
  },
  {
    id: "7",
    title: "Web Scraping & Data Extraction",
    slug: "web-scraping",
    description: "Extract valuable insights from any web source with advanced scraping technologies and real-time data processing capabilities.",
    icon: Search,
    fullDescription: "Harvest valuable data from websites, social media, and online platforms with our advanced web scraping solutions that provide clean, structured data for analysis and decision-making.",
    benefits: [
      "Automated data collection from multiple sources",
      "Real-time competitive intelligence",
      "Market research and trend analysis",
      "Price monitoring and optimization",
      "Lead generation and prospecting"
    ],
    process: [
      "Data source identification and analysis",
      "Scraping strategy and architecture design",
      "Bot development and testing",
      "Data cleaning and processing pipeline",
      "Quality assurance and monitoring",
      "Ongoing maintenance and updates"
    ],
    technologies: ["Python", "Scrapy", "Selenium", "BeautifulSoup", "Proxy Networks", "Data Processing Tools"],
    results: [
      "1M+ data points processed daily",
      "95% data accuracy and completeness",
      "Real-time competitive insights",
      "50% faster market research cycles"
    ]
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-commerce AI Platform",
    description: "AI-powered recommendation engine that increased conversion rates by 45%",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "AI Development",
    tags: ["AI", "E-commerce", "Machine Learning"],
    result: "+45% Conversion"
  },
  {
    id: "2",
    title: "Marketing Automation Suite",
    description: "Comprehensive automation platform that reduced manual work by 80%",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Automation",
    tags: ["Marketing", "Automation", "Analytics"],
    result: "-80% Manual Work"
  },
  {
    id: "3",
    title: "Data Analytics Platform",
    description: "Real-time analytics solution providing 360° business insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Analytics",
    tags: ["Analytics", "Dashboard", "Real-time"],
    result: "Real-time Insights"
  },
  {
    id: "4",
    title: "Social Media AI Tool",
    description: "AI-powered content generation that boosted engagement by 200%",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "AI Marketing",
    tags: ["Social Media", "AI", "Content"],
    result: "+200% Engagement"
  },
  {
    id: "5",
    title: "Enterprise Chatbot",
    description: "Intelligent customer service bot handling 90% of inquiries automatically",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "AI Chatbot",
    tags: ["Chatbot", "Customer Service", "AI"],
    result: "90% Automation"
  },
  {
    id: "6",
    title: "Web Scraping Solution",
    description: "Automated data extraction processing 1M+ records daily",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Data Extraction",
    tags: ["Web Scraping", "Data", "Automation"],
    result: "1M+ Records/Day"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael Chen",
    position: "CEO",
    company: "TechCorp",
    content: "Ikonnect Service transformed our entire data infrastructure. Their AI automation solution reduced our processing time by 75% and significantly improved accuracy. Outstanding results!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    id: "2",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "GrowthCo",
    content: "Their digital marketing automation platform increased our lead generation by 400%. The team is incredibly knowledgeable and delivers beyond expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c647?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    id: "3",
    name: "David Rodriguez",
    position: "CTO",
    company: "InnovateTech",
    content: "The AI chatbot they developed for us handles customer inquiries 24/7 with incredible accuracy. Customer satisfaction scores improved by 35% since implementation.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    title: "Discovery & Analysis",
    description: "We dive deep into your business challenges, goals, and current systems to identify opportunities for optimization and growth.",
    icon: Search,
    details: [
      "Business requirements analysis",
      "Current system audit",
      "Opportunity identification",
      "Success metrics definition"
    ]
  },
  {
    id: "2",
    title: "Strategy & Planning",
    description: "We craft a comprehensive strategy tailored to your specific needs, outlining the roadmap to achieve your digital transformation goals.",
    icon: Zap,
    details: [
      "Custom solution design",
      "Technology stack selection",
      "Project timeline creation",
      "Resource allocation planning"
    ]
  },
  {
    id: "3",
    title: "Development & Implementation",
    description: "Our expert team brings your vision to life using cutting-edge technologies and best practices, ensuring scalable and robust solutions.",
    icon: Code,
    details: [
      "Agile development methodology",
      "Regular progress updates",
      "Quality assurance testing",
      "Performance optimization"
    ]
  },
  {
    id: "4",
    title: "Launch & Optimization",
    description: "We ensure a smooth deployment and provide ongoing support to maximize performance and achieve your business objectives.",
    icon: BarChart3,
    details: [
      "Seamless deployment process",
      "Team training and onboarding",
      "Performance monitoring",
      "Continuous optimization"
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Business Automation",
    slug: "future-ai-business-automation",
    excerpt: "Explore how artificial intelligence is revolutionizing business processes and what it means for the future of work.",
    content: "Full blog post content would go here...",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    author: "John Smith",
    publishDate: "2024-12-15",
    category: "AI & Technology",
    tags: ["AI", "Automation", "Business"],
    readTime: 8
  },
  {
    id: "2",
    title: "Digital Marketing Trends for 2025",
    slug: "digital-marketing-trends-2025",
    excerpt: "Stay ahead of the curve with the latest digital marketing trends that will shape the industry in 2025.",
    content: "Full blog post content would go here...",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    author: "Sarah Wilson",
    publishDate: "2024-12-10",
    category: "Digital Marketing",
    tags: ["Marketing", "Trends", "Strategy"],
    readTime: 6
  },
  {
    id: "3",
    title: "Building Effective Chatbots: A Complete Guide",
    slug: "building-effective-chatbots-guide",
    excerpt: "Learn the essential principles and best practices for creating chatbots that truly engage and convert users.",
    content: "Full blog post content would go here...",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    author: "Mike Johnson",
    publishDate: "2024-12-05",
    category: "Development",
    tags: ["Chatbots", "AI", "Development"],
    readTime: 10
  }
];
