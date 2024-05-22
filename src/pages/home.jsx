import FeaturedIllustrationIcon from "@/assets/icons/FeaturedIllustrationIcon";
import FeaturedVendor from "@/components/home-page/FeaturedVendor/FeaturedVendor";
import Hero from "@/components/home-page/Hero/Hero";
import MobileHero from "@/components/home-page/Hero/MobileHero";
import PulseCard from "@/components/home-page/PulseCard/PulseCard";
import MobileSubNavbar from "@/components/home-page/SubNavbar/MobileSubNavbar";
import SubNavbar from "@/components/home-page/SubNavbar/SubNavbar";
import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import OfferingCard from "@/components/shared/OfferingCard";
import { OfferingsData } from "@/lib/data";
import React from "react";

export default function HomePage() {
  return (
    <div className="">
      <div className="hidden lg:block">
        <Navbar />
        <SubNavbar />
        <div className="space-y-2">
          <Hero />
        </div>
      </div>
      <div className="block lg:hidden">
        <MobileNav />
        <MobileSubNavbar />
      </div>

      <div className="mb-4 mt-3 block space-y-2 px-5 lg:mb-0 lg:mt-0 lg:hidden">
        <MobileHero />
      </div>
      <div className="offeringContainer flex items-center justify-between">
        <h1 className="px-5 font-avenirHeavy text-[20px] lg:px-[32px]">
          Our Offerings
        </h1>
        <p className="px-5 lg:hidden">View all</p>
      </div>
      <div className="flex flex-col justify-between space-x-[24px] space-y-[24px] py-8 lg:flex-row lg:space-y-0 lg:p-[24px]">
        <div className="cardArea grid justify-center gap-5 lg:grid-cols-2 lg:gap-[24px] lg:px-0">
          {OfferingsData.map((offering) => (
            <OfferingCard key={offering.id} offering={offering} />
          ))}
        </div>
        <div className="space-y-6 lg:space-y-4">
          <div className="pulseCard px-5 lg:ml-0 lg:mr-0 lg:px-0">
            <PulseCard />
          </div>
          <div className="vendorCard px-5 lg:px-0">
            <div className="mr-5 flex justify-end">
              <FeaturedIllustrationIcon />
            </div>
            <div className="-mt-8 lg:-mt-8">
              <FeaturedVendor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
