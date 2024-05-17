import Calendar from "@/components/shared/Calendar";
import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SearchIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function EventCalendarPage() {
  const [activeTab, setActiveTab] = useState("month");

  const monthRef = useRef(null);
  const weekRef = useRef(null);
  const dayRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabClasses = (tab) =>
    `flex items-center cursor-pointer ${
      activeTab === tab ? "bg-[#F0F7FE] text-[#1F3E7C]" : "text-[#646464]"
    } hover:bg-[#F0F7FE] rounded-[8px] overflow-hidden whitespace-nowrap px-[12px] py-[8px] `;
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="p-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-avenirRegular text-[14px] text-[#989898]"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                Event Calendar
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between px-5">
        <div className="">
          <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
            Event Calendar
          </h1>
          <p className="font-avenirRegular text-[14px] font-medium text-[#989898]">
            Stay Informed and Engaged with Our Scheduled Events
          </p>
        </div>
      </div>
      <div className="mt-5 px-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value=""
                className="focus:outline-buttonprimary w-[400px] rounded-[8px] border border-gray-300 py-2 pl-10 font-avenirRegular text-[16px]"
              />
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
            </div>
          </div>
          <div className="relative">
            <Calendar />
          </div>
          <div className="h-[48px] w-[216px] rounded-[8px] bg-white">
            <div
              className="flex items-start"
              aria-label="Tabs"
              role="tablist"
              data-hs-tabs-vertical="false"
            >
              <div className="flex h-full w-full  items-center space-x-1 px-2 py-1">
                <button
                  className={tabClasses("month")}
                  id="vertical-tab-with-border-item-1"
                  onClick={() => {
                    setActiveTab("month");
                    scrollToSection(monthRef);
                  }}
                  role="tab"
                >
                  <h1 className="font-avenirRegular text-[16px] font-medium">
                    Month
                  </h1>
                </button>
                <button
                  className={tabClasses("week")}
                  id="vertical-tab-with-border-item-2"
                  onClick={() => {
                    setActiveTab("week");
                    scrollToSection(weekRef);
                  }}
                  role="tab"
                >
                  <h1 className="font-avenirRegular text-[16px] font-medium">
                    Week
                  </h1>
                </button>
                <button
                  className={tabClasses("day")}
                  id="vertical-tab-with-border-item-3"
                  onClick={() => {
                    setActiveTab("day");
                    scrollToSection(dayRef);
                  }}
                  role="tab"
                >
                  <h1 className="font-avenirRegular text-[16px] font-medium">
                    Day
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
