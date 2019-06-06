import React from "react"
import format from "date-fns/format"
import * as atoms from "./atoms"

const timeline = [
  {
    id: 0,
    type: "Project",
    title: "EPAM Systems Project 6",
    description:
      "Work on a startup project for one of the main banks in Russian Federation",
    location: "Ryazan, Russia",
    position: "Lead Frontend Developer",
    startDate: new Date(2019, 1, 1),
    duties: [
      "Set up initial project structure and architecture",
      "Elaborate on approaches for state-management in application",
      "Introduce unit testing and work with DevOps engineer on establishing CI process",
      "Create docker images with multi-staged builds for front-end application and for reverse-proxy",
      "Establish code review culture and rules",
    ],
    techStack: [
      "React",
      "TypeScript",
      "SASS",
      "React Testing Library",
      "Docker",
      "OpenShift",
      "Jenkins",
      "Gerrit",
      "Sonar",
    ],
  },
  {
    id: 1,
    type: "Project",
    title: "EPAM Systems Project 5",
    description:
      "Worked on solution improvement program for global e-commerce web application",
    location: "Ryazan, Russia",
    position: "Lead Frontend Developer",
    startDate: new Date(2017, 11, 1),
    duties: [
      "Participate in integration team according to Nexus Framework for Scaling Scrum",
      "Work on introduction of front-end build step into existing CI/CD process",
      "Work on load time performance optimization of Product Detail Page (PDP) - reduce load time by 200%, stabilize amount of transferred data, increased bounce rate by 120%",
      "Develop tool for selecting an appropriate solution based on specific user requirements",
    ],
    techStack: [
      "React",
      "Redux",
      "Redux Thunk",
      "jQuery",
      "Hyperapp",
      "LessCSS",
      "Webpack",
      "Cypress",
      "Pug",
      "Java",
      "ATG",
      "JSP",
    ],
  },
  {
    id: 2,
    type: "Project",
    title: "EPAM Systems Project 4",
    description:
      "Worked on a corporate ticket allocation web app, designed to give employees access to tickets whilst raising funds for charities supporting global, regional and local causes, all at the same time.",
    location: "Ryazan, Russia",
    position: "Key Developer",
    startDate: new Date(2017, 5, 1),
    duties: [
      "Refactor and restructure application source code to follow best practices accepted in Angular documentation",
      "Migrate application from self created webpack config to angular-cli",
      "Introduce code splitting to reduce app load time",
      "Introduce approach for a state management in angular application",
      "Work on load time performance optimization of main page to increase bounce rate (95 score according to lighthouse report)",
      "Work on authentication and role model both on client and server side",
      "Work on email subscription model and create templates for html emails",
    ],
    techStack: [
      "Angular",
      "Typescript",
      "RxJS",
      "Node",
      "Express",
      "Docker",
      "Kubernetes",
      "Foundation",
      "Pug",
    ],
  },
  {
    id: 3,
    type: "Project",
    title: "EPAM Systems Project 3",
    description:
      "Estimation of front-end migration from Adobe Flex to Angular 2",
    location: "Ryazan, Russia",
    position: "Key Developer",
    startDate: new Date(2017, 4, 1),
    duties: [
      "Prepare list of technical components, that should be implemented for each module",
      "Prepare documentation, which contains Module description, list of components, and rough estimation",
    ],
    techStack: ["Angular", "Adobe Flex"],
  },
  {
    id: 4,
    type: "Project",
    title: "EPAM Systems Project 2",
    description:
      "Developed widgets using Polymer framework for a rich web-portal consisted of stock exchange market widgets",
    location: "Ryazan, Russia",
    position: "Key Developer",
    startDate: new Date(2017, 2, 1),
    duties: [
      "Write JavaScript unit-tests using Karma/Jasmine",
      "Develop widgets using Polymer framework and D3.js for data visualization",
      "Work on cli utility to manage dependencies of components across multi repositories",
    ],
    techStack: ["Polymer", "D3", "SASS", "bower", ".Net framework"],
  },
  {
    id: 5,
    type: "Project",
    title: "EPAM Systems Project 1",
    description:
      "Worked on an enterprise scheduling system that specializes in using complex data driven rules in order to determine staffing requirements and find staff to fill vacancies.",
    location: "Ryazan, Russia",
    position: "Developer",
    startDate: new Date(2016, 11, 1),
    duties: [
      "Perform Internationalization and Localization of UI",
      "Generalize and organize transmission of dates between front-end and back-end",
      "Conduct demo sessions for a customer",
    ],
    techStack: [
      "Javascript",
      "jQuery",
      "Bootstrap",
      "Java 8",
      "Tomcat 7",
      "Spring Core",
      "Spring MVC 4",
      "JPA (Hibernate)",
      "JSP",
      "JSTL",
      "Custom Tags",
      "Thymeleaf",
    ],
  },
  {
    id: 6,
    type: "Project",
    title: "Freelance",
    description:
      "Site for a photographer. Included photo gallery and blog. Administrator could manage photo gallery (add, delete, update images). Also he could add posts, delete and update them.",
    location: "Ryazan, Russia",
    position: "Developer",
    startDate: new Date(2016, 8, 1),
    duties: [
      "Develop UI for the whole project with ReactJS",
      "Participate in code reviews",
      "Create and improve unit-tests with Jasmine - increase code coverage up to 80%",
    ],
    techStack: ["ReactJS", "SASS", "Bootstrap", "express", "mysql"],
  },
  {
    id: 7,
    type: "Project",
    title: "Index Studio",
    description:
      "Take participation in creation of Content-Management System (CMS)  designed as a lightweight blog for internal use. The system is mobile-friendly and meets strict accessibility requirements.",
    location: "Ryazan, Russia",
    position: "Developer",
    startDate: new Date(2014, 4, 1),
    duties: [
      "Develop end-points on backend in laravel php framework according to REST model",
      "Create documentation of end-points and maintain documentation",
      "Develop admin interface using SASS, ReactJS",
    ],
    techStack: ["ReactJS", "SASS", "Laravel", "php5", "Apache"],
  },
]

export function Timeline({ data = timeline }) {
  return (
    <atoms.TimelineContainer>
      {data.map(event => {
        return (
          <atoms.TimelineElement key={event.id}>
            <atoms.TimelineInfoBox>
              <header>
                <atoms.TimelineInfoTitle>{event.title}</atoms.TimelineInfoTitle>
                <atoms.TimelineInfoPosition>
                  {event.position}
                </atoms.TimelineInfoPosition>
              </header>
              <atoms.TimelineInfoDescription>
                {event.description}
              </atoms.TimelineInfoDescription>
              <atoms.TimelineInfoDutiesList>
                {event.duties &&
                  event.duties.map(duty => (
                    <atoms.TimelineInfoDutiesListItem key={duty}>
                      {duty}
                    </atoms.TimelineInfoDutiesListItem>
                  ))}
              </atoms.TimelineInfoDutiesList>
              <atoms.TimelineInfoTechContainer>
                {event.techStack &&
                  event.techStack.map(tech => (
                    <atoms.TimelineInfoTechTag key={tech}>
                      {tech}
                    </atoms.TimelineInfoTechTag>
                  ))}
              </atoms.TimelineInfoTechContainer>
            </atoms.TimelineInfoBox>
            <atoms.TimelineIcon />
            <atoms.TimelineDate>
              {format(event.startDate, "MMM, YYYY")}
            </atoms.TimelineDate>
          </atoms.TimelineElement>
        )
      })}
    </atoms.TimelineContainer>
  )
}
