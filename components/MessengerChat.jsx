"use client";

export default function MessengerChat() {
  return (
    <a
      href="https://web.facebook.com/gtbymgc"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on Facebook"
      className="messenger-fallback"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.208 11.852V15.18H7.237v-3.18h2.971V9.726c0-2.935 1.75-4.556 4.424-4.556 1.282 0 2.624.229 2.624.229v2.883h-1.478c-1.456 0-1.91.903-1.91 1.83v2.198h3.25l-.519 3.18h-2.731v8.672C19.568 22.984 24 18.016 24 12 24 12 5.373 18.627 0 12 0z" />
      </svg>
    </a>
  );
}
