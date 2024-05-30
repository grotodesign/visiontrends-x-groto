import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import CallIcon from "@/assets/call.png";
import EmailIcon from "@/assets/email.png";
import GlobeIcon from "@/assets/icons/GlobeIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import IDefendIcon from "@/assets/iDefend.png";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function IDefendPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:customerservice@invisus.com`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:801.724.6211`;
  };

  const handleWebsiteClick = () => {
    window.open("http://www.idefendbusiness.com/", "_blank");
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
              <BreadcrumbLink
                href="/practise-builder"
                className="font-avenirRegular text-[14px] text-[#989898]"
              >
                Practise Builders
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                iDefend Business
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-ipp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-[32px]">
        <div className="space-y-4">
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="flex flex-row justify-between space-y-3 lg:items-center lg:space-y-0">
                <div>
                  <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                    iDefend Business
                  </h1>
                  <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                    Category : Business Services Financial Services
                  </h1>
                </div>
                <div className="lg:w-auto">
                  <div className="">
                    <img src={IDefendIcon} className="w-[96px]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-[#646464] lg:w-[18px] " />
                  <h1 className="font-avenirRegular text-[14px]  font-medium text-[#646464] lg:text-[14px]">
                    1276 S. 820 E. Suite 140, American Fork UT 84003
                  </h1>
                </div>
                <div className="hidden h-[20px] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 lg:inline-block"></div>
                <div className="flex items-center space-x-2">
                  <GlobeIcon />
                  <h1
                    className="cursor-pointer font-avenirRegular  text-[14px] font-medium text-[#646464] lg:text-[14px]"
                    onClick={handleWebsiteClick}
                  >
                    http://www.idefendbusiness.com/
                  </h1>
                </div>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                  Protect your business credit, reputation, privacy, and money
                  with the industry’s first andonly business identity theft
                  protection program. iDefend®Business is the industry leading
                  business identity theft protection program, providing you
                  withthe critical tools and resources you need to protect your
                  business—and you as the owner—in a simple, affordable plan.
                </p>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    Program Summary
                  </h1>
                  <Button
                    variant="outline"
                    className="border-[#1F3E7C] font-avenirRegular text-[#1C1C1C]"
                  >
                    Download Programs
                  </Button>
                </div>
                <div>
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    For more information, contact your Vision Trends Account
                    Representative or email questions to{" "}
                    <span className="font-medium text-[#1F3E7C]">
                      admin@vtrends.us
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Contact Details
            </h1>
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-[24px] p-6 lg:p-8">
                <div className="flex items-center space-x-6">
                  <div>
                    <h1 className="font-avenirHeavy text-[16px] text-[#1C1C1C]">
                      iDefend Customer Service
                    </h1>
                  </div>
                </div>
                <Separator />
                <div className="space-y-[24px]">
                  <div
                    className="flex cursor-pointer items-center space-x-3"
                    onClick={handleEmailClick}
                  >
                    <img src={EmailIcon} className="w-[20px]" />
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                      customerservice@invisus.com
                    </h1>
                  </div>
                  <div className="flex cursor-pointer items-center space-x-3">
                    <img src={CallIcon} className="w-[20px]" />
                    <h1
                      className="font-avenirRegular text-[16px] font-medium text-[#646464]"
                      onClick={handlePhoneClick}
                    >
                      801.724.6211
                    </h1>
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
