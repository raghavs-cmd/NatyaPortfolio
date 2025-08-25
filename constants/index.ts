import React from 'react';
import type { Project, SkillCategory, ExperienceItem } from '../types';
import {
    FigmaIcon, FlutterFlowIcon, AdobeXdIcon, CanvaIcon, UserResearchIcon,
    DesignSystemsIcon, ProductStrategyIcon, FramerIcon
} from '../components/SkillIcons';


export const PERSONAL_DETAILS = {
    name: 'Natya Sowparnika',
    role: 'UI/UX Designer',
    email: 'natyasowpa04@gmail.com',
    phone: '9110853001',
    linkedin: 'https://www.linkedin.com/in/natya-sowparnika-a8433a24a/',
    behance: 'https://www.behance.net/natyascs',
    resumeUrl: 'https://drive.google.com/file/d/10WLLwtwYSFU55wFwYry_kyXocG_XJf6-/view?usp=drivesdk',
};

export const PROJECTS: Project[] = [
    {
        id: "proj-01",
        title: "Anti-Aging Skin Oil Landing Page Redesign",
        tags: ["UI Design", "Figma", "UX Research", "UI/UX"],
        cover: "/Anti-aging.jpeg",
        detail: {
            problem: "The existing landing page for the skin oil product had a low conversion rate and a high bounce rate. User feedback indicated the design was outdated and the information architecture was confusing.",
            outcome: "The redesigned landing page saw a 40% increase in user engagement and a 25% uplift in conversions. The new design is modern, clean, and effectively communicates the product's value proposition.",
            process: [
                { step: 'Discover', description: "Conducted competitive analysis and user surveys to identify pain points and market opportunities." },
                { step: 'Define', description: "Created user personas and defined key performance indicators for the redesign." },
                { step: 'Ideate', description: "Developed wireframes and user flows for a more intuitive information architecture." },
                { step: 'Design', description: "Designed high-fidelity mockups and prototypes in Figma, focusing on a clean and modern aesthetic." },
                { step: 'Validate', description: "Ran A/B tests on the new design, which confirmed higher engagement and conversion rates." }
            ],
            gallery: [],
            figmaUrl: "https://embed.figma.com/proto/iynhigsufbphklwuXTndLj/Projectss?node-id=137-6&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share"
        }
    },
    {
        id: "proj-02",
        title: "Smart Lighting & AC System App",
        tags: ["Prototyping", "Figma", "Design Systems", "UI/UX"],
        cover: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=870&h=600&fit=crop",
        detail: {
            problem: "Users of a smart home system found the mobile app for controlling lighting and air conditioning to be unintuitive and slow. Key features were buried in menus, leading to a frustrating user experience.",
            outcome: "A complete app redesign focusing on a task-based workflow. The new dashboard provides one-tap access to common controls, and user satisfaction scores increased by 60% after launch.",
            process: [
                 { step: 'Discover', description: "Mapped user journeys and identified critical usability issues in the existing application." },
                 { step: 'Define', description: "Redefined the information architecture to prioritize frequently used features." },
                 { step: 'Ideate', description: "Sketched and wireframed a new dashboard-centric user interface." },
                 { step: 'Design', description: "Built a component-based design system and created interactive prototypes for testing." },
                 { step: 'Validate', description: "Conducted usability testing with real users, leading to a 60% increase in satisfaction scores post-launch." }
            ],
            gallery: [],
            prototypeUrl: "https://www.figma.com/proto/iynhigsufbphklwuXTndLj/Projectss?node-id=24-2017&t=VrEIYjwODH3FEmwZ-1"
        }
    },
    {
        id: "proj-03",
        title: "Amazon Landing Page Redesign",
        tags: ["Web", "E-commerce", "UI Design", "UX Analysis", "UI/UX"],
        cover: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&h=600&fit=crop",
        detail: {
            problem: "This was a conceptual project to reimagine the Amazon homepage. The goal was to reduce visual clutter, improve product discovery, and create a more personalized shopping experience.",
            outcome: "The proposed redesign features a cleaner, card-based layout with dynamic content tailored to user behavior. A streamlined navigation and powerful search filter system were key highlights.",
            process: [
                { step: 'Discover', description: "Performed a heuristic evaluation of the existing Amazon site to identify UX weaknesses." },
                { step: 'Define', description: "Analyzed user behavior to define requirements for a more personalized experience." },
                { step: 'Ideate', description: "Developed low-fidelity wireframes exploring various card-based layouts." },
                { step: 'Design', description: "Created high-fidelity UI designs in Figma, focusing on a clean and modern e-commerce interface." },
                { step: 'Validate', description: "Presented interaction design mockups to gather feedback on the improved user flow." }
            ],
            gallery: [],
            figmaUrl: "https://embed.figma.com/proto/iynhigsufbphklwuXTndLj/Projectss?node-id=24-6&scaling=min-zoom&content-scaling=fixed&page-id=24%3A2&embed-host=share"
        }
    },
    {
        id: "proj-04",
        title: "Motherhood App Redesign",
        tags: ["Figma", "Rapid Prototyping", "Mobile", "Redesign", "UI/UX"],
        cover: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=870&h=600&fit=crop",
        detail: {
            problem: "An existing app for new mothers was information-heavy but poorly organized. Users felt overwhelmed and couldn't easily find relevant content for their specific stage of motherhood.",
            outcome: "The app was restructured around a personalized timeline. The redesign introduced features like community forums and expert Q&A, making it a supportive and indispensable tool for users.",
            process: [
                { step: 'Discover', description: "Conducted interviews with new mothers to understand their needs and frustrations." },
                { step: 'Define', description: "Created empathy maps and a content strategy to address user pain points directly." },
                { step: 'Ideate', description: "Sketched a new app structure centered around a personalized, timeline-based user experience." },
                { step: 'Design', description: "Developed high-fidelity prototypes in Figma for a visually calming and easy-to-navigate interface." },
                { step: 'Validate', description: "Iterated on the design based on user feedback, resulting in a more supportive and valuable product." }
            ],
            gallery: [],
            figmaUrl: "https://embed.figma.com/proto/iynhigsufbphklwuXTndLj/Projectss?node-id=24-958&p=f&scaling=min-zoom&content-scaling=fixed&page-id=24%3A871&embed-host=share"
        }
    }
];

