export interface CERTIFICATE_ENTITY {
    Organization: String;
    Certificate: string;
    proof: string;
    Technologies: string;
    name: string;
  }

  export interface SKILL_ENTITY {
    skill: String;
    technologies: TECH[];
  }

    export interface TECH {
    proof?: string;
    technologies: string;
  }
