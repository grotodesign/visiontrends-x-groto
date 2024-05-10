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
import { CircleAlert } from "lucide-react";

export default function FallForumPage() {
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
                Learning Solution
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                Fall Forum
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-vsp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-5 lg:py-4">
        <div>
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  Fall Forum
                </h1>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px]">
                  The Fall Forum provides COPE CE for ODs and workshop trainings
                  for ODs and staff to prepare for success in the coming year.
                  Course topics cover: practice management, office efficiencies,
                  frame styling, selling, even CPR!
                </p>
              </div>
              <div className="">
                <div className="rounded-[8px] bg-[#F0F7FE] p-5 hover:bg-[#F0F7FE]">
                  <div className="flex space-x-3">
                    <CircleAlert className="w-12 text-[#1F3E7C] lg:w-4" />
                    <h1 className="font-avenirRegular text-[14px]   text-[#1F3E7C] lg:text-[16px]">
                      The best part is the beautiful Kalahari Resort...after
                      abbreviated days of learning, you're off to enjoy
                      America's largest indoor waterpark, Tom Foolery's
                      Adventure Park, on-site award winning cuisine and much
                      more!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
