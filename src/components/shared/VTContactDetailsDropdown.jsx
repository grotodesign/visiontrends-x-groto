import GlobeIcon from "@/assets/icons/GlobeIcon";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import React, { useState } from "react";
import EmailIcon from "@/assets/email.png";
import { Card } from "../ui/card";

export default function VTContactDetailsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleWebsiteClick = () => {
    window.open("http://www.vtrends.us", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:admin@vtrends.us";
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
                VT Contact Details
              </h1>
              {isOpen ? (
                <ChevronUp className="text-[#646464]" />
              ) : (
                <ChevronDown className="text-[#646464]" />
              )}
            </div>
            {isOpen && (
              <div className="mt-4 space-y-[25px]">
                <div className="flex cursor-pointer space-x-3">
                  <MapPin className="text-[#646464] lg:w-[20px]" />
                  <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    406 Sawdust Road, The Woodlands, TX, 77380
                  </h1>
                </div>
                <div
                  className="flex cursor-pointer items-center space-x-3"
                  onClick={handleWebsiteClick}
                >
                  <GlobeIcon className="text-[#646464] lg:w-[20px]" />
                  <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    www.vtrends.us
                  </h1>
                </div>
                <div className="flex cursor-pointer items-center space-x-3">
                  <img src={EmailIcon} className="w-[20px]" alt="Email" />
                  <h1
                    className="font-avenirRegular text-[16px] font-medium text-[#646464]"
                    onClick={handleEmailClick}
                  >
                    admin@vtrends.us
                  </h1>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
