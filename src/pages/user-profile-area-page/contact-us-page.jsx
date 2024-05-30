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
import CallIcon from "@/assets/call.png";
import EmailIcon from "@/assets/email.png";
import { Separator } from "@/components/ui/separator";
import GlobeIcon from "@/assets/icons/GlobeIcon";
import { MapPin } from "lucide-react";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import { TeamMemberData } from "@/lib/data";

export default function ContactUsPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:ajetton@vtrends.us`;
  };

  const handleWebsiteClick = () => {
    window.open("www.vtrends.us", "_blank");
  };
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
                Contact Us
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-5 lg:px-[32px]">
        <h1 className="font-avenirHeavy text-[24px] text-[#1F3E7C]">
          Meet the Vision Trends Team
        </h1>
      </div>
      <div className="card-ipp flex flex-col-reverse justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-[32px] ">
        <div className="space-y-4">
          <div className="mt-6 grid grid-cols-2 gap-4 lg:mt-0 lg:grid-cols-3 lg:gap-14">
            {TeamMemberData.map((team) => (
              <TeamMemberCard key={team.id} team={team} />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="card-contact-ipp space-y-4">
            <h1 className="px-1 font-avenirHeavy text-[18px] text-[#1C1C1C] lg:px-0">
              VT Contact Details
            </h1>
            <Card className="card-vendor-contact rounded-[16px] lg:w-[358px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div className="space-y-[25px]">
                  <div className="flex cursor-pointer space-x-3">
                    <MapPin className="text-[#646464] lg:w-[20px] " />
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                      406 Sawdust Road, The Woodlands, TX, 77380
                    </h1>
                  </div>
                  <div
                    className="flex cursor-pointer items-center space-x-3"
                    onClick={handleWebsiteClick}
                  >
                    <GlobeIcon />
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                      www.vtrends.us
                    </h1>
                  </div>
                  <div className="flex cursor-pointer items-center space-x-3">
                    <img src={EmailIcon} className="w-[20px]" />
                    <h1
                      className="font-avenirRegular text-[16px] font-medium text-[#646464]"
                      onClick={handleEmailClick}
                    >
                      admin@vtrends.us
                    </h1>
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
