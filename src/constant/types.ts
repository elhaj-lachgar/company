export type TService = {
  name: {
    fr: string;
    en: string;
  };
  img: string;
  description: {
    en: string[];
    fr: string[];
  };
};

export type TProject = {
  name:{
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  img: string;
  details?: {
    viste: string;
    code: string;
  };
};
