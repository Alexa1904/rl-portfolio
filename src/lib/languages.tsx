// import { ILanguage } from '@/models';
import {
  AboutMeIcon,
  CertificatesIcon,
  ExperienceIcon,
  ExpertiseIcon,
} from '@/components/icons';
import ContactIcon from '@/components/icons/ContactIcon';
import { ILanguage } from '@/models';

export const languages: ILanguage[] = [
  {
    id: 'en',
    routes: [
      {
        text: 'Experience',
        href: '/experience',
        icon: <ExperienceIcon className="w-full h-full" />,
      },
      {
        text: 'About me',
        href: '/about-me',
        icon: <AboutMeIcon className="w-full h-full" />,
      },
      {
        text: 'Certificates',
        href: '/certificates',
        icon: <CertificatesIcon className="w-full h-full" />,
      },
      {
        text: 'Expertise',
        href: '/expertise',
        icon: <ExpertiseIcon className="w-full h-full" />,
      },
      {
        text: 'Contact',
        href: '/contact',
        icon: <ContactIcon className="w-full h-full" />,
      },
    ],
    name: 'English',
    header: {
      role: 'Systems Engineer',
    },
  },
  {
    id: 'es',
    name: 'Español',
    routes: [
      {
        text: 'Experiencia',
        href: '/',
        icon: <ExperienceIcon className="w-5 h-5" />,
      },
      {
        text: 'Perfil',
        href: '/about-me',
        icon: <AboutMeIcon className="w-5 h-5" />,
      },
      {
        text: 'Certificados',
        href: '/certificates',
        icon: <CertificatesIcon className="w-5 h-5" />,
      },
      {
        text: 'Pericia',
        href: '/expertise',
        icon: <ExpertiseIcon className="w-5 h-5" />,
      },
      {
        text: 'Contacto',
        href: '/contact',
        icon: <ContactIcon className="w-5 h-5" />,
      },
    ],
    header: {
      role: 'Ingeniero en Sistemas',
    },
  },
];
