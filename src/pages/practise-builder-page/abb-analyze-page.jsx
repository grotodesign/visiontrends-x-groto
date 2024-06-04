import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import CallIcon from "@/assets/call.png";
import EmailIcon from "@/assets/email.png";
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
import AbbAnalyzeIcon from "@/assets/abbanalyze.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AbbAnalyzePage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:ABBSolutions@abboptical.com`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:855.589.7913`;
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
                ABB Analyze
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-ipp flex flex-col justify-between space-y-6 py-3  lg:px-[32px] xl:flex-row xl:space-x-6 xl:space-y-0 ">
        <div className="space-y-4">
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="flex flex-row items-center justify-between space-y-3 lg:space-y-0">
                <div>
                  <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                    ABB Analyze
                  </h1>
                </div>
                <div className="lg:w-auto">
                  <div className="">
                    <img
                      src={AbbAnalyzeIcon}
                      className="w-[91.83px] lg:w-[176px]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                  Vision Trends pays the monthly subscription for all active
                  Affiliate and Profit+ members who select ABB Analyze business
                  analytics software as part of their membership
                </p>
              </div>
              <Separator />
              <div className="space-y-4">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Pricing Details
                </h1>
                <div className="hidden lg:flex">
                  <Table className="border border-[#E5E5E5] bg-[#FBFCFE]">
                    <TableHeader>
                      <TableRow className="lg:h-[64px]">
                        <TableHead className="w-[160px] border border-[#E5E5E5]"></TableHead>
                        <TableHead className="border border-[#E5E5E5] text-center font-avenirRegular font-medium text-[#1C1C1C] lg:text-[16px]">
                          VT Member
                        </TableHead>
                        <TableHead className="border border-[#E5E5E5] text-center font-avenirRegular font-medium text-[#1C1C1C] lg:text-[16px]">
                          Retail
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border border-[#E5E5E5] text-center">
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirRegular text-[16px] font-medium text-[#1C1C1C]">
                          Monthly Fees
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirHeavy text-[16px] text-[#1F3E7C]">
                          Free
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center">
                          <div className="space-y-2 text-[14px] text-[#646464]">
                            <h1>
                              <span className="font-avenirHeavy text-[16px] text-[#1F3E7C]">
                                $65
                              </span>{" "}
                              /mo. Single Office
                            </h1>
                            <h1>
                              <span className="font-avenirHeavy text-[16px] text-[#1F3E7C]">
                                $85
                              </span>{" "}
                              /mo. Multi Office
                            </h1>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border border-[#E5E5E5] text-center">
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirRegular text-[16px] font-medium text-[#1C1C1C]">
                          Yearly Fees
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirHeavy text-[16px] text-[#1F3E7C]">
                          Free
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center">
                          <div className="space-y-2 text-[14px] text-[#646464]">
                            <h1>
                              <span className="font-avenirHeavy text-[16px] text-[#1F3E7C]">
                                $65
                              </span>{" "}
                              /mo. Single Office
                            </h1>
                            <h1>
                              <span className="font-avenirHeavy text-[16px] text-[#1F3E7C]">
                                $85
                              </span>{" "}
                              /mo. Multi Office
                            </h1>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border border-[#E5E5E5] text-center">
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirRegular text-[16px] font-medium text-[#1C1C1C]">
                          Set-up Fees
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirHeavy text-[16px] text-[#1F3E7C]">
                          Free
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirHeavy text-[16px] text-[#1F3E7C]">
                          Free
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="flex lg:hidden">
                  <Table className="border border-[#E5E5E5] bg-[#FBFCFE]">
                    <TableHeader>
                      <TableRow className="lg:h-[64px]">
                        <TableHead className=" border border-[#E5E5E5]"></TableHead>
                        <TableHead className="border border-[#E5E5E5] text-center font-avenirRegular text-[8px] font-medium text-[#1C1C1C]">
                          VT Member
                        </TableHead>
                        <TableHead className="border border-[#E5E5E5] text-center font-avenirRegular text-[8px] font-medium text-[#1C1C1C]">
                          Retail
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border border-[#E5E5E5] text-center">
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirRegular text-[12px] font-medium text-[#1C1C1C] lg:text-[16px]">
                          Monthly Fees
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirHeavy text-[12px] text-[#1F3E7C] lg:text-[16px]">
                          Free
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center">
                          <div className="space-y-2 text-[6px] text-[#646464] lg:text-[14px]">
                            <h1>
                              <span className="font-avenirHeavy text-[12px] text-[#1F3E7C] lg:text-[16px]">
                                $65
                              </span>{" "}
                              /mo. Single Office
                            </h1>
                            <h1>
                              <span className="font-avenirHeavy text-[12px] text-[#1F3E7C] lg:text-[16px]">
                                $85
                              </span>{" "}
                              /mo. Multi Office
                            </h1>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border border-[#E5E5E5] text-center">
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirRegular text-[12px] font-medium text-[#1C1C1C] lg:text-[16px]">
                          Yearly Fees
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirHeavy text-[12px] text-[#1F3E7C] lg:text-[16px]">
                          Free
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center">
                          <div className="space-y-2 text-[6px] text-[#646464] lg:text-[14px]">
                            <h1>
                              <span className="font-avenirHeavy text-[12px] text-[#1F3E7C] lg:text-[16px]">
                                $65
                              </span>{" "}
                              /mo. Single Office
                            </h1>
                            <h1>
                              <span className="lg:text-[16px]] font-avenirHeavy text-[12px] text-[#1F3E7C]">
                                $85
                              </span>{" "}
                              /mo. Multi Office
                            </h1>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border border-[#E5E5E5] text-center">
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirRegular text-[12px] font-medium text-[#1C1C1C] lg:text-[16px]">
                          Set-up Fees
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirHeavy text-[12px] text-[#1F3E7C] lg:text-[16px]">
                          Free
                        </TableCell>
                        <TableCell className="border border-[#E5E5E5] text-center font-avenirHeavy text-[12px] text-[#1F3E7C] lg:text-[16px]">
                          Free
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Schedule a free demo or sign up today!
            </h1>
            <Card className="card-vendor-contact rounded-[16px] xl:w-[358px]">
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
                      Mr Manager
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898]">
                      ABB Account Manager
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
                      ABBSolutions@abboptical.com
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
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Meet Your Instructor
            </h1>
            <Card className=" rounded-[16px] xl:w-[358px]">
              <div className="flex items-center space-x-4 p-[24px]">
                <div className="flex items-center">
                  <Avatar className="h-[48px] w-[48px]">
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
