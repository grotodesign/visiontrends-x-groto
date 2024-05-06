import React from "react";
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
];

const programItems = [
  {
    id: 4,
    label: "Practise Builders",
    icon: <PowerIcon />,
    link: "/practise-builder",
  },
  { id: 5, label: "VSP IOF", icon: <GlassIcon />, link: "/vsp-iof" },
  {
    id: 6,
    label: "Insurance Profit Pathway",
    icon: <InsuranceIcon />,
    link: "/insurance-profit-pathway",
  },
];

const solutionItems = [
  {
    id: 7,
    label: "Insurance Solutions",
    icon: <InsuranceSolIcon />,
    link: "/insurance-solutions",
  },
  { id: 8, label: "Lab Solutions", icon: <LabIcon />, link: "/lab-solutions" },
  {
    id: 9,
    label: "Merchant Services",
    icon: <BankIcon />,
    link: "/merchant-services",
  },
  {
    id: 10,
    label: "Learning Solutions",
    icon: <TeacherIcon />,
    link: "/learning-solutions",
  },
];

export default function Sidebar({ showFullSidebar, sidebarWidthInPixels }) {
  const { pathname } = useLocation();

  const activeMenu = menuItems.find((menu) => menu.link === pathname);

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

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
        <div className="relative flex items-center justify-between bg-white">
          <div className="flex items-center gap-4 bg-white px-4">
            <Logo />
          </div>
        </div>
        <div>
          <div className="my-4 flex flex-col items-start">
            {menuItems.map(({ id, label, link, icon }) => {
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
          <div className="my-4 flex flex-col items-start bg-white">
            <h1 className="bg-white px-6 font-avenirRegular text-[14px] text-[#989898]">
              Programs
            </h1>
            {programItems.map(({ id, label, link, icon }) => {
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
          <div className="my-4 flex flex-col items-start bg-white">
            <h1 className="bg-white px-6 font-avenirRegular text-[14px] text-[#989898]">
              Solutions
            </h1>
            {solutionItems.map(({ id, label, link, icon }) => {
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
        <div className="px-4">
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
                <Button className="bg-gray-500 px-9 font-avenirHeavy">
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
