import { CircleAlert } from "lucide-react";
import React from "react";

export default function SubNavbar() {
  return (
    <div className="">
      <div className="flex items-center justify-center space-x-2 bg-[#FEF5D5] px-5 py-3 text-center">
        <CircleAlert className="w-4 bg-[#FEF5D5]" />{" "}
        <div className="font-avenirRegular bg-[#FEF5D5] text-[#1F3E7C] flex items-center space-x-3">
          <p>Deadline to Register for Vision Trends Care Foundation Webinar is
          Today!{" "}</p>
          <span className="bg-[#FEF5D5] font-bold underline underline-offset-2">Register Now</span>
        </div>
      </div>
    </div>
  );
}
