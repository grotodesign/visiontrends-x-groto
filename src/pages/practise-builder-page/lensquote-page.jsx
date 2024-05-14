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
import LensquoteIcon from "@/assets/lensquote.png";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function LensquotePage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:admin@lensquote.net`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:855.589.7913`;
  };

  const handleWebsiteClick = () => {
    window.open("https://lensquote.net/vision-trends/", "_blank");
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
                Lensquote
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
                    Lensquote
                  </h1>
                  <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                    Category : Business Services Marketing
                  </h1>
                </div>
                <div className="lg:w-auto">
                  <div className="">
                    <img
                      src={LensquoteIcon}
                      className="w-[88.17px] lg:w-[176.34px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-[#646464] lg:w-[18px] " />
                  <h1 className="font-avenirRegular text-[14px]  font-medium text-[#646464] lg:text-[16px]">
                    980 North Main St Bluffton IN 46714
                  </h1>
                </div>
                <div className="hidden h-[20px] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 lg:inline-block"></div>
                <div className="flex items-center space-x-2">
                  <GlobeIcon />
                  <h1
                    className="cursor-pointer font-avenirRegular  text-[14px] font-medium text-[#646464] lg:text-[16px]"
                    onClick={handleWebsiteClick}
                  >
                    https://lensquote.net/vision-trends/
                  </h1>
                </div>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                  Lensquote is an in-office app that flips the script, showing
                  your patients in seconds that you can offer them better
                  pricing, options, and value. This leads to more annual supply
                  sales than you ever thought possible
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
                    Vision Trends members receive an exclusive{" "}
                    <span className="text-[#1C1C1C]">50% discount.</span> No
                    other alliance or buying group has this program.
                  </p>
                </div>
                <div className="">
                  <video className="video-area h-full w-[520px]" controls>
                    <source
                      src="https://docs.material-tailwind.com/demo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
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
                      Kim Schamerloh
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898]">
                      Designation
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
                      admin@lensquote.net
                    </h1>
                  </div>
                  <div className="flex cursor-pointer items-center space-x-3">
                    <img src={CallIcon} className="w-[20px]" />
                    <h1
                      className="font-avenirRegular text-[16px] font-medium text-[#646464]"
                      onClick={handlePhoneClick}
                    >
                      855.589.7913
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
