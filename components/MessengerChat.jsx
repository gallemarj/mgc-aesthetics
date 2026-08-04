"use client";

import { useEffect } from "react";

export default function MessengerChat() {
  useEffect(() => {
    /*
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v18.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src =
        "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    */
  }, []);

  return (
    <>
      {/*
        <div id="fb-root" />
        <div
          class="fb-customerchat"
          attribution="setup_tool"
          page_id="YOUR_PAGE_ID"
        />
      */}

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          alert(
            "Messenger chat is not yet connected.\n\nTo set up:\n1. Create a Facebook Page for MGC Aesthetics\n2. Go to Page Settings → Messaging\n3. Follow Facebook's steps to add Messenger to your site\n4. Replace YOUR_PAGE_ID in components/MessengerChat.jsx"
          );
        }}
        className="messenger-fallback"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.208 11.852V15.18H7.237v-3.18h2.971V9.726c0-2.935 1.75-4.556 4.424-4.556 1.282 0 2.624.229 2.624.229v2.883h-1.478c-1.456 0-1.91.903-1.91 1.83v2.198h3.25l-.519 3.18h-2.731v8.672C19.568 22.984 24 18.016 24 12 24 5.373 18.627 0 12 0z" />
        </svg>

        
      </a>
    </>
  );
}
