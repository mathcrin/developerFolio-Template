/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mathis Crinchon",
  title: "Salut, c'est Mathis",
  subTitle: emoji(
    "Un développeur Full Stack passionné par la recherche 🚀 ayant de l'expérience dans les applications Backend et Web avec Java / Python / Reactjs / Angular / Spring Boot"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GZkvcQghM9KlOyFhl1V0Ndx0sDNEOFA-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mathcrin",
  linkedin: "https://www.linkedin.com/in/mathis-crinchon/",
  gmail: "mathcrin@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "Du développement de projets étudiants dans le but de devenir enseignant chercheur car j'adore toucher à tout pour mes projets personnels",
  skills: [
    emoji(
      "⚡ Suivi des projets jusqu'au bout, de la conception à la mise en production"
    ),
    emoji("⚡ Mise en place de serveurs multi-applications avec Docker et Proxmox"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fa-regular fa-file-code"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institut National des Sciences Appliquées Hauts-de-France",
      logo: require("./assets/images/insalogo.png"),
      subHeader: "Master Technologies Nouvelles des Systèmes d'Information & Décisionnels",
      duration: "Septembre 2023 - Juin 2025",
      desc: "Master orienté Recherche Opérationnelle, Intelligence artificielle et Interaction Humain-Machine",
      descBullets: [
        "Apprentissage des fondements de L'IA avec René Mandiaux et utilisations des outils modernes pour la création et l'intégration de l'IA dans les applications avec Emmanuel Adam",
        "Approfondissement des connaissances en Recherche Opérationnelle dans les problèmes d'optimisation linéaire, non linéaire, heuristique, méta-heuristique et décision avec Said Hanafi et Julien Vion",
        "Creation de moteur de simulation ansi que leur integration dans des logiciels d'aide à la prise de décision/optimisation avec David Duvivier"
      ]
    },
    {
      schoolName: "Ecole Privée des Sciences Informatiques (EPSI)",
      logo: require("./assets/images/epsiLogo.jpg"),
      subHeader: " 1 ère année de master Expert en informatique et système d'information",
      duration: "Septembre 2022 - août 2023",
      desc: "En alternance dans l'ESN Agil Info en tant que developpeur Java / php ",
      descBullets: [
        "Les cours étaient professionnalisants, orientés développement, gestion de projets et management"
      ]
    },
    {
      schoolName: "Institut National des Sciences Appliquées Hauts-de-France",
      logo: require("./assets/images/insalogo.png"),
      subHeader: "Licence informatique",
      duration: "Septembre 2019 - Juin 2022",
      desc: "Un des objectifs fondamentaux de la Licence Informatique est d’apporter un socle solide de compétences variées en sciences, et plus spécifiquement en informatique.  ",
      descBullets: [
        "Maîtriser l’algorithmique et la programmation (impérative, fonctionnelle, par objets) ",
        "Connaître les principes de construction d’un ordinateur (portes logiques, circuits combinatoires, arithmétique binaire, circuits séquentiels et mémoires)",
        "Gérer des systèmes informatiques et des réseaux"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Recherche Opérationnelle",
      progressPercentage: "80%"
    },
    {
      Stack: "IA",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Développeur Java et php",
      company: "Agil Info",
      companylogo: require("./assets/images/agilinfoLogo.png"),
      date: "Septembre 2022 - Août 2023",
      desc: "Maintenance et développement de modules de l'ERP Axelor et d'un site web Prestashop",
      descBullets: [
        "Gestion de projets internes à l'entreprise",
      ]
    },
    {
      role: "Expert en visualisation de données et en base de données",
      company: "Toyota",
      companylogo: require("./assets/images/toyotaLogo.png"),
      date: "Mars 2022 – Juillet 2022",
      desc: "Reporting de données et création de dashboards pour les équipes de production sur Power BI",
    },
    {
      role: "Etudiant Relais Santé",
      company: "Centre de Santé de l'UPHF",
      companylogo: require("./assets/images/centredesanteLogo.png"),
      date: "Janvier 2021  – Septembre 2024",
      desc: "Gestion de la santé des étudiants, prévention et sensibilisation",
      descBullets: [
        "Mise en place d'actions et de campagnes de sensibilisation",
        "Présence sur les stands d'informations lors des actions"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects Importants",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    {
      title: "TOEIC",
      subtitle:
        "Test of English for International Communication, 650 points",
      image: require("./assets/images/toeicLogo.png"),
      imageAlt: "Toeic Logo",
      footerLink: [
        {
          name: "Site du TOEIC",
          url: "https://www.etsglobal.org/fr/en"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "CE QUE J'ECOUTE REGULIEREMENT",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/episode/46L42w4UB7NlBc806e5Zc0"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Me contacter ☎️"),
  subtitle:
    "Ouvert pour des opportunités de stage de recherche ainsi que des sujets de thèse. N'hésitez pas à me contacter",
  number: "+33 07 82 86 79 20",
  email_address: "mathcrin@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "mathcrin", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
