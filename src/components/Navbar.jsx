import { useState, useEffect } from "react";

export default function Navbar() {
  const getInitialTheme = () => {
    const stored = localStorage.getItem("isdark");
    if (stored !== null) {
      try {
        const parsed = JSON.parse(stored);
        return typeof parsed === "boolean" ? parsed : false;
      } catch {
        return false;
      }
    }
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  const [isdark, setIsdark] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
    const theme = isdark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [isdark]);

  return (
    <>
      {isdark ? (
        <meta name="theme-color" content="#1d232a" />
      ) : (
        <meta name="theme-color" content="#ffffff" />
      )}
      <div className="navbar bg-base-100 shadow-sm">
        <a className="btn btn-ghost text-xl">Erdinç Akgün</a>
        <div className="flex grow justify-end">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              checked={isdark}
              onChange={() => setIsdark(!isdark)}
              className="toggle"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </>
  );
}
