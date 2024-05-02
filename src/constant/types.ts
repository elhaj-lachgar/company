export type TService = {
  name: {
    fr : string;
    en : string;
  };
  img: string;
  description: {
    en: string[];
    fr: string[];
  };
};

export type TProject = {
  name: string;
  description: {
    fr : string;
    en : string;
  };
  img: string;
  valid: boolean;
};
