"use client";

import Image from "next/image";
import { ResponsiveNavbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import LogoLoop from "@/components/LogoLoop";
import { ProjectFollowingPointer } from "@/components/ProjectFollowingPointer";
import GitHubInsights from "@/components/GitHubInsights";
import { motion } from "framer-motion";
import {
  IconCode,
  IconDatabase,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandFirebase,
  IconBrandTypescript,
  IconBrandGit,
  IconDeviceDesktop,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconExternalLink,
  IconDownload,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconCertificate,
  IconCalendar,
  IconTrophy,
  IconApi,
  IconFlask,
  IconBrandRedux,
  IconChartBar,
  IconChartLine,
  IconTerminal,
  IconBrandNextjs,
  IconDatabase as IconPostgreSQL,
  IconBrandSocketIo,
  IconBrandDocker,
  IconBrandStripe,
  IconServer,
  IconWorldWww,
  IconBolt,
} from "@tabler/icons-react";
import { Highlighter } from "@/components/ui/highlighter";

export default function Home() {
  // Function to get tech icon and color
  const getTechIconAndColor = (tech) => {
    const techMap = {
      React: { icon: IconBrandReact, color: "text-cyan-400" },
      Angular: { icon: IconBrandReact, color: "text-red-500" }, // Using React icon for Angular
      "Next.js": { icon: IconBrandNextjs, color: "text-white" },
      "Node.js": { icon: IconBrandNodejs, color: "text-green-500" },
      JavaScript: { icon: IconBrandJavascript, color: "text-yellow-400" },
      TypeScript: { icon: IconBrandTypescript, color: "text-blue-500" },
      Java: { icon: IconCode, color: "text-red-600" },
      PHP: { icon: IconCode, color: "text-purple-500" },
      Laravel: { icon: IconCode, color: "text-red-400" },
      Symfony: { icon: IconCode, color: "text-black" },
      "Spring Boot": { icon: IconServer, color: "text-green-600" },
      "Tailwind CSS": { icon: IconBrandTailwind, color: "text-cyan-400" },
      Bootstrap: { icon: IconBrandCss3, color: "text-purple-600" },
      MongoDB: { icon: IconBrandMongodb, color: "text-green-500" },
      MySQL: { icon: IconDatabase, color: "text-blue-600" },
      PostgreSQL: { icon: IconDatabase, color: "text-blue-700" },
      Firebase: { icon: IconBrandFirebase, color: "text-yellow-500" },
      Docker: { icon: IconBrandDocker, color: "text-blue-400" },
      Git: { icon: IconBrandGit, color: "text-orange-500" },
      GitHub: { icon: IconBrandGithub, color: "text-white" },
      Postman: { icon: IconApi, color: "text-orange-400" },
      "REST API": { icon: IconApi, color: "text-blue-400" },
      JWT: { icon: IconWorldWww, color: "text-gray-400" },
      HTML: { icon: IconBrandHtml5, color: "text-orange-500" },
      CSS: { icon: IconBrandCss3, color: "text-blue-500" },
      "Redux Toolkit": { icon: IconBrandRedux, color: "text-purple-500" },
      "Chart.js": { icon: IconChartBar, color: "text-pink-400" },
      RapidAPI: { icon: IconApi, color: "text-blue-400" },
      "Socket.io": { icon: IconBrandSocketIo, color: "text-white" },
      Prisma: { icon: IconDatabase, color: "text-gray-300" },
      Flask: { icon: IconFlask, color: "text-gray-300" },
      TensorFlow: { icon: IconBolt, color: "text-orange-500" },
      "TensorFlow.js": { icon: IconBolt, color: "text-orange-400" },
      Express: { icon: IconServer, color: "text-gray-300" },
      Stripe: { icon: IconBrandStripe, color: "text-indigo-500" },
      OpenAI: { icon: IconBolt, color: "text-green-400" },
      "Framer Motion": { icon: IconBolt, color: "text-pink-500" },
      Pandas: { icon: IconChartBar, color: "text-blue-400" },
      Matplotlib: { icon: IconChartLine, color: "text-green-400" },
      argparse: { icon: IconTerminal, color: "text-gray-400" },
      Streamlit: { icon: IconBolt, color: "text-red-500" },
      LangChain: { icon: IconBolt, color: "text-green-500" },
      Ollama: { icon: IconBolt, color: "text-purple-500" },
    };

    return techMap[tech] || { icon: IconCode, color: "text-gray-400" };
  };

  const skills = [
    { name: "Développement Frontend", icon: IconBrandReact, level: 90 },
    { name: "Développement Backend", icon: IconServer, level: 85 },
    { name: "Gestion de Base de Données", icon: IconDatabase, level: 80 },
    { name: "Java/Spring Framework", icon: IconCode, level: 88 },
    { name: "PHP/Laravel/Symfony", icon: IconCode, level: 85 },
    { name: "APIs REST", icon: IconApi, level: 90 },
  ];

  const skillLogos = [
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 glass-effect px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-cyan-400/30 glow-box group hover:border-cyan-400/50 transition-all duration-300">
          <IconBrandReact
            className="text-cyan-400 glow-text group-hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            React
          </span>
        </div>
      ),
      alt: "React",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 glass-effect px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-red-500/30 glow-box group hover:border-red-500/50 transition-all duration-300">
          <IconBrandReact
            className="text-red-500 glow-text group-hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Angular
          </span>
        </div>
      ),
      alt: "Angular",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandHtml5 className="text-orange-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            HTML
          </span>
        </div>
      ),
      alt: "HTML",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandCss3 className="text-blue-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            CSS
          </span>
        </div>
      ),
      alt: "CSS",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandTailwind className="text-teal-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Tailwind CSS
          </span>
        </div>
      ),
      alt: "Tailwind CSS",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandCss3 className="text-purple-600" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Bootstrap
          </span>
        </div>
      ),
      alt: "Bootstrap",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 glass-effect px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-yellow-400/30 glow-box group hover:border-yellow-400/50 transition-all duration-300">
          <IconBrandJavascript
            className="text-yellow-400 glow-text group-hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            JavaScript
          </span>
        </div>
      ),
      alt: "JavaScript",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconCode className="text-red-600" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Java
          </span>
        </div>
      ),
      alt: "Java",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconServer className="text-green-600" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Spring Boot
          </span>
        </div>
      ),
      alt: "Spring Boot",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconCode className="text-purple-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            PHP
          </span>
        </div>
      ),
      alt: "PHP",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconCode className="text-red-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Laravel
          </span>
        </div>
      ),
      alt: "Laravel",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconCode className="text-black" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Symfony
          </span>
        </div>
      ),
      alt: "Symfony",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 glass-effect px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-green-500/30 glow-box group hover:border-green-500/50 transition-all duration-300">
          <IconBrandMongodb
            className="text-green-500 glow-text group-hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            MongoDB
          </span>
        </div>
      ),
      alt: "MongoDB",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconDatabase className="text-blue-600" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            MySQL
          </span>
        </div>
      ),
      alt: "MySQL",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconDatabase className="text-blue-700" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            PostgreSQL
          </span>
        </div>
      ),
      alt: "PostgreSQL",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandDocker className="text-blue-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Docker
          </span>
        </div>
      ),
      alt: "Docker",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconApi className="text-orange-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Postman
          </span>
        </div>
      ),
      alt: "Postman",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandGithub className="text-white" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            GitHub
          </span>
        </div>
      ),
      alt: "GitHub",
    },
  ];

  const projects = [
    {
      title: "Plateforme E-Learning — Udemy",
      description:
        "• Plateforme complète permettant aux étudiants de suivre des cours en ligne (vidéos, documents, etc.) et aux enseignants de publier et gérer leur contenu pédagogique. • Back-office d'administration pour gérer les utilisateurs, les cours et les statistiques. • Architecture MVC avec interface moderne et fonctionnalités AJAX pour une expérience utilisateur fluide.",
      image: "/project-elearning.png",
      tech: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "AJAX",
        "POO",
        "MVC"
      ],
      github: "https://github.com/abdelllatif/elearning-platform",
      live: "https://elearning-demo.vercel.app/",
    },
    {
      title: "Projet Nostalgia — Plateforme d'enchères culturelles",
      description:
        "• Plateforme d'enchères en ligne spécialisée dans la vente d'objets rares et historiques (œuvres d'art, manuscrits, pièces anciennes). • Système d'enchères sécurisé avec blog culturel interactif et paiement PayPal intégré. • Architecture robuste avec tâches planifiées (Cron Jobs) pour la gestion automatique des enchères.",
      image: "/project-nostalgia.png",
      tech: [
        "Laravel",
        "PostgreSQL",
        "Tailwind CSS",
        "Blade",
        "JavaScript",
        "AJAX",
        "REST API",
        "JWT",
        "Cron Jobs",
        "PayPal API"
      ],
      github: "https://github.com/abdelllatif/nostalgia-auctions",
      live: "https://nostalgia-auctions.vercel.app/",
    },
    {
      title: "Projet Tricol — Gestion des Bons de Commande",
      description:
        "• API REST complète pour gérer les fournisseurs, produits, commandes et mouvements de stock avec valorisation automatique (coût moyen pondéré). • Suivi complet du cycle de vie des commandes avec documentation Swagger interactive. • Tests unitaires et d'intégration complets pour assurer la qualité et la fiabilité.",
      image: "/project-tricol.png",
      tech: [
        "Spring Boot",
        "Spring Data JPA",
        "MapStruct",
        "Liquibase",
        "Angular",
        "JUnit 5",
        "Mockito",
        "Swagger",
        "REST API"
      ],
      github: "https://github.com/abdelllatif/tricol-orders",
      live: "https://tricol-orders.vercel.app/",
    },
    {
      title: "Al Baraka Digital - Secure Banking Platform",
      description:
        "• Plateforme bancaire digitale sécurisée pour gérer les opérations clients (dépôts, retraits, transferts) avec traçabilité et auditabilité complètes. • Système de validation automatique pour montants faibles et validation manuelle pour montants élevés. • Authentification stateless JWT avec contrôle d'accès basé sur les rôles (Client, Agent, Admin).",
      image: "/project-albaraka.png",
      tech: [
        "Spring Boot",
        "Spring Security",
        "JWT",
        "OAuth2",
        "Angular",
        "Docker",
        "GitHub Actions",
        "PostgreSQL",
        "REST API",
        "JUnit",
        "Mockito"
      ],
      github: "https://github.com/abdelllatif/albaraka-banking",
      live: "https://albaraka-banking.vercel.app/",
    },
    {
      title: "SocialConnect - Réseau Social d'Entreprise",
      description:
        "• Plateforme de réseau social d'entreprise avec authentification OAuth2, système de publications, commentaires et likes. • Intégration de paiements pour fonctionnalités premium et gestion des abonnements. • Architecture microservices avec API REST et interface moderne en React.",
      image: "/project-socialconnect.png",
      tech: [
        "Laravel",
        "Socialite",
        "React",
        "MySQL",
        "Tailwind CSS",
        "REST API",
        "OAuth2",
        "Stripe",
        "JWT"
      ],
      github: "https://github.com/abdelllatif/social-connect",
      live: "https://social-connect.vercel.app/",
    },
  ];

  const education = [
    {
      degree: "Développement Web Full Stack",
      institution: "YouCode (UM6P)",
      location: "Safi, Maroc",
      period: "2024 – 2026",
      grade: "Diplômé",
      icon: IconSchool,
      achievements: [
        "Formation intensive en développement web full-stack.",
        "Travail sur divers projets de développement logiciel.",
      ],
    },
    {
      degree: "Baccalauréat en Sciences Physiques et Chimiques",
      institution: "Al-Muʿtamid ibn Abbad",
      location: "Safi, Maroc",
      period: "2022 – 2023",
      grade: "Réussi",
      icon: IconCertificate,
      achievements: [
        "Spécialisation en Sciences Physiques et Chimiques.",
        "Excellents résultats dans les matières scientifiques.",
      ],
    },
  ];

  return (
    <>
      <ResponsiveNavbar />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section
          id="about"
          className="py-20 px-4 relative overflow-hidden particles-container"
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,53,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(247,147,30,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_70%)]" />

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-orange-500/30 rounded-full blur-sm float-animation"></div>
          <div
            className="absolute top-32 right-20 w-3 h-3 bg-orange-400/20 rounded-full blur-sm float-animation"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-1 h-1 bg-orange-600/40 rounded-full blur-sm float-animation"
            style={{ animationDelay: "3s" }}
          ></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  Développeur Web Full-Stack Passionné
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Diplômé de YouCode (UM6P) en développement web full-stack, je maîtrise les technologies modernes pour créer des applications web robustes et évolutives. Passionné par la résolution de problèmes et le code propre, j'explore actuellement l'IA agentique pour développer des systèmes intelligents et autonomes.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Mon expertise couvre les frameworks frontend comme{" "}
                  <strong className="text-white font-bold">React</strong> et{" "}
                  <strong className="text-white font-bold">Angular</strong>,
                  les technologies backend incluant{" "}
                  <strong className="text-white font-bold">Spring Boot</strong>,{" "}
                  <strong className="text-white font-bold">Laravel</strong> et{" "}
                  <strong className="text-white font-bold">Symfony</strong>,
                  ainsi que la gestion de bases de données avec{" "}
                  <strong className="text-white font-bold">MySQL</strong>,{" "}
                  <strong className="text-white font-bold">PostgreSQL</strong> et{" "}
                  <strong className="text-white font-bold">MongoDB</strong>.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-orange-400">
                    <IconMapPin size={20} />
                    <span>Safi, Maroc</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-400">
                    <IconMail size={20} />
                    <span>Available for hire</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {[
                  { number: "30+", label: "Projects Completed" },
                  { number: "3", label: "Years Experience" },
                  { number: "3+", label: "Languages" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-gray-700/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                      {stat.number}
                    </h4>
                    <p className="text-gray-300 mt-2 text-sm sm:text-base">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,107,53,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(247,147,30,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Education
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                My{" "}
                <Highlighter action="underline" color="#FF9800">
                  academic journey
                </Highlighter>{" "}
                and continuous{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  learning path
                </Highlighter>{" "}
                in technology
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Education Card */}
                  <div className="flex-1">
                    <motion.div
                      className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/30 hover:border-orange-500/30 transition-all duration-300 group"
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="p-3 sm:p-4 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl">
                          <edu.icon
                            size={28}
                            className="text-orange-400 sm:w-8 sm:h-8"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-orange-400 mt-2 lg:mt-0">
                              <IconCalendar size={18} />
                              <span className="font-medium">{edu.period}</span>
                            </div>
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                              <h4 className="text-base sm:text-lg font-semibold text-gray-200">
                                {edu.institution}
                              </h4>
                              <span className="text-sm sm:text-base text-gray-400">
                                • {edu.location}
                              </span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 px-4 py-2 rounded-full border border-orange-500/30">
                              <IconTrophy
                                size={16}
                                className="text-orange-400"
                              />
                              <span className="text-orange-300 font-medium">
                                {edu.grade}
                              </span>
                            </div>
                          </div>

                          <div>
                            <h5 className="text-gray-300 font-medium mb-3">
                              Key Achievements:
                            </h5>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center gap-3 text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: index * 0.2 + i * 0.1,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Connector */}
                  <div className="hidden lg:flex flex-col items-center">
                    <motion.div
                      className="w-4 h-4 border-4 border-orange-500 bg-black rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                    {index < education.length - 1 && (
                      <motion.div
                        className="w-1 h-32 bg-gradient-to-b from-orange-500 to-transparent"
                        initial={{ height: 0 }}
                        whileInView={{ height: 128 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Skills
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Here are the{" "}
                <Highlighter action="underline" color="#FF9800">
                  technologies
                </Highlighter>{" "}
                and tools I work with to bring{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  ideas to life
                </Highlighter>
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </motion.div>

            {/* LogoLoop Skills Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              {/* Mobile version */}
              <div className="block sm:hidden">
                <LogoLoop
                  logos={skillLogos}
                  speed={40}
                  direction="left"
                  logoHeight={40}
                  gap={24}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills"
                  className="py-4"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <LogoLoop
                  logos={skillLogos}
                  speed={60}
                  direction="left"
                  logoHeight={60}
                  gap={48}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills"
                  className="py-8"
                />
              </div>
            </motion.div>

            {/* Reverse Direction Skills Loop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Mobile version */}
              <div className="block sm:hidden">
                <LogoLoop
                  logos={skillLogos.slice().reverse()}
                  speed={30}
                  direction="right"
                  logoHeight={35}
                  gap={20}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills reverse"
                  className="py-3 opacity-75"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <LogoLoop
                  logos={skillLogos.slice().reverse()}
                  speed={45}
                  direction="right"
                  logoHeight={50}
                  gap={40}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills reverse"
                  className="py-6 opacity-75"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Interactive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Project Showcase
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
                Explore my{" "}
                <Highlighter action="underline" color="#FF9800">
                  portfolio projects
                </Highlighter>{" "}
                with interactive{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  following pointer effects
                </Highlighter>
              </p>
              <p className="text-gray-400 text-sm">
                Hover over any card to experience the magic ✨
              </p>
            </motion.div>

            {/* Following Pointer Projects */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ProjectFollowingPointer
                projects={projects}
                getTechIconAndColor={getTechIconAndColor}
              />
            </motion.div>
          </div>
        </section>

        {/* GitHub Insights Section */}
        <GitHubInsights />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Connect
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ready to bring your{" "}
                <Highlighter action="underline" color="#FF9800">
                  ideas to life
                </Highlighter>
                ? Let&apos;s discuss your{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  next project
                </Highlighter>
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                    Get in Touch
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconMail
                          size={18}
                          className="text-orange-400 sm:w-5 sm:h-5"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">
                          Email
                        </p>
                        <p className="text-orange-400 text-sm sm:text-base break-all">
                          haissouneabdellatif749@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconPhone size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-orange-400">+212 690732817</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconMapPin size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-orange-400">
                          Safi, Maroc
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconDownload size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Resume</p>
                        <a
                          href="https://drive.google.com/drive/folders/1LYqzDZaxEn4di1MZw7BOrgjx9yNbD8N7?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-300 transition-colors underline"
                        >
                          Download CV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/abdellatif-hissoune"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconBrandLinkedin size={24} className="text-orange-400" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/abdelllatif"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconBrandGithub size={24} className="text-orange-400" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-gray-400">
              © 2026 Abdellatif Hissoune
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
