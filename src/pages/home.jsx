import FeaturedIllustrationIcon from "@/assets/icons/FeaturedIllustrationIcon";
import FeaturedVendor from "@/components/home-page/FeaturedVendor/FeaturedVendor";
import Hero from "@/components/home-page/Hero/Hero";
import PulseCard from "@/components/home-page/PulseCard/PulseCard";
import SubNavbar from "@/components/home-page/SubNavbar/SubNavbar";
import Navbar from "@/components/shared/Navbar";
import OfferingCard from "@/components/shared/OfferingCard";
import { OfferingsData } from "@/lib/data";
import React from "react";

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <SubNavbar />
      <div className="space-y-2">
        <Hero />
      </div>
      <h1 className="px-5 text-[20px] font-avenirHeavy">Our Offerings</h1>
      <div className="flex justify-between space-x-6 p-5">
        <div className="grid grid-cols-2 gap-6">
          {OfferingsData.map((offering) => (
            <OfferingCard key={offering.id} offering={offering} />
          ))}
        </div>
        <div className="space-y-4">
          <PulseCard />
          <div>
            <div className="flex justify-end mr-5">
              <FeaturedIllustrationIcon />
            </div>
            <div className="lg:-mt-8">
              <FeaturedVendor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
