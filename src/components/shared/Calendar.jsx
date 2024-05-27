// Calendar component
import React, { useState } from "react";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar({ onMonthChange }) {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handlePrevMonth = () => {
    const newDate = currentDate.subtract(1, "month");
    setCurrentDate(newDate);
    onMonthChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = currentDate.add(1, "month");
    setCurrentDate(newDate);
    onMonthChange(newDate);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between  lg:space-x-6 lg:p-4">
        <button onClick={handlePrevMonth}>
          <ChevronLeft className="h-4 w-4 text-[#646464]" />
        </button>
        <div className="w-[100px] cursor-pointer font-avenirHeavy text-[12px] text-[#1C1C1C] lg:w-auto lg:text-[20px]">
          {currentDate.format("MMMM, YYYY")}
        </div>
        <button onClick={handleNextMonth} className="">
          <ChevronRight className="h-4 w-4 text-[#646464]" />
        </button>
      </div>
    </div>
  );
}
