// import { ILanguage } from '@/models';
import TCSAstroSection from '@/components/experience/workExperiences/tcs/astro/TCSAstroSection';
import TCSOverviewSection from '@/components/experience/workExperiences/tcs/TCSOverviewSection';
import TCSProjectsSection from '@/components/experience/workExperiences/tcs/TCSProjectsSection';
import TCSRoleDescription from '@/components/experience/workExperiences/tcs/TCSRoleDescription';
import {
  AboutMeIcon,
  CertificatesIcon,
  ExperienceIcon,
  ExpertiseIcon,
} from '@/components/icons';
import ContactIcon from '@/components/icons/ContactIcon';
import FolderIcon from '@/components/icons/FolderIcon';
import PDFIcon from '@/components/icons/PDFIcon';
import { ILanguage } from '@/models';
import {
  responsibilities,
  content,
  astroInfo,
  contentSpanish,
  responsibilitiesSpanish,
  astroInfoSpanish,
} from './TCSAstroSection';
import { roleDescription, roleDescriptionSpanish } from './TCSSections';

export const languages: ILanguage[] = [
  {
    id: 'en',
    name: 'English',
    availableLanguages: {
      title: 'Select a language',
      list: [
        {
          id: 'es',
          name: 'Spanish',
          level: 'Native',
          width: 'w-full',
        },
        {
          id: 'en',
          name: 'English',
          level: 'Proficient',
          width: 'w-11/12',
        },
      ],
    },
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
    header: {
      role: 'Systems Engineer',
    },
    experiences: {
      introCard: {
        role: 'Software Engineer',
        location: 'At Tata Consultancy Services',
        urlLocation: 'https://www.tcs.com/',
        text1: 'The future is NOW So,',
        text2: `Let's keep adapting to the future TOGETHER!`,
      },
      jobs: [
        {
          id: 'tcs',
          name: 'Tata Consultancy Services',
          startDate: '2023',
          endDate: 'Current',
          sections: [
            {
              id: 'overview',
              name: 'Overview',
              icon: <PDFIcon className="w-6" />,
              section: (
                <TCSOverviewSection
                  text={`Tata Consultancy Services is an IT services, consulting and business
            solutions organization that has been partnering with many of the
            world’s largest businesses for the past 50 years.`}
                />
              ),
            },
            {
              id: 'role',
              name: 'Role description',
              icon: <PDFIcon className="w-6" />,
              section: <TCSRoleDescription roleDescription={roleDescription} />,
            },
            {
              id: 'projects',
              name: 'Projects',
              icon: <FolderIcon className="w-6" />,
              section: <TCSProjectsSection content={content} />,
            },
          ],
          projects: [
            {
              id: 'astro',
              name: 'Astro',
              section: (
                <TCSAstroSection
                  responsibilities={responsibilities}
                  astroInfo={astroInfo}
                />
              ),
            },
          ],
        },
      ],
      separatorText: 'Work experience',
    },
  },
  {
    id: 'es',
    name: 'Español',
    availableLanguages: {
      title: 'Selecione un idioma',
      list: [
        {
          id: 'es',
          name: 'Spanish',
          level: 'Native',
          width: 'w-full',
        },
        {
          id: 'en',
          name: 'English',
          level: 'Proficient',
          width: 'w-11/12',
        },
      ],
    },
    routes: [
      {
        text: 'Experiencia',
        href: '/experience',
        icon: <ExperienceIcon className="w-full h-full" />,
      },
      {
        text: 'Sobre mi',
        href: '/about-me',
        icon: <AboutMeIcon className="w-full h-full" />,
      },
      {
        text: 'Certificados',
        href: '/certificates',
        icon: <CertificatesIcon className="w-full h-full" />,
      },
      {
        text: 'Pericia',
        href: '/expertise',
        icon: <ExpertiseIcon className="w-full h-full" />,
      },
      {
        text: 'Contacto',
        href: '/contact',
        icon: <ContactIcon className="w-full h-full" />,
      },
    ],
    header: {
      role: 'Ingeniero en Sistemas',
    },
    experiences: {
      introCard: {
        role: 'Ingeniero de Software',
        location: 'en Tata Consultancy Services',
        urlLocation: 'https://www.tcs.com/',
        text1: 'El futuro es AHORA, entonces',
        text2: `Adaptémonos al futuro JUNTOS!`,
      },
      jobs: [
        {
          id: 'tcs',
          name: 'Tata Consultancy Services',
          startDate: '2023',
          endDate: 'Actualmente',
          sections: [
            {
              id: 'overview',
              name: 'Descripción general',
              icon: <PDFIcon className="w-6" />,
              section: (
                <TCSOverviewSection
                  text={`Tata Consultancy Services es una organización de servicios de IT, consultoría y soluciones comerciales, que se ha estado asociando con muchas de las empresas más grandes del mundo, durante los últimos 50 años.`}
                />
              ),
            },
            {
              id: 'role',
              name: 'Descripción del cargo',
              icon: <PDFIcon className="w-6" />,
              section: (
                <TCSRoleDescription roleDescription={roleDescriptionSpanish} />
              ),
            },
            {
              id: 'projects',
              name: 'Proyectos',
              icon: <FolderIcon className="w-6" />,
              section: <TCSProjectsSection content={contentSpanish} />,
            },
          ],
          projects: [
            {
              id: 'astro',
              name: 'Astro',
              section: (
                <TCSAstroSection
                  responsibilities={responsibilitiesSpanish}
                  astroInfo={astroInfoSpanish}
                />
              ),
            },
          ],
        },
      ],
      separatorText: 'Experiencia Laboral',
    },
  },
];
