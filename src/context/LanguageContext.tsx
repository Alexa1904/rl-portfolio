'use client';
import React from 'react';
import { ILanguage } from '@/models';
import { languages } from '@/lib/languages';

interface ILanguageContext {
  language: ILanguage;
  setLanguage: React.Dispatch<React.SetStateAction<ILanguage>>;
  languageId: string;
  setLanguageId: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageContext = React.createContext<ILanguageContext>({
  language: languages.find((lan) => lan?.id === 'en') as ILanguage,
  setLanguage: () => {},
  languageId: 'en',
  setLanguageId: () => {},
});

interface LanguageContextProviderProps {
  children: React.ReactNode;
}

export function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = React.useState<ILanguage>(
    languages?.find((lan) => lan.id === 'en') as ILanguage
  );
  const [languageId, setLanguageId] = React.useState<string>('en');

  React.useEffect(() => {
    if (languageId) {
      setLanguage(
        languages?.find((lan) => lan?.id === languageId) as ILanguage
      );
    } else {
      setLanguage(languages?.find((lan) => lan?.id === 'en') as ILanguage);
    }
  }, [languageId]);
  const value = React.useMemo(
    () => ({ language, setLanguage, languageId, setLanguageId }),
    [language, languageId]
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
