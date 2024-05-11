import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import CallIcon from "@/assets/call.png";
import EmailIcon from "@/assets/email.png";
import { Separator } from "@/components/ui/separator";
import { CircleAlert } from "lucide-react";

export default function InsuranceAdministrationPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:ajetton@vtrends.us`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:281-465-9505`;
  };
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
                href="/insurance-solutions"
                className="font-avenirRegular text-[14px] text-[#989898]"
              >
                Insurance Solutions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                Insurance Administration Training
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-ipp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-5 lg:py-4 ">
        <div className="space-y-4">
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:px-10 lg:py-[32px]">
              <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  Insurance Administration Training
                </h1>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px] ">
                  Many practices just need additional knowledge and expertise to
                  manage their insurance billing processes. Or maybe they have a
                  new staff member that needs to be trained in the complexities
                  of verifying eligibility, filing, tracking claims and
                  reconciling EOBs.
                </p>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px] ">
                  Vision Trends offers two solutions to support its members’
                  insurance training goals. We will contact you in advance to
                  determine the training topics and prepare an action plan to
                  maximize the session.
                </p>
              </div>
              <Separator />
              <div className="space-y-4">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  In-House Training includes -
                </h1>
                <div>
                  <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px] ">
                    We will host up to two staff members at our Vision Trends
                    Administration Office spending one full business day
                    tackling tricky issues you and your staff have experienced
                    so you’re better prepared going forward.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Onsite Training includes -
                </h1>
                <div className="p-5">
                  <ul className="list-disc space-y-3 font-avenirRegular text-[14px]  font-thin text-[#989898] lg:text-[16px]">
                    <li>comprehensive needs assessment</li>
                    <li>identifying and documenting staff roles</li>
                    <li>review and develop billing procedures</li>
                    <li>train billing staff</li>
                    <li>create operations guide</li>
                    <li>post visit follow-up calls</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="card-contact-ipp space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Contact Details
            </h1>
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-4 p-6 lg:p-8">
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
                      Ali Jetton
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898]">
                      Insurance Solutions Director
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div
                    className="flex cursor-pointer items-center space-x-3"
                    onClick={handleEmailClick}
                  >
                    <img src={EmailIcon} className="w-[20px]" />
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                      ajetton@vtrends.us
                    </h1>
                  </div>
                  <div className="flex cursor-pointer items-center space-x-3">
                    <img src={CallIcon} className="w-[20px]" />
                    <h1
                      className="font-avenirRegular text-[16px] font-medium text-[#646464]"
                      onClick={handlePhoneClick}
                    >
                      281-465-9505
                    </h1>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-4">
            <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
              Pricing Details
            </h1>
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-6 p-6 lg:p-8">
                <div className="flex items-center space-x-6">
                  <div className="space-y-4">
                    <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                      In-House Training
                    </h1>
                    <div className="flex items-center justify-between space-y-1">
                      <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                        <span className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                          $400
                        </span>{" "}
                        /day
                      </h1>
                      <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                        (Approx. 7 hours)
                      </h1>
                    </div>
                    <div className="space-y-1">
                      <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                        Member practice pays all staff travel expenses to be
                        agreed to prior to engagement
                      </h1>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center space-x-6">
                  <div className="space-y-6">
                    <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                      Onsite Training
                    </h1>
                    <div className="flex items-center justify-between space-y-1">
                      <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                        <span className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                          $685
                        </span>{" "}
                        /day
                      </h1>
                    </div>
                    <div className="space-y-1">
                      <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                        Per VT Employee + Travelling & Lodging expenses
                      </h1>
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
