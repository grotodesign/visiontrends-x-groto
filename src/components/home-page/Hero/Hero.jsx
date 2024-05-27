import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import HeroImage from "@/assets/heroImg.png";

export default function Hero() {
  return (
    <div className="p-[32px]">
      <Card className="h-[235px] rounded-[20px] bg-gradient-to-b from-[#0072B2] to-[#229EE3]">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="space-y-[27px] px-[32px] font-avenirBook lg:w-[450px]">
              <div>
                <h1 className="text-[32px] font-thin text-[#E2E2E2]">
                  Now get your best deal
                </h1>
                <p className="text-[32px] font-thin text-[#E2E2E2]">
                  only with{" "}
                  <span className="font-avenirHeavy font-bold text-[#FFFFFF]">
                    WALTER OPTICS
                  </span>
                </p>
              </div>
              <Button
                variant="outline"
                className="bg-transparent font-avenirRegular font-medium text-white"
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div>
            <img src={HeroImage} className="image-area" />
          </div>
        </div>
      </Card>
    </div>
  );
}
