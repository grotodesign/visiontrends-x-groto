import React from "react";
import { Card } from "../ui/card";

export default function OfferingCard({ offering }) {
  console.log(offering);
  return (
    <Card className="w-[450px] lg:w-[380px] rounded-[16px]">
      <div className="space-y-4 p-5">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-[#F4F4F4] p-4">
            {offering?.icon && <offering.icon />}
          </div>
          <h1 className="w-[200px] font-avenirRegular text-[18px] font-medium">
            {offering?.name}
          </h1>
        </div>
        <p className="lg:w-[300px] font-avenirRegular text-[16px] text-[#989898]">
          {offering.description}
        </p>
      </div>
    </Card>
  );
}
