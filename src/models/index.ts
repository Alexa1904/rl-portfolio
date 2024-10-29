/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILanguage {
  id: string;
  routes: IRoute[];
  name: string;
  header?: {
    role: string;
  };
  experiences?: {
    introCard: any;
    jobs: IJob[];
    separatorText: string;
  };
}

export interface IJob {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  sections: any[];
  projects: any[];
}

export interface IRoute {
  text: string;
  href: string;
  id?: string;
  icon?: JSX.Element;
}
