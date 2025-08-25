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

export const CanvaIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M6.34 17.66a9 9 0 1 0 11.32-11.32" />
        <circle cx="8.5" cy="8.5" r="2" />
    </svg>
);

export const FramerIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M6 12h12V6H6v6zm0 6h6v-6H6v6z" />
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