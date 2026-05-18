import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import type { IconType } from "react-icons";

import "./Socials.css";

interface SocialLink {
  href: string;
  label: string;
  ariaLabel?: string;
  icon?: IconType;
  color?: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "/Dziedzic_Alex_Resume.pdf",
    label: "Resume",
  },
  {
    href: "https://github.com/dziedzic-alex",
    label: "GitHub",
    ariaLabel: "GitHub",
    icon: FaGithub,
    color: "#ffffff",
  },
  {
    href: "https://www.linkedin.com/in/alexdzied",
    label: "LinkedIn",
    ariaLabel: "LinkedIn",
    icon: FaLinkedin,
    color: "#0a66c2",
  },
  {
    href: "mailto:dziedzicalex182@gmail.com",
    label: "Email",
    ariaLabel: "Email",
    icon: FaEnvelope,
    color: "#ea4335",
  },
];

function Socials() {
  return (
    <div className="socials-container">
      {SOCIAL_LINKS.map(({ href, label, ariaLabel, icon: Icon, color }) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          key={label}
        >
          {Icon ? (
            <Icon size={25} aria-hidden="true" style={{ color }} />
          ) : (
            label
          )}
        </a>
      ))}
    </div>
  );
}

export default Socials;
