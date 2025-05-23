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
import CallIcon from "@/assets/call.png";
import EmailIcon from "@/assets/email.png";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleAlert } from "lucide-react";

export default function OutsourcedPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:ajetton@vtrends.us`;
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
                href="/insurance-solutions"
                className="font-avenirRegular text-[14px] text-[#989898]"
              >
                Insurance Solutions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                Outsourced Billing Services
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div
        className="card-ipp flex flex-col justify-between space-y-6 py-3  lg:px-[32px] xl:flex-row xl:space-x-6 xl:space-y-0
       "
      >
        <div className="space-y-4">
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:px-10 lg:py-[32px]">
              <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  Outsourced Billing Services
                </h1>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px] ">
                  Vision Trends will administer vision and / or medical
                  insurance claims billing for members interested in outsourcing
                  these services.
                </p>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#1C1C1C] lg:text-[16px] ">
                  Your practice will be assigned a dedicated Vision Trends
                  claims billing specialist.
                </p>
              </div>
              <div>
                <Table className="bg-[#FFFFFF]">
                  <TableHeader className="bg-[#F4F4F4]">
                    <TableRow>
                      <TableHead className="font-avenirRegular font-medium text-[#1C1C1C] lg:text-[16px]">
                        Services
                      </TableHead>
                      <TableHead className="text-right font-avenirRegular font-medium text-[#1C1C1C] lg:text-[16px]">
                        Affiliate
                      </TableHead>
                      <TableHead className="text-right font-avenirRegular font-medium text-[#1C1C1C] lg:text-[16px]">
                        Profit+
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="">
                          <h1 className="font-avenirHeavy text-[#1F3E7C] lg:w-[220px] lg:text-[14px]">
                            Vision & Medical Claims Billing (12 month ag.)
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirRegular text-right text-[#222222] lg:text-[14px]">
                            <span className="font-avenirHeavy font-semibold text-[#1c1c1c]">
                              6.5%
                            </span>{" "}
                            <br />
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirRegular text-right text-[#222222] lg:text-[14px]">
                            <span className="font-avenirHeavy font-semibold text-[#1c1c1c]">
                              7.5%
                            </span>{" "}
                            <br />
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="">
                          <h1 className="font-avenirHeavy font-semibold text-[#1F3E7C] lg:w-[200px] lg:text-[14px]">
                            Medical Claims Billing Only (12 month ag.)
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirRegular text-right text-[#222222] lg:text-[14px]">
                            <span className="font-avenirHeavy font-semibold text-[#1c1c1c]">
                              6.5%
                            </span>{" "}
                            <br />
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirRegular text-right text-[#222222] lg:text-[14px]">
                            <span className="font-avenirHeavy font-semibold text-[#1c1c1c]">
                              7.5%
                            </span>{" "}
                            <br />
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="">
                          <h1 className="font-avenirHeavy font-semibold text-[#1F3E7C] lg:w-[220px] lg:text-[14px]">
                            Medical Claims Billing & Reconcilliation
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirRegular text-right text-[#222222] lg:text-[14px]">
                            <span className="font-avenirHeavy font-semibold text-[#1c1c1c]">
                              4.5%
                            </span>{" "}
                            <br />
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirRegular text-right text-[#222222] lg:text-[14px]">
                            <span className="font-avenirHeavy font-semibold text-[#1c1c1c]">
                              7.5%
                            </span>{" "}
                            <br />
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="">
                          <h1 className="font-avenirHeavy font-semibold text-[#1F3E7C] lg:text-[14px]">
                            Claims Billing Minimum
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell className="">
                        <div>
                          <h1 className="font-avenirRegular text-right text-[#222222] lg:text-[14px]">
                            <span className="font-avenirHeavy font-semibold text-[#1c1c1c]">
                              $300
                            </span>{" "}
                            <br />
                            per month
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirRegular text-right text-[#222222] lg:text-[14px]">
                            <span className="font-avenirHeavy font-semibold text-[#1c1c1c]">
                              $300
                            </span>
                            <br />
                            per month
                          </h1>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="">
                      <TableCell>
                        <div className="">
                          <h1 className="font-avenirHeavy font-semibold text-[#1F3E7C] lg:text-[14px]">
                            Claims Administrative Training
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirRegular text-right text-[#222222] lg:text-[14px]">
                            <span className="font-avenirHeavy font-semibold text-[#1c1c1c]">
                              Yes
                            </span>
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirHeavy text-right text-[#222222] lg:text-[14px]">
                            No
                          </h1>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Separator />
              </div>
              <div className="space-y-4">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464] mt-[44px]">
                  Our Service includes -
                </h1>
                <div className="px-5 md:px-5">
                  <ul className="list-disc space-y-3 font-avenirRegular text-[14px]  font-thin text-[#989898] lg:text-[16px]">
                    <li>
                      Assess current billing practices and outstanding insurance
                      claims
                    </li>
                    <li>
                      Establish operating procedures between Vision Trends and
                      practice(s)
                    </li>
                    <li>Submitting medical/vision claims</li>
                    <li>
                      Ongoing claims maintenance to ensure timely claims
                      submittal
                    </li>
                    <li>Posting claims payments</li>
                    <li>Managing claims denials and appeals</li>
                    <li>
                      Provide monthly reconciliation and reporting, including:
                    </li>
                    <div className="ml-10 space-y-3">
                      <li>Monthly Receivables Report</li>
                      <li>Practice Management Report</li>
                      <li>Insurance Claims Aging Report</li>
                      <li>Detailed Claims Status Report (+90 days)</li>
                    </div>
                    <li>
                      Status Meetings (weekly, bi-weekly, monthly as mutually
                      agreed)
                    </li>
                    <li>
                      Working with practice to identify and resolve common
                      payment / denial issues
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="rounded-[8px] bg-[#F0F7FE] p-5 hover:bg-[#F0F7FE]">
                  <div className="flex space-x-3">
                    <CircleAlert className="w-12 text-[#1F3E7C] lg:w-4" />
                    <h1 className="font-avenirRegular text-[14px] font-thin   text-[#1F3E7C] lg:text-[16px]">
                      As of January 2020, billing services available to members
                      using Crystal PM, Eyefinity | OfficeMate and Revolution
                      practice management systems.
                    </h1>
                  </div>
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
              <div className="space-y-[24px] p-6 lg:p-8">
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
                      Insurance Solutions Director
                    </p>
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
                      ajetton@vtrends.us
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
