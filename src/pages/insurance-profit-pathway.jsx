import EmailIcon from "@/assets/icons/EmailIcon";
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

export default function InsuranceProfitPathwayPage() {
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
                Insurance Profit Pathway
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col justify-between space-x-6 space-y-6  py-3 lg:flex-row lg:space-y-0 lg:p-5 lg:py-4">
        <div className="space-y-4">
          <div>
            <Card className="rounded-[16px]">
              <div className="space-y-6 p-5">
                <div className="flex items-center justify-between">
                  <h1 className="font-avenirHeavy text-[24px] text-[#1F3E7C]">
                    VT Insurance Profit Pathway
                  </h1>
                  <Button className="rounded-[8px] bg-[#FEF5D5]">
                    <div className="flex items-center space-x-3">
                      <h1 className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                        INCREASE PROFITS 35% - 50%
                      </h1>
                    </div>
                  </Button>
                </div>
                <div>
                  <p className="font-avenirRegular text-[16px] text-[#989898]">
                    A pathway to profitable insurance jobs is no fairy tale.
                    Vision Trends makes it easy for members to take insurance
                    jobs and turn a profit. Take care of more patients, while
                    caring for your wallet.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Features -
            </h1>
            <Card className="rounded-[16px]">
              <div className="space-y-6 p-5">
                <div className="flex items-center justify-between">
                  <h1 className="font-avenirHeavy text-[16px] text-[#1C1C1C]">
                    VSP Progressive lens in-office finishing program
                  </h1>
                </div>
                <div>
                  <p className="font-avenirRegular text-[16px] text-[#989898]">
                    Vision Trends members can{" "}
                    <span className="text-[#1C1C1C]">
                      finish progressive lenses in-office
                    </span>{" "}
                    for all VSPChoice and Signature Plan vision care members.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="rounded-[16px]">
              <div className="space-y-6 p-5">
                <div className="flex items-center justify-between">
                  <h1 className="font-avenirHeavy text-[16px] text-[#1C1C1C]">
                    Spectra Lab choice with VT preffered fee schedule
                  </h1>
                </div>
                <div>
                  <p className="font-avenirRegular text-[16px] text-[#989898]">
                    Vision Trends has negotiated a higher than average fee
                    schedule. Plus, earn{" "}
                    <span className="text-[#1C1C1C]">
                      additional rebates when using VT Lab Solutions.
                    </span>
                  </p>
                </div>
              </div>
            </Card>
            <Card className="rounded-[16px]">
              <div className="space-y-6 p-5">
                <div className="flex items-center justify-between">
                  <h1 className="font-avenirHeavy text-[16px] text-[#1C1C1C]">
                    Eyemed lab choice
                  </h1>
                </div>
                <div>
                  <p className="w-[430px] font-avenirRegular text-[16px] text-[#989898]">
                    Additional rebates are available when using our exclusive{" "}
                    <span className="text-[#1C1C1C]">VT Lab Solutions.</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Contact Details
            </h1>
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div className="flex items-center space-x-6">
                  <h1 className="font-avenirRegular text-[16px] text-[#1C1C1C]">
                    Get started today. Reach out to us on -
                  </h1>
                </div>
                <div className="flex items-center space-x-3">
                  <EmailIcon />
                  <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    www.vtrends.us/eastwest
                  </h1>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div className="flex items-center space-x-6">
                  <p className="font-avenirRegular text-[16px] text-[#989898]">
                    *Increased profitability projections compare each insurance
                    company’s standard lab dispensing fee schedule to the
                    specific VT program (i.e. VSP IOF Program) or opting out of
                    the EyeMed/Spectera’s Lab Network and using the Vision
                    Trends Lab
                  </p>
                </div>
                <div className="flex items-center space-x-6">
                  <p className="font-avenirRegular text-[16px] text-[#989898]">
                    **15 states have passed laws (Lab Choice States) that allow
                    independent providers to opt-out of an insurance or managed
                    vision care company lab requirement as a condition of
                    in-network provider participation.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
