
import {
  mobile,
  backend,
  creator,
  web,
  carrent,
  jobit,
  tripguide,

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
    date: "Dec 2023 - Present",
    points: [
    
      "Developed HIPAA-compliant healthcare microservices managing 500K+ patient records securely",
      "Optimized EHR integration using Spring Boot and Kafka, improving data sync accuracy",
      "Built real-time dashboards with React.js and WebSockets, enhancing UI load time",
      "Automated CI/CD pipelines with Jenkins, boosting deployment efficiency and uptime"

    ],
  },
  {
    title: "Java Fullstack Developer",
    company_name: "Persistent Systems",
    icon: persistent,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Designed and implemented RESTful APIs using Spring Boot for secure banking transactions, account operations, and financial reporting",
      "Built real-time fraud detection and payment processing microservices with Apache Kafka, reducing financial risk and enhancing scalability",
      "Developed dynamic, responsive React.js and Angular components, improving load times and user engagement by 40%",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#383E56",
    date: "April 2022 - Dec 2022",
    points: [
      "Designed and optimized Java-based insurance applications, improving policy processing efficiency and reducing customer service response times",
      "Enhanced database performance by optimizing SQL queries across Oracle, MySQL, and PostgreSQL, boosting data retrieval speed",
      "Developed and managed high-volume batch jobs using Spring Batch and Quartz Scheduler, processing millions of records daily",
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
      "Optimized React.js components and Node.js backend, improving page load time and application performance.",
      "Refactored legacy JSP code to modern React.js with Node.js integration, enhancing scalability and maintainability.",
      "Implemented D3.js data visualizations and used Node.js to optimize server load and performance insights.",
      "Enhanced security with JWT-based authentication and role-based access control using Node.js."
    ],
  },
  {
    title: "Jr. Java Developer",
    company_name: "Commscope",
    icon: commscope,
    iconBg: "#E6DEDD",
    date: "Jul 2018 - Aug 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
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
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
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
    source_code_link: "https://github.com/",
  },

 
  
];

export { services, technologies, experiences, testimonials, projects };
