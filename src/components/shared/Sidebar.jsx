import React, { useState } from "react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@/assets/icons/HomeIcon";
import VendorIcon from "@/assets/icons/VendorIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import PowerIcon from "@/assets/icons/PowerIcon";
import GlassIcon from "@/assets/icons/GlassIcon";
import InsuranceIcon from "@/assets/icons/InsuranceIcon";
import InsuranceSolIcon from "@/assets/icons/InsuranceSolIcon";
import LabIcon from "@/assets/icons/LabIcon";
import BankIcon from "@/assets/icons/BankIcon";
import TeacherIcon from "@/assets/icons/TeacherIcon";
import { Card } from "../ui/card";
import VTCareIcon from "@/assets/icons/VTCareIcon";
import { Button } from "../ui/button";
import Illustration from "@/assets/icons/Illustration";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { ChevronDown, ChevronUp } from "lucide-react";

// Menu items with links and icons
const menuItems = [
  { id: 1, label: "Home", icon: <HomeIcon />, link: "/" },
  {
    id: 2,
    label: "Vendor Partners",
    icon: <VendorIcon />,
    link: "/vendor-partners",
  },
  {
    id: 3,
    label: "Event Calendar",
    icon: <CalendarIcon />,
    link: "/event-calendar",
  },
  {
    id: 4,
    label: "Practise Builders",
    icon: <PowerIcon />,
    link: "/practise-builder",
    submenu: [
      { id: 5, label: "Lensquote", link: "/practise-builder/lensquote" },
      { id: 6, label: "ABB Analyze", link: "/practise-builder/abb-analyze" },
      { id: 7, label: "EyeCarePro", link: "/practise-builder/eyecarepro" },
      {
        id: 8,
        label: "iDefend Business",
        link: "/practise-builder/idefend",
      },
    ],
  },
  { id: 9, label: "VSP IOF", icon: <GlassIcon />, link: "/vsp-iof" },
  {
    id: 10,
    label: "Insurance Profit Pathway",
    icon: <InsuranceIcon />,
    link: "/insurance-profit-pathway",
  },
  {
    id: 11,
    label: "Insurance Solutions",
    icon: <InsuranceSolIcon />,
    link: "/insurance-solutions",
  },
  { id: 12, label: "Lab Solutions", icon: <LabIcon />, link: "/lab-solutions" },
  {
    id: 13,
    label: "Merchant Services",
    icon: <BankIcon />,
    link: "/merchant-services",
  },
  {
    id: 14,
    label: "Learning Solutions",
    icon: <TeacherIcon />,
    link: "/learning-solutions",
  },
];

