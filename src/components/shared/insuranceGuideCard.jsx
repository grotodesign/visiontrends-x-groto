import React from "react";
import { Card } from "../ui/card";

export default function InsuranceGuideCard({ offering }) {
  return (
    <Card className="cursor-pointer rounded-[16px] bg-[#FBFCFE]">
      <div className="space-y-4 p-[24px]">
        <div className="flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
          {offering?.icon && (
            <div className="flex rounded-full p-4 lg:h-auto  lg:w-auto lg:justify-center lg:p-4">
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
          <div className="space-y-1">
            <h1 className="font-avenirHeavy text-[14px] text-[#1C1C1C] lg:text-[16px]">
              {offering?.name}
            </h1>
            <div className="flex items-center justify-between space-x-5">
              <p className="offeringDesc font-avenirRegular text-[12px]  text-[#989898] lg:text-[14px]">
                {offering?.email}
              </p>
              <div className="inline-block h-[20px] min-h-[1em] w-0.5 self-stretch bg-[#E5E5E5]"></div>
              <p className="offeringDesc font-avenirRegular text-[12px] text-[#989898] lg:text-[14px]">
                {offering?.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
