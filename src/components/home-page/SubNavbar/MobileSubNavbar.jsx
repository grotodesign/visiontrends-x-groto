import { CircleAlert } from "lucide-react";
import React from "react";

export default function MobileSubNavbar() {
  return (
    <div>
      <div className="flex space-x-2 bg-[#FEF5D5] px-5 py-3 text-center">
        <CircleAlert className="w-4 bg-[#FEF5D5]" />
        <div className="flex text-start font-avenirRegular text-[#1F3E7C]">
          <p className="">
            Deadline to Register for Vision Trends Care Foundation Webinar is
            Today! <span className="bg-[#FEF5D5] text-[#1F3E7C] font-bold underline underline-offset-2">Register Now</span>
          </p>
        </div>
      </div>
    </div>
  );
}
