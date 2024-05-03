import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ABBIcon from "@/assets/abb.png";
import KattoufIcon from "@/assets/kattouf.png";
import ABBConnectIcon from "@/assets/ABBContact.png";
import NorwoodIcon from "@/assets/Norwood.png";
import { CircleChevronRight } from "lucide-react";

export default function FeaturedVendor() {
  return (
    <Card className="w-[445px] -ml-5 lg:w-[400px] lg:ml-0">
      <div className="p-5">
        <div className="flex items-center">
          <div className="">
            <div className="space-y-4">
              <div>
                <h1 className="font-avenirHeavy text-[16px]">
                  Featured Vendors
                </h1>
              </div>
              <Separator className="-ml-5 w-[400px] lg:-ml-5" />
              <div className="flex items-center space-x-6">
                <img src={ABBIcon} className="w-10" />
                <h1 className="w-[245px] font-avenirRegular text-[14px]">
                  ABB Analyze powered by Glimpse
                </h1>
                <CircleChevronRight />
              </div>
              <div className="flex items-center space-x-6">
                <img src={KattoufIcon} className="w-10" />
                <h1 className="w-[245px] font-avenirRegular text-[14px]">
                  Kattouf Consulting Services Inc.
                </h1>
                <CircleChevronRight />
              </div>
              <div className="flex items-center space-x-6">
                <img src={ABBConnectIcon} className="w-10" />
                <h1 className="w-[245px] font-avenirRegular text-[14px]">
                  ABB Contact Lens (Soft Contacts and Gas Perm)
                </h1>
                <CircleChevronRight />
              </div>
              <div className="flex items-center space-x-6">
                <img src={NorwoodIcon} className="w-10" />
                <h1 className="w-[245px] font-avenirRegular text-[14px]">
                  Norwood Device & Diagnostics
                </h1>
                <CircleChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
