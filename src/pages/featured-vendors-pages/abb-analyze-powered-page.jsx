import CallIcon from "@/assets/call.png";
import EmailIcon from "@/assets/email.png";
import GlobeIcon from "@/assets/icons/GlobeIcon";
import DownloadDialog from "@/components/shared/DownloadDialog";
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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleAlert, MapPin } from "lucide-react";

export default function AbbAnalyzePoweredPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:sonja@glimpselive.com`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:904.625.2860`;
  };

  const handleWebsiteClick = () => {
    window.open("http://www.glimpselive.com", "_blank");
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
                href="/vendor-partners"
                className="font-avenirRegular text-[12px] text-[#989898] lg:text-[14px]"
              >
                Vendor Partners
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[12px] font-medium text-[#1F3E7C] lg:text-[14px]">
                ABB Analyze powered by Glimpse
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col justify-between space-x-6 space-y-6  py-3 lg:flex-row lg:space-y-0 lg:px-[32px]">
        <div>
          <Card className="card-vendor-detaiils rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="hidden items-center justify-between space-x-16 lg:flex">
                <div>
                  <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                    ABB Analyze powered by Glimpse
                  </h1>
                  <p className="font-avenirRegular text-[14px] text-[#989898]">
                    Category: Financial Services
                  </p>
                </div>
                <div>
                  <img
                    src="http://members.vtrends.us/wp-content/uploads/2016/03/glimpse-logo.jpg"
                    className="w-[136px]"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4 lg:hidden">
                <div>
                  <img
                    src="http://members.vtrends.us/wp-content/uploads/2016/03/glimpse-logo.jpg"
                    className="w-[136px]"
                  />
                </div>
                <div>
                  <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                    ABB Analyze powered by Glimpse
                  </h1>
                  <p className="font-avenirRegular text-[14px] text-[#989898]">
                    Category: Financial Services
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-[#646464] lg:w-[18px] " />
                  <h1 className="font-avenirRegular text-[14px]  font-medium text-[#646464] lg:text-[16px]">
                    3948 3rd Street South Jacksonville Beach FL 32250
                  </h1>
                </div>
                <div className="hidden h-[20px] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 lg:inline-block"></div>
                <div className="flex items-center space-x-2">
                  <GlobeIcon />
                  <h1
                    className="cursor-pointer font-avenirRegular  text-[14px] font-medium text-[#646464] lg:text-[16px]"
                    onClick={handleWebsiteClick}
                  >
                    http://www.glimpselive.com
                  </h1>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h1 className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    You Cannot Improve What You Do Not Measure Glimpse is the
                    industry’s first “PUSH” informatics service designed to help
                    business owners measure and track performance, identify
                    growth opportunities, forecast future trends, and compare
                    results among peers. Created to deliver all information in
                    our simple and easy to understand Glimpse report card.
                    Glimpse safely interacts with your current database to
                    capture and report key metrics that are vital to the success
                    of your business. Metrics are organized and simplified via
                    Glimpse Report card.
                  </h1>
                </div>
                <Separator />
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                      Program Summary
                    </h1>
                    <DownloadDialog />
                  </div>
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    Glimpse Technology is FREE to Vision Trends Members Click
                    here to watch a Vision Trends member share his experience
                    using Glimpse as a tool to better understand his business.
                    Find out more or sign up at www.glimpselive.com/VTsignup.
                    Looking for more information about Glimpse. Check out these
                    videos designed to help you grow your practice with the help
                    of Glimpse:
                  </p>
                  <div>
                    <div className="hidden lg:flex">
                      <ScrollArea className="h-[200px] w-full">
                        <Table className="border border-[#E5E5E5] bg-[#FBFCFE]">
                          <TableHeader>
                            <TableRow className="lg:h-[64px]">
                              <TableHead className="border border-[#E5E5E5] text-start">
                                Title
                              </TableHead>
                              <TableHead className="border border-[#E5E5E5] text-start">
                                Drive Link
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="border border-[#E5E5E5] text-center">
                              <TableCell className="border border-[#E5E5E5] text-start font-avenirHeavy text-[16px] text-[#1F3E7C]">
                                Wine Down with Glimpse – Kading Challenge
                              </TableCell>
                              <TableCell className="border border-[#E5E5E5] text-start">
                                <div className="space-y-2 text-[14px] text-[#646464]">
                                  <h1>
                                    <a
                                      className="font-avenirHeavy text-[16px] text-[#1F3E7C]"
                                      href="https://drive.google.com/a/glimpselive.com/file/d/0B4H7oGz8rueHajlEakFCcGpRVW8/preview"
                                    >
                                      Link
                                    </a>
                                  </h1>
                                </div>
                              </TableCell>
                            </TableRow>
                            <TableRow className="border border-[#E5E5E5] text-center">
                              <TableCell className="border border-[#E5E5E5] text-start font-avenirHeavy text-[16px] text-[#1F3E7C]">
                                Wine Down with Glimpse – New Mini Games
                              </TableCell>
                              <TableCell className="border border-[#E5E5E5] text-start">
                                <div className="space-y-2 text-[14px] text-[#646464]">
                                  <h1>
                                    <a
                                      className="font-avenirHeavy text-[16px] text-[#1F3E7C]"
                                      href="https://drive.google.com/file/d/0B4H7oGz8rueHb1NuSENSTXN4TXM/preview"
                                    >
                                      Link
                                    </a>
                                  </h1>
                                </div>
                              </TableCell>
                            </TableRow>
                            <TableRow className="border border-[#E5E5E5] text-center">
                              <TableCell className="border border-[#E5E5E5] text-start font-avenirHeavy text-[16px] text-[#1F3E7C]">
                                Wine Down with Glimpse – New Feature Rapid Fire
                              </TableCell>
                              <TableCell className="border border-[#E5E5E5] text-start">
                                <div className="space-y-2 text-[14px] text-[#646464]">
                                  <h1>
                                    <a
                                      className="font-avenirHeavy text-[16px] text-[#1F3E7C]"
                                      href="https://drive.google.com/a/glimpselive.com/file/d/0B4H7oGz8rueHYVVnaWVwWVEtc2c/preview"
                                    >
                                      Link
                                    </a>
                                  </h1>
                                </div>
                              </TableCell>
                            </TableRow>
                            <TableRow className="border border-[#E5E5E5] text-center">
                              <TableCell className="border border-[#E5E5E5] text-start font-avenirHeavy text-[16px] text-[#1F3E7C]">
                                Wine Down with Glimpse – Potential Calculator
                              </TableCell>
                              <TableCell className="border border-[#E5E5E5] text-start">
                                <div className="space-y-2 text-[14px] text-[#646464]">
                                  <h1>
                                    <a
                                      className="font-avenirHeavy text-[16px] text-[#1F3E7C]"
                                      href="https://drive.google.com/file/d/0B9q_jK4jhH54emZSb2lramR1eUU/preview"
                                    >
                                      Link
                                    </a>
                                  </h1>
                                </div>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </ScrollArea>
                    </div>
                    <div className="flex lg:hidden">
                      <ScrollArea className="h-[200px] w-full">
                        <Table className="border border-[#E5E5E5] bg-[#FBFCFE]">
                          <TableHeader>
                            <TableRow className="lg:h-[64px]">
                              <TableHead className="border border-[#E5E5E5] text-start text-[14px]">
                                Title
                              </TableHead>
                              <TableHead className="border border-[#E5E5E5] text-start text-[14px]">
                                Link
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="border border-[#E5E5E5] text-center">
                              <TableCell className="border border-[#E5E5E5] text-start font-avenirHeavy text-[14px] text-[#1F3E7C] lg:text-[16px]">
                                Wine Down with Glimpse – Kading Challenge
                              </TableCell>
                              <TableCell className="border border-[#E5E5E5] text-start">
                                <div className="space-y-2 text-[14px] text-[#646464]">
                                  <h1>
                                    <a
                                      className="font-avenirHeavy text-[14px] text-[#1F3E7C] lg:text-[16px]"
                                      href="https://drive.google.com/a/glimpselive.com/file/d/0B4H7oGz8rueHajlEakFCcGpRVW8/preview"
                                    >
                                      Link
                                    </a>
                                  </h1>
                                </div>
                              </TableCell>
                            </TableRow>
                            <TableRow className="border border-[#E5E5E5] text-center">
                              <TableCell className="border border-[#E5E5E5] text-start font-avenirHeavy text-[14px] text-[#1F3E7C] lg:text-[16px]">
                                Wine Down with Glimpse – New Mini Games
                              </TableCell>
                              <TableCell className="border border-[#E5E5E5] text-start">
                                <div className="space-y-2 text-[14px] text-[#646464]">
                                  <h1>
                                    <a
                                      className="font-avenirHeavy text-[14px] text-[#1F3E7C] lg:text-[16px]"
                                      href="https://drive.google.com/file/d/0B4H7oGz8rueHb1NuSENSTXN4TXM/preview"
                                    >
                                      Link
                                    </a>
                                  </h1>
                                </div>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </ScrollArea>
                    </div>
                  </div>
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
                      Sonja DelRios
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898]">
                      Supervisor of Account Management
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
                      sonja@glimpselive.com
                    </h1>
                  </div>
                  <div
                    className="flex cursor-pointer items-center space-x-3"
                    onClick={handlePhoneClick}
                  >
                    <img src={CallIcon} className="w-[20px]" />
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                      904.625.2860
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
                          $675
                        </span>{" "}
                        One-time set up fee &
                      </h1>
                      <h1 className="font-avenirRegular text-[16px] text-[#989898]">
                        <span className="font-avenirHeavy text-[#1C1C1C]">
                          6.5%
                        </span>{" "}
                        of insurance receivables collected
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
                          $675
                        </span>{" "}
                        One-time set up fee &
                      </h1>
                      <h1 className="font-avenirRegular text-[16px] text-[#989898]">
                        <span className="font-avenirHeavy text-[#1C1C1C]">
                          6.5%
                        </span>{" "}
                        of insurance receivables collected
                      </h1>
                    </div>
                    <Button className="h-[64px] w-[294px] rounded-[8px] bg-[#F0F7FE] hover:bg-[#F0F7FE]">
                      <div className="flex items-center space-x-3">
                        <CircleAlert className="w-4 text-[#1F3E7C]" />
                        <h1 className="font-avenirRegular text-[16px] text-[#1F3E7C]">
                          Both plans billed monthly
                        </h1>
                      </div>
                    </Button>
                    <div className="w-[286px]">
                      <p className="font-avenirRegular text-[14px] text-[#989898]">
                        *Billing Services requires 12-month commitment and
                        authorization to withdraw funds from your banking
                        institution monthly; members will need to provide a
                        60-day written notice to withdraw from service
                      </p>
                    </div>
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
