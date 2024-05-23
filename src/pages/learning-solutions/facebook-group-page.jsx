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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FacebookGroupPage() {
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
                href="/learning-solutions"
                className="font-avenirRegular text-[14px] text-[#989898]"
              >
                Learning Solution
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                Facebook Groups
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-vsp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-[32px]">
        <div>
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  Facebook Groups
                </h1>
                <Button className="hidden w-[160px] rounded-[8px] lg:flex">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <h1 className="font-avenirRegular text-[14px] font-medium">
                      Join Group
                    </h1>
                  </div>
                </Button>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px]">
                  Join the discussion over in our private Facebook group. Only
                  members are allowed, no vendors:
                </p>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px]">
                  Click the{" "}
                  <span className="font-avenirHeavy text-[#1C1C1C]">
                    'Join Group'
                  </span>{" "}
                  Button to Engage with Members, Exclusively for Practice Owners
                </p>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px]">
                  This group is designed to engage our members/practice
                  owners in discussions focused on practice management, eye
                  health, clinical issues, test interpretation and even
                  discussions related to the business aspect of the practice.
                </p>
              </div>
              <div>
                <Button className="flex w-[160px] rounded-[8px] lg:hidden">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <h1 className="font-avenirRegular text-[14px] font-medium">
                      Join Group
                    </h1>
                  </div>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
