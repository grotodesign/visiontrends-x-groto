import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { CirclePlus, Dot, Download } from "lucide-react";
import React from "react";
import AddSalesDialog from "./AddSalesDialog";
import AddSalesDrawer from "./mobile/AddSalesDrawer";

/**
 * @typedef {Object} ISalesSubmissionTableRow
 * @property {string} month
 * @property {string} grosssales
 * @property {string} netsales
 * @property {string} amountdue
 * @property {string} status
 * @property {string} action
 */

const columnHelper = createColumnHelper();

/** @type {Array<ReturnType<typeof columnHelper.accessor>>} */
export const SalesSubmissionTableColumns = [
  columnHelper.accessor("month", {
    header: () => (
      <div>
        <h1 className="font-avenirRegular text-[12px] font-medium text-[#7B8694] lg:text-[14px]">
          Month
        </h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue = row.getValue("month");
      return (
        <span className="font-avenirHeavy text-[12px] text-[#101828] lg:text-[14px]">
          {colValue}
        </span>
      );
    },
  }),
  columnHelper.accessor("grosssales", {
    header: () => (
      <div>
        <h1 className="font-avenirRegular text-[12px] font-medium text-[#7B8694] lg:text-[14px]">
          Gross Sales
        </h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue = row.getValue("grosssales");
      return (
        <span className="font-avenirRegular text-[14px] text-[#475467]">
          {colValue}
        </span>
      );
    },
  }),
  columnHelper.accessor("netsales", {
    header: () => (
      <div>
        <h1 className="font-avenirRegular text-[12px] font-medium text-[#7B8694] lg:text-[14px]">
          Net Sales
        </h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue = row.getValue("netsales");
      return (
        <span className="font-avenirRegular text-[14px] text-[#475467]">
          {colValue}
        </span>
      );
    },
  }),
  columnHelper.accessor("amountdue", {
    header: () => (
      <div>
        <h1 className="font-avenirRegular text-[12px] font-medium text-[#7B8694] lg:text-[14px]">
          Amount Due
        </h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue = row.getValue("amountdue");
      return (
        <span className="font-avenirRegular text-[14px] text-[#475467]">
          {colValue}
        </span>
      );
    },
  }),
  columnHelper.accessor("status", {
    header: () => (
      <div>
        <h1 className="font-avenirRegular text-[12px] font-medium text-[#7B8694] lg:text-[14px]">
          Status
        </h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue = row.getValue("status");
      return (
        <>
          {colValue == "Submitted" && (
            <div className="flex h-[25px] w-[95px] items-center space-x-[-3.5px] rounded-full bg-[#ECFDF3] pr-3 font-avenirRegular text-[12px] text-[#027A48]">
              <Dot className="w-[32px] text-[#02663C]" />
              <h1>{colValue}</h1>
            </div>
          )}
          {colValue == "Pending" && (
            <div className="flex h-[25px] w-[95px] items-center space-x-[-3.5px] rounded-full bg-[#FEF3F2] pr-3 font-avenirRegular text-[12px] text-[#B42318]">
              <Dot className="w-[32px] text-[#971D14]" />
              <h1>{colValue}</h1>
            </div>
          )}
        </>
      );
    },
  }),
  columnHelper.accessor("action", {
    header: () => (
      <div>
        <h1 className="font-avenirRegular text-[12px] font-medium text-[#7B8694] lg:text-[14px]">
          Actions
        </h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue = row.getValue("action");
      const monthValue = row.getValue("month");
      console.log(colValue, monthValue);
      return (
        <div>
          <div>
            {colValue == "Submitted" && (
              <div className="flex items-center space-x-2 font-avenirRegular text-[#1F3E7C]">
                <Download className="w-[16px]" />
                <h1 className="text-[14px]">Print</h1>
              </div>
            )}
            {colValue == "Pending" && (
              <div>
                <div className="hidden lg:flex">
                  <AddSalesDialog month={monthValue} />
                </div>
                <div className="flex lg:hidden">
                  <AddSalesDrawer month={monthValue} />
                </div>
              </div>
            )}
          </div>
        </div>
      );
    },
  }),
];
