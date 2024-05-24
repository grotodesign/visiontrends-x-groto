import CallIcon from "@/assets/call.png";
import EmailIcon from "@/assets/email.png";
import GlobeIcon from "@/assets/icons/GlobeIcon";
import DownloadDialog from "@/components/shared/DownloadDialog";
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
import { Separator } from "@/components/ui/separator";
import { CircleAlert, MapPin } from "lucide-react";
import ABBOpticalGroupImg from "@/assets/vendor-images/ABBOpticalGroup.png";

export default function AbbContactLensPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:aasher@abboptical.com`;
  };

  //   const handlePhoneClick = () => {
  //     window.location.href = `tel:330.219.6320`;
  //   };

  const handleWebsiteClick = () => {
    window.open("https://www.abboptical.com/", "_blank");
  };
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="breadcrumbs-area p-5 lg:px-[32px] lg:pt-[28px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-avenirRegular text-[12px] text-[#989898] lg:text-[14px]"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/vendor-partners"
                className="font-avenirRegular text-[12px] text-[#989898] lg:text-[14px]"
              >
                Vendor Partners
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[12px] font-medium text-[#1F3E7C] lg:text-[14px]">
                ABB Contact Lens (Soft Contacts and Gas Perm)
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col justify-between space-x-6 space-y-6  py-3 lg:flex-row lg:space-y-0 lg:px-[32px]">
        <div>
          <Card className="card-vendor-detaiils rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="hidden items-center justify-between space-x-16 lg:flex">
                <div>
                  <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                    ABB Contact Lens (Soft Contacts and Gas Perm)
                  </h1>
                  <p className="font-avenirRegular text-[14px] text-[#989898]">
                    Category: Contacts Lens / Lab
                  </p>
                </div>
                <div>
                  <img src={ABBOpticalGroupImg} className="w-[136px]" />
                </div>
              </div>
              <div className="flex flex-col space-y-4 lg:hidden">
                <div>
                  <img src={ABBOpticalGroupImg} className="w-[136px]" />
                </div>
                <div>
                  <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                    ABB Contact Lens (Soft Contacts and Gas Perm)
                  </h1>
                  <p className="font-avenirRegular text-[14px] text-[#989898]">
                    Category: Contacts Lens / Lab
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-[#646464] lg:w-[18px] " />
                  <h1 className="font-avenirRegular text-[14px]  font-medium text-[#646464] lg:text-[16px]">
                    12301 NW 39th Street Coral Springs FL 33065
                  </h1>
                </div>
                <div className="hidden h-[20px] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 lg:inline-block"></div>
                <div className="flex items-center space-x-2">
                  <GlobeIcon />
                  <h1
                    className="cursor-pointer font-avenirRegular  text-[14px] font-medium text-[#646464] lg:text-[16px]"
                    onClick={handleWebsiteClick}
                  >
                    https://www.abboptical.com/
                  </h1>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h1 className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    ABB Optical Group is a leading provider of optical products,
                    services and business solutions in the eye care industry.
                    ABB operates through three business pillars: ABB Contact
                    Lens, ABB Labs and ABB Business Solutions. ABB is focused on
                    the future of eye care professionals, helping them succeed
                    by making practices more efficient and assisting providers
                    to effectively navigate market changes. Visit abboptical.com
                    for more information.
                  </h1>
                </div>
                <Separator />
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                      Program Summary
                    </h1>
                    <DownloadDialog />
                  </div>
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    ACCESS & CHOICE to help you grow – Provide your patients
                    with the widest portfolio of optical products and find
                    tailored solutions that innovate your practice.
                  </p>
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    ABB Contact Lens has the largest inventory of soft contact
                    lenses in the US and is serving nearly two-thirds of eyecare
                    practitioners nationwide. No one else ships more soft
                    contact lenses the same day. As the leading authorized
                    distributor of all major soft contact lens manufacturers, we
                    can offer the same promotions and diagnostic ratios as the
                    manufacturers do.
                  </p>
                  <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                    ABB Specialty Vision Products offers an extraordinary
                    expertise when it comes to manufacturing specialty gas
                    permeable and custom soft lenses. We always use
                    state-of-the-art equipment, cutting- edge technology, and
                    top quality materials and designs. And our highly trained
                    consultants are available to help with even your most
                    challenging fits.
                  </p>
                  <div></div>
                </div>
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
                      Austin Asher
                    </h1>
                    {/* <p className="font-avenirRegular text-[14px] text-[#989898]">
                    O.D., D.O.S
                    </p> */}
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
                      aasher@abboptical.com
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
                      Affiliate Members
                    </h1>
                    <div className="space-y-1">
                      <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                        <span className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                          $675
                        </span>{" "}
                        One-time set up fee &
                      </h1>
                      <h1 className="font-avenirRegular text-[16px] text-[#989898]">
                        <span className="font-avenirHeavy text-[#1C1C1C]">
                          6.5%
                        </span>{" "}
                        of insurance receivables collected
                      </h1>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center space-x-6">
                  <div className="space-y-6">
                    <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                      Profit+ Members
                    </h1>
                    <div className="space-y-1">
                      <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                        <span className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                          $675
                        </span>{" "}
                        One-time set up fee &
                      </h1>
                      <h1 className="font-avenirRegular text-[16px] text-[#989898]">
                        <span className="font-avenirHeavy text-[#1C1C1C]">
                          6.5%
                        </span>{" "}
                        of insurance receivables collected
                      </h1>
                    </div>
                    <Button className="h-[64px] w-[294px] rounded-[8px] bg-[#F0F7FE] hover:bg-[#F0F7FE]">
                      <div className="flex items-center space-x-3">
                        <CircleAlert className="w-4 text-[#1F3E7C]" />
                        <h1 className="font-avenirRegular text-[16px] text-[#1F3E7C]">
                          Both plans billed monthly
                        </h1>
                      </div>
                    </Button>
                    <div className="w-[286px]">
                      <p className="font-avenirRegular text-[14px] text-[#989898]">
                        *Billing Services requires 12-month commitment and
                        authorization to withdraw funds from your banking
                        institution monthly; members will need to provide a
                        60-day written notice to withdraw from service
                      </p>
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
