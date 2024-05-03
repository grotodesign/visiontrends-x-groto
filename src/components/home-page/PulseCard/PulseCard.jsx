import VideoIcon from "@/assets/video.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export default function PulseCard() {
  return (
    <Card className="relative -ml-6 h-[200px] rounded-[16px] bg-gradient-to-l from-[#0994D4] to-[#1BACE0] lg:ml-0 lg:mr-0 lg:w-[400px]">
      <div className="p-5">
        <div className="flex items-center">
          <div className="p-2">
            <div className="space-y-4">
              <h1 className="font-avenirHeavy text-[18px] text-white">
                Pulse on your Practice
              </h1>
              <p className="w-[280px] font-avenirRegular text-[16px] text-white">
                Stay connected and updated with our bi-weekly vlogs.
              </p>
              <Button
                variant="outline"
                className="font-avenirHeavy text-[14px]"
              >
                Explore
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 right-0  rounded-r-[16px] rounded-tl-[160px]">
            <img src={VideoIcon} className="h-24 w-28" alt="" />
          </div>
        </div>
      </div>
    </Card>
  );
}
