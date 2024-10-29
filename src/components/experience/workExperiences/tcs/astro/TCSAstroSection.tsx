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
  astroInfo: {
    dateInfo: string;
    whatIsAstro: {
      title: string;
      text1: string;
      text2: string;
    };
    timeline: {
      title: string;
      text1: string;
    };
    role: {
      title: string;
      text1: string;
    };
    responsibilities: {
      title: string;
      text1: string;
      text2: string;
    };
    keyCollaboration: {
      title: string;
      text1: string;
    };
  };
}

export default function TCSAstroSection({
  responsibilities,
  astroInfo,
}: TCSAstroSectionProps) {
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  return (
    <>
      <div className="w-full bg-gradient-to-b from-secondary-500 to-secondary-700 h-[600px] z-0" />
      <div className="w-[95%] flex flex-col items-center absolute">
        <div className="flex flex-col items-center mb-8">
          <h1 className="bg-gradient-to-b from-secondary-100 to-primary-300 text-5xl inline-block text-transparent bg-clip-text pt-7 font-sairaStencilOne">
            ASTRO
          </h1>
          <p className="text-secondary-50 font-roboto text-lg mt-4">
            {astroInfo?.dateInfo}
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
                title={astroInfo?.whatIsAstro?.title}
                text={astroInfo?.whatIsAstro?.text1}
              />
              <p className="mt-5 text-justify text-secondary-200 text-lg">
                {astroInfo?.whatIsAstro?.text2}
              </p>
            </div>
            <div className="w-1/3 flex flex-col space-y-12">
              <TextSection
                title={astroInfo?.timeline?.title}
                text={astroInfo?.timeline?.text1}
              />
              <TextSection
                title={astroInfo?.role?.title}
                text={astroInfo?.role?.text1}
              />
            </div>
          </div>

          <div id="role" className="w-full mt-24">
            <p className="font-sairaStencilOne text-xl text-secondary-50">
              {astroInfo?.responsibilities?.title}
            </p>
            <p className="w-full text-justify text-secondary-200 mt-2 text-lg">
              {astroInfo?.responsibilities?.text1}
              <span className="font-sairaStencilOne text-xl text-secondary-50">
                {' '}
                {astroInfo?.responsibilities?.text2}
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
            <TextSection
              title={astroInfo?.keyCollaboration?.title}
              text={astroInfo?.keyCollaboration?.text1}
            />
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
