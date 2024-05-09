import React from "react";
import { Card } from "../ui/card";

export default function LearningSessionCard({ offering }) {
  return (
    <Card className="card-insurance rounded-[16px]">
      <div className="space-y-4 p-[24px]">
        <div className="flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
          {offering?.icon && (
            <div className="flex h-[70px] w-[70px] justify-center rounded-full bg-[#F4F4F4] p-4  lg:h-auto lg:w-auto lg:p-4">
              <div className="">
                {typeof offering.icon === "string" ? (
                  <img
                    src={offering.icon}
                    alt={offering.name}
                    className="h-[40px] w-[60px]"
                  />
                ) : (
                  <offering.icon />
                )}
              </div>
            </div>
          )}
          <div className="space-y-1">
            <h1 className="font-avenirHeavy text-[16px] text-[#1C1C1C] lg:text-[18px]">
              {offering?.name}
            </h1>
            <p className="font-avenirRegular text-[12px] text-[#989898] lg:text-[16px]">
              {offering.description}
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-b-[16px] bg-[#FEF5D5] p-[10px] text-center">
        <h1 className="font-avenirRegular text-[14px] font-thin text-[#1F3E7C]">
          New session starts on{" "}
          <span className="font-avenirHeavy">{offering.startingDate}</span>
        </h1>
      </div>
    </Card>
  );
}
