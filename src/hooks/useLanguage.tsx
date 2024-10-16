'use client';
import { useContext } from 'react';
import { LanguageContext } from '../context';

export function useLanguage() {
  const { language, setLanguage, languageId, setLanguageId } =
    useContext(LanguageContext);
  return [language, setLanguage, languageId, setLanguageId] as const;
}
