import { Facebook, Instagram, Linkedin, Mail, TwitterIcon } from "lucide-react";

export const NAV_BAR_ITEMS = [
  {
    link: "#home",
    name: "Home",
  },
  {
    link: "#about",
    name: "About",
  },
  {
    link: "#capabilities",
    name: "Capabilities",
  },
  {
    link: "#services",
    name: "Services",
  },
  {
    link: "#projects",
    name: "Projects",
  },
  {
    link: "#contact",
    name: "Contact",
  },
];

export const SERVICE_ITEMS = [
  {
    name: {
      fr: "Web Development",
      en: "Web Developement",
    },
    description: {
      en: [
        "Designing and creaing websites tailored to your needs, whether it's for personal , buisiness , or e-commerce purposes",
        "Utilizing HTML ,CSS, JavaScript,React.js,Next.js and other web technologies to build responce and user-friendly interfaces.",
        "Ensuring compatibility across different browsers and devices for a seamless user experience.",
      ],
      fr: [
        "Conception et création de sites web adaptés à vos besoins, que ce soit pour un usage personnel, professionnel ou e-commerce.",
        "Utilisation de HTML, CSS, JavaScript, React.js, Next.js et d'autres technologies web pour construire des interfaces réactives et conviviales.",
        "Garantie de compatibilité sur différents navigateurs et appareils pour une expérience utilisateur fluide.",
      ],
    },
    img: "/projects/project8.jpg",
  },
  {
    name: {
      en: "Converting HHD to SSD and vice versa (without losing data)",
      fr: "Conversion de HDD en SSD et vice versa (sans perte de données)",
    },
    description: {
      en: [
        "Upgrading your computer's storage from a traditional hard disk (HDD) to a solid-state drive (SSD) or vice versa",
        "Migrating data from the existing drive to the new ine without any loss or corruption",
        "Optimizing the storage configuration to enhance systeme performenece and reliability",
        "Providing guidance on selecting the right type and capacity of storage based on your requirement and budget ",
      ],
      fr: [
        "Amélioration du stockage de votre ordinateur d'un disque dur traditionnel (HDD) vers un disque à semi-conducteurs (SSD) ou vice versa",
        "Migration des données du disque existant vers le nouveau sans perte ni corruption",
        "Optimisation de la configuration de stockage pour améliorer les performances et la fiabilité du système",
        "Fourniture de conseils sur le choix du type et de la capacité de stockage adaptés à vos besoins et à votre budget",
      ],
    },
    img: "/projects/project5.jpg",
  },
  {
    name: {
      en: "Changing Windows password if forgotten",
      fr: "Changement de mot de passe Windows en cas d'oubli",
    },
    description: {
      fr: [
        "Assistance pour réinitialiser ou récupérer un mot de passe Windows oublié sur votre ordinateur",
        "Utilisation de diverses méthodes telles que les disques de réinitialisation de mot de passe, les outils en ligne de commande ou les logiciels tiers pour réinitialiser la sécurité du mot de passe",
        "Garantie de l'intégrité et de la confidentialité des données tout au long du processus de récupération du mot de passe",
      ],
      en: [
        "Assisting in resetting or recovering forgotten Windows password to your computer",
        "Using various methods such as password rest disks, command line tools , or third-party software to rest the password security",
        "Ensuring data integrity and privacy throughout the password recovery process",
      ],
    },
    img: "/projects/project7.jpg",
  },
  {
    name: {
      en: "Installing all versions of Windows (7,8,10,11)*",
      fr: "Installation de toutes les versions de Windows (7, 8, 10, 11)",
    },
    description: {
      fr: [
        "Installation et configuration de différentes versions des systèmes d'exploitation Windows, y compris Windows 7, 8, 10 et 11.",
        "Réalisation d'installations propres ou de mises à niveau selon vos préférences et les exigences de votre système.",
        "Fourniture de support d'activation et de licence pour garantir la conformité aux conditions générales de Microsoft.",
        "Offre de conseils sur les tâches post-installation telles que les mises à jour des pilotes, l'installation de logiciels et la personnalisation du système.",
      ],
      en: [
        "Installing and configuring different versions of Windows operating systems , including Windows 7,8,10,11",
        "Performing clean installations or upgrading according to your preferences and system requirements.",
        "Providing activation and licensing support to ensure compliance with Microsoft's terms and conditions.",
        "Offering guidance on post-installation tasks such as driver updates,software installation,and systeme customization",
      ],
    },
    img: "/projects/project6.jpg",
  },
  {
    name: {
      en: "Installing office software (Office:Word , Excel , Powerpoint)*",
      fr: "Installation de logiciels de bureau (Office : Word, Excel, PowerPoint)",
    },
    description: {
      fr: [
        "Installation et configuration de la suite Microsoft Office, y compris Word, Excel, PowerPoint et les outils de productivité.",
        "Configuration des applications Office pour optimiser les performances et la convivialité.",
        "Fourniture de formation et de support pour utiliser efficacement les fonctionnalités d'Office afin d'améliorer la productivité et la collaboration.",
      ],
      en: [
        "Installing and setting up Microsoft Office suite , including Word , Excel , Powerpoint , and productivity tools",
        "Configuring Office applications to optimize performance and usability.",
        "Providing training and support for using Office-features effectively to enhance productivity and collaboration",
      ],
    },
    img: "/projects/project3.jpg",
  },
  {
    name: {
      en: "Connecting printers to computers",
      fr: "Connexion d'imprimantes aux ordinateurs",
    },
    img: "/projects/project2.jpg",
    description: {
      fr: [
        "Configuration et installation d'imprimantes pour qu'elles fonctionnent de manière transparente avec le réseau de vos ordinateurs.",
        "Installation de pilotes d'imprimante et de logiciels pour permettre l'impression à partir de différents appareils et applications.",
        "Résolution des problèmes de connectivité et correction des erreurs d'impression pour des flux de travail ininterrompus.",
        " Fourniture de conseils sur la maintenance et l'optimisation des imprimantes pour garantir une qualité d'impression constante et une fiabilité.",
      ],
      en: [
        "Setting up and configuring printers to work seamlessly with your computers network",
        "Installing printer drivers and software to enable printing from various devices and applications",
        "Troubleshooting connectivity issues and resolving printing errors for uninterrrupted workflows",
        "Offering guidance on printer maintenance and optimization to ensure consistent print quality and reliability",
      ],
    },
  },
];

