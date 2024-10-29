import React from 'react';
import LaptopFrameIcon from '@/components/icons/LaptopFrameIcon';
import ResponsibilitiesCard from './ResponsibilitiesCard';
import { IResponsibility } from '@/models';
import { motion } from 'framer-motion';

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

interface TCSAstroSectionProps {
  responsibilities: IResponsibility[];
}

export default function TCSAstroSection({
  responsibilities,
}: TCSAstroSectionProps) {
  const [activeContent, setActiveContent] = React.useState({
    id: '',
    name: '',
  });
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  // - - - - - -
  //       - -, I'm the
  //       main developer in charge of analyzing and implementing new backend
  //       enhancement features for the Time Management "Enter Time" story as well
  //       as maintaining and optimizing existing functionalities.

  return (
    <>
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
            <div className="bg-astro-background w-4/5 h-[600px] bg-cover left-0 right-0 mt-24 shadow-lg border border-secondary-400 rounded-md" />
          </div>
          <LaptopFrameIcon className="w-full" />
        </div>
        <div className="w-4/5 mt-24 mb-24">
          <div id="overview" className="w-full flex flex-row">
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

          <div id="role" className="w-full mt-24">
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
            <div className="w-full flex flex-wrap gap-y-9 mt-10">
              {responsibilities.map((resp, index) => (
                <ResponsibilitiesCard
                  index={index}
                  activeIndex={activeIndex}
                  responsibility={resp}
                  flip={activeIndex === index ? false : true}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </div>
          </div>

          <div id="key-collaboration" className="w-full mt-24">
            <p className="font-sairaStencilOne text-xl text-secondary-50">
              Key Collaboration
            </p>
            <p className="w-full text-justify text-secondary-200 mt-2 text-lg">
              I took ownership of the "Enter Time" story, driving the vision and
              strategy for its development, where I contributed to a smoother
              user experience and improved overall project efficiency, allowing
              PwC to enhance its internal time tracking capabilities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <p>
       .
      </p> */
}
