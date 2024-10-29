'use client';
import React from 'react';
import { motion } from 'framer-motion';
import IntroCard from './introCard/IntroCard';
import Separator from '../common/Separator';
import FolderIcon from '../icons/FolderIcon';
import PageCard from '../common/PageCard';
import { IJob, ILanguage } from '@/models';
import SectionModal from '../common/SectionModal';

interface ExperienceViewProps {
  language: ILanguage;
}

export default function ExperienceView({ language }: ExperienceViewProps) {
  const [innerWidth, setInnerWidth] = React.useState(window?.innerWidth);
  const [activeJob, setActiveJob] = React.useState<IJob | null>(
    language.experiences?.jobs[0] ?? null
  );
  const [activeSection, setActiveSection] = React.useState();

  React.useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <>
      <motion.div className="w-full flex flex-col">
        <IntroCard innerWidth={innerWidth} language={language} />
        <Separator
          text={language?.experiences?.separatorText ?? ''}
          className="mt-3"
        />
        <motion.div className="w-full flex flex-row space-x-14">
          {language.experiences?.jobs.map((job, index) => (
            <motion.button
              key={job.id}
              initial={{ opacity: 0, x: 1000 }}
              exit={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 * index }}
              className="flex flex-col items-center"
              onClick={(e) => {
                e.preventDefault();
                setActiveJob(job);
                setActiveSection(job.sections[0]);
              }}
            >
              <FolderIcon className="w-20" />
              <p className="text-white font-roboto mt-2">{job.name}</p>
              <p className="text-white font-roboto">{`${job.startDate} - ${job.endDate}`}</p>
            </motion.button>
          ))}
        </motion.div>
        {activeJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-9"
          >
            <PageCard>
              <p className="w-full h-[8%] bg-secondary-300 flex justify-center items-center text-sm text-secondary-50 shadow-md font-roboto">
                {activeJob?.name ?? ''}
              </p>
              <div className="w-full h-[92%] flex flex-row">
                <div className="w-1/5 h-full flex flex-col border-r border-secondary-300 justify-start items-center py-4 space-y-2">
                  {activeJob.sections?.map((section) => (
                    <motion.div className="w-full flex flex-col items-center">
                      <button
                        key={section.id}
                        type="button"
                        className={`h-8 w-11/12  flex flex-row items-center px-3 space-x-2 text-white ${
                          section.id === activeSection?.id
                            ? 'bg-primary-800 rounded-md'
                            : ''
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(section);
                        }}
                      >
                        {section.icon}
                        <p>{section.name}</p>
                      </button>
                    </motion.div>
                  ))}
                </div>
                <div className="w-4/5 h-full flex justify-center items-center relative">
                  {activeSection?.section}
                </div>
              </div>
            </PageCard>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
