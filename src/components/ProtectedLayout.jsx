import React, { useState } from "react";
import Sidebar from "./shared/Sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "./ui/toaster";

export default function ProtectedLayout() {
  const [showFullSidebar, setShowFullSidebar] = useState(true);

  const toggleSidebarWidth = () => {
    setShowFullSidebar(!showFullSidebar);
  };

  const sidebarWidth = showFullSidebar ? 64 : 20;
  const sidebarWidthInPixels = sidebarWidth * 4;

  return (
    <div className="flex h-fit w-full flex-row">
      <Sidebar
        showFullSidebar={showFullSidebar}
        sidebarWidthInPixels={sidebarWidthInPixels}
        toggleSidebarWidth={toggleSidebarWidth}
      />
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
    </div>
  );
}
