import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import React from "react";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MoveUpRight, SearchIcon } from "lucide-react";
import VendorPartnersCard from "@/components/shared/VendorPartnersCard";
import { VendorPartnersData } from "@/lib/data";
import VendorPartnersBookmarkedCard from "@/components/shared/VendorPartnersBookmarkedCard";
import FeaturedIllustrationIcon from "@/assets/icons/FeaturedIllustrationIcon";
import { Link } from "react-router-dom";

export default function VendorPartnersPage() {
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
                Vendor Partners
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="vendor-area-1 flex items-center justify-between px-5 lg:px-[32px]">
        <div className="">
          <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
            Vendor Partners
          </h1>
          <p className="block font-avenirRegular text-[14px] font-medium text-[#989898] lg:hidden">
            Profit with Tailored Partners for Profitability
          </p>
          <p className="hidden font-avenirRegular text-[14px] font-medium text-[#989898] lg:block">
            Maximize Profit with Tailored Partners for Profitability
          </p>
        </div>
        <div>
          <Button className="rounded-[8px] border border-[#1F3E7C] bg-[#F0F7FE] hover:bg-[#F0F7FE]">
            <div className="flex items-center space-x-1 font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
              <h1 className="hidden lg:block">Refer a Vendor</h1>
              <h1 className="lg:hidden">Refer</h1>
              <MoveUpRight className="w-[16px]" />
            </div>
          </Button>
        </div>
      </div>
      <div className="mt-5 flex items-center px-5 lg:px-[32px]">
        <div className="search-area flex flex-row space-x-4 lg:items-center">
          <div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Vendor"
                value=""
                className="focus:outline-buttonprimary h-[32px] w-[185px] rounded-[8px] border border-gray-300 py-3 pl-10 font-avenirRegular text-[16px] lg:h-[40px] lg:w-[400px]"
              />
              <SearchIcon className="absolute left-3 top-1/2 h-[14.5px] w-[14.5px] -translate-y-1/2 transform text-[#B6B6B6] lg:left-3" />
            </div>
          </div>
          <div>
            <Select className="mr-44 mt-4 w-[220px] lg:mr-6 lg:w-56">
              <SelectTrigger className="h-[32px] w-[162px] lg:h-[40px] lg:w-[208px]">
                <SelectValue
                  className="text-[#B6B6B6] placeholder:text-[#B6B6B6]"
                  placeholder="Filter by category"
                />
              </SelectTrigger>
              <SelectContent className="text-[#B6B6B6]">
                <SelectItem value="contacts">Contacts</SelectItem>
                <SelectItem value="frames">Frames</SelectItem>
                <SelectItem value="pharmaceuticals">Pharmaceuticals</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="opticalsupplies">
                  Optical Supplies
                </SelectItem>
                <SelectItem value="practicemanagement">
                  Practice Management
                </SelectItem>
                <SelectItem value="lenslab">Lens / Lab</SelectItem>
                <SelectItem value="equipment">Equipment</SelectItem>
                <SelectItem value="storedesign">Store Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="financialservices">
                  Financial Services
                </SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="nutriceuticals">
                  Nutriceuticals / Vitamins
                </SelectItem>
                <SelectItem value="sunwear">Sunwear</SelectItem>
                <SelectItem value="insurance">Insurance</SelectItem>
                <SelectItem value="businessService">
                  Business Services
                </SelectItem>
                <SelectItem value="cardprocessing">Card Processing</SelectItem>
                <SelectItem value="realestate">Real Estate</SelectItem>
                <SelectItem value="dryeye">Dry Eye</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between space-x-6 space-y-6 py-8 lg:flex-row lg:space-y-0 lg:px-[32px]">
        <div className="cardArea grid justify-center gap-6 lg:grid-cols-4 lg:gap-[24px] lg:px-0">
          {VendorPartnersData.map((vendor) => {
            return (
              <>
                <Link to={vendor.id}>
                  {vendor.isBookedMarked ? (
                    <div key={vendor.id}>
                      <div className="mr-5 flex justify-end">
                        <FeaturedIllustrationIcon />
                      </div>
                      <div className="-mt-8 lg:-mt-8">
                        <VendorPartnersBookmarkedCard
                          key={vendor.id}
                          vendor={vendor}
                        />
                      </div>
                    </div>
                  ) : (
                    <VendorPartnersCard key={vendor.id} vendor={vendor} />
                  )}
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
