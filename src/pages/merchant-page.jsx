import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import CardKnoxImg from "@/assets/cardknox.png";
import EmailIcon from "@/assets/email.png";
import { Separator } from "@/components/ui/separator";
import InsuranceCard from "@/components/shared/InsuranceCard";
import { MerchantRateData } from "@/lib/data";
import RateCard from "@/components/shared/RateCard";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";

export default function MerchantPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:memberservices@vtrends.us`;
  };
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="p-5 lg:px-[32px] lg:pt-[28px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-avenirRegular text-[14px] text-[#989898]"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                Merchant Services
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-vsp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-[32px]">
        <div className="space-y-4">
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:px-10 lg:py-[32px]">
              <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  Merchant Services
                </h1>
                <div>
                  <img src={CardKnoxImg} className="h-[48px] w-[200.11px]" />
                </div>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                  Our payment solutions are smarter, faster, and more secure
                  than ever. There are no financial credit checks nor approval
                  waiting periods. Plus, we complete all required PCI paperwork
                  on your behalf.
                </p>
              </div>
              <div>
                <h1 className="font-avenirRegular text-[16px] text-[#1C1C1C]">
                  Join us today to simplify and supercharge your payments flow!
                </h1>
              </div>
              <Separator />
              <div className="">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Program Highlights -
                </h1>
                <div className="p-5">
                  <ul className="list-disc space-y-3 font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    <li>Support for a Wide Range of Payment Methods </li>
                    <li>Virtual Terminal With Customer Database </li>
                    <li>Annual PCI Compliance Fees Waived </li>
                    <li>
                      No Financial Credit Checks or Waiting Period for Approval{" "}
                    </li>
                    <li>
                      One Competitive Rate and No Transaction or Service Fees
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
          <div className="">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Two rate option available -
            </h1>
            <div className="flex flex-col justify-between space-x-6 space-y-6 py-8 lg:flex-row lg:space-y-0 lg:p-5">
              <div className="card-merchant-area grid justify-center gap-5 lg:grid-cols-2 lg:gap-6 lg:px-0">
                {MerchantRateData.map((offering) => (
                  <RateCard key={offering.id} offering={offering} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Contact Details
            </h1>
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div className="flex items-center space-x-6">
                  <h1 className="font-avenirRegular text-[14px] text-[#1C1C1C] lg:text-[16px]">
                    Join us today. Reach out to us on -
                  </h1>
                </div>
                <div
                  className="flex cursor-pointer items-center space-x-3"
                  onClick={handleEmailClick}
                >
                  <img src={EmailIcon} className="w-[20px]" />
                  <h1 className="font-avenirRegular text-[14px] font-medium text-[#646464] lg:text-[16px]">
                    memberservices@vtrends.us
                  </h1>
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Pricing Details
            </h1>
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-6 p-6 lg:p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="card-bg rounded-[8px] bg-[#F4F4F4] px-[12px] py-[10px]">
                      <h1 className="font-avenirRegular text-[14px] text-[#646464] lg:text-[16px] ">
                        Processing Fee:
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <h1 className="font-avenirRegular text-[16px] font-medium text-[#989898]">
                        Traditional Model
                      </h1>
                      <p className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                        2.5%
                      </p>
                    </div>
                    <div className="text-center">
                      <h1 className="font-avenirRegular text-[16px] font-medium text-[#989898]">
                        Surcharge Model
                      </h1>
                      <p className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                        3%
                      </p>
                    </div>
                  </div>

                  <div className="card-btn rounded-[8px] bg-[#F0F7FE] px-[12px] py-[10px]">
                    <div className="flex w-[252px] space-x-2 font-avenirRegular text-[14px] text-[#1F3E7C] lg:text-[16px] ">
                      <CircleAlert />{" "}
                      <p>
                        with Surcharge Model, terminal can be set @ 1%, 2%, or
                        3%
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-[#F4F4F4] pt-2" />

                <div className="flex items-center space-x-6">
                  <div className="card-bg rounded-[8px] bg-[#F4F4F4] px-[12px] py-[10px]">
                    <h1 className="font-avenirRegular text-[14px] text-[#646464] lg:text-[16px] ">
                      Terminal Pricing:
                    </h1>
                  </div>
                </div>

                <div className="">
                  <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                    Affiliate Members
                  </h1>
                  <p className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                    Free
                  </p>
                </div>
                <Separator />
                <div className="">
                  <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                    Profit + Members
                  </h1>
                  <p className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                    $495{" "}
                    <span className="font-avenirRegular text-[14px] text-[#989898]">
                      invoiced 45 days after installation
                    </span>
                  </p>
                </div>
                <div className="card-btn rounded-[8px] bg-[#F0F7FE] px-[12px] py-[10px]">
                  <div className="flex w-[252px] space-x-2 font-avenirRegular text-[14px] text-[#1F3E7C] lg:text-[16px] ">
                    <CircleAlert />{" "}
                    <p>
                      Additional terminals are <span>$495</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
