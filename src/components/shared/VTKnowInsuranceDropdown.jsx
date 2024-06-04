import React, { useState } from "react";
import { Card } from "../ui/card";
import { ChevronDown, ChevronUp, Download } from "lucide-react";
import { Separator } from "../ui/separator";

export default function VTKnowInsuranceDropdown() {
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
                Know more about Insurance
              </h1>
              {isOpen ? (
                <ChevronUp className="text-[#646464]" />
              ) : (
                <ChevronDown className="text-[#646464]" />
              )}
            </div>
            {isOpen && (
              <div className="space-y-[20px] px-1 pt-[16px]">
                <div className="space-y-4">
                  <div className="space-y-4">
                    <h1 className="text-[#1C1C1C font-avenirRegular text-[16px] font-medium">
                      Vision Trends Insurance Guide
                    </h1>
                    <p className="font-avenirRegular text-[14px] font-medium text-[#989898]">
                      Our Vision Insurance Guide helps you manage eligibility
                      verification and claims for over 40 programs
                    </p>
                    <p className="font-avenirRegular text-[14px] font-medium text-[#989898]">
                      <span className="text-[#1F3E7C] underline">Email us</span>{" "}
                      to suggest new additions
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4 ">
                  <div className="space-y-4">
                    <h1 className="text-[#1C1C1C font-avenirRegular text-[16px] font-medium">
                      Making Insurance Easier
                    </h1>
                    <p className="font-avenirRegular text-[14px] font-medium text-[#989898]">
                      Explore our suite of insurance products and services for
                      simplified insurance engagement. Download for more details
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-[12px] font-avenirRegular text-[14px] text-[#1F3E7C]">
                        <Download />
                        <h1>Affiliate Member</h1>
                      </div>
                      <div className="flex items-center space-x-[12px] font-avenirRegular text-[14px] text-[#1F3E7C]">
                        <Download />
                        <h1>Profit + Member</h1>
                      </div>
                    </div>
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