export const SKILLS: SkillCategory[] = [
    {
        title: 'Design Tools',
        skills: [
            { name: 'Figma', icon: React.createElement(FigmaIcon) },
            { name: 'Flutter Flow', icon: React.createElement(FlutterFlowIcon) },
            { name: 'Adobe XD', icon: React.createElement(AdobeXdIcon) },
            { name: 'Canva', icon: React.createElement(CanvaIcon) },
            { name: 'Framer', icon: React.createElement(FramerIcon) },
        ],
    },
    {
        title: 'Other Expertise',
        skills: [
            { name: 'User Research', icon: React.createElement(UserResearchIcon) },
            { name: 'Design Systems', icon: React.createElement(DesignSystemsIcon) },
            { name: 'Product Strategy', icon: React.createElement(ProductStrategyIcon) },
        ],
    },
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        date: 'Jan 2025 – Jun 2025',
        title: 'UI/UX Designer Intern',
        company: '75F Smart Innovations',
        description: 'Gained hands-on experience in Figma, user research, design strategy, and product design in a professional environment.'
    }
];

export const EDUCATION: ExperienceItem[] = [
    {
        date: 'Dec 2021 – May 2025',
        title: 'B.E. in Computer Science',
        company: 'Vidya Vardhaka College of Engineering',
        description: 'Achieved a CGPA of 8.63 while building a strong foundation in software engineering and design principles.'
    }
];
