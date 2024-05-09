import LearningCard from "@/components/shared/LearningCard";
import LearningSessionCard from "@/components/shared/LearningSessionCard";
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
import { LearningSolutionData } from "@/lib/data";

export default function LearningSolutionPage() {
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
      <div className="flex items-center justify-between px-5 ">
        <div className="space-y-2">
          <h1 className="font-avenirHeavy text-[24px] text-[#1F3E7C]">
            VT Learning Solutions
          </h1>
          <p className="font-avenirRegular text-[16px] font-medium text-[#989898]">
            Unlock comprehensive training and education with Vision Trends
            Learning Solutions. Our platform ensures engaging, consistent
            learning.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between space-x-6 space-y-6 py-8 lg:flex-row lg:space-y-0 lg:p-5">
        <div className="card-ip-area grid justify-center gap-5 lg:grid-cols-2 lg:gap-6 lg:px-0">
          {LearningSolutionData.map((offering) => {
            return (
              <>
                {offering.isThereNewSesson ? (
                  <LearningSessionCard key={offering.id} offering={offering} />
                ) : (
                  <LearningCard key={offering.id} offering={offering} />
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
