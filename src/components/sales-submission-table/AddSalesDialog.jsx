import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleAlert, CirclePlus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DollarIcon from "@/assets/dollar.png";
import { Button } from "../ui/button";
import CalculatedSalesDialog from "./CalculatedSalesDialog";

export default function AddSalesDialog({ month }) {
  const [monthlyGross, setMontlyGross] = useState("");
  const [collectedSalesTax, setCollectedSalesTax] = useState("");
  const [companyCheckRefund, setCompanyCheckRefund] = useState("");
  const [creditCharges, setCreditCharges] = useState("");
  const handleSubmit = (e) => {};
  return (
    <Dialog>
      <DialogTrigger>
        <button>
          <div className="flex items-center space-x-2 font-avenirRegular text-[#1F3E7C]">
            <CirclePlus className="w-[16px]" />
            <h1 className="text-[14px]">Add</h1>
          </div>
        </button>
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
        <div className="rounded-b-[8px] bg-white">
          <div className="px-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    Monthly Gross Sales
                  </label>
                  <Popover>
                    <PopoverTrigger>
                      <CircleAlert className="w-[14.33px] text-[#B6B6B6]" />
                    </PopoverTrigger>
                    <PopoverContent className="mr-64 font-avenirRegular text-[12px] text-[#989898]">
                      Total dollar amount received for patient balance due by:
                      cash, check (company, insurance, and/or patient), credit
                      card, other form of payment
                    </PopoverContent>
                  </Popover>
                </div>
                <input
                  type="text"
                  placeholder="$ Enter monthly gross sales"
                  value={monthlyGross}
                  onChange={(e) => setMontlyGross(e.target.value)}
                  className="mt-1 block w-[456px] rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1F3E7C] focus:outline-none focus:ring-[#1F3E7C] sm:text-sm"
                  required
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    Collected Sales Tax
                  </label>
                  <Popover>
                    <PopoverTrigger>
                      <CircleAlert className="w-[14.33px] text-[#B6B6B6]" />
                    </PopoverTrigger>
                    <PopoverContent className="mr-64 font-avenirRegular text-[12px] text-[#989898]">
                      Deduct the amount of any sales tax collected from patients
                    </PopoverContent>
                  </Popover>
                </div>

                <input
                  type="text"
                  placeholder="$ Enter collected sales tax"
                  value={collectedSalesTax}
                  onChange={(e) => setCollectedSalesTax(e.target.value)}
                  className="mt-1 block w-[456px] rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1F3E7C] focus:outline-none focus:ring-[#1F3E7C] sm:text-sm"
                  required
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    Company Check Refund
                  </label>
                  <Popover>
                    <PopoverTrigger>
                      <CircleAlert className="w-[14.33px] text-[#B6B6B6]" />
                    </PopoverTrigger>
                    <PopoverContent className="mr-64 font-avenirRegular text-[12px] text-[#989898]">
                      Do not include refunds given by credit card. They have
                      already been deducted from your money token
                    </PopoverContent>
                  </Popover>
                </div>

                <input
                  type="text"
                  placeholder="$ Enter company check refund"
                  value={companyCheckRefund}
                  onChange={(e) => setCompanyCheckRefund(e.target.value)}
                  className="mt-1 block w-[456px] rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1F3E7C] focus:outline-none focus:ring-[#1F3E7C] sm:text-sm"
                  required
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    Credit Charges
                  </label>
                  <Popover>
                    <PopoverTrigger>
                      <CircleAlert className="w-[14.33px] text-[#B6B6B6]" />
                    </PopoverTrigger>
                    <PopoverContent className="mr-64 font-avenirRegular text-[12px] text-[#989898]">
                      This should only be the merchant charges charged to you by
                      Discover and Visa at the end of the month. (AMEX takes
                      their fee when they deposit funds into your account.)
                    </PopoverContent>
                  </Popover>
                </div>
                <input
                  type="text"
                  placeholder="$ Enter credit charges"
                  value={creditCharges}
                  onChange={(e) => setCreditCharges(e.target.value)}
                  className="mt-1 block w-[456px] rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1F3E7C] focus:outline-none focus:ring-[#1F3E7C] sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4 mt-4 flex items-center space-x-5">
                <Button className="h-[44px] w-[139px] border-[1px] border-[#1F3E7C] bg-transparent text-[#1F3E7C] hover:bg-transparent">
                  Cancel
                </Button>
                <CalculatedSalesDialog month={month} />
              </div>
              <div className="mt-4"></div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
