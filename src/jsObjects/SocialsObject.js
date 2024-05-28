import MailIcon from "../components/icons/Mail.astro"
import DownloadIcon from "../components/icons/Download.astro"


export const SOCIALS = [
    // {
    //     href: 'https://www.linkedin.com/in/franco-alvarez-8ab600262/',
    //     icon: 'LinkedInIcon',
    //     title:'LinkedIn'
    // },
    // {
    //     href: 'https://github.com/FrancoAlvarez83/',
    //     icon: 'GitHubIcon',
    //     title:'GitHub'
    // },
    {
        href: 'mailto:francoalvarezstevenot838@gmail.com',
        Icon: MailIcon,
        title:'Email'
    },
    {
        href: '../../public/Franco_Alvarez_CV.pdf',
        Icon: DownloadIcon,
        title:'Curriculum Vitae'
    },
    
]

export const SOCIALS_COMPONENT = [
    {
        href: 'https://www.linkedin.com/in/franco-alvarez-8ab600262/',
        Icon: 'LinkedInIcon',
        title:'LinkedIn'
    },
    {
        href: 'https://github.com/FrancoAlvarez83/',
        Icon: 'GitHubIcon',
        title:'GitHub'
    }
]