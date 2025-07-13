
import {
  mobile,
  backend,
  creator,
  web,
  carrent,
  jobit,
  tripguide,
  healthcare,
  shopify,
  insurance,

  nih,
  persistent,
  Tcs,
  cognizant,
  commscope,

  java,
  spring,
  hibernate,
  mysql,
  postgresql,
  oracle,
  mongodb,
  reactjs,
  redux,
  angular,
  nodejs,
  javascript,
  git,
  docker,
  kubernetes,
  maven
  

  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Hibernate",
    icon: hibernate,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
  


];

const experiences = [
  {
    title: "Sr. Java Fullstack Developer",
    company_name: "National Institute of Health",
    icon:nih,
    iconBg: "#383E56",
    date: "Jul 2024 - Present",
    points: [
    
      "Designed and deployed HIPAA-compliant Spring Boot microservices managing 500K+ patient records with secure access.",
      "Built an AI-enabled Spring Boot backend integrating LLMs (OpenAI, Claude, Hugging Face) for chat and summarization on Azure.",
      "Integrated custom NLP models on Google Vertex AI with Spring Boot to classify customer intent and route requests.",
      "Developed real-time healthcare dashboards using AngularJS, WebSockets, Redux, and Axios for efficient API communication."

    ],
  },
  {
    title: "Java Fullstack Developer",
    company_name: "Persistent Systems",
    icon: persistent,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Built Spring Boot microservices with Kafka Streams for real-time fraud detection and transaction processing.",
      "Developed Angular 12+ dashboards with real-time banking data, forecasting, and 40% fewer API calls via NgRx caching.",
      "Used LangChain with OpenAI, Copilot, and Hugging Face to orchestrate prompts and exposed results via Java REST APIs.",
      "Designed and managed PostgreSQL and PL/SQL schemas for high-volume transactional systems.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#383E56",
    date: "April 2022 - Dec 2022",
    points: [
      "Migrated legacy J2EE insurance systems to Spring Boot microservices, cutting manual underwriting by 30%.",
      "Designed event-driven systems with Kafka, RabbitMQ, and ActiveMQ to reduce processing latency by 45%.",
      "Deployed auto-scaling services on GCP to support peak insurance enrollment periods.",
      "Designed event-driven architectures with Apache Kafka, RabbitMQ, and ActiveMQ, enabling real-time data streaming"
    ],
  },
  {
    title: "Java Developer",
    company_name: "Tata Consultancy Services",
    icon: Tcs,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Mar 2022",
    points: [
      "Migrated manufacturing applications from monoliths to microservices with Spring and Hibernate.",
      "Developed REST/SOAP APIs and Angular UIs for equipment tracking systems.",
      "Spearheaded continuous integration efforts using Jenkins and Azure DevOps pipelines.",
      "Monitored system performance using Prometheus and improved throughput by 25%."
    ],
  },
  {
    title: "Jr. Java Developer",
    company_name: "Commscope",
    icon: commscope,
    iconBg: "#E6DEDD",
    date: "Jul 2018 - Aug 2019",
    points: [
      "Designed interactive D3.js visualizations and dashboards for network monitoring tools.",
      "Implemented authentication using JWT and enhanced UI responsiveness with React.js and Node Js",
      "Optimized frontend performance by 25% via code-splitting and lazy loading.",
      "Refactored legacy JavaScript codebase into modular React components.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Gani proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Gani does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Gani optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rental Project",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/gani5/car-rental",
  },
  {
    name: "Job Portal",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/gani5/job-portal",
  },
  {
    name: "Tour Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
  
    image: tripguide,
    source_code_link: "https://github.com/gani5/tour-guide",
  },
  {
    name: "Inusrance Company",
    description:
      " Spring Boot app for calculating insurance amounts, purchasing policies, generating PDF documents, and verifying new users via email link.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Hibernate",
        color: "green-text-gradient",
      },
      {
        name: "Oracle",
        color: "pink-text-gradient",
      },
    ],
  
    image: insurance,
    source_code_link: "https://github.com/gani5/inurance-company",
  },
  {
    name: "Health Care Application",
    description:
      "Built a web application for patients and doctors to manage appointments, access medical records, and receive notifications. Features include user registration, role-based login, appointment scheduling, and health record tracking.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
  
    image: healthcare,
    source_code_link: "https://github.com/gani5/healthcare-app",
  },
  {
    name: "Online Shopping Application",
    description:
      " Developed an online marketplace like OLX, allowing users to register, post products, browse listings, manage carts, and view order history, with separate roles for admin and regular users.",
    tags: [
      {
        name: "Spring Framework",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
  
    image: shopify,
    source_code_link: "https://github.com/gani5/online-shopping-website",
  }

 
  
];

export { services, technologies, experiences, testimonials, projects };
