import React from "react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import CallIcon from "@/assets/icons/CallIcon";
import EmailIcon from "@/assets/icons/EmailIcon";

export default function VendorPartnersBookmarkedCard({ vendor }) {
  return (
    <>
      <Card className="card-vendor rounded-[16px] bg-gradient-to-t from-[#F6F9FF] to-[#EDF3FF]">
        <div className="space-y-6 px-5 py-5">
          <div className="">
            <img src={vendor.vendorLogo} className="w-[119px]" />
          </div>
          <div className="space-y-2">
            <div className="lg:w-[220px]">
              <h1 className="font-avenirHeavy text-[14px] text-[#1C1C1C]">
                {vendor.vendorName}
              </h1>
            </div>
            <div>
              <h1 className="font-avenirRegular text-[12px] text-[#989898]">
                {vendor.vendorAddress}
              </h1>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <EmailIcon />
              <h1 className="font-avenirRegular text-[14px] text-[#646464]">
                {vendor.vendorEmailId}
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <CallIcon className="h-[16px] w-[16px]" />
              <h1 className="font-avenirRegular text-[14px] text-[#646464]">
                {vendor.vendorPhoneNumber}
              </h1>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
