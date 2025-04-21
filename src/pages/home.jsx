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
import { Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription, } from "../components/ui/dialog"

export default function HomePage() {
  const [showAllOfferings, setShowAllOfferings] = useState(false);
  const [showVendor, setShowVendor] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleToggle = () => {
    setShowVendor(!showVendor);
  };

  const handleViewAllClick = () => {
    setShowAllOfferings(!showAllOfferings);
  };

  const openDialog = (val) => {
    setDialogOpen(val);
  }

  return (
    <div className="">
      {/* <div className="absolute top-[40%] left-[40%] flex flex-col rounded-sm bg-[#ffffff] z-[1000] px-[51.5px] py-[25px] text-center">
        <div className="flex flex-col gap-[20px] items-center">
          <div className="text-[#344054] text-[18px] font-bold text-[#344054] font-AvenirHeavy">Welcome to Vision Trends!</div>
          <div style={{wordSpacing:'5px'}} className="text-[#344054] text-[18px] font-normal w-[240px] leading-[24.92px] text-[#667085] font-AvenirRegular">Ready to explore? Take a quick tour or follow our full guide to get the most out of your experience.</div>
          <button className="text-[#344054] text-[12px] font-extrabold bg-[#1F3E7C] text-[#ffffff] py-[8px] px-[20px] max-w-[240px] w-[240px] rounded-lg">Start Quick Tour</button>
          <div className="text-[#646464] text-[12px]">Maybe, Later</div>
        </div>
      </div> */}
      {/* <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
      {/* Desktop Navbar and SubNavbar */}
      <div className="hidden lg:block">
        <Navbar dialogTrigger={(val)=>{setDialogOpen(val)}} />
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