export default function Sidebar({ showFullSidebar, sidebarWidthInPixels }) {
  const { pathname } = useLocation();

  // Find the active menu item based on the current path
  const findActiveMenu = (items, path) => {
    for (const item of items) {
      if (item.link === path) return item;
      if (item.submenu) {
        const activeSubItem = findActiveMenu(item.submenu, path);
        if (activeSubItem) return activeSubItem;
      }
    }
    return null;
  };

  const activeMenu = findActiveMenu(menuItems, pathname);

  // State to manage the collapsible state of the sidebar
  const [isCollapsible, setIsCollapsible] = useState(false);

  // State to manage the visibility of submenu items
  const [showDashboardSubMenu, setShowDashboardSubMenu] = useState(false);
  const [showSaleSubMenu, setShowSaleSubMenu] = useState(false);

  // Toggle the collapsible state of the sidebar on mouse events
  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  // Toggle submenu visibility
  const toggleDashboardSubMenu = () => {
    setShowDashboardSubMenu(!showDashboardSubMenu);
  };

  const toggleSaleSubMenu = () => {
    setShowSaleSubMenu(!showSaleSubMenu);
  };

  // Get classes for the navigation items
  const getNavItemClasses = (menu) =>
    `flex items-center cursor-pointer hover:bg-blue-50 rounded w-full overflow-hidden whitespace-nowrap ${
      activeMenu && activeMenu.id === menu.id
        ? "bg-[#F0F7FE] hover:bg-[#F0F7FE]"
        : "hover:bg-[#F0F7FE]"
    }`;
  return (
    <aside
      id="app-sidebar"
      style={{
        width: `${sidebarWidthInPixels}px`,
        transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
      }}
      className="fixed left-0 top-0 z-50 flex h-full flex-col justify-between overflow-x-hidden border-r-2 border-[#EEEEEE] bg-white px-2 py-6"
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
    >
      <div className="flex flex-col bg-white">
        {/* Logo Section */}
        <Link
          to="/"
          className="relative flex items-center justify-between bg-white"
        >
          <div className="flex items-center gap-4 bg-white px-4">
            <Logo />
          </div>
        </Link>
        <div className="space-y-[32px]">
          {/* Main Menu Items */}
          <div className="my-[24px] flex flex-col items-start">
            {menuItems.slice(0, 3).map(({ id, label, link, icon }) => {
              const menuItem = { id, label, link, icon };
              const classes = getNavItemClasses(menuItem);

              return (
                <div className={classes} key={id}>
                  <Link to={link} className="w-full">
                    <div className="flex h-full w-full items-center px-2 py-3">
                      <div className="flex w-12 items-center justify-center">
                        {icon}
                      </div>
                      {showFullSidebar && (
                        <span
                          className={` font-avenirRegular text-[14px] font-medium ${
                            activeMenu && activeMenu.id === id
                              ? "text-[#1F3E7C]"
                              : "text-[#646464]"
                          }`}
                        >
                          {label}
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          {/* Programs Section */}
          <div className="my-[24px] flex flex-col items-start bg-white">
            <h1 className="mb-[8px] bg-white px-6 font-avenirRegular text-[14px] text-[#989898]">
              Programs
            </h1>
            {menuItems.slice(3, 6).map(({ id, label, link, icon, submenu }) => {
              const menuItem = { id, label, link, icon, submenu };
              const classes = getNavItemClasses(menuItem);

              return (
                <div className={classes} key={id}>
                  <Link to={link} className="w-full">
                    <div
                      className="flex h-full w-full items-center px-2 py-3"
                      onClick={() =>
                        submenu &&
                        (label === "Practise Builders"
                          ? toggleDashboardSubMenu()
                          : toggleSaleSubMenu())
                      }
                    >
                      <div className="flex">
                        <div className="flex w-12 items-center justify-center">
                          {icon}
                        </div>
                        {showFullSidebar && (
                          <span
                            className={` font-avenirRegular text-[14px] font-medium ${
                              activeMenu && activeMenu.id === id
                                ? "text-[#1F3E7C]"
                                : "text-[#646464]"
                            }`}
                          >
                            {label}
                          </span>
                        )}
                      </div>
                      {submenu && showFullSidebar && (
                        <div
                          className={` ml-2 ${
                            activeMenu && activeMenu.id === id
                              ? "text-[#1F3E7C]"
                              : "text-[#646464]"
                          }`}
                          onClick={() => submenu && toggleSaleSubMenu()}
                        >
                          {showSaleSubMenu ? (
                            <ChevronUp className="w-[16px]" />
                          ) : (
                            <ChevronDown className="w-[16px]" />
                          )}
                        </div>
                      )}
                    </div>
                    {submenu && showSaleSubMenu && (
                      <div className="pb-2 pl-10">
                        {" "}
                        {submenu.map(({ id, label, link }) => (
                          <Link
                            to={link}
                            className={`block py-2 pl-4 font-avenirRegular text-[14px] font-medium  ${
                              activeMenu && activeMenu.id === id
                                ? "rounded-[8px] bg-[#F0F7FE] py-[12px] pl-[16px] pr-[8px] text-[#1F3E7C]"
                                : "text-[#646464]"
                            }`}
                            key={id}
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
          {/* Solutions Section */}
          <div className="my-[24px] flex flex-col items-start bg-white">
            <h1 className="mb-[8px] bg-white px-6 font-avenirRegular text-[14px] text-[#989898]">
              Solutions
            </h1>
            {menuItems.slice(6, 10).map(({ id, label, link, icon }) => {
              const menuItem = { id, label, link, icon };
              const classes = getNavItemClasses(menuItem);

              return (
                <div className={classes} key={id}>
                  <Link to={link} className="w-full">
                    <div className="flex h-full w-full items-center px-2 py-3">
                      <div className="flex w-12 items-center justify-center">
                        {icon}
                      </div>
                      {showFullSidebar && (
                        <span
                          className={` font-avenirRegular text-[14px] font-medium ${
                            activeMenu && activeMenu.id === id
                              ? "text-[#1F3E7C]"
                              : "text-[#646464]"
                          }`}
                        >
                          {label}
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* VT Cares Card */}
        <div className="mt-[84px] px-[20px]">
          <Card className="relative w-[200px] rounded-[12px] bg-gradient-to-br from-[#3061C2] to-[#121A29] ">
            <div className="space-y-3 p-5">
              <div>
                <VTCareIcon />
              </div>
              <div className="space-y-1">
                <h1 className="font-avenirHeavy text-[16px] text-white">
                  VT Cares
                </h1>
                <p className="font-avenirRegular text-[14px] text-[#F1F1F1]">
                  Give more patients the comfort they deserve
                </p>
              </div>
              <div>
                <Button className="bg-[#374E7D] px-9 font-avenirHeavy">
                  Donate Now
                </Button>
              </div>
            </div>
            <div className="absolute right-0 top-0">
              <Illustration />
            </div>
          </Card>
        </div>
      </div>
    </aside>
  );
}
