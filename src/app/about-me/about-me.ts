import { Component } from '@angular/core';
import { HeroBanner } from '../components/hero-banner/hero-banner';
import { CardSkill } from "../components/card-skill/card-skill";
import { CardExperience } from '../components/card-experience/card-experience';
import { CardContacts } from '../components/card-contacts/card-contacts';
import { EducationTree } from '../components/education-tree/education-tree';
import { Project } from '../projects/projects.model';
import { ProjectsStore } from '../projects/projects.store';
import { CardProjects } from '../components/card-projects/card-projects';




@Component({
  selector: 'app-about-me',
  imports: [HeroBanner, CardSkill, CardExperience, CardContacts, EducationTree, CardProjects],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  constructor(private store: ProjectsStore) { }

  ngOnInit() {
    this.store.set(this.projects);
  }



  name = 'Charairat Swaengsap';
  subtitle = 'Flutter Developer';
  summary = `Flutter Developer with over 5 years of experience. Specialized in using Flutter, Clean Architecture, and BLoC to build scalable applications for enterprise clients. Currently pursuing a Master's degree in Software Engineering, aiming to apply academic standards to real-world projects. Capable of providing technical guidance and support to the development team. Driven by curiosity and a constant desire to learn and explore new technologies`

  skillSummary = 'Mobile-focused Full Stack Developer specializing in high-performance Flutter applications and scalable Node.js backends. I bring extensive experience in iOS/Android deployment, cloud services (Firebase, AWS), and rigorous testing methodologies (TDD). adept at utilizing Clean Architecture and modern AI tools to deliver robust, efficient software solutions.';

  frontendSkills = ['Flutter', 'Angular', 'HTML', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'C#', 'VB.NET'];
  backendSkills = ['Node.js', 'Fastify', 'Express', 'SQL', 'Prisma', '.NET'];
  tools = ['Git', 'GitHub', 'GitHub Copilot', 'Postman', 'VS Code', 'Docker', 'Figma', 'Jira'];

  experiencesSummary = `In summary, my career has evolved from full-stack and desktop application development to specialized expertise in high-scale mobile engineering. With a proven track record of supporting over 12 million active users for Thailand's leading telecommunications provider, I combine deep technical knowledge of Flutter and Clean Architecture with a strong foundation in backend systems and database management. I am committed to delivering stable, scalable software through rigorous testing standards and collaborative technical leadership.`;
  experiences = [
    {
      title: 'Senior Flutter Developer',
      company: 'CCube SoftTech Co., Ltd. (Contracted to AIS) Bangkok, Thailand',
      duration: 'Oct 2023 – Present',
      descriptions: [
        `Developed and maintained modules for myAIS (Super App), supporting over 12 million active users. Responsible for delivering crucial features including Help & Support (Mobile Network Assistance, AIS Fibre/Playbox Report & Tracking, FAQs), Product Activation (SIM/IoT Activation, eSIM Auto-download), and Re-PI Process.`,
        `Implemented Clean Architecture and efficient State Management (Bloc) to ensure long-term code maintainability. Refactored codebases to enhance application performance and scalability.`,
        `Ensured system stability by writing rigorous Unit Tests and continuously monitoring Test Coverage reports. Conducted Integration Testing prior to QA handovers. Optimized code for testability and implemented Widget Keys to actively support the QA team in executing Automation Tests.`,
        `Provided technical consultation and assistance to the development team, offering guidance on resolution and troubleshooting. Collaborated closely with cross-functional teams (PO, UX/UI, SA, QA) to assess technical feasibility and deliver features that meet business requirements.`
      ]
    },
    {
      title: 'Software Developer',
      company: 'Borneo Technical (Thailand) Co., Ltd. Bangkok, Thailand',
      duration: 'Apr 2023 – Sep 2023',
      descriptions: [
        `Collaborated with vendors and the in-house team to develop backend systems for an e-Commerce project.`,
        `Created ER Diagrams, fixed data, and optimized database stored procedures to improve system performance.`,
        `Performed manual testing on the e-Commerce project and reported any identified defects to the team to ensure product quality.`,
        `Provided technical support to employees as needed to resolve operational issues.`
      ]
    },
    {
      title: 'Programmer',
      company: 'Mode Solution Co., Ltd. Kanchanaburi, Thailand',
      duration: 'Jan 2020 – Mar 2023',
      descriptions: [
        `Designed and developed cross-platform mobile applications for School Management Systems. Managed the distribution of mobile apps on the App Store and Google Play Store.`,
        `Designed and developed Windows desktop applications and backend systems to support school management operations.`,
        `Developed an auto-update system for Windows apps, enabling IT support to deliver apps to customers much more conveniently and quickly, significantly reducing unnecessary on-site services.`,
        `Adopted and maintained the company's GitHub repository for version control and introduced new coding routines to the team.`
      ]
    },
    {
      title: 'IT Support',
      company: 'Mode Solution Co., Ltd. Kanchanaburi, Thailand',
      duration: 'Nov 2018 – Dec 2019',
      descriptions: [
        'Provided both remote and on-site technical support and program training for customers',
        'Developed software user manuals',
        'Collected customer problems and feedback and forwarded them to the development team'
      ]
    }
  ];

  educations = [
    {
      degree: 'Master of Science (M.Sc.), Software Engineering',
      institution: 'Chulalongkorn University, Bangkok',
      duration: 'Expected 2027'
    },
    {
      degree: 'Bachelor of Arts (B.A.), German',
      institution: 'Ramkhamhaeng University, Bangkok',
      duration: '2016'
    },

  ];

  projects: Project[] = [
    {
      title: 'myAIS — Help & Support',
      description: 'Feature for FAQs, Mobile Network Assistance, Fibre & Playbox report & tracking within myAIS.',
      longDescription: `I worked on extending the myAIS mobile app with a dedicated Help & Support module. 
The focus was on improving user self-service by integrating FAQs, network troubleshooting guides, 
and service reporting flows (Fibre & Playbox).  
We used **Flutter** with **Clean Architecture** principles, applying **BLoC** for predictable state 
management and testability. Unit tests were written to cover common user journeys and ensure 
robust error handling before release.`,
      image: 'myais-help-and-support.webp',
      tags: ['Flutter', 'Clean Architecture', 'BLoC', 'Unit Test'],
      demoUrl: '',
      repoUrl: '',
      status: 'live'
    },
    {
      title: 'E-Commerce Backend',
      description: 'Backend services with ERD design, stored-proc optimization, and manual QA flow.',
      longDescription: `This project aimed at optimizing backend operations for an e-commerce platform.  
I designed the **ERD** for product, order, and customer flows, then implemented business logic 
with **C# .NET Core** and **SQL Server**. Stored procedures were tuned for performance, 
reducing query times on product syncing with **Magento** and **Akeneo**.  
We followed a manual QA process with test cases written alongside the development tasks 
to validate data consistency and API responses.`,
      image: 'magento-akeneo.webp',
      tags: ['C#', '.NET Core', 'SQL Server', 'Magento', 'Akeneo'],
      repoUrl: 'https://github.com/yourname/ecommerce-backend',
      status: 'wip'
    },
    {
      title: 'School Management Suite',
      description: 'Desktop application for school management with auto-update feature.',
      longDescription: `A legacy project built with **VB .NET Framework** and **SQL Server** as the database.  
The suite managed student records, attendance, grading, and staff information in a desktop environment.  
I implemented an auto-update feature so the client machines could stay current without manual installs.  
Though the tech stack was more traditional, it taught me about packaging, deployment, 
and handling client feedback in real school operations.`,
      image: 'vb-net.webp',
      tags: ['VB', '.NET Framework', 'SQL Server'],
      repoUrl: 'https://github.com/yourname/school-suite'
    }
  ];


  contactInfo = {
    address: 'Bangkok, Thailand',
    phone: '+66 XXXX-XXXX',
    email: 'charairatswaengsap@gmail.com',
    linkedin: 'https://linkedin.com/in/charairats',
    facebook: 'https://facebook.com/operatium',
    github: 'https://github.com/charairats'
  };
}
