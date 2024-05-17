import React, { useState } from "react";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [showCalendar, setShowCalendar] = useState(false);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const daysInMonth = currentDate.daysInMonth();
  const startOfMonth = currentDate.startOf("month").day();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  return (
    <div className="relative">
      <div className="flex items-center justify-between space-x-6 p-4">
        <button onClick={handlePrevMonth}>
          <ChevronLeft className="h-4 w-4 text-[#646464]" />
        </button>
        <div
          onClick={toggleCalendar}
          className="cursor-pointer font-avenirHeavy text-[20px] text-[#1C1C1C]"
        >
          {currentDate.format("MMMM, YYYY")}
        </div>
        <button onClick={handleNextMonth}>
          <ChevronRight className="h-4 w-4 text-[#646464]" />
        </button>
      </div>
      {/* {showCalendar && (
            <div className="p-4 bg-white border rounded-b-lg shadow-lg">
                <div className="grid grid-cols-7 gap-1 text-center">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="font-semibold">
                            {day}
                        </div>
                    ))}
                    {Array.from({ length: startOfMonth }).map((_, i) => (
                        <div key={i} />
                    ))}
                    {days.map((day) => (
              <div key={day} className="p-2 cursor-pointer rounded-lg hover:bg-gray-200">
                {day}
              </div>
            ))}
                </div>
            </div>
        )} */}
    </div>
  );
}
