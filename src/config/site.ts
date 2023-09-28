import { ISiteConfig } from "@/types"

export const siteConfig: ISiteConfig = {
  name: "Iyed.dev", // shown in the header
  description:
    "I'm a passionate full-stack developer working from Sousse,Tunisia.",
  links: {
    // order is same order in the footer (when link added it's shown in the footer)
    linkedin: "https://www.linkedin.com/in/mohamed-iyed-mansour-532511213/",
    github: "https://github.com/imansour12/",
    mail: "hello@iyed.dev",
  },
  header: {
    logo: "/images/logo.png",
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Blog",
        href: "/blog",
      },
    ],
  },
  heroBanner: {
    title: {
      1: [{ text: "Hey there. I'm " }, { text: "Iyed", highlighted: true }],
      2: [],
    },
    subtitle:
      "A dedicated Software Engineer with 2+ years of experience in building web applications.",
    callToActions: [
      {
        label: "Read the blog",
        href: "/blog",
      },
      {
        label: "Explore my projects",
        href: "/#projects",
      },
    ],
  },
  about: {
    avatar: "/images/avatar.png",
    title: "I'm a passionate full-stack developer working from Sousse,Tunisia.",
    description: [
      "I thrive on building dynamic web applications and possess proficiency in both front-end and back-end development, making me a versatile asset for any project.",
      "I also have experience with React Native, enabling me to craft cross-platform mobile applications with the same attention to detail and precision that I bring to my web projects.",
      "What really drives me is my commitment to contributing to my development environment and creating a collaborative atmosphere. I am always looking for opportunities to learn from my peers as well as share my knowledge with them.",
    ],
  },
  experience: [
    {
      title: "Programming Teacher",
      company: "Groupe Etoile Formation",
      link: "https://etoile-formation.com/",
      location: "Sousse",
      startDate: "May 2023",
      endDate: "Present",
      description: [
        "Developed computer science courses for adult learners, teaching them the fundamentals of programming.",
        "Developed and implemented creative activities that improved student understanding of complex algorithmic concepts through the use of metaphors and real life comparisons.",
      ],
      tags: [
        "Software Development",
        "Web Applications",
        "Modern Technologies",
        "Teaching",
        "Collaboration",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Pengguin",
      link: "https://pengguin.com/",
      location: "London/Sousse",
      startDate: "Aug 2022",
      endDate: "Apr 2023",
      description: [
        "Contributed to the front-end and back-end of iSpokeToday and Pengguin",
        "Used Agora API to manage teacher and student communications",
        "Worked on AI powered pronunciation & grammar feedback",
        "Developed scalable apps with React Native",
      ],
      tags: [
        "Startup",
        "Engineering",
        "Design",
        "Coordination",
        "React Native",
        "Agora",
        "Artificial Intelligence",
      ],
    },
  ],
  education: [
    {
      school: "Sousse International School",
      link: "https://www.sousseenglishacademy.com/",
      degree: "High School Diploma",
      fieldOfStudy: "Scientific",
      description:
        "IGCSE and A-levels in Mathematics, Physics, Business and Computer Science.",
      startDate: "2016",
      endDate: "2023",
    },
    {
      school: "Algorithms and problem solving",
      fieldOfStudy: "",
      link: "https://www.coursera.org/account/accomplishments/certificate/4X832F945C76",
      degree: "UC San Diego",
      startDate: "2022",
    },
  ],
  projects: [
    {
      title: "Weather Forecast App",
      image: "/images/projects/project01.png",
      summary:
        "Create a weather forecast web application that allows users to check the weather for different locations. The project involves using APIs, front-end technologies like React, and integrating with a weather data provider.",
      tags: ["React", "axios", "Api Integration"],
      description: [],
      links: {
        website: "https://imansour12.github.io/weather-app/",
        github: "https://github.com/imansour12/weather-app/",
      },
      featured: true,
    },
    {
      title: "Spotify PIP",
      image: "/images/projects/project02.png",
      summary:
        "🎵 A Better, More Elegant PiP Mode for Spotify with Lyrics, Visualizers, and More 🎵",
      tags: ["React", "Spotify API", "Browser Hacks"],
      description: [
        "Spotify PiP is a Vite project that enhances your Spotify experience by providing a feature-rich Picture-in-Picture mode. With support for lyrics, visualizers, and various other improvements, it offers an upgraded way to enjoy your music on Spotify.",
      ],
      links: {
        website: "https://spotify.iyed.dev/",
        github: "https://github.com/imansour12/spotify-pip/",
      },
      featured: true,
    },
  ],
  contact: {
    title: "Get in touch",
    description:
      "I'm always open to new opportunities and collaborations. If you're interested in working with me, please feel free to reach out.",
    callToAction: {
      label: "Say hello",
      href: "mailto:hello@iyed.dev",
    },
  },
  courses: [
    {
      title: "Master React developmenet",
      description:
        "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, best practices and way more",
      image: "/images/courses/course01.png",
      rate: 4.7,
      numberReviews: "1.2k",
      price: "$74.99",
      tags: ["27 lessons", "Intermediate", "4h70"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Advanced Python Programming",
      description:
        "Take your Python skills to the next level with advanced topics like decorators, generators, metaclasses, and more.",
      image: "/images/courses/course01.png",
      rate: 4.9,
      numberReviews: "850",
      price: "FREE",
      tags: ["15 lessons", "Advanced", "3h45"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Machine Learning Fundamentals",
      description:
        "Get started with machine learning and explore algorithms, data preprocessing, and model evaluation.",
      image: "/images/courses/course01.png",
      rate: 4.8,
      numberReviews: "1.5k",
      price: "FREE",
      tags: ["20 lessons", "Intermediate", "4h30"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Web Design and Development",
      description:
        "Learn the essentials of web design, HTML, CSS, and JavaScript to build interactive websites.",
      image: "/images/courses/course01.png",
      rate: 4.6,
      numberReviews: "1.8k",
      price: "$79.99",
      tags: ["22 lessons", "Beginner", "3h15"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Data Science Essentials",
      description:
        "Learn the fundamentals of data science, including data analysis, machine learning, and data visualization.",
      image: "/images/courses/course01.png",
      rate: 4.7,
      numberReviews: "1.1k",
      price: "FREE",
      tags: ["25 lessons", "Intermediate", "4h15"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "UX/UI Design Fundamentals",
      description:
        "Explore the basics of user experience (UX) and user interface (UI) design to create user-friendly digital products.",
      image: "/images/courses/course01.png",
      rate: 4.6,
      numberReviews: "950",
      price: "$69.99",
      tags: ["20 lessons", "Beginner", "3h30"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Java Programming for Beginners",
      description:
        "Start your journey into programming with Java. Learn syntax, object-oriented principles, and basic Java applications.",
      image: "/images/courses/course01.png",
      rate: 4.5,
      numberReviews: "800",
      price: "FREE",
      tags: ["15 lessons", "Beginner", "2h45"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      title: "Cybersecurity Fundamentals",
      description:
        "Gain a foundational understanding of cybersecurity, including threat detection, encryption, and network security.",
      image: "/images/courses/course01.png",
      rate: 4.8,
      numberReviews: "1.2k",
      price: "$89.99",
      tags: ["22 lessons", "Intermediate", "4h10"],
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
  ],
  tools: [
    {
      title: "CSS Gradient Generator",
      description: "Generate CSS gradients visually.",
      image: "/images/courses/course01.png",
      tags: ["CSS", "Generator", "Gradient"],
      link: "https://cssgradient.io/",
    },
    {
      title: "Gradient Hunt",
      description: "Discover and collect beautiful gradients.",
      image: "/images/courses/course01.png",
      tags: ["CSS", "Generator", "Gradient"],
      link: "https://gradienthunt.com/",
    },
    {
      title: "Coolors",
      description: "Generate color palettes easily.",
      image: "/images/courses/course01.png",
      tags: ["Color", "Generator", "Palette"],
      link: "https://coolors.co/",
    },
    {
      title: "Font Awesome",
      description: "Library of free icons for web projects.",
      image: "/images/courses/course01.png",
      tags: ["Icons", "Library"],
      link: "https://fontawesome.com/",
    },
    {
      title: "Material Icons",
      description: "A collection of icons in Material Design style.",
      image: "/images/courses/course01.png",
      tags: ["Icons", "Material Design"],
      link: "https://material.io/resources/icons/",
    },
    {
      title: "Visual Studio Code",
      description: "A popular code editor for web development.",
      image: "/images/courses/course01.png",
      tags: ["Code Editor", "Development"],
      link: "https://code.visualstudio.com/",
    },
  ],
}
