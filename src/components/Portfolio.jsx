"use client"

import { useState } from "react"
import { Github, Linkedin, Phone, X, Target, Cpu, ListChecks } from "lucide-react"

// Projects Data
const projects = [
  {
    title: "Plateforme E-Learning — Udemy",
    description:
      "Plateforme complète type Udemy permettant aux étudiants de suivre des cours en ligne (vidéos, documents, etc.) ; aux enseignants de publier et gérer leur contenu pédagogique ; back-office : administration pour gérer les utilisateurs, les cours et les statistiques.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Tailwind CSS", "JavaScript", "AJAX"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    cahier: [
      "Authentification sécurisée pour étudiants et enseignants",
      "Système de gestion de cours avec vidéos et ressources",
      "Suivi de progression et quiz interactifs",
      "Interface d'administration complète",
      "Architecture POO, MVC",
    ],
  },
  {
    title: "Nostalgia - Enchères Culturelles",
    description:
      "Plateforme d'enchères en ligne pour objets rares et historiques (œuvres d'art, manuscrits, pièces de monnaie anciennes). Comprend un système d'enchères sécurisé, un blog culturel interactif et un paiement PayPal pour les transactions.",
    technologies: ["Laravel", "PostgreSQL", "Tailwind CSS", "Blade", "JavaScript", "AJAX", "REST API", "JWT", "Cron Jobs"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    cahier: [
      "Système d'enchères en temps réel",
      "Intégration paiement PayPal sécurisé",
      "Blog interactif avec commentaires",
      "Gestion des objets culturels et historiques",
      "Authentification JWT",
      "API REST complète",
    ],
  },
  {
    title: "Tricol - Gestion des Bons de Commande",
    description:
      "API REST pour gérer les fournisseurs, les produits, les commandes et les mouvements de stock avec valorisation automatique (coût moyen pondéré) et suivi complet du cycle de vie. Documentation Swagger et tests unitaires/d'intégration inclus.",
    technologies: ["Spring Boot", "Spring Data JPA", "MapStruct", "Liquibase", "Angular", "JUnit 5", "Mockito"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    ],
    cahier: [
      "API REST avec documentation Swagger",
      "Gestion fournisseurs et produits",
      "Système de commandes avec valorisation",
      "Architecture microservices",
      "Tests unitaires et d'intégration",
      "Base de données Liquibase",
    ],
  },
  {
    title: "SEBUL - Système Back Office",
    description:
      "Système interne pour gérer équipements, logistique, maintenance et équipes avec interfaces administratives avancées. Développement réalisé durant mon stage chez Proxisoft SARL.",
    technologies: ["Symfony", "Twig", "Ajax", "Bootstrap", "DataTables", "MySQL"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
    cahier: [
      "Gestion d'équipements et logistique",
      "Système de maintenance préventive",
      "Gestion des équipes et planning",
      "Tableaux de bord administratifs",
      "Interfaces DataTables avancées",
      "Architecture Symfony 7",
    ],
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Tableau de bord complet pour la gestion d'une boutique en ligne avec statistiques en temps réel et gestion des commandes. Interface moderne pour les vendeurs avec analyses détaillées.",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    ],
    cahier: [
      "Statistiques en temps réel",
      "Gestion des produits et inventaire",
      "Système de commandes et paiements",
      "Analyses et rapports détaillés",
      "Interface React moderne",
      "API Laravel sécurisée",
    ],
  },
  {
    title: "Gestion RH & Paie",
    description:
      "Application de gestion des ressources humaines avec système de paie, congés, absences et évaluation des performances. Solution complète pour la gestion administrative des employés.",
    technologies: ["Spring Boot", "Angular", "PostgreSQL"],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    ],
    cahier: [
      "Système de paie automatisé",
      "Gestion des congés et absences",
      "Évaluation des performances",
      "Rapports RH détaillés",
      "Interface Angular moderne",
      "Base de données PostgreSQL",
    ],
  },
]

export default function Portfolio() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold gradient-text">AH</div>
            <div className="hidden md:flex space-x-8">
              <a href="#accueil" className="hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="#apropos" className="hover:text-primary transition-colors">
                À propos
              </a>
              <a href="#parcours" className="hover:text-primary transition-colors">
                Parcours Professionnel
              </a>
              <a href="#competences" className="hover:text-primary transition-colors">
                Compétences
              </a>
              <a href="#projets" className="hover:text-primary transition-colors">
                Projets
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Social Sidebar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-4">
        <div className="w-px h-20 bg-border"></div>
        <a
          href="https://github.com/AbdellatifHissoune"
          target="_blank"
          rel="noreferrer"
          className="text-secondary-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/abdellatif-hissoune"
          target="_blank"
          rel="noreferrer"
          className="text-secondary-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="tel:+212690732817"
          className="text-secondary-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
        >
          <Phone className="w-6 h-6" />
        </a>
        <div className="w-px h-20 bg-border"></div>
      </div>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Salut, je suis <span className="gradient-text">Abdellatif</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground mb-8">Développeur Full Stack Web</p>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl">
              Passionné par la création d'applications web modernes et performantes avec les technologies les plus
              récentes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projets"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="border border-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition"
              >
                Me contacter
              </a>
            </div>
          </div>
          <div className="relative fade-in-up flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img
                src="/imgs/abdellatif-portrait.png"
                alt="Abdellatif Hissoune"
                className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">À propos de moi</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-foreground text-lg mb-6">
                Je suis un développeur Full Stack passionné, actuellement étudiant à YouCode (UM6P) à Safi. J'ai une
                forte expérience dans le développement d'applications web complètes, de la conception à la mise en
                production.
              </p>
              <p className="text-foreground text-lg mb-6">
                Mon parcours comprend un stage chez Proxisoft SARL où j'ai travaillé sur des projets Back Office
                complexes utilisant Symfony, ainsi que le développement de plus de 40 projets personnels couvrant
                diverses technologies.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Informations</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground">Localisation</p>
                  <p className="text-foreground">Safi, Maroc</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="text-foreground">haissouneabdellatif749@gmail.com</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Téléphone</p>
                  <p className="text-foreground">+212 690732817</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Formation</p>
                  <p className="text-foreground">YouCode (UM6P), Safi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="parcours" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Parcours Professionnel</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Développement Web (Stagiaire)</h3>
                  <p className="text-lg text-accent font-semibold">Proxisoft SARL, Salé Al Jadida</p>
                </div>
                <div className="text-muted-foreground mt-2 md:mt-0">
                  Mai 2025 – Juillet 2025
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-secondary-foreground">Projet Back Office – SEBUL</h4>
                  <p className="text-muted-foreground mb-3">
                    Développement collaboratif d'un système interne pour gérer les équipements, la logistique, la maintenance et les équipes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Symfony 7</span>
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Twig</span>
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Ajax</span>
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Bootstrap</span>
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">DataTables</span>
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">MySQL</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-secondary-foreground">Projet Dino – Back Office (Gestion d'Équipements)</h4>
                  <p className="text-muted-foreground mb-3">
                    Développement collaboratif d'un système pour gérer les machines, les articles, l'inventaire, les vidanges et les réparations sur les sites/entrepôts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Symfony 7</span>
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Twig</span>
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Ajax</span>
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Bootstrap</span>
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">DataTables</span>
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">PhpSpreadsheet</span>
                    <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">MySQL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Formation</h3>
                  <p className="text-lg text-accent font-semibold">YouCode (UM6P), Safi</p>
                </div>
                <div className="text-muted-foreground mt-2 md:mt-0">
                  2024 – 2026
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Développement Web Full Stack - Formation intensive en développement web moderne avec focus sur les technologies actuelles et les méthodologies agiles.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">HTML/CSS</span>
                <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">JavaScript</span>
                <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">PHP</span>
                <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Java</span>
                <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Spring Boot</span>
                <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Laravel</span>
                <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">React</span>
                <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Angular</span>
                <span className="bg-background px-3 py-1 rounded-full text-xs border border-border">Agile-Scrum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Compétences Techniques</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Front-End */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">Front-End</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "HTML", icon: "html5" },
                  { name: "CSS", icon: "css3" },
                  { name: "JavaScript", icon: "javascript" },
                  { name: "React", icon: "react" },
                  { name: "Angular", icon: "angularjs" },
                  { name: "Tailwind", icon: "tailwindcss" },
                  { name: "Bootstrap", icon: "bootstrap" },
                ].map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center group cursor-pointer">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="w-10 h-10 mb-2 transition-transform group-hover:scale-110 group-hover:-translate-y-1"
                    />
                    <span className="text-xs text-muted-foreground text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Back-End */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-accent">Back-End</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "PHP", icon: "php" },
                  { name: "Laravel", icon: "laravel" },
                  { name: "Symfony", icon: "symfony" },
                  { name: "Java", icon: "java" },
                  { name: "Spring Boot", icon: "spring" },
                  { name: "Jakarta EE", icon: "java" },
                  { name: "REST API", icon: "postman" },
                  { name: "JWT", icon: "javascript" },
                ].map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center group cursor-pointer">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="w-10 h-10 mb-2 transition-transform group-hover:scale-110 group-hover:-translate-y-1"
                    />
                    <span className="text-xs text-muted-foreground text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database & Tools */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Base de données & Outils</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "MySQL", icon: "mysql" },
                  { name: "PostgreSQL", icon: "postgresql" },
                  { name: "MongoDB", icon: "mongodb" },
                  { name: "Git", icon: "git" },
                  { name: "GitHub", icon: "github" },
                  { name: "Docker", icon: "docker" },
                  { name: "Postman", icon: "postman" },
                  { name: "Jira", icon: "jira" },
                  { name: "Trello", icon: "trello" },
                  { name: "Figma", icon: "figma" },
                ].map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center group cursor-pointer">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="w-10 h-10 mb-2 transition-transform group-hover:scale-110 group-hover:-translate-y-1"
                    />
                    <span className="text-xs text-muted-foreground text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Methodologies */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Langues & Méthodologies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Langues</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Arabe</span>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Langue maternelle</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Anglais</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">B2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Français</span>
                      <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded">B2</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Méthodologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-background px-2 py-1 rounded text-xs border border-border">Agile-Scrum</span>
                    <span className="bg-background px-2 py-1 rounded text-xs border border-border">MVC</span>
                    <span className="bg-background px-2 py-1 rounded text-xs border border-border">Repository</span>
                    <span className="bg-background px-2 py-1 rounded text-xs border border-border">Singleton</span>
                    <span className="bg-background px-2 py-1 rounded text-xs border border-border">UML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Mes Projets</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-background py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">© 2025 Abdellatif Hissoune. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  )
}

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:-translate-y-2"
      >
        <h3 className="text-xl font-bold mb-3 text-primary group-hover:underline">{project.title}</h3>
        <p className="text-secondary-foreground mb-4 text-sm line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {project.logos.map((logo, idx) => (
            <img key={idx} src={logo || "/placeholder.svg"} alt="tech" className="w-8 h-8" />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-background px-3 py-1 rounded-full text-xs border border-border">
              {tech}
            </span>
          ))}
        </div>
        <button className="text-xs text-primary font-medium flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
          Cahier des charges →
        </button>
      </div>

      {/* Modal - Cahier des Charges */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-card w-full max-w-2xl rounded-lg border border-border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-border flex justify-between items-center">
              <h2 className="text-2xl font-bold gradient-text">{project.title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="space-y-6">
                <section>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" /> Objectifs du projet
                  </h4>
                  <p className="text-secondary-foreground">{project.description}</p>
                </section>
                <section>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-primary" /> Stack Technique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-background px-3 py-1 rounded-full text-xs border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
                <section>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <ListChecks className="w-5 h-5 text-primary" /> Cahier des Charges
                  </h4>
                  <ul className="list-disc list-inside text-secondary-foreground space-y-2 text-sm">
                    {project.cahier.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
            <div className="p-6 border-t border-border bg-background/50 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}