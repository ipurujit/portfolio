import React from 'react';
import { SOCIAL_LINKS } from '../data/common';
import { Linkedin, Github, Mail, ExternalLink, MessageSquare } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

// Custom Google Scholar SVG icon
const ScholarIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M6 10v7c0 2 3 4 6 4s6-2 6-4v-7" />
    <line x1="22" y1="10" x2="22" y2="16" />
  </svg>
);

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 18,
  showLabels = false,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'linkedin':
        return <Linkedin size={iconSize} />;
      case 'github':
        return <Github size={iconSize} />;
      case 'scholar':
        return <ScholarIcon size={iconSize} />;
      case 'email':
        return <Mail size={iconSize} />;
      case 'whatsapp':
        return <MessageSquare size={iconSize} />;
      default:
        return <ExternalLink size={iconSize} />;
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target={link.url.startsWith('mailto:') ? undefined : '_blank'}
          rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          aria-label={link.ariaLabel}
          title={link.label}
          className="inline-flex items-center gap-2 p-2 sm:px-3 sm:py-2 border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          {getIcon(link.id)}
          {showLabels && (
            <span className="text-sm font-medium">{link.label}</span>
          )}
        </a>
      ))}
    </div>
  );
};
