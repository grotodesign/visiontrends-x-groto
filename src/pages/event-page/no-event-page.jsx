import React from "react";

export default function NoEventPage({ eventData }) {
  // console.log(eventData);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
            No events happening {eventData}
          </h1>
          <p className="font-avenirRegular text-[14px] font-medium text-[#989898]">
            <a className="cursor-pointer text-[#1F3E7C] underline">Click </a> to
            View next event scheduled
          </p>
        </div>
      </div>
    </div>
  );
}
