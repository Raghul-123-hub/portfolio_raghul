import type { ReactNode } from 'react';

export interface ServiceItem {
  id: string;
  name: string;
  desc: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  tag: string;
  sub: string;
  description: string;
  bullets: string[];
  technologies: string[];
  images: [string, string, string];
  link?: string;
  github?: string;
}

export interface SkillGroup {
  category: string;
  tagline?: string;
  tags: string[];
  skills: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  category?: string;
}

export interface ResearchItem {
  title: string;
  meta: string;
  description: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  graduation: string;
  coursework: string[];
}

export interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  id?: string;
}

export interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}
