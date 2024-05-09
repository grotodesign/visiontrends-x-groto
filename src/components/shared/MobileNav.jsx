import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify, Bell } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "./Logo";
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
import { Link, useLocation } from "react-router-dom";
import VTCareIcon from "@/assets/icons/VTCareIcon";
import { Card } from "../ui/card";
import Illustration from "@/assets/icons/Illustration";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import LogoutDialog from "./LogoutDialog";
import MobileVTIcon from "@/assets/icons/MobileVTIcon";

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
  },
  { id: 5, label: "VSP IOF", icon: <GlassIcon />, link: "/vsp-iof" },
  {
    id: 6,
    label: "Insurance Profit Pathway",
    icon: <InsuranceIcon />,
    link: "/insurance-profit-pathway",
  },
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

export default function MobileNav() {
  const { pathname } = useLocation();

  const activeMenu = menuItems.find((menu) => menu.link === pathname);

  const getNavItemClasses = (menu) =>
    `flex items-center cursor-pointer hover:bg-blue-50 rounded w-full overflow-hidden whitespace-nowrap ${
      activeMenu && activeMenu.id === menu.id
        ? "bg-[#F0F7FE] hover:bg-[#F0F7FE]"
        : "hover:bg-[#F0F7FE]"
    }`;
  return (
    <div className="h-30 navbar border-b-2 border-[#EEEEEE] bg-white">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <Sheet>
              <SheetTrigger>
                <AlignJustify className="cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[260px] p-5">
                <div className="flex flex-col">
                  <div className="relative flex items-center justify-between bg-white">
                    <div className="flex items-center gap-4 bg-white">
                      <Logo />
                    </div>
                  </div>
                  <div className="mt-5">
                    <Card className="p-2">
                      <div className="flex items-center justify-between">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className="font-avenirRegular text-[14px] font-medium text-[#1C1C1C]">
                          Mathew Perry
                        </h1>
                        <div className="">
                          {" "}
                          <LogoutDialog />
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <div className="my-4 flex flex-col items-start">
                      {menuItems
                        .slice(0, 3)
                        .map(({ id, label, link, icon }) => {
                          const menuItem = { id, label, link, icon };
                          const classes = getNavItemClasses(menuItem);

                          return (
                            <div className={classes} key={id}>
                              <Link to={link} className="w-full">
                                <div className="flex h-full w-full items-center py-3">
                                  <div className="flex w-12 items-center justify-center">
                                    {icon}
                                  </div>
                                  <span
                                    className={` font-avenirRegular text-[12px] font-medium ${
                                      activeMenu && activeMenu.id === id
                                        ? "text-[#1F3E7C]"
                                        : "text-[#646464]"
                                    }`}
                                  >
                                    {label}
                                  </span>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                    </div>
                    <div className="my-4 flex flex-col items-start bg-white">
                      <h1 className="bg-white px-4 font-avenirRegular text-[12px] text-[#989898]">
                        Programs
                      </h1>
                      {menuItems
                        .slice(3, 6)
                        .map(({ id, label, link, icon }) => {
                          const menuItem = { id, label, link, icon };
                          const classes = getNavItemClasses(menuItem);

                          return (
                            <div className={classes} key={id}>
                              <Link to={link} className="w-full">
                                <div className="flex h-full w-full items-center py-3">
                                  <div className="flex w-12 items-center justify-center">
                                    {icon}
                                  </div>
                                  <span
                                    className={` font-avenirRegular text-[12px] font-medium ${
                                      activeMenu && activeMenu.id === id
                                        ? "text-[#1F3E7C]"
                                        : "text-[#646464]"
                                    }`}
                                  >
                                    {label}
                                  </span>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                    </div>
                    <div className="my-4 flex flex-col items-start bg-white">
                      <h1 className="bg-white px-4 font-avenirRegular text-[12px] text-[#989898]">
                        Solutions
                      </h1>
                      {menuItems
                        .slice(6, 10)
                        .map(({ id, label, link, icon }) => {
                          const menuItem = { id, label, link, icon };
                          const classes = getNavItemClasses(menuItem);

                          return (
                            <div className={classes} key={id}>
                              <Link to={link} className="w-full">
                                <div className="flex h-full w-full items-center py-3">
                                  <div className="flex w-12 items-center justify-center">
                                    {icon}
                                  </div>
                                  <span
                                    className={` font-avenirRegular text-[12px] font-medium ${
                                      activeMenu && activeMenu.id === id
                                        ? "text-[#1F3E7C]"
                                        : "text-[#646464]"
                                    }`}
                                  >
                                    {label}
                                  </span>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className="">
                    <Card className="relative w-[224px] rounded-[12px] bg-gradient-to-br from-[#3061C2] to-[#121A29] ">
                      <div className="space-y-1 p-5">
                        <div>
                          <MobileVTIcon />
                        </div>
                        <div className="space-y-1">
                          <h1 className="font-avenirHeavy text-[12px] text-white">
                            VT Cares
                          </h1>
                          <p className="font-avenirRegular text-[10px] text-[#F1F1F1]">
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
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center space-x-4">
            <div className="border-r-2">
              <Bell className="w-12 text-[#646464]" />
            </div>
            <div>
              <Button className="font-avenirRegular font-medium">
                Sales Submission
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
