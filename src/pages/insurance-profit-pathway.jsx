import EmailIcon from "@/assets/email.png";
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
  // Function to handle email click, redirecting to the specified email address
  const handleEmailClick = () => {
    window.location.href = `mailto:www.vtrends.us/eastwest`;
  };
  return (
    <div>
      {/* Navigation for larger screens */}
      <div className="hidden lg:block">
        <Navbar />
      </div>
      {/* Navigation for smaller screens */}
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
                Insurance Profit Pathway
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-ipp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-[32px]">
        <div className="space-y-[32px]">
          <div>
            <Card className="rounded-[16px]">
              <div className="space-y-6 p-5 lg:p-10">
                <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                  <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                    VT Insurance Profit Pathway
                  </h1>
                  <Button className="rounded-[8px] bg-[#FEF5D5]">
                    <div className="flex items-center space-x-3">
                      <h1 className="font-avenirRegular text-[12px] font-medium text-[#1F3E7C] lg:text-[14px]">
                        INCREASE PROFITS 35% - 50%
                      </h1>
                    </div>
                  </Button>
                </div>
                <div>
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
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
            <h1 className="font-avenirHeavy text-[14px] text-[#1C1C1C] lg:text-[18px]">
              Features -
            </h1>
            <Card className="rounded-[16px]">
              <div className="space-y-6 p-5">
                <div className="flex items-center justify-between">
                  <h1 className="font-avenirHeavy text-[14px] text-[#1C1C1C] lg:text-[16px]">
                    VSP Progressive lens in-office finishing program
                  </h1>
                </div>
                <div>
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
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
                  <h1 className="font-avenirHeavy text-[14px] text-[#1C1C1C] lg:text-[16px]">
                    Spectra Lab choice with VT preffered fee schedule
                  </h1>
                </div>
                <div>
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
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
                  <h1 className="font-avenirHeavy text-[14px] text-[#1C1C1C] lg:text-[16px]">
                    Eyemed lab choice
                  </h1>
                </div>
                <div>
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:w-[430px] lg:text-[16px]">
                    Additional rebates are available when using our exclusive{" "}
                    <span className="text-[#1C1C1C]">VT Lab Solutions.</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="space-y-4">
          <div className="card-contact-ipp space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Contact Details
            </h1>
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div className="flex items-center space-x-6">
                  <h1 className="font-avenirRegular text-[14px] text-[#1C1C1C] lg:text-[16px]">
                    Get started today. Reach out to us on -
                  </h1>
                </div>
                <div
                  className="flex cursor-pointer items-center space-x-3"
                  onClick={handleEmailClick}
                >
                  <img src={EmailIcon} className="w-[20px]" />
                  <h1 className="font-avenirRegular text-[14px] font-medium text-[#646464] lg:text-[16px]">
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
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    *Increased profitability projections compare each insurance
                    company’s standard lab dispensing fee schedule to the
                    specific VT program (i.e. VSP IOF Program) or opting out of
                    the EyeMed/Spectera’s Lab Network and using the Vision
                    Trends Lab
                  </p>
                </div>
                <div className="flex items-center space-x-6">
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
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
