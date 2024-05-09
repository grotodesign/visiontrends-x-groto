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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QRImg from "@/assets/qr.png";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Manager360Page() {
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
                href="/learning-solutions"
                className="font-avenirRegular text-[14px] text-[#989898]"
              >
                Learning Solutions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                Manager 360
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-ipp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-5 lg:py-4 ">
        <div className="space-y-4">
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:px-10 lg:py-[32px]">
              <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  Manager 360
                </h1>
                <Button className="rounded-[8px] bg-[#FEF5D5]">
                  <div className="flex items-center space-x-3">
                    <h1 className="font-avenirRegular text-[12px] font-medium text-[#1F3E7C] lg:text-[14px]">
                      Next session beginning on April 26, 2024
                    </h1>
                  </div>
                </Button>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                  This is a 12-week intensive, management training program to
                  develop thepractical business, operational, financial,
                  communication and leadership skills of the employee manager or
                  owner manager.
                </p>
              </div>
              <Separator />
              <div className="space-y-4">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  What We Offer ?
                </h1>
                <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                  Live, weekly courses with actionable takeaways such as: office
                  manual, employee handbook, staff meeting template, employee
                  schedule template, marketing plan 
                </p>
              </div>
              <Separator />
              <div className="space-y-4">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Course Topic Includes -
                </h1>
                <div className="p-5">
                  <ul className="list-disc space-y-3 font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    <li>Leadership</li>
                    <li>Building & Retaining a team</li>
                    <li>Inventory Management</li>
                    <li>Key Performance Indicators (KPIs)</li>
                    <li>Insurance & Billing</li>
                    <li>Efficient Scheduling</li>
                    <li>Sales & Marketing</li>
                    <li>Community Engagement</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="card-contact-ipp space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Register Now
            </h1>
            <Card className="rounded-[16px] lg:w-[358px]">
              <div className="flex space-x-6 p-[24px]">
                <div className="flex items-center">
                  <img src={QRImg} className="h-[84px] w-[84px]" />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-avenirRegular text-[14px] text-[#1C1C1C] lg:text-[16px]">
                    Scan the QR code
                  </h1>
                  <p className="font-avenirRegular text-[14px] text-[#989898] ">
                    Register before{" "}
                    <span className="font-medium text-[#1F3E7C]">
                      April 1st & Save $200
                    </span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Pricing Details
            </h1>
            <Card className=" rounded-[16px] lg:w-[358px]">
              <div className="space-y-6 p-6 lg:p-8">
                <div className="space-y-2">
                  <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                    Affiliate & Lab Owner
                  </h1>
                  <p className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                    $995{" "}
                    <span className="font-avenirRegular text-[14px] text-[#646464]">
                      per person
                    </span>
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                    Affiliate
                  </h1>
                  <p className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                    $1495{" "}
                    <span className="font-avenirRegular text-[14px] text-[#646464]">
                      per person
                    </span>
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                    Profit +
                  </h1>
                  <p className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                    $1995{" "}
                    <span className="font-avenirRegular text-[14px] text-[#646464]">
                      per person
                    </span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Meet Your Instructor
            </h1>
            <Card className=" rounded-[16px] lg:w-[358px]">
              <div className="flex items-center space-x-4 p-[24px]">
                <div className="flex items-center">
                  <Avatar className="h-[64px] w-[64px]">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-avenirRegular text-[14px] font-medium text-[#1C1C1C] lg:text-[18px]">
                    Joy Gibb, ABOC
                  </h1>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
