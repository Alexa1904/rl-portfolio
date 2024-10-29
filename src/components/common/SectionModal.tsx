import Modal from '@/components/common/Modal';
import { motion } from 'framer-motion';
import React from 'react';
import CloseIcon from '../icons/CloseIcon';
import Link from 'next/link';

interface SectionModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  content?: { title: string; content: { id: string; name: string }[] };
}

export default function SectionModal({
  isOpen,
  setOpen,
  children,
  content,
}: SectionModalProps) {
  const [activeContent, setActiveContent] = React.useState('');

  const scrolltoHash = function (element_id: string) {
    setActiveContent(element_id);
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };
  return (
    <Modal
      isOpen={isOpen}
      setOpen={setOpen}
      className="flex h-full relative flex-col justify-center items-center rounded-xl bg-secondary-700 border border-secondary-50"
    >
      <motion.button
        onClick={(e) => {
          e.preventDefault();
          setOpen(false);
        }}
        className="absolute top-6 right-6 text-white text-2xl z-50"
      >
        <CloseIcon className="w-5 h-5" />
      </motion.button>
      <div className="w-full h-full flex flex-row relative overflow-y-scroll">
        {children}
      </div>
      <div className="w-[10%] text-secondary-50 right-4 fixed top-[10%]">
        <h1 className="font-sairaStencilOne mb-2 text-secondary-200">
          {content?.title}
        </h1>
        <div className="w-full flex flex-col space-y-1 ">
          {content?.content?.map((con) => (
            <button
              type="button"
              className="w-full flex justify-start text-secondary-300 hover:text-secondary-200"
              onClick={(e) => {
                e.preventDefault();
                scrolltoHash(con.id);
              }}
            >
              {con.name}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}
