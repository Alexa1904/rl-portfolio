'use client';
import ExperienceView from '@/components/experience/ExperienceView';
import { useLanguage } from '@/hooks/useLanguage';
import React from 'react';

export default function ExperiencePage() {
  const [language] = useLanguage();
  return <ExperienceView language={language} />;
}
