 "use client";

import React from "react";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M14.1 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H8v3.1h2.7v8h3.4Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M14.2 3c.3 2 1.4 3.4 3.5 3.6v3.1c-1.4-.1-2.5-.5-3.5-1.2v5.9c0 3.5-2.4 5.7-5.5 5.7-3 0-5.2-2.1-5.2-5 0-3.2 2.7-5.3 6.3-5v3.1c-1.6-.2-3 .6-3 1.9 0 1 .8 1.8 1.9 1.8 1.3 0 2.1-.9 2.1-2.4V3h3.4Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.8c0 2.1.6 4.1 1.6 5.9L.1 23.9l6.3-1.7c1.7.9 3.6 1.4 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3ZM12.1 21.5c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.7 9.7 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.3-4.4 9.7-9.8 9.7Zm5.4-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.4.6 1.9.8.8.3 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4Z" />
    </svg>
  );
}

const socials: SocialLink[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/?text=Hello%20Ubuntu%20Couture%20House",
    icon: <WhatsAppIcon />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <InstagramIcon />,
  },
  {
    label: "Facebook",
    href: "#",
    icon: <FacebookIcon />,
  },
  {
    label: "TikTok",
    href: "#",
    icon: <TikTokIcon />,
  },
  {
    label: "YouTube",
    href: "#",
    icon: <YouTubeIcon />,
  },
];

export default function UbuntuSocialLinks({
  dark = false,
}: {
  dark?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          title={social.label}
          target={social.href.startsWith("http") ? "_blank" : undefined}
          rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={[
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1",
            dark
              ? "border-white/15 text-white hover:border-[#c9a45d] hover:bg-[#c9a45d] hover:text-[#17110d]"
              : "border-[#17110d]/15 text-[#17110d] hover:border-[#c9a45d] hover:bg-[#c9a45d]",
          ].join(" ")}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}