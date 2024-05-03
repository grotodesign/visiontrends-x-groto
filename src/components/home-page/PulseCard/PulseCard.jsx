import VideoIcon from "@/assets/icons/VideoIcon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export default function PulseCard() {
  return (
    <Card className="relative h-[220px] w-[400px] bg-gradient-to-l from-[#0994D4] to-[#1BACE0]">
      <div className="p-5">
        <div className="flex items-center">
          <div className="p-2">
            <div className="space-y-4">
              <h1 className="text-[18px] font-avenirHeavy text-white">
                Pulse on your Practise
              </h1>
              <p className="w-[280px] text-[16px] font-avenirRegular text-white">
                Stay connected and updated with our bi-weekly vlogs.
              </p>
              <Button variant="outline" className="font-avenirHeavy text-[14px]">
                Explore
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 rounded-tl-full bg-[#27AAE1] p-6">
            <div className="">
              <div className="ml-6">
                <VideoIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
