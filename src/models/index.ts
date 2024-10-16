export interface ILanguage {
  id: string;
  routes: IRoute[];
  name: string;
  header?: {
    role: string;
  };
}

export interface IRoute {
  text: string;
  href: string;
  id?: string;
  icon?: JSX.Element;
}
