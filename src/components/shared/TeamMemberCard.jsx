import React from "react";
import CallIcon from "@/assets/call.png";
import EmailIcon from "@/assets/email.png";

export default function TeamMemberCard({ team }) {
  return (
    <div className="space-y-4">
      <div className="flex h-[148px] w-[165px] rounded-[12px] bg-[#F0F7FE] lg:h-[196px] lg:w-[223px]">
        <div className="lg:px-[4px] lg:py-[20px]">
          <img src={team.profilePic} className="" />
        </div>
      </div>
      <div className="space-y-2 text-center">
        <div className="space-y-1">
          <h1 className="font-avenirHeavy text-[16px] text-[#1C1C1C]">
            {team.name}
          </h1>
          <h1 className="font-avenirRegular text-[14px] text-[#989898]">
            {team.designation}
          </h1>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <img src={EmailIcon} className="w-[20px]" />
          <img src={CallIcon} className="w-[20px]" />
        </div>
      </div>
    </div>
  );
}
