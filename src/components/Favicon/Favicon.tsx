// src/components/Favicon/Favicon.tsx
import React, { useEffect, useMemo, useState } from "react";

const Favicon: React.FC = () => {
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("light");

  const dataUrl = useMemo(() => {
    const fillColor = systemTheme === "dark" ? "white" : "black";

    const svgContent = `
      <svg width="105" height="104" viewBox="0 0 105 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M104.8 45.9054V100.405C104.8 102.005 103.5 103.305 101.9 103.305H89.5C87.9 103.305 86.6 102.005 86.6 100.405V85.2054C86.6 83.6054 85.3 82.3054 83.7 82.3054H34.9C33.3 82.3054 32 81.0054 32 79.4054V66.9054C32 65.3054 33.3 64.0054 34.9 64.0054H83.6C85.2 64.0054 86.5 62.7054 86.5 61.1054V45.9054C86.5 44.3054 87.8 43.0054 89.4 43.0054H101.9C103.5 42.9054 104.8 44.2054 104.8 45.9054Z" fill="${fillColor}" />
        <path d="M101.8 30.7H89.2C87.8 30.7 86.6 29.7 86.3 28.3C85 22.5 79.9 18.2 73.8 18.2H34.1C25.4 18.2 18.3 25.3 18.3 34V100C18.3 101.6 17 102.9 15.4 102.9H2.9C1.3 102.9 0 101.6 0 100V34C0 15.3 15.3 0 34.1 0H73.8C89.7 0 102.9 12 104.7 27.4C104.9 29.2 103.5 30.7 101.8 30.7Z" fill="${fillColor}" fillOpacity="0.9" />
      </svg>
    `;

    const dataUrl = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;

    return dataUrl;
  }, [systemTheme]);

  useEffect(() => {
    const updateFavicon = () => {
      if (typeof document !== "undefined") {
        const newLink = document.createElement("link");
        const oldLink = document.querySelector('link[rel="icon"]');

        newLink.rel = "icon";
        newLink.href = dataUrl;

        if (oldLink) {
          document.head.removeChild(oldLink);
        }

        document.head.appendChild(newLink);
      }
    };

    if (typeof window !== "undefined") {
      const colorSchemeQuery = window.matchMedia(
        "(prefers-color-scheme: dark)",
      );
      const updateSystemTheme = () => {
        setSystemTheme(colorSchemeQuery.matches ? "dark" : "light");
      };

      updateSystemTheme(); // Initialize the systemTheme on component mount
      colorSchemeQuery.addEventListener("change", updateSystemTheme);

      updateFavicon();

      return () => {
        colorSchemeQuery.removeEventListener("change", updateSystemTheme);
      };
    }
  }, [systemTheme, dataUrl]);

  return null;
};

export default Favicon;
