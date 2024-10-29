import React from 'react';
import LaptopFrameIcon from '@/components/icons/LaptopFrameIcon';
import ResponsibilitiesCard from './ResponsibilitiesCard';

function Overview() {
  return <div>Overview</div>;
}

function MyRole() {
  return <div>Overview</div>;
}

function KeyCollaboration() {
  return <div>Overview</div>;
}

function TextSection({
  text,
  title,
  className,
}: Readonly<{
  text: string;
  title: string;
  className?: string;
}>) {
  return (
    <div className={`w-full ${className}`}>
      <p className="font-sairaStencilOne text-xl text-secondary-50">{title}</p>
      <p className="w-full text-justify text-secondary-200 mt-2 text-lg">
        {text}
      </p>
    </div>
  );
}

export default function TCSAstroSection() {
  const [activeContent, setActiveContent] = React.useState({
    id: '',
    name: '',
  });
  const content = [
    { id: 'overview', name: 'Overview' },
    { id: 'role', name: 'My Role' },
    {
      id: 'key-collaboration',
      name: 'Key Collaboration',
    },
  ];

  // - - - - - -
  //       - -, I'm the
  //       main developer in charge of analyzing and implementing new backend
  //       enhancement features for the Time Management "Enter Time" story as well
  //       as maintaining and optimizing existing functionalities.
  const responsibilities = [
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
        'Designed and implemented RESTful API endpoints to facilitate seamless communication between the frontend and backend systems. This involved defining data models, establishing endpoints, and ensuring compliance with REST principles, data integrity and efficient data retrieval.',
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
      id: 'mentorship-and-collaboration-currently',
      name: 'Mentorship and Collaboration Currently',
      description:
        'Provided guidance and mentorship to junior developers, fostering a collaborative environment. Actively participated in agile ceremonies, facilitating discussions and incorporating feedback from the team.',
    },
  ];
  return (
    <div className="w-full h-full flex flex-row relative overflow-y-scroll">
      <div className="w-full bg-gradient-to-b from-secondary-500 to-secondary-700 h-[600px] z-0" />
      <div className="w-[95%] flex flex-col items-center absolute">
        <div className="flex flex-col items-center mb-8">
          <h1 className="bg-gradient-to-b from-secondary-100 to-primary-300 text-5xl inline-block text-transparent bg-clip-text pt-7 font-sairaStencilOne">
            ASTRO
          </h1>
          <p className="text-secondary-50 font-roboto text-lg mt-4">
            By PwC - February 2023
          </p>
        </div>
        <div className="w-4/5 h-[700px] relative">
          <div className="w-full flex justify-center absolute">
            <div className="bg-tcs-background w-4/5 h-[600px] bg-cover left-0 right-0 mt-24 shadow-lg border border-secondary-400 rounded-md" />
          </div>
          <LaptopFrameIcon className="w-full" />
        </div>
        <div className="w-4/5 mt-24 mb-24">
          <div className="w-full flex flex-row">
            <div className="w-2/3 pr-24">
              <TextSection
                title="What is ASTRO?"
                text="Astro is an internal project owned by PriceWaterHouse Cooper
              (PwC), designed to streamline various business processes and
              enhance productivity. It serves as a centralized platform that
              integrates multiple functionalities, making it easier for
              employees to manage their tasks and workflows efficiently."
              />
              <p className="mt-5 text-justify text-secondary-200 text-lg">
                Overall, Astro serves as a vital tool for PwC employees,
                enhancing operational efficiency and fostering collaboration
                across teams.
              </p>
            </div>
            <div className="w-1/3 flex flex-col space-y-12">
              <TextSection
                title="Timeline & status"
                text="Involved since 2023. Status: Active (Continuos enhancements and new features)"
              />
              <TextSection title="Role" text="Backend Developer" />
            </div>
          </div>
          <div className="w-full mt-24">
            <p className="font-sairaStencilOne text-xl text-secondary-50">
              My Role and Responsibilities
            </p>
            <p className="w-full text-justify text-secondary-200 mt-2 text-lg">
              As a Backend Developer on the Astro internal project at PwC, I am
              responsible for designing and implementing scalable server-side
              solutions to enhance the platform's functionality and performance.
              <span className="font-sairaStencilOne text-xl text-secondary-50">
                {' '}
                My contributions included:
              </span>
            </p>
            <div className="w-full flex flex-row flex-wrap space-y-4">
              {responsibilities.map((resp) => (
                <ResponsibilitiesCard />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[10%] text-secondary-50 right-6 fixed top-[10%]">
        <h1 className="font-sairaStencilOne mb-2 text-secondary-200">
          CONTENT
        </h1>
        <div className="w-full flex flex-col space-y-1 ">
          {content.map((con) => (
            <button
              type="button"
              className={`${
                con.id === activeContent?.id
                  ? 'text-secondary-100'
                  : 'text-secondary-300 hover:text-secondary-200'
              } w-full flex justify-start`}
              key={con.id}
              onClick={(e) => {
                e.preventDefault();
                setActiveContent(con);
              }}
            >
              {con.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <p>
       .
      </p> */
}
