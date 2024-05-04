import React from "react";
import { Card } from "../ui/card";

export default function OfferingCard({ offering }) {
  console.log(offering);
  return (
    <Card className="rounded-[16px] card">
      <div className="space-y-4 p-5">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-[#F4F4F4] p-4">
            {offering?.icon && <offering.icon />}
          </div>
          <h1 className="w-[200px] font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
            {offering?.name}
          </h1>
        </div>
        <p className="font-avenirRegular text-[16px] text-[#989898] offeringDesc">
          {offering.description}
        </p>
      </div>
    </Card>
  );
}
