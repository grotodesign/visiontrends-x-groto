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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import VTLabImg from "@/assets/vtlab.png";
import LabImg from "@/assets/labImg.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CircleAlert } from "lucide-react";

export default function LabsSolutionPage() {
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
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                Lab Solutions
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-ipp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-5 lg:py-4">
        <div className="space-y-4">
          <div>
            <Card className="rounded-[16px]">
              <div className="space-y-6 p-5 lg:p-10">
                <div className="flex flex-row items-center justify-between lg:space-y-0">
                  <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                    VT Lab Solutions
                  </h1>
                  <div>
                    <img src={VTLabImg} className="w-[66.42px] lg:w-[136px]" />
                  </div>
                </div>
                <div>
                  <p className="font-avenirRegular text-[14px] text-[#1C1C1C] lg:text-[16px]">
                    Maximize Lab Profits & Dispense Superior Ophthalmic Lenses
                    to Your Patients
                  </p>
                </div>
                <div>
                  <h1 className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    Margins with insurance are getting tighter every year.
                    Vision Trends understands the needs of the independent
                    looking to make these jobs profitable. We have partnered
                    together with GSRx to create a completely new company, VT
                    Lab Solutions to help increase insurance dollars.
                  </h1>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    Our Offerings -
                  </h1>
                  <div className="p-5">
                    <ul className="list-disc space-y-3 font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                      <li>
                        Superior lens manufacturing with latest technologies,{" "}
                        <span className="text-[#1C1C1C]">
                          focusing on digital free-form lenses exclusively.
                        </span>{" "}
                      </li>
                      <li>
                        Lenses sourced from prestigious companies, offering,{" "}
                        <span className="text-[#1C1C1C]">
                          unique designs available solely through VT Lab
                          Solutions.
                        </span>{" "}
                      </li>
                      <li>
                        Curated lens portfolio for simplicity and enhanced
                        profitability, featuring fully loaded{" "}
                        <span className="text-[#1C1C1C]">
                          progressive lenses priced 25% - 65% below competitors
                        </span>{" "}
                      </li>
                      <li>
                        Affordable single vision stock lenses enabling{" "}
                        <span className="text-[#1C1C1C]">
                          faster patient delivery and increased in-office
                          profitability.
                        </span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-[8px] bg-[#F0F7FE] p-[20px] hover:bg-[#F0F7FE]">
                  <div className="flex space-x-3">
                    <CircleAlert className="w-4 text-[#1F3E7C]" />
                    <h1 className="font-avenirRegular text-[16px] text-[#1F3E7C]">
                      <span className="font-avenirHeavy">
                        This is ophthalmic lab ownership:{" "}
                      </span>{" "}
                      you join and own a portion of this lab and it's exclusive
                      to Vision Trends Affiliate practice owners
                    </h1>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    Grow Your Cash Pay Profitability -
                  </h1>
                  <p className="font-avenirRegular text-[16px] text-[#989898]">
                    Use the same VT Lab products for your cash pay patients,
                    simplifying your lens portfolio, and adding value to your
                    patients and higher practice profitability for you.
                  </p>
                  <p className="font-avenirRegular text-[16px] text-[#989898]">
                    Below you will find profit examples based on common
                    scenarios -
                  </p>
                  {/* Carousel */}
                  <div className="flex items-center justify-center">
                    <Carousel className="carousel-area w-full">
                      <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <div className="carousel-area">
                                <img src={LabImg} className="carousel-area" />
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    Join VT Lab Solutions -
                  </h1>
                  <p className="font-avenirRegular text-[16px] text-[#989898]">
                    This is an exclusive opportunity to join other VT Affiliate
                    member practice owners who are maximizing lab profits AND
                    dispensing superior ophthalmic lenses to their patients.
                  </p>
                  <div className="p-5">
                    <ul className="list-disc space-y-3 font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                      <li>
                        You must be a current Vision Trends Affiliate member,
                        Profit+ members are not eligible for increased profits
                        through VT Lab Solutions.{" "}
                      </li>
                      <li>
                        Owner will purchase one (1) share of stock per office
                        location affiliated with Vision Trends. Stock share can
                        be purchased for $200 per share.{" "}
                      </li>
                      <li>Stock share is not transferable. </li>
                      <li>
                        Shareholder will be billed an owner activation fee of
                        $50 per month.{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Contact Details
            </h1>
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div>
                  <h1 className="font-avenirRegular text-[16px] text-[#989898]">
                    For more information and to join, contact your account
                    manager (Andrew or Erin) or Drs. Toups and Inns:
                  </h1>
                </div>
                <Separator />
                <div className="space-y-4">
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
                        Andrew Howorth
                      </h1>
                      <p className="font-avenirRegular text-[14px] text-[#989898]">
                        ahoworth@vtrends.us
                      </p>
                    </div>
                  </div>
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
                        Erin Toups
                      </h1>
                      <p className="font-avenirRegular text-[14px] text-[#989898]">
                        etoups@vtrends.us
                      </p>
                    </div>
                  </div>
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
                        Dr. Michael Toups
                      </h1>
                      <p className="font-avenirRegular text-[14px] text-[#989898]">
                        mtoups@vtrends.us
                      </p>
                    </div>
                  </div>
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
                        Dr. Douglas Inns
                      </h1>
                      <p className="font-avenirRegular text-[14px] text-[#989898]">
                        dinns@vtrends.us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              VT Lab Solutions owner benefits
            </h1>
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div className="px-2 ">
                  <ul className="list-disc space-y-3 font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    <li>
                      Fully loaded progressive lenses are priced{" "}
                      <span className="text-[#1C1C1C]">
                        25% - 65% below nearest competitor.
                      </span>{" "}
                    </li>
                    <li>
                      <span className="text-[#1C1C1C]">
                        Up to 20% off monthly invoices
                      </span>{" "}
                      when achieving monthly thresholds ($1,000/month)
                    </li>
                    <li>
                      <span className="text-[#1C1C1C]">
                        8% quarterly rebate
                      </span>
                      paid in VT Lab Solutions-branded gift cards (tax free){" "}
                    </li>
                    <li>
                      <span className="text-[#1C1C1C]">Free shipping</span> on
                      all orders
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
