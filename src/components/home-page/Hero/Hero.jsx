import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import HeroImage from "@/assets/heroImg.png";

export default function Hero() {
  return (
    <div className="p-5">
      <Card className="rounded-[20px] bg-gradient-to-b from-[#0072B2] to-[#229EE3]">
        <div className="flex items-center justify-between">
          <div className="p-10">
            <div className="space-y-4 font-avenirBook">
              <h1 className="text-3xl font-thin text-white">
                Now get your best deal
              </h1>
              <p className="text-3xl font-thin text-white">
                only with{" "}
                <span className="font-avenirHeavy font-bold">
                  WALTER OPTICS
                </span>
              </p>
              <Button
                variant="outline"
                className="bg-transparent font-avenirRegular font-medium text-white"
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div>
            <img src={HeroImage} className="h-[260px] w-[700px]" />
          </div>
        </div>
      </Card>
    </div>
  );
}
