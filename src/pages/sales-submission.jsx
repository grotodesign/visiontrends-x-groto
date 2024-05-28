import { SalesSubmissionMockData } from "@/components/sales-submission-table/SalesSubmissionMockDataTable";
import { SalesSubmissionTableColumns } from "@/components/sales-submission-table/SalesSubmissionTableColDef";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, SearchIcon } from "lucide-react";
import { useState } from "react";

export default function SalesSubmissionPage() {
  const [searchValue, setSearchValue] = useState("");
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
                Sales Submission
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-5 lg:px-[32px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
            Sales Submission
          </h1>
          <div className="flex items-center space-x-4 md:mt-[16px] lg:mt-0">
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="focus:outline-buttonprimary rounded-[8px] border border-gray-300 py-2 pl-10 font-avenirRegular text-[16px] md:w-[500px]"
                />
                <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
              </div>
            </div>
            <div>
              <Select>
                <SelectTrigger className="h-[40px] w-[108px]">
                  <SelectValue placeholder="2024" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="2000">2000</SelectItem>
                    <SelectItem value="2001">2001</SelectItem>
                    <SelectItem value="2002">2002</SelectItem>
                    <SelectItem value="2003">2003</SelectItem>
                    <SelectItem value="2004">2004</SelectItem>
                    <SelectItem value="2005">2005</SelectItem>
                    <SelectItem value="2006">2006</SelectItem>
                    <SelectItem value="2007">2007</SelectItem>
                    <SelectItem value="2008">2008</SelectItem>
                    <SelectItem value="2009">2009</SelectItem>
                    <SelectItem value="2010">2010</SelectItem>
                    <SelectItem value="2011">2011</SelectItem>
                    <SelectItem value="2012">2012</SelectItem>
                    <SelectItem value="2013">2013</SelectItem>
                    <SelectItem value="2014">2014</SelectItem>
                    <SelectItem value="2015">2015</SelectItem>
                    <SelectItem value="2016">2016</SelectItem>
                    <SelectItem value="2017">2017</SelectItem>
                    <SelectItem value="2018">2018</SelectItem>
                    <SelectItem value="2019">2019</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 px-5 lg:px-[32px]">
        <SalesSubmissionMockData />
        <div className="rounded-b-[8px] bg-[#FEF5D5] p-[10px] text-center">
          <div className="flex items-center justify-center space-x-2 font-avenirRegular text-[14px] font-thin text-[#1F3E7C]">
            <AlertCircle className="w-[14px]" />
            <h1>
              Add sales of last month, to continue adding for current month
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
