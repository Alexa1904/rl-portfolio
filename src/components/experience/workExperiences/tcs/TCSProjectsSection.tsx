'use client';
import SectionModal from '@/components/common/SectionModal';
import ExecutableIcon from '@/components/icons/ExecutableIcon';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import React from 'react';

interface TCSProjectsSectionProps {
  content: { title: string; content: { id: string; name: string }[] };
}

export default function TCSProjectsSection({
  content,
}: TCSProjectsSectionProps) {
  const [language] = useLanguage();
  const [projects, setProjects] = React.useState(
    language.experiences?.jobs.find((job) => job.id === 'tcs')?.projects
  );
  const [modalSection, setModalSection] = React.useState<JSX.Element>();
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    setProjects(
      language.experiences?.jobs.find((job) => job.id === 'tcs')?.projects
    );
  }, [language]);
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="w-11/12 py-4 flex flex-row justify-start">
          {projects?.map((project) => (
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: '#7A684F',
              }}
              onClick={(e) => {
                e.preventDefault();
                setModalSection(project.section);
                setOpen(true);
              }}
              type="button"
              className="w-24 h-24 border flex flex-col items-center justify-center text-xl font-roboto text-white rounded-md shadow-md"
            >
              <ExecutableIcon className="w-10" />
              <p>{project.name}.exe</p>
            </motion.button>
          ))}
        </div>
      </div>
      <SectionModal isOpen={isOpen} setOpen={setOpen} content={content}>
        {modalSection}
      </SectionModal>
    </>
  );
}
