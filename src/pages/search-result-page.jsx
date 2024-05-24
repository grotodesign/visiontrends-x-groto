import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import React from "react";

function SearchResultsPage() {
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="flex items-center justify-between px-5 lg:px-[32px] lg:pt-[28px]">
        <div className="">
          <h1 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
            Search Results
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SearchResultsPage;
