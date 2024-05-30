import React, { useEffect, useState } from "react";
import Sidebar from "./shared/Sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "./ui/toaster";

export default function ProtectedLayout() {
  const [showFullSidebar, setShowFullSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const isIpad =
      /iPad|Macintosh/.test(navigator.userAgent) && "ontouchend" in document;

    const handleResize = () => {
      const width = window.innerWidth;
      if (isIpad) {
        setIsMobile(true);
        setIsTablet(false);
        setShowFullSidebar(false);
      } else {
        setIsMobile(width <= 768);
        setIsTablet(width > 768 && width <= 1024);
        setShowFullSidebar(width > 1024);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebarWidth = () => {
    setShowFullSidebar(!showFullSidebar);
  };

  const sidebarWidth = showFullSidebar ? 64 : 20;
  const sidebarWidthInPixels = sidebarWidth * 4;

  return (
    <div className="flex h-fit w-full flex-row">
      {!isMobile && !isTablet && (
        <Sidebar
          showFullSidebar={showFullSidebar}
          sidebarWidthInPixels={sidebarWidthInPixels}
          toggleSidebarWidth={toggleSidebarWidth}
        />
      )}
      <div
        style={{
          width:
            isMobile || isTablet
              ? "100%"
              : `calc(100% - ${sidebarWidthInPixels}px)`,
          marginLeft: isMobile || isTablet ? "0" : `${sidebarWidthInPixels}px`,
        }}
        className="flex flex-col"
      >
        <Outlet />
        <Toaster />
      </div>
    </div>
  );
}
