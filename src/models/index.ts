/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILanguage {
  id: string;
  routes: IRoute[];
  availableLanguages: IAvailableLanguages;
  name: string;
  header?: {
    role: string;
  };
  experiences?: {
    introCard: {
      role: string;
      location: string;
      urlLocation: string;
      text1: string;
      text2: string;
    };
    jobs: IJob[];
    separatorText: string;
  };
}

export interface IAvailableLanguages {
  title: string;
  list: [
    {
      id: string;
      name: string;
      level: string;
      width: string;
    },
    {
      id: string;
      name: string;
      level: string;
      width: string;
    }
  ];
}

export interface IResponsibility {
  id: string;
  name: string;
  description: string;
}

export interface IJob {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  sections: ISection[];
  projects: IProject[];
}

export interface ISection {
  id: string;
  name: string;
  icon: JSX.Element;
  section: JSX.Element;
}

export interface IProject {
  id: string;
  name: string;
  section: JSX.Element;
}

export interface IRoute {
  text: string;
  href: string;
  id?: string;
  icon?: JSX.Element;
}
