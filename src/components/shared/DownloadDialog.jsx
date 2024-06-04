import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { Separator } from "../ui/separator";

export default function DownloadDialog() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="border-[#1F3E7C] px-[12px] py-[4px] font-avenirRegular text-[#1C1C1C]"
        >
          Download Programs
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mr-[40px] mt-4 w-[220px] rounded-[12px] px-[28px] pb-[28px] pt-[36px] lg:w-[226px] xl:mr-[85px]">
        <div className="flex flex-col items-start space-y-[24px]">
          <div className="flex items-center justify-between space-x-[65px] font-avenirHeavy text-[13px] text-[#1F3E7C]">
            <h1 className="">Download All</h1>
            <Download className="w-[14px]" />
          </div>
          <Separator />
          <div className="space-y-[24px]">
            <div className="flex items-center justify-between space-x-[65px] font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
              <h1>Vision Active</h1>
              <Download className="w-[14px]" />
            </div>
            <div className="flex items-center justify-between space-x-[75px] font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
              <h1>Vision Care</h1>
              <Download className="w-[14px]" />
            </div>
            <div className="flex items-center justify-between space-x-[75px] font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
              <h1>VT Practise</h1>
              <Download className="w-[14px]" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
