"use client";

import Script from "next/script";

export function UnicornBackground() {
    return (
        <>
            {/* UnicornStudio loader — afterInteractive so it runs after hydration */}
            <Script
                id="unicorn-studio-loader"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
(function () {
  function initUnicorn() {
    if (window.UnicornStudio && window.UnicornStudio.init) {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    }
  }
  if (window.UnicornStudio && window.UnicornStudio.init) {
    initUnicorn();
    return;
  }
  if (!window.UnicornStudio) {
    window.UnicornStudio = { isInitialized: false };
  }
  if (!document.querySelector("script[data-unicorn-loader]")) {
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
    s.setAttribute("data-unicorn-loader", "true");
    s.onload = function () { initUnicorn(); };
    (document.head || document.body).appendChild(s);
  }
})();
                    `,
                }}
            />

            {/* Background container — fixed, behind all content */}
            <div
                aria-hidden="true"
                className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
            >
                <div
                    data-us-project="WdVna2EGJHojbGLRHA52"
                    data-us-dpi="1.5"
                    data-us-fps="60"
                    data-us-lazyload="true"
                    data-us-production="true"
                    className="absolute inset-0 w-full h-full"
                />
            </div>
        </>
    );
}
