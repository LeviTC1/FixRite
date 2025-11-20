import { socials } from "../config/socials";

const SocialIcons = () => (
  <div className="social-icons">
    <a
      href={socials.facebook}
      target="_blank"
      rel="noreferrer"
      aria-label="FixRite on Facebook"
      className="social-link social-link--facebook"
    >
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.53-3.62 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.76h2.58l-.41 2.9h-2.17V22c4.78-.8 8.44-4.94 8.44-9.93Z" />
      </svg>
    </a>
    <a
      href={socials.instagram}
      target="_blank"
      rel="noreferrer"
      aria-label="FixRite on Instagram"
      className="social-link social-link--instagram"
    >
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M16.78 2H7.22A5.24 5.24 0 0 0 2 7.22v9.56A5.24 5.24 0 0 0 7.22 22h9.56A5.24 5.24 0 0 0 22 16.78V7.22A5.24 5.24 0 0 0 16.78 2Zm3.03 14.78a3.03 3.03 0 0 1-3.03 3.03H7.22a3.03 3.03 0 0 1-3.03-3.03V7.22A3.03 3.03 0 0 1 7.22 4.19h9.56a3.03 3.03 0 0 1 3.03 3.03ZM12 6.65A5.35 5.35 0 1 0 17.35 12 5.35 5.35 0 0 0 12 6.65Zm0 8.55A3.2 3.2 0 1 1 15.2 12 3.2 3.2 0 0 1 12 15.2Zm5.49-8.98a1.22 1.22 0 1 0 1.22 1.22 1.22 1.22 0 0 0-1.22-1.22Z" />
      </svg>
    </a>
    <a
      href={socials.linkedin}
      target="_blank"
      rel="noreferrer"
      aria-label="FixRite on LinkedIn"
      className="social-link social-link--linkedin"
    >
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 0-.02 5 2.5 2.5 0 0 0 .02-5ZM3 8.98h3.96V21H3ZM9.5 8.98H13v1.63c.52-.98 1.64-1.87 3.38-1.87 3.24 0 3.84 2.13 3.84 4.9V21h-3.96v-5.58c0-1.33-.02-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96V21H9.5Z" />
      </svg>
    </a>
    <a
      href={socials.tiktok}
      target="_blank"
      rel="noreferrer"
      aria-label="FixRite on TikTok"
      className="social-link social-link--tiktok"
    >
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M17 2c.43 1.65 1.73 2.9 3.36 3.2V8c-1.3-.02-2.56-.43-3.64-1.16l-.01 7.64c0 3.53-2.87 5.6-5.59 5.6A5.12 5.12 0 0 1 6 14.9a5.1 5.1 0 0 1 6.2-5 2.3 2.3 0 0 0-.03.38V13a2.28 2.28 0 0 0-1.17-.33 2.13 2.13 0 0 0 0 4.26c1.16 0 2.2-.77 2.2-2.3L13.2 2H17Z" />
      </svg>
    </a>
  </div>
);

export default SocialIcons;
