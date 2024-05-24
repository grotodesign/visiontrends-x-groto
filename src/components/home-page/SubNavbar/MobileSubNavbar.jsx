import { CircleAlert } from "lucide-react";
import React from "react";

export default function MobileSubNavbar() {
  return (
    <div className="subnavbar">
      <div className="flex h-[56px] space-x-2 bg-[#FEF5D5] px-[16px] py-[8px] text-center">
        <CircleAlert className="-mt-1 w-[14px] bg-[#FEF5D5]" />
        <div className="flex text-start font-avenirRegular text-[#1F3E7C]">
          <p className="text-[12px]">
            Deadline to Register for Vision Trends Care Foundation Webinar is
            Today!{" "}
            <span className="bg-[#FEF5D5] font-bold text-[#1F3E7C] underline underline-offset-2">
              Register Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
