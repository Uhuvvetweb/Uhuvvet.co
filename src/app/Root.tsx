import { Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";

import { GlobalHeader } from "./components/GlobalHeader";
import { BottomNav } from "./components/BottomNav";
import { LeftSidebar } from "./components/LeftSidebar";
import { RightSidebar } from "./components/RightSidebar";

export function Root() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  /* APP WIDTH */
  const appContainer =
    "max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-3 xl:px-24 2xl:px-28";

  /* MAIN WIDTH */
  const mainWidth = "max-w-[720px] mx-auto w-full";

  const activeTab = location.pathname.split("/")[1] || "time";

  /* ✅ DARK MODE TOGGLE */
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  /* ✅ HTML DARK CLASS */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GlobalHeader mainWidth={mainWidth} />

      <div className={`${appContainer} flex gap-6`}>
        <LeftSidebar activeTab={activeTab} />

        <main className="flex-1">
          <div className={mainWidth}>
            {/* ✅ FIX */}
            <Outlet
              context={{
                darkMode,
                toggleDarkMode,
              }}
            />
          </div>
        </main>

        <RightSidebar />
      </div>

      <BottomNav activeTab={activeTab} />
    </div>
  );
}
