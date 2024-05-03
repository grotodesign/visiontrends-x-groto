import { Bell, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import LogoutDialog from "./LogoutDialog";

export default function Navbar() {
  return (
    <div className="h-30 bg-white shadow-md">
      <div className="p-5">
        <div className="flex justify-between">
          <div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search anything...."
                value=""
                className="focus:outline-buttonprimary w-[500px] rounded-xl border border-gray-300 py-3 pl-10 font-avenirRegular text-[16px]"
              />
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
            </div>
          </div>
          <div className="flex items-center justify-between space-x-5">
            <div className="border-r-2">
              <Bell className="w-12 text-[#646464]" />
            </div>
            <div className="">
              <Button className="font-avenirRegular font-medium">
                Submit Sales
              </Button>
            </div>
            <div className="border-l-2">
              <div className="ml-5 flex items-center space-x-4">
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
                <LogoutDialog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
