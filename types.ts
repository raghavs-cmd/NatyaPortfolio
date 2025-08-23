import type React from 'react';

export interface ProcessStep {
    step: 'Discover' | 'Define' | 'Ideate' | 'Design' | 'Validate';
    description: string;
}

export interface ProjectDetail {
    problem: string;
    outcome: string;
    process: ProcessStep[];
    gallery: string[];
    figmaUrl?: string;
    prototypeUrl?: string;
    prototype?: 'custom';
}

export interface Project {
    id: string;
    title: string;
    tags: string[];
    cover: string;
    detail: ProjectDetail;
}

export interface Skill {
    name: string;
    icon?: React.ReactNode;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface ExperienceItem {
    date: string;
    title: string;
    company: string;
    description: string;
}