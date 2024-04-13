/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hi",
  title2: " I'm Lemesa Elias",
  logo_name: "Lemi",
  // nickname: "harry / picleric",
  full_name: "Lemesa Elias",
  subTitle1: "Software Developer.",
  subTitle2: "Full Stack Developer.",
  subTitle: "Full Stack Developer, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1-SSCPhVG80IDtpx7_TPpsLfJyEA7NEtv/view?usp=drive_link",
  mail: "mailto:sumitsharma9968@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Lemi-in",
  linkedin: "https://www.linkedin.com/in/lemesa-elias-138045285/",
  gmail: "lemesaelias@gmail.com",
  twitter: "https://twitter.com/Lemi_in",
};

const skills = {
  data: [
    {
      _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive user interfaces and backend for web applications",
        "⚡ Building responsive website front end using React and Angular",
        "⚡ Creating application backend in Node, Express, MongoDB and Rest API",
        "⚡ Integration of third party services such as Firebase, Vercel etc.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0769ad",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        //{
        //   skillName: "Redux",
        //   fontAwesomeClassname: "simple-icons:redux",
        //   style: {
        //     color: "#593D88",
        //   },
        // },
        // {
        //   skillName: "Angular",
        //   fontAwesomeClassname: "simple-icons:angular",
        //   style: {
        //     color: "#dd0031",
        //   },
        // },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "gray",
          },
        },
        // {
        //   skillName: "Material UI",
        //   fontAwesomeClassname: "simple-icons:uikit",
        //   style: {
        //     color: "#007FFF",
        //   },
        // },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        // {
        //   skillName: "Framer Motion",
        //   fontAwesomeClassname: "logos:framer",
        //   style: {
        //     color: "#635BFF",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        // {
        //   skillName: "Styled Components",
        //   fontAwesomeClassname: "vscode-icons:file-type-styled",
        //   style: {
        //     color: "#635BFF",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        // {
        //   skillName: "Postman",
        //   fontAwesomeClassname: "simple-icons:postman",
        //   style: {
        //     color: "#FF6C37",
        //   },
        // },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "Cloudinary",
        //   fontAwesomeClassname: "logos:cloudinary-icon",
        //   style: {
        //     color: "#635BFF",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        // {
        //   skillName: "Stripe",
        //   fontAwesomeClassname: "logos:stripe",
        //   style: {
        //     color: "#635BFF",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "MySQL",
        //   fontAwesomeClassname: "simple-icons:mysql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      _id: "c026fe64-1542-42b0-84ab-9311840c169f",
      title: "Infrastructure Design.",
      fileName: "CloudInfraImg",
      skills: [
        " Experience working on multiple cloud platforms",
        " Experience hosting and managing websites",
        " Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform",
          fontAwesomeClassname: "skill-icons:gcp-dark",
          style: {
            backgroundColor: "transparent",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "skill-icons:vercel-light",
          style: {
            color: "gray",
            fill: "gray",
            backgroundColor: "white",
            width: "1em",
            height: "1em",
          },
        },
        // {
        //   skillName: "Netlify",
        //   fontAwesomeClassname: "simple-icons:netlify",
        //   style: {
        //     color: "#38AFBB",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        // {
        //   skillName: "Heroku",
        //   fontAwesomeClassname: "simple-icons:heroku",
        //   style: {
        //     color: "#6863A6",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
            width: "1em",
            height: "1em",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //     width: "1em",
        //     height: "1em",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
            width: "1em",
            height: "1em",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
            width: "1em",
            height: "1em",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Addis Ababa Science and Technology University, Ethiopia",
      subtitle: "Software engineering student",
      logo_path: "amrita_logo.png",
      alt_name: "Amrita University",
      duration: "2022 - Present",
      descriptions: [
        "I have taken varity of courses related to web development.",
        "Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
      ],
      website_link: "http://studentinfo.aastu.edu.et/",
    },
//     {
//       title: "Guru Gobind Singh Indraprastha University, New Delhi",
//       subtitle: "Bachelors in Computer Applications (BCA)",
//       logo_path: "ggsipu_logo.png",
//       alt_name: "GGSIPU",
//       duration: "2018 - 2021",
//       descriptions: [
//         "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
//         // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development."
//       ],
//       website_link: "http://www.ipu.ac.in/",
//     },
 ],
};

