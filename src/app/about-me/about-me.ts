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
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Co., Ltd.',
      duration: 'Jan 2022 - Present',
      descriptions: [
        'Led the development of a large-scale e-commerce platform using Angular.',
        'Collaborated with UX/UI designers to implement new features.',
        'Mentored junior developers on best practices and code quality.'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Innovate Digital Agency',
      duration: 'Jun 2020 - Dec 2021',
      descriptions: [
        'Developed and maintained client websites using HTML, CSS, and JavaScript.',
        'Assisted in the migration of legacy systems to a modern framework.',
        'Participated in code reviews and agile sprints.'
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
