import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ABBIcon from "@/assets/abb.png";
import KattoufIcon from "@/assets/kattouf.png";
import ABBConnectIcon from "@/assets/ABBContact.png";
import NorwoodIcon from "@/assets/Norwood.png";
import { CircleChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedVendor() {
  return (
    <Card className="vendorCardArea -ml-5 w-[445px] rounded-[16px] lg:ml-0 lg:w-[400px]">
      <div className="p-5">
        <div className="flex items-center">
          <div className="">
            <div className="space-y-4">
              <div>
                <h1 className="font-avenirHeavy text-[16px]">
                  Featured Vendors
                </h1>
              </div>
              <Separator className="vendorCardArea -ml-5 w-[400px] lg:-ml-5" />
              <Link
                to="/vendor-partners/glimpse-live-llc/"
                className="vendorCardAreaContent flex items-center space-x-2 md:space-x-[182px] lg:space-x-6"
              >
                <img src={ABBIcon} className="w-10" />
                <h1 className="font-avenirRegular text-[14px] lg:w-[245px]">
                  ABB Analyze powered by Glimpse
                </h1>
                <CircleChevronRight className="text-[#1F3E7C]" />
              </Link>
              <Link
                to="/vendor-partners/kattouf-consulting-services-inc/"
                className="vendorCardAreaContent flex items-center space-x-2 md:space-x-[190px] lg:space-x-6"
              >
                <img src={KattoufIcon} className="w-10" />
                <h1 className="font-avenirRegular text-[14px] lg:w-[245px]">
                  Kattouf Consulting Services Inc.
                </h1>
                <CircleChevronRight className="text-[#1F3E7C]" />
              </Link>
              <Link
                to="/vendor-partners/abb-contact-lens"
                className="vendorCardAreaContent flex items-center space-x-2 md:space-x-[138px] lg:space-x-6"
              >
                <img src={ABBConnectIcon} className="w-10" />
                <h1 className="font-avenirRegular text-[14px] lg:w-[245px]">
                  ABB Contact Lens (Soft Contacts and Gas Perm)
                </h1>
                <CircleChevronRight className="text-[#1F3E7C]" />
              </Link>
              <Link
                to="/vendor-partners/norwood"
                className="vendorCardAreaContent flex items-center space-x-2 md:space-x-[190px] lg:space-x-6"
              >
                <img src={NorwoodIcon} className="w-10" />
                <h1 className="font-avenirRegular text-[14px] lg:w-[245px]">
                  Norwood Device & Diagnostics
                </h1>
                <CircleChevronRight className="text-[#1F3E7C]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