const certifications = {
  certifications: [
    {
      title: "Accessing Web Data",
      subtitle: "",
      logo_path: "ibm_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/27EAM5FR35WM?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
      alt_name: "IBM",
      color_code: "#096ce1",
    },
    {
      title: "Python Data Structures",
      subtitle: "",
      logo_path: "ibm_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/4NJGB4VQRY2W?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
      alt_name: "IBM",
      color_code: "#096ce1",
    },
    {
      title: "React Fundamentals",
      subtitle: "",
      logo_path: "ibm_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/T3FCHGJGXGVN?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
      alt_name: "IBM",
      color_code: "#096ce1",
    },
    {
      title: "Python for Data Science and AI",
      subtitle: "",
      logo_path: "ibm_logo.jpg",
      certificate_link:
        "https://coursera.org/share/cfa7b88b913e4a8446b9dc706c0802b0",
      alt_name: "IBM",
      color_code: "#096ce1",
    },
    // {
    //   title: "Django Application Development with SQL and Databases",
    //   subtitle: "",
    //   logo_path: "ibm_logo.jpg",
    //   certificate_link:
    //     "https://coursera.org/share/4https://www.coursera.org/account/accomplishments/verify/T3FCHGJGXGVN?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse7d8c39642888094ad458b5e44a3c9f3",
    //   alt_name: "IBM",
    //   color_code: "#096ce1",
    // },
//     {
//       title: "Developing AI Applications with Python and Flask",
//       subtitle: "",
//       logo_path: "ibm_logo.jpg",
//       certificate_link:
//         "https://coursera.org/share/f4ce59c0d68e4569056faaf2fdb4c256",
//       alt_name: "IBM",
//       color_code: "#096ce1",
//     },
//     {
//       title: "Frontend Developer Capstone",
//       subtitle: "",
//       logo_path: "meta_logo.png",
//       certificate_link:
//         "https://coursera.org/share/f80912b58e3afcfa49e6116210a2c9da",
//       alt_name: "Meta",
//       color_code: "#096ce1",
//     },
//     {
//       title: "Advanced React",
//       subtitle: "",
//       logo_path: "meta_logo.png",
//       certificate_link:
//         "https://coursera.org/share/877acd7eaf9dd532a2cb5b103576967e",
//       alt_name: "Meta",
//       color_code: "#096ce1",
//     },
//     {
//       title: "Java Programming: Build a Recommendation System",
//       subtitle: "",
//       logo_path: "duke-logo.jpg",
//       certificate_link:
//         "https://coursera.org/share/6af001cafc4b683bb38abdb9e81d0d79",
//       alt_name: "Duke University",
//       color_code: "#001a57",
//     },
//     {
//       title: "React Basics",
//       subtitle: "",
//       logo_path: "meta_logo.png",
//       certificate_link:
//         "https://coursera.org/share/29c75a387fcaf2f1e2403f73473092b2",
//       alt_name: "Meta",
//       color_code: "#096ce1",
//     },
//     {
//       title: "Programming with JavaScript",
//       subtitle: "",
//       logo_path: "meta_logo.png",
//       certificate_link:
//         "https://coursera.org/share/cb44f1ee2db3f50b83a56cbae15fcc74",
//       alt_name: "Meta",
//       color_code: "#096ce1",
//     },
//     {
//       title: "HTML and CSS in depth",
//       subtitle: "",
//       logo_path: "meta_logo.png",
//       certificate_link:
//         "https://coursera.org/share/667de02731a480b76b5300c6612d174d",
//       alt_name: "Meta",
//       color_code: "#096ce1",
//     },
//     {
//       title: "Java Programming: Principles of Software Design",
//       subtitle: "",
//       logo_path: "duke-logo.jpg",
//       certificate_link:
//         "https://coursera.org/share/f4e9af47fbb24381e04031f3cc8cfd9f",
//       alt_name: "Duke University",
//       color_code: "#001a57",
//     },
//     {
//       title: "Java Programming: Solving Problems with Software",
//       subtitle: "",
//       logo_path: "duke-logo.jpg",
//       certificate_link:
//         "https://coursera.org/share/36411fcea7ea4fbb5c613ef4911f4668",
//       alt_name: "Duke University",
//       color_code: "#001a57",
//     },
//     {
//       title: "Programming Foundations with JavaScript, HTML and CSS",
//       subtitle: "",
//       logo_path: "duke-logo.jpg",
//       certificate_link:
//         "https://coursera.org/share/0269c76c33997304d1842d4eef16815b",
//       alt_name: "Duke University",
//       color_code: "#001a57",
//     },
//     {
//       title: "Android Application Development - II",
//       subtitle: "- Dr. Adam Porter",
//       logo_path: "maryland_logo.svg",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/GN48B7W9TU59",
//       alt_name: "Stanford University",
//       color_code: "#e11a2b",
//     },
//     {
//       title: "Android Application Development - I",
//       subtitle: "- Dr. Adam Porter",
//       logo_path: "maryland_logo.svg",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/2H59Z22DDSU8",
//       alt_name: "Stanford University",
//       color_code: "#e11a2b",
//     },
//     {
//       title: "Fullstack Development",
//       subtitle: "- Christian Hur",
//       logo_path: "coursera_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/97WF8EZ4Y2YD",
//       alt_name: "Coursera",
//       color_code: "#0056d2",
//     },
//     {
//       title: "ML and AI in GCP",
//       subtitle: "- GCP Training",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2862832",
//       alt_name: "GCP",
//       color_code: "#2fa9508a",
//     },
//     {
//       title: "Foundational Infrastructure in GCP",
//       subtitle: "- GCP Training",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2653409",
//       alt_name: "GCP",
//       color_code: "#4087f08a",
//     },
//     {
//       title: "Networking & Security in GCP",
//       subtitle: "- GCP Training",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2510430",
//       alt_name: "GCP",
//       color_code: "#eb40308a",
//     },
//     {
//       title: "Cloud Computing Fundamentals in GCP",
//       subtitle: "- GCP Training",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2469792",
//       alt_name: "GCP",
//       color_code: "#fabd008a",
//     },
  ],
 };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Apprenticeship",
  description:
    "I've over 3 years of experience as a Full Stack Developer. I've worked on building products for multiple stakeholders in Infosys and Ottonomy.",
  header_image_path: "experience.svg",
  sections: {
    title: "Work Experience",
    experiences: [
      // {
      //   title: "SDE - I",
      //   company: "Ottonomy",
      //   company_url: "https://ottonomy.io/",
      //   logo_path: "ottonomy-logo.webp",
      //   alt_name: "ottonomy-logo",
      //   duration: "(May, 2023 - Present)",
      //   location: "Noida (On-Site)",
      //   description: "<li> Working on developing a media management software to schedule advertisements in the robot screens.</li><br><li>Working on optimizing E-commerce app and developing analytics dashboard for robots and orders.</li><br><li>Implemented socket to allow users to transfer the controlling of a robot to a different user.</li><br><li>Developed a dashboard to display live feed from robot with map, joystick controls to control the robot with robot commands.</li>",
      //   color: "#000000",
      // },
      // {
      //   title: "Senior System Associate",
      //   company: "Infosys",
      //   company_url: "https://www.infosys.com/",
      //   logo_path: "infosys-logo.png",
      //   alt_name: "infosys-logo",
      //   duration: "(Aug, 2021 - May, 2023)",
      //   location: "Mysore (Remote)",
      //   description: "<li> Created a PWA for educators, allowing them to create analogies with animations using HTML, CSS, JavaScript, and Fabric.js.</li><br><li>Enhanced the product, introduced new features like multiple content pages, audio, custom gradients, trigger-based animations using React.js.</li><br><li>Developed an web based AR/VR learning platform using Node, Express and socket for multi-user experience and other features like chat, screen, audio and video share for web based.</li><br><li>Developed 2 new tools with an intuitive design for interactive content creation using Angular</li>",
      //   color: "#0071C5",
      // }
    ],
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create MERN Stack Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "project-0",
      name: "Cinima Ras",
      url: "https://cinema-ras.vercel.app/",
      repoUrl: "https://github.com/Lemi-in/Capstone-Project.git",
      description:
        "Cinima Ras is a movie recommendation website built using react alongside with firebase for authentication and TMDB API for the data.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },

        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
       
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Java Script",
          iconifyClass: "logos:javascript",
        },
       
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
       
      ],
    },
    {
      id: "project-1",
      name: "Kealem Gallery",
      url: "https://restaurant-app-bceb0.web.app/",
      repoUrl: "https://github.com/sumit-sharma-02/tikkaway",
      description:
        "Kealem Gallery is an educational and entertaiment website built using React, django, Firebase and Tailwind CSS. It is a responsive website with a beautiful UI.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "django",
          iconifyClass: "logos:django-icon",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Java Script",
          iconifyClass: "logos:javascript",
        },
       
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
       
      ],
    },
    {
      id: "project-2",
      name: "Unigram",
      url: "https://unigram-et.vercel.app/",
      repoUrl: "https://github.com/unigram-et/frontend.git",
      description:
        "Unigram is a social media like website for university students to share knowledge and experiance, built using React, Django and tailwind,. It is a responsive website with a beautiful UI.",
      languages: [
        
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "django",
          iconifyClass: "logos:django-icon",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Java Script",
          iconifyClass: "logos:javascript",
        },
       
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },

        
      ],
    },
    {
      id: "project-3",
      name: "Excercixe Tracker",
      url: "",
      repoUrl: "https://github.com/Lemi-in/Exercise-tracker-MERN-Stack-Project-.git",
      description: "A simple Excercise Tracker built using React, Express, Nodejs and MongoDB. It is a responsive website with a beautiful UI.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "express",
          iconifyClass: "logos-express",
        },
        {
          name: "mongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
    {
      id: "project-4",
      name: "Portfolio",
      url: "",
      repoUrl: "https://github.com/sumit-sharma-02/sumit-portfolio",
      description: "You are watching it right now 😉.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
    {
    
      id: "project-6",
      name: "Horan Web",
      url: "https://horan-web.vercel.app/",
      repoUrl: "https://github.com/Lemi-in/horan-web.git",
      description: "A simple ecommerce website built using React, Express, Nodejs and MongoDB. It is a responsive website with a beautiful UI.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "express",
          iconifyClass: "logos-express",
        },
        {
          name: "mongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
    {
      id: "project-5",
      name: "Blog Website",
      url: "https://spacex-capsules.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/spacex-capsules",
      description:
        "A blog website built using Reat, express, node, mongoDB and tailwind css It is a responsive website with a beautiful UI.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "express",
          iconifyClass: "logos-express",
        },
        {
          name: "mongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "portfolioProfileImage.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
