import React from "react";
import { Card } from "../ui/card";

export default function InsuranceCard({ offering }) {
  return (
    <Card className="card-insurance rounded-[16px]">
      <div className="space-y-4 p-[24px]">
        <div className="flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
          <div className="flex h-[70px] w-[70px] justify-center rounded-full bg-[#F4F4F4] p-4  lg:w-auto lg:p-4">
            <div className="">{offering?.icon && <offering.icon />}</div>
          </div>
          <div className="space-y-1">
            <h1 className="font-avenirHeavy text-[16px] text-[#1C1C1C] lg:text-[18px]">
              {offering?.name}
            </h1>
            <p className="offeringDesc font-avenirRegular text-[12px] text-[#989898] lg:text-[16px]">
              {offering.description}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
