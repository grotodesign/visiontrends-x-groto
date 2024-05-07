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
          className="border-[#1F3E7C] font-avenirRegular text-[#1C1C1C]"
        >
          Download Now
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mr-44 mt-4 w-[220px] rounded-[12px] lg:mr-[85px] lg:w-[226px]">
        <div className="flex flex-col items-start space-y-6">
          <div className="flex items-center justify-between space-x-16 text-[#1F3E7C]">
            <h1>Download All</h1>
            <Download />
          </div>
          <Separator />
          <div className="flex items-center justify-between space-x-[65px] text-[#1F3E7C]">
            <h1>Vision Active</h1>
            <Download />
          </div>
          <div className="flex items-center justify-between space-x-[75px] text-[#1F3E7C]">
            <h1>Vision Care</h1>
            <Download />
          </div>
          <div className="flex items-center justify-between space-x-[75px] text-[#1F3E7C]">
            <h1>VT Practise</h1>
            <Download />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
