import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import InsuranceGuideCard from "@/components/shared/insuranceGuideCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { InsuranceProgram } from "@/lib/data";
import { Download, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function InsuranceGuidePage() {
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
                Insurance Guide
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between px-5 lg:px-[32px]">
        <div className="space-y-2">
          <h1 className="font-avenirHeavy text-[24px] text-[#1F3E7C]">
            Insurance Guide
          </h1>
          <p className="font-avenirRegular text-[16px] font-medium text-[#989898]">
            Streamline insurance processes with our online resource for members'
            eligibility and claims assistance
          </p>
        </div>
      </div>
      <div className="card-ipp flex flex-col justify-between space-y-6 py-3 lg:mt-[40px]  lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-[32px] ">
        <div className="space-y-4">
          <Card className="rounded-[16px]">
            <div className="space-y-[36px] p-[24px] lg:px-[32px]">
              <div className="insurance-guide">
                <h1 className="font-avenirHeavy text-[20px] font-semibold text-[#1C1C1C]">
                  Insurance Programs
                </h1>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search anything...."
                    value=""
                    className="focus:outline-buttonprimary w-[300px] rounded-[8px] border border-gray-300 py-2 pl-10 font-avenirRegular text-[16px] lg:w-[400px]"
                  />
                  <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
                </div>
              </div>
              <div className="">
                <div className="space-y-4">
                  {InsuranceProgram.map((offering) => {
                    return (
                      <>
                        <div className="space-y-4">
                          <Link
                            to={`/insurance-solutions/insurance-guide/${offering.id}`}
                            className="space-y-4"
                          >
                            <InsuranceGuideCard
                              key={offering.id}
                              offering={offering}
                            />
                          </Link>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="card-contact-ipp space-y-4">
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div className="space-y-4">
                  <h1 className="text-[#1C1C1C font-avenirRegular text-[16px] font-medium">
                    Vision Trends Insurance Guide
                  </h1>
                  <p className="font-avenirRegular text-[14px] font-medium text-[#989898]">
                    Our Vision Insurance Guide helps you manage eligibility
                    verification and claims for over 40 programs
                  </p>
                  <p className="font-avenirRegular text-[14px] font-medium text-[#989898]">
                    <span className="text-[#1F3E7C] underline">Email us</span>{" "}
                    to suggest new additions
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="card-contact-ipp space-y-4">
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div className="space-y-4">
                  <h1 className="text-[#1C1C1C font-avenirRegular text-[16px] font-medium">
                    Making Insurance Easier
                  </h1>
                  <p className="font-avenirRegular text-[14px] font-medium text-[#989898]">
                    Explore our suite of insurance products and services for
                    simplified insurance engagement. Download for more details
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-[12px] font-avenirRegular text-[14px] text-[#1F3E7C]">
                      <Download />
                      <h1>Affiliate Member</h1>
                    </div>
                    <div className="flex items-center space-x-[12px] font-avenirRegular text-[14px] text-[#1F3E7C]">
                      <Download />
                      <h1>Profit + Member</h1>
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
