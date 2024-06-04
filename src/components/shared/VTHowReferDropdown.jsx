import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Card } from "../ui/card";
import ArrowUpIcon from "@/assets/icons/ArrowUpIcon";
import RegisterFormIcon from "@/assets/icons/RegisterFormIcon";
import DollarIcon from "@/assets/icons/DollarIcon";

export default function VTHowReferDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="space-y-4">
      <div className="card-contact-ipp space-y-4">
        <Card className="card-vendor-contact rounded-[12px] lg:w-[358px]">
          <div className="space-y-4 p-6 lg:p-8">
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={toggleDropdown}
            >
              <h1 className="px-1 font-avenirHeavy text-[18px] text-[#1C1C1C] lg:px-0">
                How referral works ?
              </h1>
              {isOpen ? (
                <ChevronUp className="text-[#646464]" />
              ) : (
                <ChevronDown className="text-[#646464]" />
              )}
            </div>
            {isOpen && (
              <div className="flex flex-col space-y-[32px]">
                <div className="flex items-center space-x-4 space-y-4">
                  <div className="flex h-auto w-auto justify-center rounded-full bg-[#F4F4F4] p-4  lg:w-auto lg:p-4">
                    <div className="">
                      <ArrowUpIcon />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#1C1C1C] lg:text-[16px]">
                      1. Share referral details
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                      Submit member information in the given form
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-y-4">
                  <div className="flex h-auto w-auto justify-center rounded-full bg-[#F4F4F4] p-4  lg:w-auto lg:p-4">
                    <div className="">
                      <RegisterFormIcon />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#1C1C1C] lg:text-[16px]">
                      2. Registers within 6 months
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                      Referred member must complete registration within 6 months
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-y-4">
                  <div className="flex h-auto w-auto justify-center rounded-full bg-[#F4F4F4] p-4  lg:w-auto lg:p-4">
                    <div className="">
                      <DollarIcon />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#1C1C1C] lg:text-[16px]">
                      3. Earn $500
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                      Receive a $500 reward upon successful referral
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
