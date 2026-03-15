export interface CERTIFICATE_ENTITY {
    Organization: string;
    Certificate: string;
    proof: string;
    Technologies: string;
    name: string;
  }

  export interface SKILL_ENTITY {
    skill: string;
    technologies: TECH[];
  }

    export interface TECH {
    proof?: string;
    technologies: string;
  }

 export interface TechNode {
  technologies: string;
  proof?: string;
  children?: TechNode[];
}

/** Flat node with expandable and level information */
export interface SkillsFlatNode {
  expandable: boolean;
  technologies: string;
  proof: string | undefined;
  level: number;
}