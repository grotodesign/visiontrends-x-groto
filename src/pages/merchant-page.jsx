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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import CardKnoxImg from "@/assets/cardknox.png";
import EmailIcon from "@/assets/email.png";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleAlert } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MerchantPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:memberservices@vtrends.us`;
  };

  const [activeTab, setActiveTab] = useState("monthly");

  const monthlyData = [
    {
      program: "Cold Start Office",
      programdescription: "(includes group contract & 1 owner doctor)",
      programsubdetail:
        "Cold Start: Additional Doctors (added at the same time)",
      affiliate: "$220",
      affiliate2: "$90",
      profitPlus: "$90",
      profitPlus2: "$130",
      link: "/merchant-services/program-details",
    },
    {
      program: "Established Office",
      programdescription: "",
      programsubdetail:
        "Established Office: Additional Doctors (added at the same time)",
      programsetup: "Setup Fee (one time, per office)",
      affiliate: "$150",
      affiliate2: "$70",
      profitPlus: "$75",
      profitPlus2: "$130",
      setupAffiliate: "$100",
      setupProfit: "$200",
      link: "/merchant-services/program-details",
    },
    {
      program: "Established Office - Credentialing Maintenance",
      programdescription: "",
      programsubdetail: "a la carte adding a NEW plan",
      programsubdetail1:
        "a la carte additional doctors (added at the same time)",
      programsetup: "Annual Maintenance Fee (one time, per office)",
      affiliate: "$150",
      affiliate2: "$125",
      affiliate3: "$25",
      profitPlus: "$75",
      profitPlus2: "$225",
      profitPlus3: "$75",
      setupAffiliate: "$50",
      setupProfit: "$100",
      link: "/merchant-services/program-details",
    },
    {
      program: "Established Office a la carte (per enrolment application)",
      programdescription: "",
      programsubdetail:
        "a la carte Additional Doctors (added at the same time)",
      programsetup: "Annual Maintenance Fee (one time, per office)",
      affiliate: "$150",
      affiliate2: "$50",
      setupAffiliate: "$50",
      profitPlus: "$75",
      profitPlus2: "$100",
      setupProfit: "$100",
      link: "/merchant-services/program-details",
    },
  ];

  const annualData = [
    {
      program: "Cold Start Office",
      programdescription: "(includes group contract & 1 owner doctor)",
      programsubdetail:
        "Cold Start: Additional Doctors (added at the same time)",
      affiliate: "$2000",
      affiliate2: "$90",
      profitPlus: "$1500",
      profitPlus2: "$130",
      link: "/merchant-services/program-details",
    },
    {
      program: "Established Office",
      programdescription: "",
      programsubdetail:
        "Established Office: Additional Doctors (added at the same time)",
      programsetup: "Setup Fee (one time, per office)",
      affiliate: "$2500",
      affiliate2: "$70",
      profitPlus: "$1800",
      profitPlus2: "$130",
      setupAffiliate: "$100",
      setupProfit: "$200",
      link: "/merchant-services/program-details",
    },
    {
      program: "Established Office - Credentialing Maintenance",
      programdescription: "",
      programsubdetail: "a la carte adding a NEW plan",
      programsubdetail1:
        "a la carte additional doctors (added at the same time)",
      programsetup: "Annual Maintenance Fee (one time, per office)",
      affiliate: "$2000",
      affiliate2: "$125",
      affiliate3: "$25",
      profitPlus: "$1500",
      profitPlus2: "$225",
      profitPlus3: "$75",
      setupAffiliate: "$50",
      setupProfit: "$100",
      link: "/merchant-services/program-details",
    },
    {
      program: "Established Office a la carte (per enrolment application)",
      programdescription: "",
      programsubdetail:
        "a la carte Additional Doctors (added at the same time)",
      programsetup: "Annual Maintenance Fee (one time, per office)",
      affiliate: "$2000",
      affiliate2: "$50",
      setupAffiliate: "$50",
      profitPlus: "$1500",
      profitPlus2: "$100",
      setupProfit: "$100",
      link: "/merchant-services/program-details",
    },
  ];

  const renderProgramDetails = (row) => {
    switch (row.program) {
      case "Cold Start Office":
        return (
          <div className="space-y-[6px]">
            <h1 className="font-avenirHeavy text-[#1F3E7C] lg:text-[14px]">
              {row.program}
            </h1>
            <p className="font-avenirRegular text-[#0a0a0a] lg:w-[230px] lg:text-[14px]">
              {row?.programdescription}
            </p>
            <p className="font-avenirRegular text-[#989898] lg:w-[230px] lg:text-[14px]">
              {row?.programsubdetail}
            </p>
            <p className="font-avenirRegular text-[#989898] lg:text-[14px]">
              {row?.programsubdetail1}
            </p>
            <p className="font-avenirMedium font-medium text-[#1F3E7C] lg:text-[14px]">
              {row?.programsetup}
            </p>
          </div>
        );

      case "Established Office":
        return (
          <div className="space-y-[6px]">
            <h1 className="font-avenirHeavy text-[#1F3E7C] lg:text-[14px]">
              {row.program}
            </h1>
            <p className="font-avenirRegular text-[#0a0a0a] lg:w-[230px] lg:text-[14px]">
              {row?.programdescription}
            </p>
            <p className="font-avenirRegular text-[#989898] lg:w-[286px] lg:text-[14px]">
              {row?.programsubdetail}
            </p>
            <p className="font-avenirRegular text-[#989898] lg:text-[14px]">
              {row?.programsubdetail1}
            </p>
            <p className="font-avenirMedium font-medium text-[#1F3E7C] lg:text-[14px]">
              {row?.programsetup}
            </p>
          </div>
        );

      case "Established Office - Credentialing Maintenance":
        return (
          <div className="space-y-[6px]">
            <h1 className="font-avenirHeavy text-[#1F3E7C] lg:w-[280px] lg:text-[14px]">
              {row.program}
            </h1>
            <p className="font-avenirRegular text-[#0a0a0a] lg:text-[14px]">
              {row?.programdescription}
            </p>
            <p className="font-avenirRegular text-[#989898] lg:text-[14px]">
              {row?.programsubdetail}
            </p>
            <p className="font-avenirRegular text-[#989898] lg:w-[200px] lg:text-[14px]">
              {row?.programsubdetail1}
            </p>
            <p className="font-avenirMedium font-medium text-[#1F3E7C] lg:w-[230px] lg:text-[14px]">
              {row?.programsetup}
            </p>
          </div>
        );

      default:
        return (
          <div className="space-y-[6px]">
            <h1 className="font-avenirHeavy text-[#1F3E7C] lg:w-[200px] lg:text-[14px]">
              {row.program}
            </h1>
            <p className="font-avenirRegular text-[#0a0a0a] lg:text-[14px]">
              {row?.programdescription}
            </p>
            <p className="font-avenirRegular text-[#989898] lg:w-[200px] lg:text-[14px]">
              {row?.programsubdetail}
            </p>
            <p className="font-avenirRegular text-[#989898] lg:text-[14px]">
              {row?.programsubdetail1}
            </p>
            <p className="font-avenirMedium font-medium text-[#1F3E7C] lg:w-[230px] lg:text-[14px]">
              {row?.programsetup}
            </p>
          </div>
        );
    }
  };

  const renderAffiliateDetails = (row) => {
    switch (row.program) {
      case "Cold Start Office":
        return (
          <div className="lg:space-y-[18px]">
            <h1 className="text-center font-avenirHeavy text-[#1F3E7C] lg:-mt-5 lg:text-[14px]">
              {row?.affiliate}
            </h1>
            {row.program == "Cold Start Office" ? (
              <div className="h-4"></div>
            ) : (
              <p className="font-avenirRegular text-[#0a0a0a] lg:text-[14px]"></p>
            )}
            {row?.affiliate2 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.affiliate2}
              </p>
            )}
            {row?.affiliate3 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.affiliate3}
              </p>
            )}
            {row?.setupAffiliate && (
              <p className="text-center font-avenirMedium text-[#1F3E7C] lg:text-[14px]">
                {row?.setupAffiliate}
              </p>
            )}
          </div>
        );

      case "Established Office":
        return (
          <div className="lg:space-y-[15px]">
            <h1 className="text-center font-avenirHeavy text-[#1F3E7C] lg:-mt-2 lg:text-[14px]">
              {row?.affiliate}
            </h1>
            {row?.affiliate2 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.affiliate2}
              </p>
            )}
            {row?.affiliate3 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.affiliate3}
              </p>
            )}
            {row?.setupAffiliate && (
              <p className="text-center font-avenirMedium text-[#1F3E7C] lg:text-[14px]">
                {row?.setupAffiliate}
              </p>
            )}
          </div>
        );

      case "Established Office - Credentialing Maintenance":
        return (
          <div className="lg:space-y-[19px]">
            <h1 className="text-center font-avenirHeavy text-[#1F3E7C] lg:-mt-5 lg:text-[14px]">
              {row?.affiliate}
            </h1>
            {row?.affiliate2 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.affiliate2}
              </p>
            )}
            {row?.affiliate3 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.affiliate3}
              </p>
            )}
            {row?.setupAffiliate && (
              <p className="text-center font-avenirMedium text-[#1F3E7C] lg:text-[14px]">
                {row?.setupAffiliate}
              </p>
            )}
          </div>
        );

      case "Established Office a la carte (per enrolment application)":
        return (
          <div className="lg:space-y-[23px]">
            <h1 className="text-center font-avenirHeavy text-[#1F3E7C] lg:-mt-5 lg:text-[14px]">
              {row?.affiliate}
            </h1>
            {row?.affiliate2 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.affiliate2}
              </p>
            )}
            {row?.affiliate3 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.affiliate3}
              </p>
            )}
            {row?.setupAffiliate && (
              <p className="text-center font-avenirMedium text-[#1F3E7C] lg:text-[14px]">
                {row?.setupAffiliate}
              </p>
            )}
          </div>
        );

      default:
        return (
          <div className="lg:space-y-[15px]">
            <h1 className="text-center font-avenirHeavy text-[#1F3E7C] lg:-mt-3 lg:text-[14px]">
              {row?.affiliate}
            </h1>
            {row?.affiliate2 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.affiliate2}
              </p>
            )}
            {row?.affiliate3 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.affiliate3}
              </p>
            )}
            {row?.setupAffiliate && (
              <p className="text-center font-avenirMedium text-[#1F3E7C] lg:text-[14px]">
                {row?.setupAffiliate}
              </p>
            )}
          </div>
        );
    }
  };

  const renderProfitDetails = (row) => {
    switch (row.program) {
      case "Cold Start Office":
        return (
          <div className="lg:space-y-[18px]">
            <h1 className="text-center font-avenirHeavy text-[#1F3E7C] lg:-mt-5 lg:text-[14px]">
              {row?.profitPlus}
            </h1>
            {row.program == "Cold Start Office" ? (
              <div className="h-4"></div>
            ) : (
              <p className="font-avenirRegular text-[#0a0a0a] lg:text-[14px]"></p>
            )}
            {row?.affiliate2 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.profitPlus2}
              </p>
            )}
            {row?.affiliate3 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.profitPlus3}
              </p>
            )}
            {row?.setupAffiliate && (
              <p className="text-center font-avenirMedium text-[#1F3E7C] lg:text-[14px]">
                {row?.setupProfit}
              </p>
            )}
          </div>
        );

      case "Established Office":
        return (
          <div className="lg:space-y-[15px]">
            <h1 className="text-center font-avenirHeavy text-[#1F3E7C] lg:-mt-2 lg:text-[14px]">
              {row?.profitPlus}
            </h1>
            {row?.affiliate2 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.profitPlus2}
              </p>
            )}
            {row?.affiliate3 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.profitPlus3}
              </p>
            )}
            {row?.setupAffiliate && (
              <p className="text-center font-avenirMedium text-[#1F3E7C] lg:text-[14px]">
                {row?.setupProfit}
              </p>
            )}
          </div>
        );

      case "Established Office - Credentialing Maintenance":
        return (
          <div className="lg:space-y-[19px]">
            <h1 className="text-center font-avenirHeavy text-[#1F3E7C] lg:-mt-5 lg:text-[14px]">
              {row?.profitPlus}
            </h1>
            {row?.affiliate2 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.profitPlus2}
              </p>
            )}
            {row?.affiliate3 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.profitPlus3}
              </p>
            )}
            {row?.setupAffiliate && (
              <p className="text-center font-avenirMedium text-[#1F3E7C] lg:text-[14px]">
                {row?.setupProfit}
              </p>
            )}
          </div>
        );

      case "Established Office a la carte (per enrolment application)":
        return (
          <div className="lg:space-y-[23px]">
            <h1 className="text-center font-avenirHeavy text-[#1F3E7C] lg:-mt-5 lg:text-[14px]">
              {row?.profitPlus}
            </h1>
            {row?.affiliate2 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.profitPlus2}
              </p>
            )}
            {row?.affiliate3 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.profitPlus3}
              </p>
            )}
            {row?.setupAffiliate && (
              <p className="text-center font-avenirMedium text-[#1F3E7C] lg:text-[14px]">
                {row?.setupProfit}
              </p>
            )}
          </div>
        );

      default:
        return (
          <div className="lg:space-y-[15px]">
            <h1 className="text-center font-avenirHeavy text-[#1F3E7C] lg:-mt-3 lg:text-[14px]">
              {row?.profitPlus}
            </h1>
            {row?.affiliate2 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.profitPlus2}
              </p>
            )}
            {row?.affiliate3 && (
              <p className="text-center font-avenirMedium text-[#222222] lg:text-[14px]">
                {row?.profitPlus3}
              </p>
            )}
            {row?.setupAffiliate && (
              <p className="text-center font-avenirMedium text-[#1F3E7C] lg:text-[14px]">
                {row?.setupProfit}
              </p>
            )}
          </div>
        );
    }
  };

  const renderTable = (data) => (
    <Table className="bg-[#FFFFFF]">
      <TableHeader className="bg-[#F4F4F4]">
        <TableRow>
          <TableHead className="font-avenirRegular font-medium text-[#1C1C1C] lg:text-[16px]">
            Program
          </TableHead>
          <TableHead className="text-center font-avenirRegular font-medium text-[#1C1C1C] lg:text-[16px]">
            Affiliate
          </TableHead>
          <TableHead className="text-center font-avenirRegular font-medium text-[#1C1C1C] lg:text-[16px]">
            Profit+
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index} className="">
            <Link to={row?.link}>
              <TableCell>{renderProgramDetails(row)}</TableCell>
            </Link>
            <TableCell>{renderAffiliateDetails(row)}</TableCell>
            <TableCell>{renderProfitDetails(row)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

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
                Merchant Services
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-vsp flex flex-col justify-between space-y-6 py-3  lg:px-[32px] xl:flex-row xl:space-x-6 xl:space-y-0">
        <div className="space-y-4">
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:px-10 lg:py-[32px]">
              <div className="flex flex-row items-center justify-between space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  Merchant Services
                </h1>
                <div>
                  <img
                    src={CardKnoxImg}
                    className="h-[24px] w-[100.06px] xl:h-[48px] xl:w-[200.11px]"
                  />
                </div>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                  Our payment solutions are smarter, faster, and more secure
                  than ever. There are no financial credit checks nor approval
                  waiting periods. Plus, we complete all required PCI paperwork
                  on your behalf.
                </p>
              </div>
              <div>
                <h1 className="font-avenirRegular text-[16px] text-[#1C1C1C]">
                  Join us today to simplify and supercharge your payments flow!
                </h1>
              </div>
              <Separator />
              <div className="">
                <div className="flex items-center justify-between">
                  <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    Programs we offer:
                  </h1>
                  <Tabs defaultValue="monthly" onValueChange={setActiveTab}>
                    <TabsList>
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      <TabsTrigger value="annually">Annually</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
              <div className="">
                {activeTab === "monthly" && renderTable(monthlyData)}
                {activeTab === "annually" && renderTable(annualData)}
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
                  <h1 className="font-avenirRegular text-[14px] text-[#1C1C1C] lg:text-[16px]">
                    Join us today. Reach out to us on -
                  </h1>
                </div>
                <div
                  className="flex cursor-pointer items-center space-x-3"
                  onClick={handleEmailClick}
                >
                  <img src={EmailIcon} className="w-[20px]" />
                  <h1 className="font-avenirRegular text-[14px] font-medium text-[#646464] lg:text-[16px]">
                    memberservices@vtrends.us
                  </h1>
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
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="card-bg rounded-[8px] bg-[#F4F4F4] px-[12px] py-[10px]">
                      <h1 className="font-avenirRegular text-[14px] text-[#646464] lg:text-[16px] ">
                        Processing Fee:
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <h1 className="font-avenirRegular text-[16px] font-medium text-[#989898]">
                        Traditional Model
                      </h1>
                      <p className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                        2.5%
                      </p>
                    </div>
                    <div className="text-center">
                      <h1 className="font-avenirRegular text-[16px] font-medium text-[#989898]">
                        Surcharge Model
                      </h1>
                      <p className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                        3%
                      </p>
                    </div>
                  </div>

                  <div className="card-btn rounded-[8px] bg-[#F0F7FE] px-[12px] py-[10px]">
                    <div className="flex w-[252px] space-x-2 font-avenirRegular text-[14px] text-[#1F3E7C] lg:text-[16px] ">
                      <CircleAlert />{" "}
                      <p>
                        with Surcharge Model, terminal can be set @ 1%, 2%, or
                        3%
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-[#F4F4F4] pt-2" />

                <div className="flex items-center space-x-6">
                  <div className="card-bg rounded-[8px] bg-[#F4F4F4] px-[12px] py-[10px]">
                    <h1 className="font-avenirRegular text-[14px] text-[#646464] lg:text-[16px] ">
                      Terminal Pricing:
                    </h1>
                  </div>
                </div>

                <div className="">
                  <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                    Affiliate Members
                  </h1>
                  <p className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                    Free
                  </p>
                </div>
                <Separator />
                <div className="">
                  <h1 className="font-avenirRegular text-[18px] font-medium text-[#1C1C1C]">
                    Profit + Members
                  </h1>
                  <p className="font-avenirHeavy text-[20px] text-[#1F3E7C]">
                    $495{" "}
                    <span className="font-avenirRegular text-[14px] text-[#989898]">
                      invoiced 45 days after installation
                    </span>
                  </p>
                </div>
                <div className="card-btn rounded-[8px] bg-[#F0F7FE] px-[12px] py-[10px]">
                  <div className="flex w-[252px] space-x-2 font-avenirRegular text-[14px] text-[#1F3E7C] lg:text-[16px] ">
                    <CircleAlert />{" "}
                    <p>
                      Additional terminals are <span>$495</span>
                    </p>
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
