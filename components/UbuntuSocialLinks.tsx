 // components/UbuntuSocialLinks.tsx

"use client";

type UbuntuSocialLinksProps = {
  dark?: boolean;
};

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/?text=Hello%20Ubuntu%20Couture%20House",
    color: "#25D366",
    hoverColor: "#1ebe5d",
    path: "M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.8c0 2.1.6 4.1 1.6 5.9L.1 23.9l6.3-1.7c1.7.9 3.6 1.4 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3ZM12.1 21.5c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.7 9.7 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.3-4.4 9.7-9.8 9.7Zm5.4-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.4.6 1.9.8.8.3 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4Z",
  },
  {
    label: "Instagram",
    href: "#",
    color: "#E1306C",
    hoverColor: "#c72b5f",
    path: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.2-2.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
  },
  {
    label: "Facebook",
    href: "#",
    color: "#1877F2",
    hoverColor: "#1264d2",
    path: "M14 8h3V4.2c-.5-.1-1.8-.2-3.4-.2-3.4 0-5.7 2.1-5.7 5.9v3.3H4v4.3h3.9V22h4.7v-4.5h3.8l.6-4.3h-4.4V10.2c0-1.2.3-2.2 1.4-2.2Z",
  },
  {
    label: "TikTok",
    href: "#",
    color: "#00F2EA",
    hoverColor: "#00cfc8",
    path: "M19.2 7.1a5.8 5.8 0 0 1-3.5-1.2v8.2a5.9 5.9 0 1 1-5.9-5.9c.4 0 .8 0 1.2.1v3a3 3 0 1 0 1.7 2.7V2h3a5.8 5.8 0 0 0 3.5 2.7v2.4Z",
  },
  {
    label: "YouTube",
    href: "#",
    color: "#FF0000",
    hoverColor: "#d90000",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.8V8.2l6.3 3.8-6.3 3.8Z",
  },
];

export default function UbuntuSocialLinks({
  dark = false,
}: UbuntuSocialLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href === "#" ? undefined : "_blank"}
          rel={social.href === "#" ? undefined : "noopener noreferrer"}
          aria-label={social.label}
          title={social.label}
          className="ubuntu-social-icon group flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#c9a45d] focus-visible:outline-offset-3"
          style={{
            borderColor: dark ? "rgba(255,255,255,0.16)" : `${social.color}55`,
            backgroundColor: dark
              ? "rgba(255,255,255,0.035)"
              : "rgba(255,255,255,0.45)",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.borderColor = social.color;
            event.currentTarget.style.backgroundColor = `${social.color}12`;
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.borderColor = dark
              ? "rgba(255,255,255,0.16)"
              : `${social.color}55`;
            event.currentTarget.style.backgroundColor = dark
              ? "rgba(255,255,255,0.035)"
              : "rgba(255,255,255,0.45)";
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110"
            fill={social.color}
            aria-hidden="true"
          >
            <path d={social.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}