export type TService = {
  name: {
    fr: string;
    en: string;
    ar : string;
  };
  img: string;
  description: {
    en: string[];
    fr: string[];
    ar: string[];
  };
};

export type TProject = {
  name: {
    fr: string;
    en: string;
    ar: string;
  };
  description: {
    fr: string;
    en: string;
    ar: string;
  };
  img: string;
  details?: {
    viste: string;
    code: string;
  };
};
