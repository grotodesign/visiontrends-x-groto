import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify, Bell } from "lucide-react";
import { Button } from "../ui/button";

export default function MobileNav() {
  return (
    <div className="h-30 bg-white shadow-md">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <Sheet>
              <SheetTrigger>
                <AlignJustify className="cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="left"></SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center space-x-4">
            <div className="border-r-2">
              <Bell className="w-12 text-[#646464]" />
            </div>
            <div>
              <Button className="font-avenirRegular font-medium">
                Submit Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