export const Social = [Facebook, Mail, Linkedin, Instagram, TwitterIcon];

export const PROJECT_ITEMS = [
  {
    name: "Book Store",
    description: {
      fr: "Ce projet est une librairie en ligne où vous pouvez acheter et vendre vos livres avec paiement en ligne, ainsi qu'un tableau de bord pour l'administrateur afin de contrôler le site web.",
      en: "this project is book store where you can buy and sell your books with payment  online and dashbord for admin to controll website",
    },
    img: "/projects/book.png",
    valid: true,
  },
  {
    name: "Plante Store",
    description: {
      fr: "Ce projet est une boutique en ligne de plantes où vous pouvez acheter et vendre vos plantes avec paiement en ligne, ainsi qu'un tableau de bord pour l'administrateur afin de contrôler le site web.",
      en: "this project is plante store where you can buy and sell your plante with payment  online and dashbord for admin to controll website",
    },
    img: "/projects/plante.png",
    valid: true,
  },
  {
    name: "Video Discovered",
    description: {
      fr: "Ce projet est une plateforme de découverte de vidéos où vous pouvez trouver et regarder des vidéos de YouTube en utilisant l'authentification Google.",
      en: "This project is video discovered where you can find and watch video from youtobe with google authentication",
    },
    img: "/projects/video.png",
    valid: true,
  },
  {
    name: "VPN",
    description: {
      fr: "Sécurisez votre réseau avec notre projet VPN pfSense/OpenVPN. Protégez vos données sensibles et accédez-y de manière sécurisée à distance. Expertise garantie pour une mise en place fiable et efficace.",
      en: "Secure your network with our pfSense/OpenVPN VPN project. Protect your sensitive data and securely access it remotely. Guaranteed expertise for reliable and efficient implementation.",
    },
    img: "/capabilities/tele.png",
    valid: false,
  },
];

export const CAPABILITIE_ITEMS = [
  { name: "React.js", img: "/capabilities/react.png" },
  { name: "Next.js", img: "/capabilities/next.png" },
  // { name: "Node.js", img: "/capabilities/node.png" },
  // { name: "Express.js", img: "/capabilities/express.png" },
  { name: "Socket.io", img: "/capabilities/socket.png" },
  { name: "Azure", img: "/capabilities/azure.png" },
];

export const Default_Social = [
  {
    img: "/icons/social.png",
    href : "mailto:brothertech643@gmail.com"
  },
  {
    img: "/icons/whatsapp.png",
    href : "https://api.whatsapp.com/message/V7AJA34VZAEGC1?autoload=1&app_absent=0"
  },
  {
    img : '/icons/telephone.png',
    href : "tel:+212624568923"
  }
];
