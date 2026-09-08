export interface Project {
  id: string;
  projectNumber: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  filterCategory: 'PYTHON' | 'C' | 'IOT';
  visualType: 'ascii-canvas' | 'binary-search' | 'text-parser' | 'weather-sensor';
  featuresOrConceptsTitle: string;
  featuresOrConcepts: string[];
  actionType: 'github' | 'coming-soon';
  githubUrl?: string;
  statusBadge?: string;
}

export interface SkillCategory {
  id: string;
  categoryTag: string;
  title: string;
  iconName: string;
  skills: string[];
}

export interface Credential {
  id: string;
  issuer: string;
  title: string;
  subtitle: string;
  verified: boolean;
}

export interface CuriosityItem {
  id: string;
  title: string;
  iconName: string;
}
