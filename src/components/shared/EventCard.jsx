import React from "react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { Clock4, MapPin } from "lucide-react";

export default function EventCard({ eventDetails }) {
  console.log(eventDetails);
  return (
    <Card className="card-insurance cursor-pointer rounded-[16px]">
      <div className="space-y-4 p-[24px]">
        <div className="flex flex-col justify-between space-y-2 lg:flex-row lg:space-x-10 lg:space-y-0">
          <div className="eventDateCard flex h-[52px] justify-center rounded-[8px] bg-[#F4F4F4] px-6 py-3">
            <h1 className=" w-full font-avenirHeavy text-[24px] text-[#1C1C1C]">
              {eventDetails.eventDate}{" "}
              <span className="font-avenirRegular text-[16px] uppercase text-[#646464]">
                {eventDetails.eventMonth}
              </span>
            </h1>
          </div>
          <div className="space-y-[28px]">
            <div className="space-y-4">
              <h1 className="font-avenirHeavy text-[24px] text-[#1F3E7C]">
                {eventDetails.eventName}
              </h1>
              <p className="font-avenirRegular text-[16px] text-[#989898]">
                {eventDetails.eventDescription}
              </p>
            </div>
            <Separator />
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-[20px] text-[#646464]" />
                <div className="flex items-center space-x-2 text-[16px]">
                  <h1 className="font-avenirRegular font-medium text-[#646464]">
                    {eventDetails.eventPlace}
                  </h1>
                  <p className="font-avenirRegular text-[#989898]">
                    {eventDetails.eventAddress}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock4 className="w-[20px] text-[#646464]" />
                <div className="flex items-center space-x-2 font-avenirRegular font-medium text-[#646464]">
                  <h1>{eventDetails.eventStartDateTime}</h1>
                  <p>-</p>
                  <h1>{eventDetails.eventEndDateTime}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
