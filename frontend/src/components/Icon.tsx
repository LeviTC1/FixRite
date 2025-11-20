import type { IconName } from "../types/icon";

type IconProps = {
  name: IconName;
  className?: string;
};

const iconPaths: Record<IconName, JSX.Element> = {
  shield: (
    <path
      d="M16 3.5 25 6v9.2c0 5.4-3.7 10.4-9 12.9-5.3-2.5-9-7.5-9-12.9V6l9-2.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  bolt: (
    <path
      d="M14 3 7 17h7l-2 12 10-16h-7l2-10Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  tools: (
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M8 4c2.2 0 4 1.8 4 4s-1.8 4-4 4" />
      <path d="M4 4c-2.2 0-4 1.8-4 4s1.8 4 4 4" transform="translate(8 8)" />
      <path d="M6 12 15 21" />
      <path d="M18 5h4l2 3-9 9" />
      <path d="M16 16 26 6" />
    </g>
  ),
  paint: (
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x="5" y="6" width="16" height="10" rx="3" />
      <path d="M21 10h6" />
      <path d="M13 16v12" />
      <path d="M9 28h10" />
    </g>
  ),
  ruler: (
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x="6" y="6" width="20" height="20" rx="4" />
      <path d="M10 6v6" />
      <path d="M16 6v4" />
      <path d="M22 6v6" />
      <path d="M10 20v6" />
      <path d="M16 22v4" />
      <path d="M22 20v6" />
    </g>
  ),
  kitchen: (
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x="6" y="6" width="20" height="20" rx="3" />
      <path d="M6 16h20" />
      <path d="M13 6v10" />
      <circle cx="18" cy="11" r="2" />
      <path d="M11 24h10" />
    </g>
  ),
  roof: (
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M4 15 16 5l12 10" />
      <path d="M7 18v9h18v-9" />
      <path d="M13 20h6v7h-6Z" />
    </g>
  ),
  leaf: (
    <path
      d="M26 6c-7 0-13 4-15 11-1 3 0 6 2 8 3 3 8 2 11-1 4-4 5-10 5-18Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  handyman: (
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x="6" y="14" width="20" height="12" rx="3" />
      <path d="M10 14V9h12v5" />
      <path d="M12 9V7h8v2" />
      <path d="M11 20h10" />
    </g>
  ),
  clipboard: (
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x="7" y="5" width="18" height="24" rx="4" />
      <rect x="11" y="3" width="10" height="6" rx="2" />
      <path d="M11 15h10" />
      <path d="M11 21h6" />
    </g>
  ),
  refresh: (
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M8 17a8 8 0 0 1 14-4" />
      <path d="M22 9v6h-6" />
      <path d="M24 15a8 8 0 0 1-14 4" />
      <path d="M10 23v-6h6" />
    </g>
  ),
  recycle: (
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M6 18 11 9h4l-2 3 3 6" />
      <path d="M26 18 21 27h-4l2-3-3-6" />
      <path d="M14 6h4l6 11" />
    </g>
  ),
};

const Icon = ({ name, className = "" }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
    {iconPaths[name]}
  </svg>
);

export default Icon;
