import { Component } from '@angular/core';
import { HeroBanner } from '../components/hero-banner/hero-banner';
import { CardSkill } from "../components/card-skill/card-skill";
import { CardExperience } from '../components/card-experience/card-experience';
import { CardEducation } from '../components/card-education/card-education';
import { CardContacts } from '../components/card-contacts/card-contacts';


@Component({
  selector: 'app-about-me',
  imports: [HeroBanner, CardSkill, CardExperience, CardEducation, CardContacts],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  name = 'Charairat Swaengsap';
  subtitle = 'Software Developer';

  frontendSkills = ['Flutter', 'Angular', 'HTML', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'C#', 'VB.NET'];
  backendSkills = ['Node.js', 'Fastify', 'Express', 'SQL', 'Prisma', '.NET'];
  tools = ['Git', 'GitHub', 'GitHub Copilot', 'Postman', 'VS Code', 'Docker', 'Figma', 'Jira'];

  experiences = [
    {
      title: 'Senior Flutter Developer',
      company: 'Cube SoftTech Co.,Ltd. (on-site at Advanced Info Service PLC, Phayathai, Bangkok)',
      duration: 'Oct 2023 – Present',
      descriptions: [
        'Part of the myAIS development team responsible for Help & Support modules (Mobile Network Assistance, AIS Fibre, AIS Playbox Report & Tracking System, FAQs)',
        'Developed Product Activation systems including SIM/IoT Activation, Re-PI System, and auto download eSIM',
        'Designed and implemented new features based on business requirements, collaborating with cross-functional teams at AIS',
        'Refactored code for testability, maintainability, and performance; wrote unit tests, reported test coverage, and maintained widget keys for automation tests',
        'Supported QA teams in Integration Testing, UAT, E2E, and provided technical guidance to the development team'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Borneo Technical (Thailand) Ltd., Lak Si, Bangkok',
      duration: 'Apr 2023 – Sep 2023',
      descriptions: [
        'Collaborated with vendors and in-house team to develop backend systems for an e-Commerce project',
        'Created ER diagrams, fixed data issues, and optimized database stored procedures',
        'Performed manual testing and defect reporting for the e-Commerce platform',
        'Provided technical support to employees as needed'
      ]
    },
    {
      title: 'Programmer',
      company: 'Mode Solutions Co.,Ltd., Tha Muang, Kanchanaburi',
      duration: 'Jan 2020 – Mar 2023',
      descriptions: [
        'Designed and developed cross-platform mobile apps, Windows apps, and backend systems for school management',
        'Developed auto-update system for Windows apps, reducing unnecessary on-site services',
        'Published mobile apps on the App Store and Google Play Store',
        'Adopted and maintained GitHub repository, introducing new coding routines for the team'
      ]
    },
    {
      title: 'IT Support',
      company: 'Mode Solutions Co.,Ltd., Tha Muang, Kanchanaburi',
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
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'University of Technology',
      duration: '2016 - 2020'
    },
    {
      degree: 'High School Diploma',
      institution: 'Science High School',
      duration: '2013 - 2016'
    }
  ];

  contactInfo = {
    address: '123/456 Coding Street, Bangkok, Thailand',
    phone: '+66 81-234-5678',
    email: 'your.email@example.com'
  };
}
