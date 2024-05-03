import React, { useEffect, useState } from "react";
import Sidebar from "./shared/Sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "./ui/toaster";

export default function ProtectedLayout() {
  const [showFullSidebar, setShowFullSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowFullSidebar(window.innerWidth > 768);
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebarWidth = () => {
    setShowFullSidebar(!showFullSidebar);
  };

  const sidebarWidth = showFullSidebar ? 64 : 20;
  const sidebarWidthInPixels = sidebarWidth * 4;

  return (
    <div className="flex h-fit w-full flex-row">
      {showFullSidebar && (
        <Sidebar
          showFullSidebar={showFullSidebar}
          sidebarWidthInPixels={sidebarWidthInPixels}
          toggleSidebarWidth={toggleSidebarWidth}
        />
      )}
      {showFullSidebar && (
        <div
          style={{
            // using calc in tailwind classname was not working reliably
            width: `calc(100% - ${sidebarWidthInPixels}px)`,
            marginLeft: `${sidebarWidthInPixels}px`,
          }}
          className="flex flex-col"
        >
          <Outlet />
          <Toaster />
        </div>
      )}
      {isMobile && (
        <div>
          <Outlet />
          <Toaster />
        </div>
      )}
    </div>
  );
}
