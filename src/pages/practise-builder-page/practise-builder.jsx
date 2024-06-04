import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import PracticeBuilderCard from "@/components/shared/PracticeBuilderCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PracticeBuilderServiceData } from "@/lib/data";

export default function PractiseBuilderPage() {
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
                Practise Builder
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between px-5">
        <div className="space-y-2">
          <h1 className="font-avenirHeavy text-[24px] text-[#1F3E7C]">
            Practise Builder
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-between space-x-6 space-y-6 py-8 lg:flex-row lg:space-y-0 lg:px-[32px]">
        <div className="card-ip-area grid justify-center gap-5 lg:px-0 xl:grid-cols-2 xl:gap-6">
          {PracticeBuilderServiceData.map((offering) => (
            <PracticeBuilderCard key={offering.id} offering={offering} />
          ))}
        </div>
      </div>
    </div>
  );
}
