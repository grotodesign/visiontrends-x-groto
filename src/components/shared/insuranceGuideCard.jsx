import React from "react";
import { Card } from "../ui/card";
import CallIcon from "@/assets/call.png";
import EmailIcon from "@/assets/email.png";
import { Separator } from "../ui/separator";

export default function InsuranceGuideCard({ offering }) {
  return (
    <Card className="cursor-pointer rounded-[16px] bg-[#FBFCFE]">
      <div className="space-y-4 p-[24px]">
        <div className="flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
          <div className="flex items-center space-x-2">
            {offering?.icon && (
              <div className="flex rounded-full lg:h-auto lg:w-auto lg:justify-center lg:p-4">
                <div className="">
                  {typeof offering.icon === "string" ? (
                    <img
                      src={offering.icon}
                      alt={offering.name}
                      className="h-[48px] w-[48px] rounded-full"
                    />
                  ) : (
                    <offering.icon />
                  )}
                </div>
              </div>
            )}
            <div>
              <h1 className="block font-avenirHeavy text-[14px] text-[#1C1C1C] lg:hidden lg:text-[16px]">
                {offering?.name}
              </h1>
            </div>
          </div>
          <Separator className="block lg:hidden" />
          <div className="space-y-1">
            <h1 className="hidden font-avenirHeavy text-[14px] text-[#1C1C1C] lg:block lg:text-[16px]">
              {offering?.name}
            </h1>
            <div className="flex items-center space-x-5 xl:justify-between">
              <div className="offeringDesc flex items-center space-x-2 font-avenirRegular text-[12px]  text-[#989898] lg:text-[14px]">
                <img src={EmailIcon} className="w-[16px] lg:w-[20px]" />
                <p className="hidden lg:block">{offering?.email}</p>
              </div>
              <div className="hidden h-[20px] min-h-[1em] w-0.5 self-stretch bg-[#E5E5E5] lg:inline-block"></div>
              <div className="offeringDesc flex items-center space-x-2 font-avenirRegular text-[12px] text-[#989898] lg:text-[14px]">
                <img src={CallIcon} className="w-[16px] lg:w-[20px]" />
                <p className="hidden lg:block">{offering?.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
