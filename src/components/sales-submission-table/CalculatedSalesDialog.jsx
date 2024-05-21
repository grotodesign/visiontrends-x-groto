import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import DollarIcon from "@/assets/dollar.png";
import ThankYouDialog from "../shared/ThankYouDialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CircleAlert } from "lucide-react";

export default function CalculatedSalesDialog({ month }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="h-[44px] w-[297px] bg-[#1F3E7C]">
          Calculate Amount Due
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[520px] bg-[#F4F4F4] p-0">
        <DialogHeader className="mt-0 p-5 lg:-mb-5">
          <DialogTitle className="flex items-center space-x-2 font-avenirHeavy text-[18px] text-[#1C1C1C]">
            <div className="rounded-full bg-white px-4 py-3">
              <img src={DollarIcon} className="w-[9px]" />
            </div>
            <div className="text[18px] font-avenirHeavy text-[#1C1C1C]">
              {month} Sales
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 rounded-b-[8px] bg-white">
          <div className="px-7">
            <div className="space-y-6">
              <div className="mt-4 flex items-center justify-between">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Monthly Gross Sales
                </h1>
                <p className="font-avenirRegular text-[16px] font-medium text-[#49A610]">
                  $ 1000
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Collected Sales Tax
                </h1>
                <p className="font-avenirRegular text-[16px] font-medium text-[#B11212]">
                  - $ 30
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Company Check Refund
                </h1>
                <p className="font-avenirRegular text-[16px] font-medium text-[#B11212]">
                  - $ 120
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                  Credit Charges
                </h1>
                <p className="font-avenirRegular text-[16px] font-medium text-[#B11212]">
                  - $ 100
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F0F7FE] px-7 py-1">
            <div className="mt-5 space-y-6 ">
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 font-avenirRegular text-[16px] font-medium text-[#1C1C1C]">
                  <h1>Monthly Net Sales</h1>
                  <Popover>
                    <PopoverTrigger>
                      <CircleAlert className="w-[14.33px] text-[#B6B6B6]" />
                    </PopoverTrigger>
                    <PopoverContent className="mr-5 font-avenirRegular text-[12px] text-[#989898]">
                      Subtract Tax, Refunds & Credit Card Charges from Gross
                      Sales
                    </PopoverContent>
                  </Popover>
                </div>
                <p className="font-avenirHeavy text-[20px] font-semibold text-[#1F3E7C]">
                  $ 730
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 font-avenirRegular text-[16px] font-medium text-[#1C1C1C]">
                  <h1>Amount Due</h1>
                  <Popover>
                    <PopoverTrigger>
                      <CircleAlert className="w-[14.33px] text-[#B6B6B6]" />
                    </PopoverTrigger>
                    <PopoverContent className="ml-5 font-avenirRegular text-[12px] text-[#989898]">
                      T.B.D
                    </PopoverContent>
                  </Popover>
                </div>
                <p className="font-avenirHeavy text-[20px] font-semibold text-[#1F3E7C]">
                  $ 7.30
                </p>
              </div>
              <div className="mt-4"></div>
            </div>
          </div>
          <div className="mb-4 mt-4 flex items-center space-x-5 px-7">
            <Button className="h-[44px] w-[139px] border-[1px] border-[#1F3E7C] bg-transparent text-[#1F3E7C] hover:bg-transparent">
              Re-Calculate
            </Button>
            <ThankYouDialog month={month} />
          </div>
          <div className="mt-4"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
