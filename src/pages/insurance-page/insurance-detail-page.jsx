import MobileNav from "@/components/shared/MobileNav";
import CallIcon from "@/assets/call.png";
import GlobeIcon from "@/assets/icons/GlobeIcon";
import Navbar from "@/components/shared/Navbar";
import { InsuranceProgram } from "@/lib/data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import AmeriGroupIcon from "@/assets/insurance-guides/amerigroup.png";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";

export default function InsuranceDetailPage() {
  const { id } = useParams();
  // const insuranceguide = InsuranceProgram.find((insuranceguide) => insuranceguide.id === id);

  // console.log(id,InsuranceProgram,insuranceguide)

  // if (!insuranceguide) {
  //     // Handle case where vendor is not found
  //     return <div>Insurance not found</div>;
  // }

  // console.log(insuranceguide)
  const handlePhoneClick = () => {
    window.location.href = `tel:806.773.8007`;
  };

  const handleWebsiteClick = () => {
    window.open("http://www.amerigroup.com", "_blank");
  };

  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="breadcrumbs-area p-5 lg:px-[32px] lg:pt-[28px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-avenirRegular text-[12px] text-[#989898] lg:text-[14px]"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/insurance-solutions"
                className="font-avenirRegular text-[12px] text-[#989898] lg:text-[14px]"
              >
                Insurance Solutions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/insurance-solutions/insurance-guide"
                className="font-avenirRegular text-[12px] text-[#989898] lg:text-[14px]"
              >
                Insurance Guide
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[12px] font-medium text-[#1F3E7C] lg:text-[14px]">
                Amerigroup
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-vsp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-[32px]">
        <div>
          <Card className="rounded-[16px] lg:w-[770px] xl:w-[1136px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <div>
                  <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                    Amerigroup
                  </h1>
                  <h1 className="font-avenirRegular text-[16px] font-thin text-[#989898]">
                    Category : Insurance Solution
                  </h1>
                </div>
                <div className="lg:w-auto">
                  <div className="">
                    <img src={AmeriGroupIcon} className="w-[186.16px]" />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-5 xl:space-y-0">
                <div
                  className="flex cursor-pointer items-center space-x-3"
                  onClick={handleWebsiteClick}
                >
                  <GlobeIcon />
                  <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    http://www.amerigroup.com
                  </h1>
                </div>
                <div className="hidden h-[20px] min-h-[1em] w-0.5 self-stretch bg-[#E5E5E5] xl:inline-block"></div>
                <div className="flex cursor-pointer items-center space-x-3">
                  <img src={CallIcon} className="w-[20px]" />
                  <h1
                    className="font-avenirRegular text-[16px] font-medium text-[#646464]"
                    onClick={handlePhoneClick}
                  >
                    806.773.8007
                  </h1>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="card-vsp flex flex-col justify-between space-y-6 p-5 lg:px-[32px]">
        <h1>Attachment</h1>
        <div>
          <Card className="rounded-[16px] xl:w-[1136px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="flex flex-col space-y-[24px] lg:flex-row lg:items-center xl:space-x-6">
                <div className="flex cursor-pointer items-center space-x-2 text-[#1F3E7C]">
                  <Download />
                  <h1 className="font-avenirRegular text-[16px] font-medium">
                    AMERIGROUP-Cover-Sheet-1.pdf
                  </h1>
                </div>
                <div className="hidden h-[20px] min-h-[1em] w-0.5 self-stretch bg-[#E5E5E5] xl:inline-block"></div>
                <div className="flex cursor-pointer items-center space-x-2 text-[#1F3E7C]">
                  <Download />
                  <h1 className="font-avenirRegular text-[16px] font-medium">
                    AMERIGROUP-PreCert-Request-Form.pdf
                  </h1>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
