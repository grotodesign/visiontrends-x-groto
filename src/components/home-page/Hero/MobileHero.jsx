import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import HeroImage from "@/assets/heroImg.png";

export default function MobileHero() {
  return (
    <div>
      <Card className="rounded-3xl bg-gradient-to-b from-[#0072B2] to-[#229EE3] card-1">
        <div className="flex flex-col">
          <div className="p-5">
            <div className="space-y-2 font-avenirBook">
              <h1 className="text-lg font-thin text-white">
                Now get your best deal only with
              </h1>
              <p className="text-lg font-thin text-white">
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
          <div className="-mt-16 flex justify-end">
            <img src={HeroImage} className="h-[100px]" />
          </div>
        </div>
        <div></div>
      </Card>
    </div>
  );
}
