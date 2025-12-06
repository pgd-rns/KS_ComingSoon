import { useEffect } from "react";

declare global {
  interface Window {
    FlodeskObject?: string;
    fd?: (...args: any[]) => void;
  }
}

export default function FlodeskPopup() {
  useEffect(() => {
    // Always reset dismissed state so popup can reopen
    sessionStorage.removeItem("fd-form-6932b5676e4686bdd8985b2c-dismissed");

    const loadPopup = () => {
      sessionStorage.removeItem("fd-form-6932b5676e4686bdd8985b2c-dismissed");
      sessionStorage.removeItem(
        "fd-form-6932b5676e4686bdd8985b2c-dismissed-count"
      );

      window.fd?.("form", {
        formId: "6932b5676e4686bdd8985b2c",
        successRedirectUrl: "/",
        inPlace: false,
      });
    };

    // Load script once
    const existing = document.querySelector('script[src*="flodesk"]');
    if (!existing) {
      (function (w, d, t, h, s, n) {
        w.FlodeskObject = n;

        const fn = function (...args: any[]) {
          (w[n].q = w[n].q || []).push(args);
        };
        w[n] = w[n] || fn;

        const firstScript = d.getElementsByTagName(t)[0];
        const v = `?v=${Math.floor(Date.now() / (120 * 1000)) * 60}`;

        // module script
        const sm = d.createElement(t) as HTMLScriptElement;
        sm.async = true;
        sm.type = "module";
        sm.src = `${h}${s}.mjs${v}`;
        sm.onload = loadPopup;
        firstScript.parentNode?.insertBefore(sm, firstScript);

        // nomodule fallback
        const sn = d.createElement(t) as HTMLScriptElement;
        sn.async = true;
        sn.noModule = true;
        sn.src = `${h}${s}.js${v}`;
        sn.onload = loadPopup;
        firstScript.parentNode?.insertBefore(sn, firstScript);
      })(
        window,
        document,
        "script",
        "https://assets.flodesk.com",
        "/universal",
        "fd"
      );
    } else {
      loadPopup();
    }
  }, []);

  return null;
}
