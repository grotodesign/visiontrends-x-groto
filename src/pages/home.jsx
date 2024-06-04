import React, { useState } from "react";
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
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HomePage() {
  const [showAllOfferings, setShowAllOfferings] = useState(false);
  const [showVendor, setShowVendor] = useState(false);

  const handleToggle = () => {
    setShowVendor(!showVendor);
  };

  const handleViewAllClick = () => {
    setShowAllOfferings(!showAllOfferings);
  };

  return (
    <div className="">
      {/* Desktop Navbar and SubNavbar */}
      <div className="hidden lg:block">
        <Navbar />
        <SubNavbar />
        <div className="space-y-2">
          <Hero />
        </div>
      </div>

      {/* Mobile Navbar and SubNavbar */}
      <div className="block lg:hidden">
        <MobileNav />
        <MobileSubNavbar />
      </div>

      {/* Mobile Hero Section */}
      <div className="mb-4 mt-3 block space-y-2 px-5 lg:mb-0 lg:mt-0 lg:hidden">
        <MobileHero />
      </div>

      {/* Offerings Section Header */}
      <div className="offeringContainer flex items-center justify-between">
        <h1 className="px-5 font-avenirHeavy text-[20px] lg:px-[32px]">
          Our Offerings
        </h1>
        <p
          className="cursor-pointer px-5 lg:hidden"
          onClick={handleViewAllClick}
        >
          {showAllOfferings ? "Hide all" : "View all"}
        </p>
      </div>

      {/* Offerings and Side Cards Section */}
      <div className="lg:pl-[5px] lg:pr-[10px]">
        <div className="flex flex-col justify-between space-x-[24px] space-y-[24px] py-8 lg:flex-row lg:space-x-0 lg:space-y-0 lg:p-[24px]">
          {/* Offerings Cards */}
          <div className=" cardArea grid justify-center gap-[24px] lg:hidden  lg:px-0">
            {OfferingsData.slice(
              0,
              showAllOfferings ? OfferingsData.length : 1,
            ).map((offering) => (
              <OfferingCard key={offering.id} offering={offering} />
            ))}
          </div>

          <div className="xl:cardArea hidden lg:grid lg:justify-center lg:gap-[24px] lg:px-0 xl:grid-cols-2">
            {OfferingsData.map((offering) => (
              <OfferingCard key={offering.id} offering={offering} />
            ))}
          </div>

          {/* Pulse and Featured Vendor Cards */}
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
    </div>
  );
}
