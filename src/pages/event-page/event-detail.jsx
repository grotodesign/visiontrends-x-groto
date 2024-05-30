import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import { mockEventHappinigData } from "@/lib/data";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Clock4, MapPin } from "lucide-react";
import CallIcon from "@/assets/icons/CallIcon";

export default function EventDetailPage() {
  const { id } = useParams();

  // Flatten the array of event details
  const events = mockEventHappinigData.reduce((acc, eventNow) => {
    return acc.concat(eventNow.eventDetails);
  }, []);

  // console.log("Events -->", events);

  const event = events.find((event) => event.id === id);

  // console.log("Event Details -->", event);

  // if(!event){
  //   return <div>Event not found</div>
  // }
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="breadcrumbs-area p-5 lg:px-[32px] lg:pt-[28px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-avenirRegular text-[12px] text-[#989898] lg:text-[14px]"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/vendor-partners"
                className="font-avenirRegular text-[12px] text-[#989898] lg:text-[14px]"
              >
                Event Calendar
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[12px] font-medium text-[#1F3E7C] lg:text-[14px]">
                Spring Business Academy 2024
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-vsp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-[32px]">
        <div>
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  Spring Business Academy 2024
                </h1>
                <div className="flex items-center space-x-[24px]">
                  <Button className="hidden w-[160px] rounded-[8px] border border-[#1F3E7C] bg-transparent text-[#1F3E7C] lg:flex">
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <div className="flex items-center space-x-[2px] font-avenirRegular text-[14px] font-medium">
                        <h1>Add to Calendar</h1>
                        <ChevronDown />
                      </div>
                    </div>
                  </Button>
                  <Button className="hidden w-[160px] rounded-[8px] lg:flex">
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <h1 className="font-avenirRegular text-[14px] font-medium">
                        Book Now
                      </h1>
                    </div>
                  </Button>
                </div>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px]">
                  Our 2024 Spring Business Academy will take place April 26-27,
                  2024 at The Woodlands Resort in The Woodlands, TX. The
                  schedule is currently in the planning stages and as always...
                </p>
              </div>
              <div className="flex items-center space-x-[12px]">
                <Button className="flex w-[160px] rounded-[8px] border border-[#1F3E7C] bg-transparent text-[#1F3E7C] hover:bg-transparent lg:hidden">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="flex items-center space-x-[2px] font-avenirRegular text-[14px] font-medium">
                      <h1>Add to Calendar</h1>
                      <ChevronDown />
                    </div>
                  </div>
                </Button>
                <Button className="flex w-[160px] rounded-[8px] lg:hidden">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <h1 className="font-avenirRegular text-[14px] font-medium">
                      Book Now
                    </h1>
                  </div>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="px-[32px]">
        <h1 className="font-avenirHeavy text-[16px] text-[#1C1C1C] lg:text-[18px]">
          Event Details
        </h1>
      </div>
      <div className="card-vsp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-[32px]">
        <div>
          <Card className="rounded-[16px] lg:w-[1120px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Clock4 className="w-[16px] text-[#646464] lg:w-[20px]" />
                  <div className="flex items-center space-x-2 font-avenirRegular font-medium text-[#646464]">
                    <h1>June 26, 8:00 am</h1>
                    <p>-</p>
                    <h1>June 27, 8:00 am</h1>
                  </div>
                </div>
                <div className="flex space-x-2 lg:items-center">
                  <MapPin className="w-[16px] text-[#646464] lg:w-[20px]" />
                  <div className="flex flex-col text-[14px] lg:hidden lg:flex-row lg:items-center lg:space-x-2 lg:text-[16px]">
                    <h1 className="w-[250px] font-avenirRegular font-medium text-[#646464]">
                      The Woodlands Resort and Conference Center,
                    </h1>
                    <p className="font-avenirRegular text-[#989898]">
                      2301 N. Millbend Drive, The Woodlands, TX, TX, United
                      States
                    </p>
                  </div>
                  <div className="hidden flex-col text-[14px] lg:flex lg:flex-row lg:items-center lg:space-x-2 lg:text-[16px]">
                    <h1 className="font-avenirRegular font-medium text-[#646464]">
                      The Woodlands Resort and Conference Center ,
                    </h1>
                    <p className="font-avenirRegular text-[#989898]">
                      2301 N. Millbend Drive, The Woodlands, TX, TX, United
                      States
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CallIcon className="w-[16px] text-[#646464] lg:w-[20px]" />
                  <div className="flex items-center space-x-2 text-[16px]">
                    <h1 className="font-avenirRegular font-medium text-[#646464]">
                      806.773.8007
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
