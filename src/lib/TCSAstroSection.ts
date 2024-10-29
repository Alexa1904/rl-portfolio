import { IResponsibility } from '@/models';
import { title } from 'process';

export const responsibilities: IResponsibility[] = [
  {
    id: 'requirements-analysis',
    name: 'Requirements Analysis',
    description:
      'Collaborated with stakeholders to gather requirements and understand user needs, ensuring the feature would align with business goals and improve user experience.',
  },
  {
    id: 'database-design-and-integration',
    name: 'Database Design and Integration',
    description:
      'Managed and optimized database schemas using MongoDB/Mongoose, implementing indexing and query optimization strategies to improve data access speeds.',
  },
  {
    id: 'api-design-and-development',
    name: 'API Design and Development',
    description:
      'Designed and implemented RESTful API endpoints to facilitate seamless communication between frontend and backend systems, ensuring compliance with REST principles, data integrity and efficient data retrieval.',
  },
  {
    id: 'performance-optimization',
    name: 'Performance Optimization',
    description:
      'Conducted performance testing and optimization, resulting in improved response times and reduced load on the server, enhancing the user experience even during peak usage.',
  },

  {
    id: 'data-validation-and-security',
    name: 'Data Validation and Security',
    description:
      'Implemented comprehensive data validation to ensure the data integrity and incorporated security measures such as authentication and authorization to protect sensitive user information.',
  },

  {
    id: 'testing-and-quality-assurance',
    name: 'Testing and Quality Assurance',
    description:
      'Created unit and integration tests to validate the functionality of the API and ensure that all edge cases were handled. Conducted load testing to assess performance under various scenarios.',
  },
  {
    id: 'team-feedback-loop',
    name: 'Team Feedback loop',
    description:
      'Engaged in regular stand-up meetings and sprint reviews, fostering open communication with the frontend team to align development efforts and quickly address any issues that arose during implementation.',
  },
  {
    id: 'mentorship-and-collaboration',
    name: 'Mentorship and Collaboration',
    description:
      'Provided guidance and mentorship to junior developers, fostering a collaborative environment. Actively participated in agile ceremonies, facilitating discussions and incorporating feedback from the team.',
  },
];

export const content = {
  title: 'CONTENT',
  content: [
    { id: 'overview', name: 'Overview' },
    { id: 'role', name: 'My Role' },
    {
      id: 'key-collaboration',
      name: 'Key Collaboration',
    },
  ],
};

export const astroInfo = {
  dateInfo: 'By PwC - February 2023',
  whatIsAstro: {
    title: 'What is ASTRO?',
    text1: `Astro is an internal project owned by Price Waterhouse Cooper (PwC), designed to streamline various business processes and enhance productivity. It serves as a centralized platform that integrates multiple functionalities, making it easier for employees to manage their tasks and workflows efficiently.`,
    text2: `Overall, Astro serves as a vital tool for PwC employees, enhancing operational efficiency and fostering collaboration across teams.`,
  },
  timeline: {
    title: 'Timeline & status',
    text1:
      'Involved since 2023. Status: Active (Continuos enhancements and new features)',
  },
  role: {
    title: 'Role',
    text1: 'Backend Developer',
  },
  responsibilities: {
    title: 'My Role and Responsibilities',
    text1: `As a Backend Developer on Astro, I am responsible for designing and implementing scalable server-side solutions to enhance the platform's functionality and performance.`,
    text2: 'My contributions included:',
  },
  keyCollaboration: {
    title: 'Key Collaboration',
    text1: `I took ownership of the "Enter Time" story, which allows employees to track their working hours, submit time entries, and manage their schedules seamlessly. As the main developer for mentioned story, I am driving the vision and strategy for its development, contributing to a smoother user experience and improved overall project efficiency, allowing PwC to enhance its internal time tracking capabilities.`,
  },
};

// SPANISH SECTIONS

export const contentSpanish = {
  title: 'CONTENIDO',
  content: [
    { id: 'overview', name: 'Descripción' },
    { id: 'role', name: 'Mi Cargo' },
    {
      id: 'key-collaboration',
      name: 'Colaboración clave',
    },
  ],
};

