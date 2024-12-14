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
import { Card } from "@/components/ui/card";
import CardKnoxImg from "@/assets/cardknox.png";
import EmailIcon from "@/assets/email.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MerchantProgramDetailsPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:memberservices@vtrends.us`;
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
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                Merchant Services
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-vsp flex flex-col justify-between space-y-6 py-3  lg:px-[32px] xl:flex-row xl:space-x-6 xl:space-y-0">
        <div className="space-y-4">
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:px-10 lg:py-[32px]">
              <div className="flex flex-row items-center justify-between space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  Outsourced Insurance Billing Service
                </h1>
                <div>
                  <img
                    src={CardKnoxImg}
                    className="h-[24px] w-[100.06px] xl:h-[48px] xl:w-[200.11px]"
                  />
                </div>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                  Our payment solutions are smarter, faster, and more secure
                  than ever. There are no financial credit checks nor approval
                  waiting periods. Plus, we complete all required PCI paperwork
                  on your behalf.
                </p>
              </div>
              <div>
                <Table className="bg-[#FFFFFF]">
                  <TableHeader className="bg-[#F4F4F4]">
                    <TableRow>
                      <TableHead className="font-avenirRegular font-medium text-[#1C1C1C] lg:text-[16px]">
                        Services
                      </TableHead>
                      <TableHead className="font-avenirRegular font-medium text-[#1C1C1C] lg:text-[16px]">
                        Affiliate
                      </TableHead>
                      <TableHead className="font-avenirRegular font-medium text-[#1C1C1C] lg:text-[16px]">
                        Profit+
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="">
                          <h1 className="font-avenirBold font-semibold text-[#1F3E7C] lg:text-[14px]">
                            Vision & Medical Claims Billing (12 month ag.)
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirBold text-[#222222] lg:text-[14px]">
                            <span className="font-semibold text-[#1c1c1c]">
                              6.5%
                            </span>{" "}
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirBold text-[#222222] lg:text-[14px]">
                            <span className="font-semibold text-[#1c1c1c]">
                              7.5%
                            </span>{" "}
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="">
                          <h1 className="font-avenirBold font-semibold text-[#1F3E7C] lg:text-[14px]">
                            Medical Claims Billing Only (12 month ag.)
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirBold text-[#222222] lg:text-[14px]">
                            <span className="font-semibold text-[#1c1c1c]">
                              6.5%
                            </span>{" "}
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirBold text-[#222222] lg:text-[14px]">
                            <span className="font-semibold text-[#1c1c1c]">
                              7.5%
                            </span>{" "}
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="">
                          <h1 className="font-avenirBold font-semibold text-[#1F3E7C] lg:text-[14px]">
                            Medical Claims Billing & Reconcilliation
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirBold text-[#222222] lg:text-[14px]">
                            <span className="font-semibold text-[#1c1c1c]">
                              4.5%
                            </span>{" "}
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirBold text-[#222222] lg:text-[14px]">
                            <span className="font-semibold text-[#1c1c1c]">
                              7.5%
                            </span>{" "}
                            of sales
                          </h1>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="">
                          <h1 className="font-avenirBold font-semibold text-[#1F3E7C] lg:text-[14px]">
                            Claims Billing Minimum
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell className="">
                        <div>
                          <h1 className="font-avenirBold text-[#222222] lg:text-[14px]">
                            <span className="font-semibold text-[#1c1c1c]">
                              $300
                            </span>{" "}
                            per month
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirBold text-[#222222] lg:text-[14px]">
                            <span className="font-semibold text-[#1c1c1c]">
                              $300
                            </span>{" "}
                            per month
                          </h1>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="">
                          <h1 className="font-avenirBold font-semibold text-[#1F3E7C] lg:text-[14px]">
                            Claims Administrative Training
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirBold text-[#222222] lg:text-[14px]">
                            <span className="font-semibold text-[#1c1c1c]">
                              Yes
                            </span>
                          </h1>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <h1 className="font-avenirBold text-[#222222] lg:text-[14px]">
                            No
                          </h1>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
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
                  <h1 className="font-avenirRegular text-[14px] text-[#1C1C1C] lg:text-[16px]">
                    Join us today. Reach out to us on -
                  </h1>
                </div>
                <div
                  className="flex cursor-pointer items-center space-x-3"
                  onClick={handleEmailClick}
                >
                  <img src={EmailIcon} className="w-[20px]" />
                  <h1 className="font-avenirRegular text-[14px] font-medium text-[#646464] lg:text-[16px]">
                    memberservices@vtrends.us
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
