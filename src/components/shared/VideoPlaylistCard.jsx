import React from "react";
import { Card } from "../ui/card";
import PlaylistImage from "@/assets/playlist.png";
import { Dot } from "lucide-react";

export default function VideoPlaylistCard() {
  return (
    <Card className="cursor-pointer rounded-[8px] py-4">
      <div className="px-[16px] py-[4px]">
        <div className="flex flex-row items-center space-x-6 space-y-2 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
          <h1 className="font-avenirRegular text-[14px] font-thin text-[#646464]">
            1
          </h1>
          <img src={PlaylistImage} className="h-[48px] w-[74.48px]" />
          <div>
            <h1 className="font-avenirHeavy text-[12px] font-semibold text-[#1C1C1C] lg:text-[16px]">
              POYP Staff Discount
            </h1>
            <div className="flex items-center font-avenirRegular text-[12px] text-[#646464] lg:text-[14px]">
              <p>05:32 min</p>
              <Dot />
              <p>25 views</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
