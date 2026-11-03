export interface CERTIFICATE_ENTITY {
  Organization: string;
  Certificate: string;
  proof: string;
  Technologies: string;
  name: string;
    projects?: PROJECT_ENTITY[];
}

export interface PROJECT_ENTITY{
heading?: string;
    description?: string[] | [];
    // description2?: string;
    // description3?: string;
    // description4?: string;
    url?: string;
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
export interface SkillsFlatNode {
  expandable: boolean;
  technologies: string;
  proof: string | undefined;
  level: number;
}