export const responsibilitiesSpanish: IResponsibility[] = [
  {
    id: 'requirements-analysis',
    name: 'Análisis de Requerimientos',
    description:
      'Colaboré con "stakeholders" para recopilar requisitos y comprender las necesidades de los usuarios, garantizando que la función se alineara con los objetivos comerciales y mejorara la experiencia del usuario.',
  },
  {
    id: 'database-design-and-integration',
    name: 'Diseño e Integración de Bases de Datos',
    description:
      'Gestioné y optimicé esquemas de bases de datos, utilizando MongoDB/Mongoose e implementando estrategias de indexación y optimización de "queries", para mejorar las velocidades de acceso a los datos.',
  },
  {
    id: 'api-design-and-development',
    name: 'Diseño y Desarrollo de API',
    description:
      'Diseñé e implementé "endpoints" de API RESTful, para facilitar una comunicación fluida entre los sistemas frontend y backend, garantizando el cumplimiento de los principios REST, la integridad de los datos y la recuperación eficiente de datos.',
  },
  {
    id: 'performance-optimization',
    name: 'Optimización de Rendimiento',
    description:
      'Realicé pruebas y optimización del rendimiento, permitiendo disminuir el tiempo de respuesta y reducir la carga en el servidor, mejorando, de esta manera, la experiencia del usuario, incluso durante el tiempo de uso máximo',
  },

  {
    id: 'data-validation-and-security',
    name: 'Validación y Seguridad de Datos',
    description:
      'Implementé una validación integral de datos para garantizar la integridad de los mismos, de igual forma incorporé medidas de seguridad, como autenticación y autorización, para proteger la información confidencial del usuario.',
  },

  {
    id: 'testing-and-quality-assurance',
    name: 'Pruebas y Garantías de Calidad',
    description:
      'Creé pruebas unitarias y de integración para validar la funcionalidad de las diferentes APIs y garantizar que se cubren todos los casos extremos. Realicé, también, pruebas de carga para evaluar el rendimiento en distintos escenarios',
  },
  {
    id: 'team-feedback-loop',
    name: 'Reuniones de retroalimentación con el equipo',
    description:
      'Participé en reuniones periódicas y revisiones de sprint, fomentando la comunicación abierta con el equipo para asi alinear los esfuerzos de desarrollo y abordar rápidamente cualquier problema que surgiera durante la implementación.',
  },
  {
    id: 'mentorship-and-collaboration',
    name: 'Mentoría y Colaboración',
    description:
      'Proporcioné orientación y tutoría a desarrolladores junior, fomentando un entorno colaborativo. Participé activamente en ceremonias ágiles, facilitando discusiones e incorporando comentarios del equipo.',
  },
];

export const astroInfoSpanish = {
  dateInfo: 'Por PwC - Febrero 2023',
  whatIsAstro: {
    title: '¿Qué es ASTRO?',
    text1: `Astro es un proyecto interno propiedad de Price Waterhouse Cooper (PwC), diseñado para agilizar diversos procesos comerciales y mejorar la productividad. Sirve como una plataforma centralizada que integra múltiples funcionalidades, lo que facilita a sus empleados, la gestión eficiente de sus tareas y flujos de trabajo.`,
    text2: `En general, Astro es una herramienta vital para los empleados de PwC, ya que mejora la eficiencia operativa y fomenta la colaboración entre equipos.`,
  },
  timeline: {
    title: 'Línea de Tiempo y Estatus',
    text1:
      'Involucrada desde 2023. Estado: Activo (Mejoras continuas y nuevas funcionalidades)',
  },
  role: {
    title: 'Rol',
    text1: 'Desarrollador Backend',
  },
  responsibilities: {
    title: 'Mi Rol y Responsabilidades',
    text1: `Como desarrollador backend en Astro, soy responsable de diseñar e implementar soluciones escalables del lado del servidor, para mejorar la funcionalidad y el rendimiento de la plataforma.`,
    text2: 'Mis contribuciones incluyeron:',
  },
  keyCollaboration: {
    title: 'Colaboración Clave',
    text1: `Me hice cargo de la historia "Enter time", que permite a los empleados realizar un seguimiento de sus horas de trabajo y administrar sus horarios sin problemas. Como desarrollador principal de la historia mencionada, estoy impulsando la visión y la estrategia para su desarrollo, contribuyendo a una experiencia de usuario más fluida y a una mejora en la eficiencia general del proyecto..`,
  },
};
