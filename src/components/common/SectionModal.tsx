import Modal from '@/components/common/Modal';
import React from 'react';

interface SectionModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function SectionModal({
  isOpen,
  setOpen,
  children,
}: SectionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      setOpen={setOpen}
      className="flex h-full flex-col justify-center items-center rounded-xl bg-secondary-700 border border-secondary-50"
    >
      {children}
    </Modal>
  );
}
