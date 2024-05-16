import { ChevronDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import { Separator } from "../ui/separator";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import CallIcon from "@/assets/icons/CallIcon";
import AdIcon from "@/assets/icons/AdIcon";
import { Link } from "react-router-dom";

export default function LogoutDialog() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="cursor-pointer">
          <ChevronDown />
        </div>
      </PopoverTrigger>
      <PopoverContent className="mr-44 mt-4 w-[220px] lg:mr-6 lg:w-56">
        <div className="flex flex-col items-start space-y-6">
          <Link to="/my-profile">
            <div className="flex items-center justify-between space-x-2 text-[#1C1C1C]">
              {/* Icon */}
              <ProfileIcon />
              <h1 className="font-avenirRegular text-[16px]">My Profile</h1>
            </div>
          </Link>
          <Link to="/refer">
            <div className="flex items-center justify-between space-x-2 text-[#1C1C1C]">
              {/* Icon */}
              <AdIcon />
              <h1 className="font-avenirRegular text-[16px]">Refer Member</h1>
            </div>
          </Link>
          <Link to="/contact-us">
            <div className="flex items-center justify-between space-x-2 text-[#1C1C1C]">
              {/* Icon */}
              <CallIcon />
              <h1 className="font-avenirRegular text-[16px]">Contact Us</h1>
            </div>
          </Link>
          <Separator />
          <div className="flex items-center justify-between space-x-2 text-[#B42318]">
            {/* Icon */}
            <LogoutIcon />
            <h1 className="font-avenirRegular text-[16px]">Logout</h1>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
