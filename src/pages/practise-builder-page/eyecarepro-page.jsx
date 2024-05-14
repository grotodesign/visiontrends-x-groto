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
import EyeCareProIcon from "@/assets/eyecarepro.png";
import { Button } from "@/components/ui/button";

export default function EyeCareProPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:lenny@eyecarepro.net`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:201.591.3388`;
  };
  const handleWebsiteClick = () => {
    window.open("http://www.eyecarepro.net", "_blank");
  };
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="p-5">
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
                EyeCarePro
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-ipp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-5 lg:py-4 ">
        <div className="space-y-4">
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="flex flex-row justify-between space-y-3 lg:items-center lg:space-y-0">
                <div>
                  <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                    EyeCarePro
                  </h1>
                  <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                    Category : Consulting Marketing
                  </h1>
                </div>
                <div className="lg:w-auto">
                  <div className="">
                    <img src={EyeCareProIcon} className="w-[100.06px]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-x-4 space-y-2 lg:flex-row lg:items-center lg:space-y-0">
                <div className="flex items-center space-x-2">
                  <GlobeIcon />
                  <h1
                    className="cursor-pointer font-avenirRegular  text-[14px] font-medium text-[#646464] lg:text-[16px]"
                    onClick={handleWebsiteClick}
                  >
                    http://www.eyecarepro.net
                  </h1>
                </div>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                  EyeCarePro is the industry leader in marketing for eye care.
                  With over 1800 clients, we are constantly evolving to meet the
                  needs of practices as the industry changes. We continuously
                  develop the most advanced marketing strategies, customized to
                  fit the needs of every different kind of practice out there,
                  from single-doctor community practices to multi-location urban
                  powerhouses. From general eyecare to the most advanced
                  optometric and ophthalmic procedures and therapies now
                  available, our general and specialized services are uniquely
                  positioned to fit the needs of your practice. We’re a
                  people-driven company, which lies at the very core of the
                  values we provide. Your will receive easily accessible and
                  lightning-fast support, a dedicated team of designers and SEO
                  analysts, and talented optometry marketing experts work
                  alongside you to ensure continued and sustained growth.
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
                    Download Now
                  </Button>
                </div>
                <div>
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    Through a unique partnership with EyeCarePro, Vision Trends
                    will pick up the cost of the basic website package for all
                    Affiliate members using EyeCarePro for as long as they
                    remain with the Vision Trends family. Vision Trends members
                    also receive additional discounts on upgraded products.
                  </p>
                </div>
                <div>
                  <p className="font-avenirRegular text-[14px] text-[#1C1C1C] lg:text-[16px]">
                    Profit + members enjoy the discounted rates for EyeCarePro
                    services.
                  </p>
                </div>
                <div>
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    Simply {" "}
                    <span
                      className="cursor-pointer"
                      onClick={handleWebsiteClick}
                    >
                      click here 
                    </span>{" "}
                    and provide a meeting date and time, and an EyeCarePro
                    representative with contact you and start the process of
                    bringing your practice online.
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
              <div className="space-y-4 p-6 lg:p-8">
                <div className="flex items-center space-x-6">
                  <div>
                    <Avatar className="h-[48px] w-[48px]">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h1 className="font-avenirHeavy text-[16px] text-[#1C1C1C]">
                      Lenny Block
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898]">
                      Insurance Solutions Director
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div
                    className="flex cursor-pointer items-center space-x-3"
                    onClick={handleEmailClick}
                  >
                    <img src={EmailIcon} className="w-[20px]" />
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                      lenny@eyecarepro.net
                    </h1>
                  </div>
                  <div className="flex cursor-pointer items-center space-x-3">
                    <img src={CallIcon} className="w-[20px]" />
                    <h1
                      className="font-avenirRegular text-[16px] font-medium text-[#646464]"
                      onClick={handlePhoneClick}
                    >
                      201.591.3388
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
