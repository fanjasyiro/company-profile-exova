import React from 'react';
import { Code2, Workflow } from 'lucide-react';

interface TechnologyIconProps {
  name: string;
  className?: string;
}

export function TechnologyIcon({ name, className = 'h-6 w-6' }: TechnologyIconProps) {
  const normalized = name.toLowerCase().replace(/[\s.-]/g, '');

  switch (normalized) {
    case 'react':
    case 'reactnative':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" className={className} fill="none">
          <mask id="mask-next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
            <circle cx="90" cy="90" r="90" fill="currentColor" />
          </mask>
          <g mask="url(#mask-next)">
            <circle cx="90" cy="90" r="90" fill="currentColor" />
            <path
              d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.141 149.508 157.438Z"
              fill="white"
            />
            <path d="M115.416 54H127.53V106.877L115.416 91.3148V54Z" fill="white" />
          </g>
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M11.5 8H6V10H7.75V17H9.75V10H11.5V8ZM14.25 12.25C14.25 11.25 15.25 10.5 16.5 10.5C17.75 10.5 18.75 11.25 18.75 12.25C18.75 13.5 17.5 14 16.5 14.5C15 15.25 14.25 15.75 14.25 17H19V15.25H16.25C16.5 14.75 17.5 14.25 18.25 13.75C19.25 13 19.5 12.25 19.5 11.5C19.5 9.75 18 9 16.5 9C14.75 9 13.5 10 13.5 11.5L14.25 12.25Z"
            fill="white"
          />
        </svg>
      );
    case 'angular':
      return (
        <svg viewBox="0 0 250 250" className={className} fill="none">
          <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
          <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
          <path d="M125,52.1L66.8,182.6H89.2L100.9,153.4H125H149.1L160.8,182.6H183.2L125,52.1ZM141,133.5H125H109L125,94.8L141,133.5Z" fill="#FFFFFF" />
        </svg>
      );
    case 'vue':
    case 'vuejs':
      return (
        <svg viewBox="0 0 261.76 226.69" className={className}>
          <path d="M161.096.001l-30.225 52.35L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41B883" />
          <path d="M161.096.001l-30.225 52.35L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495E" />
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#EA2D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      );
    case 'springboot':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
            fill="#6DB33F"
          />
          <path
            d="M8.5 12.5C8.5 10.5 10 9 12 9C13.5 9 14.8 9.8 15.3 11L13.8 11.8C13.5 11 12.8 10.5 12 10.5C10.9 10.5 10 11.4 10 12.5C10 13.6 10.9 14.5 12 14.5C12.8 14.5 13.5 14 13.8 13.2L15.3 14C14.8 15.2 13.5 16 12 16C10 16 8.5 14.5 8.5 12.5Z"
            fill="white"
          />
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2L2 7.8V16.2L12 22L22 16.2V7.8L12 2Z"
            fill="#339933"
          />
          <path
            d="M12 4.5L19 8.5V15.5L12 19.5L5 15.5V8.5L12 4.5Z"
            fill="#215732"
          />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M11.9 2C8.7 2 6.8 3.4 6.8 6.1V8.2H12.2V9H4.6C2.4 9 1.5 10.9 1.5 13.2C1.5 15.7 2.8 17.5 5.5 17.5H7.2V15.1C7.2 13.6 8.5 12.3 10.1 12.3H14.1C15.4 12.3 16.5 11.2 16.5 9.9V6.1C16.5 3.5 14.8 2 11.9 2ZM9.5 3.8C10.1 3.8 10.6 4.3 10.6 4.9C10.6 5.5 10.1 6 9.5 6C8.9 6 8.4 5.5 8.4 4.9C8.4 4.3 8.9 3.8 9.5 3.8Z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22C15.3 22 17.2 20.6 17.2 17.9V15.8H11.8V15H19.4C21.6 15 22.5 13.1 22.5 10.8C22.5 8.3 21.2 6.5 18.5 6.5H16.8V8.9C16.8 10.4 15.5 11.7 13.9 11.7H9.9C8.6 11.7 7.5 12.8 7.5 14.1V17.9C7.5 20.5 9.2 22 12.1 22ZM14.5 20.2C13.9 20.2 13.4 19.7 13.4 19.1C13.4 18.5 13.9 18 14.5 18C15.1 18 15.6 18.5 15.6 19.1C15.6 19.7 15.1 20.2 14.5 20.2Z"
            fill="#FFD43B"
          />
        </svg>
      );
    case 'go':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#00ADD8" />
          <path
            d="M7 12C7 9.8 8.8 8 11 8C12.3 8 13.4 8.6 14.1 9.6L12.7 10.7C12.3 10.3 11.7 10 11 10C9.9 10 9 10.9 9 12C9 13.1 9.9 14 11 14C11.7 14 12.2 13.8 12.6 13.4V12.5H11V11H14.5V14.2C13.6 15.3 12.4 16 11 16C8.8 16 7 14.2 7 12Z"
            fill="white"
          />
        </svg>
      );
    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M13.5 2.5L3.5 12.5L6.5 15.5L19.5 2.5H13.5Z" fill="#02569B" />
          <path d="M13.5 12.5L8.5 17.5L13.5 22.5H19.5L14.5 17.5L19.5 12.5H13.5Z" fill="#0175C2" />
          <path d="M8.5 17.5L11.5 14.5L14.5 17.5L11.5 20.5L8.5 17.5Z" fill="#29B6F6" />
        </svg>
      );
    case 'kotlin':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M22 2H2V22H22L12 12L22 2Z" fill="#7F52FF" />
          <path d="M2 22L12 12L2 2V22Z" fill="#C711E1" />
          <path d="M12 12L2 22H22L12 12Z" fill="#E4485D" />
        </svg>
      );
    case 'swift':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#F05138" />
          <path
            d="M17.5 17.5C14.5 18 10 16 7 11C8.5 12.5 11 13.5 13 13.5C11 11.5 9.5 8.5 9.5 5.5C12 8.5 15 11 17.5 12C16 11 15 9.5 15 8C17 9.5 19 12 19 14.5C19 15.5 18.5 16.8 17.5 17.5Z"
            fill="white"
          />
        </svg>
      );
    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#336791" />
          <path
            d="M12 5C8.7 5 6 7.7 6 11C6 13.8 7.9 16.1 10.5 16.8V19H13.5V16.8C16.1 16.1 18 13.8 18 11C18 7.7 15.3 5 12 5ZM12 15C9.8 15 8 13.2 8 11C8 8.8 9.8 7 12 7C14.2 7 16 8.8 16 11C16 13.2 14.2 15 12 15Z"
            fill="white"
          />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#00758F" />
          <path
            d="M6 16V8L10 13L14 8V16H12V11L10 13.5L8 11V16H6ZM16 8H18V14C18 15.1 17.1 16 16 16H15V14H16V8Z"
            fill="#F29111"
          />
        </svg>
      );
    case 'redis':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#DC382D" />
          <path
            d="M12 5L6 8.5V15.5L12 19L18 15.5V8.5L12 5Z"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M12 9V15M8 11L16 13" stroke="white" strokeWidth="1.2" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2C12 2 7 7.5 7 12.5C7 16 9.5 19 12 21.5C14.5 19 17 16 17 12.5C17 7.5 12 2 12 2Z"
            fill="#47A248"
          />
          <path
            d="M12 3V21C11.8 20.8 11.5 20.5 11.2 20.2C9.2 18 7.5 15.5 7.5 12.5C7.5 8.5 11 4.5 12 3Z"
            fill="#499D4A"
          />
          <path d="M12 2V22" stroke="white" strokeWidth="0.75" />
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#232F3E" />
          <path
            d="M6.5 11.5L9 8H10.5L13 11.5L11.5 11.5L11 10.5H8.5L8 11.5H6.5ZM8.8 9.5H10.7L9.75 8.1L8.8 9.5ZM13.5 11.5L15 8H16.2L17.2 10.5L18.2 8H19.5L17.8 11.5H16.6L15.6 9.2L14.7 11.5H13.5Z"
            fill="white"
          />
          <path
            d="M6 14C9.5 16.5 14.5 16.5 18 14"
            stroke="#FF9900"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M22 12.5C21.5 12 20.5 12 20 12.3C19.5 10 17 9 17 9C16.8 7.5 15 7.5 15 7.5V6H13V7.5H11V6H9V7.5H7V9H5V10.5H3V12H2C1.5 13.5 2 15.5 3.5 16.5C6 18.5 10.5 18.5 14.5 18.5C18.5 18.5 21.5 16 22 12.5Z"
            fill="#2496ED"
          />
          <rect x="7" y="10" width="1.5" height="1.5" fill="white" />
          <rect x="9" y="10" width="1.5" height="1.5" fill="white" />
          <rect x="11" y="10" width="1.5" height="1.5" fill="white" />
          <rect x="9" y="8" width="1.5" height="1.5" fill="white" />
          <rect x="11" y="8" width="1.5" height="1.5" fill="white" />
        </svg>
      );
    case 'kubernetes':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#326CE5" />
          <path
            d="M12 5L17.5 8.2V14.8L12 18L6.5 14.8V8.2L12 5Z"
            stroke="white"
            strokeWidth="1.2"
            fill="none"
          />
          <circle cx="12" cy="11.5" r="2" fill="white" />
        </svg>
      );
    case 'cicd':
    case 'cicdpipelines':
      return <Workflow className={`${className} text-[var(--primary)]`} />;
    default:
      return <Code2 className={`${className} text-[var(--primary)]`} />;
  }
}
