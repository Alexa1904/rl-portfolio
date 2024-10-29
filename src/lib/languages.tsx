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
import ExecutableIcon from '@/components/icons/ExecutableIcon';
import FolderIcon from '@/components/icons/FolderIcon';
import PDFIcon from '@/components/icons/PDFIcon';
import ZIPIcon from '@/components/icons/ZIPIcon';
import { ILanguage } from '@/models';
import { responsibilities, content } from './TCSAstroSection';

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
              section: <TCSRoleDescription title="Role description" />,
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
              section: <TCSAstroSection responsibilities={responsibilities} />,
            },
          ],
        },
        {
          id: 'avila',
          name: 'Avila Tek',
          startDate: '2020',
          endDate: '2023',
          projects: [],
          sections: [
            {
              id: 'overview',
              name: 'Overview',
              icon: <FolderIcon className="w-6" />,
              projects: [
                {
                  id: 'astro',
                  name: 'Astro',
                  icon: <ExecutableIcon className="w-6" />,
                },
              ],
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
