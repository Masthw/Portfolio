export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Apple Store Clone",
    desc: "Apple Store Clone is a high-fidelity replica of the official Apple website, focused on delivering smooth visuals, interactive experiences, and a premium user interface. It features seamless animations, 3D models, and a fully responsive design.",
    subdesc:
      "Built with React.js, Vite, GSAP for animations, and Three.js for 3D elements. Styled with TailwindCSS and deployed on Vercel, the project ensures blazing-fast performance and an optimized user experience.",
    href: "https://apple-store-azure-gamma.vercel.app/",
    texture: "/textures/project/projectapple.mp4",
    logo: "/assets/apple.svg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/gsap.svg",
      },
      {
        id: 4,
        name: "Three.js",
        path: "/assets/Three.js.svg",
      },
      {
        id: 5,
        name: "Vite",
        path: "/vite.svg",
      },
    ],
  },
  {
    title: "Photography Portfolio - Jdoes",
    desc: "A modern and responsive photography portfolio built for a professional photographer. This website highlights high-quality visuals with a clean and minimalistic design, ensuring the focus stays on the work.",
    subdesc:
      "Developed with React, TypeScript, Vite, and CSS, this portfolio is optimized for fast performance, responsiveness, and smooth user experience.",
    href: "https://jdoes-galeria.vercel.app/",
    texture: "/textures/project/projectportfolio.mp4",
    logo: "/assets/camera.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Vercel",
        path: "assets/vercel.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Vite",
        path: "/vite.svg",
      },
    ],
  },
  {
    title: "3D D20 Dice Roller",
    desc: "An interactive 3D D20 dice roller built with Three.js. It features realistic physics-based rolling, with special highlights for critical success (20) and critical failure (1).",
    subdesc:
      "Developed using pure HTML, CSS, and Three.js, this project simulates a fully 3D dice roll, allowing users to roll the dice and visually see the result with dynamic lighting and animations.",
    href: "https://masthw.github.io/d20-Dice-Three.js/",
    texture: "/textures/project/projectdice.mp4",
    logo: "/assets/dice.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/html.svg",
      },
      {
        id: 2,
        name: "Github",
        path: "assets/github.svg",
      },
      {
        id: 3,
        name: "Three.js",
        path: "/assets/Three.js.svg",
      },
    ],
  },
  {
    title: "OrgChart Planner - Organizational Design Tool",
    desc: "A powerful tool to design, manage, and forecast organizational structures. It allows companies to simulate team changes, new hires, department restructuring, and role shifts with an intuitive drag-and-drop interface.",
    subdesc:
      "Built with Vue.js, and Quasar Framework, this platform empowers HR teams and managers to visualize organizational scenarios, plan workforce changes, and optimize company structures efficiently.",
    href: "https://github.com/Masthw/DynamicOrgChart",
    texture: "/textures/project/projectorg.mp4",
    logo: "/assets/orgchart.png",
    logoStyle: {
      backgroundColor: "#d1edd4",
      background:
        "linear-gradient(0deg, #d1edd4, #d1edd4), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/assets/vue.svg",
      },
      {
        id: 2,
        name: "Quasar",
        path: "assets/quasar.svg",
      },
      {
        id: 3,
        name: "Scss",
        path: "/assets/scss.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -7, 0]
      : isMobile
      ? [6, -5, 0]
      : isTablet
      ? [7, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [6, 4, 0]
      : isTablet
      ? [7, 4, 0]
      : [10, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-14, 10, 0]
      : [-22, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-12, -7, -10]
      : [-14, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "SENAI-RS Institute of Technology and Innovation",
    pos: "Software Development Intern",
    duration: "2023 - 2025",
    title:
      "Worked primarily on front-end development using React, Vue, and Quasar, as well as cross-platform mobile applications with Flutter (Dart). Led several projects independently, from planning to deployment. Collaborated directly with clients and stakeholders, gathering requirements and delivering tailored solutions. Adapted quickly to different technologies depending on each project’s needs, ensuring flexibility in choosing the right tools and frameworks. Gained solid experience in API integration, version control, UI/UX design, and agile workflows.",
    icon: "/assets/senai.jpeg",
  },

  {
    id: 2,
    name: "Acrilys",
    pos: "Maintenance Assistant",
    duration: "2021 - 2023",
    title:
      "Performed general building maintenance tasks. Although unrelated to software development, this role strengthened my problem-solving skills, attention to detail, and discipline — soft skills that are crucial in my current work as a developer.",
    icon: "/assets/acrilys_logo.jpeg",
  },
];
