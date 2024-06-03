import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
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
import CallIcon from "@/assets/call.png";
import EmailIcon from "@/assets/email.png";
import { CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Staff360Page() {
  const handleEmailClick = () => {
    window.location.href = `mailto:education@vtrends.us`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:281-465-9505`;
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
                href="/learning-solutions"
                className="font-avenirRegular text-[14px] text-[#989898]"
              >
                Learning Solution
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                Staff 360
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-ipp flex flex-col justify-between space-y-6 py-3  lg:px-[32px] xl:flex-row xl:space-x-6 xl:space-y-0 ">
        <div className="space-y-4">
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:px-10 lg:py-[32px]">
              <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  Staff 360
                </h1>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px] ">
                  Our intuitive platform ensures easy staff learning and
                  progress tracking for practice owners. From telephone
                  etiquette to opticianry basics, our courses cover all practice
                  essentials. Elevate your team's skills with ABO certified
                  courses at our Spring Business Academy and Fall Forum
                </p>
              </div>
              <Separator />
              <div className="space-y-4">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Our training includes -
                </h1>
                <div className="p-5">
                  <ul className="list-disc space-y-3 font-avenirRegular text-[14px]  font-thin text-[#989898] lg:text-[16px]">
                    <li>Developing and retaining staff,</li>
                    <li>Empowering staff with self-directed training,</li>
                    <li>Tracking and measuring staff progress,</li>
                    <li>Improving patient experience and profitability</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="rounded-[8px] bg-[#F0F7FE] p-5 hover:bg-[#F0F7FE]">
                  <div className="flex space-x-3">
                    <CircleAlert className="w-12 text-[#1F3E7C] lg:w-4" />
                    <h1 className="font-avenirRegular text-[14px] font-thin   text-[#1F3E7C] lg:text-[16px]">
                      VT Lab Solutions owners ordering{" "}
                      <span className="font-avenirHeavy text-[18px]">
                        $3000/quarter
                      </span>{" "}
                      receive the staff training program for free
                    </h1>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Why staff training -
                </h1>
                <div className="p-5">
                  <ul className="list-disc space-y-3 font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    <li>Cost Savings through Retention,</li>
                    <li>Higher patient satisfaction</li>
                    <li>More confident and higher productive staff</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="card-contact-ipp space-y-4">
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
                      Ali Jetton
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898]">
                      Training Representative
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
                      education@vtrends.us
                    </h1>
                  </div>
                  <div className="flex cursor-pointer items-center space-x-3">
                    <img src={CallIcon} className="w-[20px]" />
                    <h1
                      className="font-avenirRegular text-[16px] font-medium text-[#646464]"
                      onClick={handlePhoneClick}
                    >
                      281-465-9505
                    </h1>
                  </div>
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
                <div className="flex items-center space-x-6">
                  <div className="space-y-4">
                    <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                      Affiliate Members
                    </h1>
                    <div className="space-y-1">
                      <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                        <span className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                          $595
                        </span>{" "}
                        for all courses
                      </h1>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center space-x-6">
                  <div className="space-y-6">
                    <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                      Profit+ Members
                    </h1>
                    <div className="space-y-1">
                      <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                        <span className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                          $895
                        </span>{" "}
                        for all courses
                      </h1>
                    </div>
                    <Button className="h-[64px] w-[294px] rounded-[8px] bg-[#F0F7FE] hover:bg-[#F0F7FE]">
                      <div className="flex items-center space-x-3">
                        <CircleAlert className="w-4 text-[#1F3E7C]" />
                        <h1 className="font-avenirRegular text-[16px] text-[#1F3E7C]">
                          Both plans billed yearly
                        </h1>
                      </div>
                    </Button>
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
