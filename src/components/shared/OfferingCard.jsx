import React from "react";
import { Card } from "../ui/card";

export default function OfferingCard({ offering }) {
  console.log(offering);
  return (
    <Card className="w-[380px]">
      <div className="space-y-4 p-5">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-[#F4F4F4] p-4">
            {offering?.icon && <offering.icon />}
          </div>
          <h1 className="w-[200px] font-medium font-avenirRegular text-[18px]">{offering?.name}</h1>
        </div>
        <p className="w-[300px] font-avenirRegular text-[#989898] text-[16px]">
          {offering.description}
        </p>
      </div>
    </Card>
  );
}
