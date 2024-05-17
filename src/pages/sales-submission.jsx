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
import { SearchIcon } from "lucide-react";

export default function SalesSubmissionPage() {
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
                Sales Submission
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-5">
        <div className="flex items-center justify-between">
          <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
            Sales Submission
          </h1>
          <div className="flex items-center space-x-4">
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value=""
                  className="focus:outline-buttonprimary w-[500px] rounded-[8px] border border-gray-300 py-2 pl-10 font-avenirRegular text-[16px]"
                />
                <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
              </div>
            </div>
            <div>
              <Select>
                <SelectTrigger className="h-[40px] w-[108px]">
                  <SelectValue placeholder="2023" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="2000">2000</SelectItem>
                    <SelectItem value="2001">2001</SelectItem>
                    <SelectItem value="2002">2002</SelectItem>
                    <SelectItem value="2003">2003</SelectItem>
                    <SelectItem value="2004">2004</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
