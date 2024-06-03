import InsuranceCard from "@/components/shared/InsuranceCard";
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
import { InsuranceSolutionServicesData } from "@/lib/data";

export default function InsurancePage() {
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
                Insurance Solutions
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between px-5 lg:px-[32px]">
        <div className="space-y-2">
          <h1 className="font-avenirHeavy text-[24px] text-[#1F3E7C]">
            VT Insurance Solutions
          </h1>
          <p className="font-avenirRegular text-[16px] font-medium text-[#989898]">
            Vision Trends offers a variety of administrative services to support
            your interest in growing and improving your practice's insurance
            business.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between space-x-6 space-y-6 py-8 lg:px-[32px] xl:flex-row xl:space-y-0">
        <div className="card-ip-area grid justify-center gap-5 lg:grid-cols-2 lg:gap-6 lg:px-0">
          {InsuranceSolutionServicesData.map((offering) => (
            <InsuranceCard key={offering.id} offering={offering} />
          ))}
        </div>
      </div>
    </div>
  );
}
