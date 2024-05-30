import React, { useState } from "react";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar({ onDateChange, view }) {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handlePrev = () => {
    let newDate;
    switch (view) {
      case "month":
        newDate = currentDate.subtract(1, "month");
        break;
      case "week":
        newDate = currentDate.subtract(1, "week");
        break;
      case "day":
        newDate = currentDate.subtract(1, "day");
        break;
      default:
        newDate = currentDate;
    }
    setCurrentDate(newDate);
    onDateChange(newDate);
  };

  const handleNext = () => {
    let newDate;
    switch (view) {
      case "month":
        newDate = currentDate.add(1, "month");
        break;
      case "week":
        newDate = currentDate.add(1, "week");
        break;
      case "day":
        newDate = currentDate.add(1, "day");
        break;
      default:
        newDate = currentDate;
    }
    setCurrentDate(newDate);
    onDateChange(newDate);
  };

  const getTitle = () => {
    switch (view) {
      case "month":
        return currentDate.format("MMMM, YYYY");
      case "week":
        const startOfWeek = currentDate.startOf("week").format("MMM D");
        const endOfWeek = currentDate.endOf("week").format("MMM D, YYYY");
        return `${startOfWeek} - ${endOfWeek}`;
      case "day":
        return currentDate.format("MMM D, YYYY");
      default:
        return "";
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between lg:space-x-6 lg:p-4">
        <button onClick={handlePrev}>
          <ChevronLeft className="h-4 w-4 text-[#646464]" />
        </button>
        <div className="w-[100px] cursor-pointer font-avenirHeavy text-[12px] text-[#1C1C1C] lg:w-auto lg:text-[20px]">
          {getTitle()}
        </div>
        <button onClick={handleNext} className="">
          <ChevronRight className="h-4 w-4 text-[#646464]" />
        </button>
      </div>
    </div>
  );
}
