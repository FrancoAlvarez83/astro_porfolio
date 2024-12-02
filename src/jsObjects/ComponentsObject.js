//? Objects
import { EXPERIENCE_COMPONENT } from "./ExperienceObject";
import { SOCIALS } from "./SocialsObject"
import { LINK_BUTTON } from "./LinkButtonObject";
import { PROJECTS_COMPONENT } from "./ProjectsObject";

//? Icons
import GitHubIcon from "../components/icons/GitHub.astro";
import LinkIcon from "../components/icons/Link.astro";

//? Components
import Header from "../components/Header.astro";
import ExperienceItem from "../components/ExperienceItem.astro";
import SocialPill from "../components/SocialPill.astro";
import LinkButton from "../components/LinkButton.astro";
import Projects from "../components/Projects.astro";
import Footer from "../components/Footer.astro";

export const COMPONENTS = [
    {
      title: 'Header',
      description: 'El Header recibe 3 parametros. title, label y url.',
      Component: Header,
      code: 'CodeHeader',
      params: false,
      icons: []
    },
    {
      title: 'Timeline',
      description: 'El Timeline recibe 3 parametros. title, description y date.',
      Component: ExperienceItem,
      code: 'CodeExperience',
      params: EXPERIENCE_COMPONENT,
      icons: []                   
    },
    {
      title: 'SocialPill',
      description: 'El SocialPill recibe 3 parametros. href, title e icon.',
      Component: SocialPill,
      code: 'CodeSocialPill',    
      params: SOCIALS,
      icons: []  

    },
    {
      title: 'LinkButton',
      description: 'El LinkButton recibe 3 parametros. href, title e icon.',
      Component: LinkButton,
      code: 'CodeLinkButton',
      params: LINK_BUTTON,
      icons: [GitHubIcon, LinkIcon]
    },
    {
      title: 'Projects',
      description: 'Projects recibe 6 parametros. title, description, link, github, image y tags.',
      Component: Projects,
      code: 'CodeProjects',
      params: PROJECTS_COMPONENT,
      icons: []                  
    },
    {
      title: 'Footer',
      description: 'El footer no recibe ningín parametro. Solo cambia el texto.',
      Component: Footer,
      code: 'CodeFooter',
      params: false,
      icons: []                      
    }
  ];
  