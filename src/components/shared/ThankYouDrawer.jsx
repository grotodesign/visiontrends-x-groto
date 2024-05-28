import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import DollarIcon from "@/assets/dollar.png";
import SuccessIcon from "@/assets/success.png";

export default function ThankYouDrawer({ month }) {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="h-[44px] w-[180px] bg-[#1F3E7C]">
          Submit Sales Data
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className="bg-[#F4F4F4] p-0 lg:max-w-[520px]"
        onClick={() => window.location.reload()}
      >
        <DrawerHeader className="-mt-5 flex items-center justify-between">
          <DrawerTitle className="flex items-center space-x-2 font-avenirHeavy text-[18px] text-[#1C1C1C]">
            <div className="rounded-full bg-white px-4 py-3">
              <img src={DollarIcon} className="w-[9px]" />
            </div>
            <div className="text[18px] font-avenirHeavy text-[#1C1C1C]">
              {month} Sales
            </div>
          </DrawerTitle>
          <DrawerClose className="-mt-2">
            <X />
          </DrawerClose>
        </DrawerHeader>
        <div className="space-y-6 rounded-b-[8px] bg-white">
          <div className="px-7">
            <div className="mb-5 mt-5 flex flex-col items-center justify-center space-y-6">
              <img src={SuccessIcon} className="w-[48px]" />
              <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                Thank you for submitting your sales!
              </h1>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
