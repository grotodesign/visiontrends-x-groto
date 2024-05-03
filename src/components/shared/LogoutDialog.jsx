import { ChevronDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import { Separator } from "../ui/separator";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import CallIcon from "@/assets/icons/CallIcon";
import AdIcon from "@/assets/icons/AdIcon";

export default function LogoutDialog() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="cursor-pointer">
          <ChevronDown />
        </div>
      </PopoverTrigger>
      <PopoverContent className="mr-6 mt-4 w-56">
        <div className="flex flex-col items-start space-y-6">
          <div className="flex items-center justify-between space-x-2 text-[#1C1C1C]">
            {/* Icon */}
            <ProfileIcon />
            <h1 className="text-[16px] font-avenirRegular">My Profile</h1>
          </div>
          <div className="flex items-center justify-between space-x-2 text-[#1C1C1C]">
            {/* Icon */}
            <AdIcon />
            <h1 className="text-[16px] font-avenirRegular">Refer Member</h1>
          </div>
          <div className="flex items-center justify-between space-x-2 text-[#1C1C1C]">
            {/* Icon */}
            <CallIcon />
            <h1 className="text-[16px] font-avenirRegular">Contact Us</h1>
          </div>
          <Separator />
          <div className="flex items-center justify-between space-x-2 text-[#B42318]">
            {/* Icon */}
            <LogoutIcon />
            <h1 className="text-[16px] font-avenirRegular">Logout</h1>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
