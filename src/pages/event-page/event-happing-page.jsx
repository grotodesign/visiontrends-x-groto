import EventCard from "@/components/shared/EventCard";
import React from "react";

export default function EventHappeningPage({ eventData }) {
  // console.log(eventData);
  // console.log(eventData);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
            {eventData.eventDetails.length} events happening in{" "}
            {eventData.month}
          </h1>
        </div>
      </div>
      <div className="space-y-4">
        {eventData.eventDetails.map((eventDetails) => (
          <div key={eventDetails.id}>
            <EventCard eventDetails={eventDetails} />
          </div>
        ))}
      </div>
    </div>
  );
}
