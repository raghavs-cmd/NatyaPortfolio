import React from 'react';

const iconProps: React.SVGProps<SVGSVGElement> = {
    width: "20",
    height: "20",
    className: "text-accent",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
};

export const FigmaIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M12 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path d="M12 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        <path d="M12 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        <path d="M18 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path d="M6 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
);

export const FlutterFlowIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M12.5 5.5l-6 6" />
        <path d="M18.5 5.5l-6 6" />
        <path d="M6.5 12.5l6 6" />
    </svg>
);

export const AdobeXdIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M15.5 2.5h-7A6 6 0 0 0 2.5 8.5v7a6 6 0 0 0 6 6h7a6 6 0 0 0 6-6v-7a6 6 0 0 0-6-6z" />
        <path d="M9.5 8.5l5 7" />
        <path d="M14.5 8.5l-5 7" />
    </svg>
);

export const Html5Icon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M2 3l1.6 18L12 23l8.4-2L22 3H2z" />
        <path d="M12 7v12l-5-1.5V7h5z" />
    </svg>
);

export const Css3Icon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M2 3l1.6 18L12 23l8.4-2L22 3H2z" />
        <path d="M12 7v12l5-1.5V7h-5z" />
    </svg>
);

export const JavascriptIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M12 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        <path d="M18 6a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M6 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    </svg>
);

export const CIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M18.37 7.23A8 8 0 1 0 7.23 18.37" />
    </svg>
);

export const PythonIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M13 11V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2" />
        <path d="M11 13v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2" />
        <path d="M7 11h4a2 2 0 0 0 2-2V7" />
        <path d="M17 13h-4a2 2 0 0 0-2 2v2" />
    </svg>
);

export const SqlIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
);

export const UserResearchIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <circle cx="10" cy="8" r="5" />
        <path d="M17.5 17.5L14 14" />
        <path d="M8 16a6 6 0 0 0-6 6" />
    </svg>
);

export const DesignSystemsIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
    </svg>
);

export const ProductStrategyIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
    </svg>
);