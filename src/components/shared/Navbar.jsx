/* eslint-disable no-unused-vars */
import { Bell, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import LogoutDialog from "./LogoutDialog";
import { Link, useNavigate } from "react-router-dom";
import { Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription, } from "../ui/dialog"
import Nudge from "./Nudge";
import { NudgeTitle, NudgeInfo, NudgeButtonText, NudgeButtonText2, NudgeImage, NudgePositionCss } from './NudgeContent';
import Image from '../../assets/landing-popup.svg'

export default function Navbar({dialogTrigger}) {
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  //dialog states
  const [dialogOpen, setDialogOpen] = useState(false)
  const [nudgeTitle, setNudgeTitle] = useState(NudgeTitle?.one)
  const [nudgeInfo, setNudgeInfo] = useState(NudgeInfo?.one)
  const [nudgeButtonText, setNudgeButtonText] = useState(NudgeButtonText?.start)
  const [nudgeButtonText2, setNudgeButtonText2] = useState(NudgeButtonText2?.later)
  const [nudgeImage, setNudgeImage] = useState(NudgeImage?.one)
  const [currentStep, setCurrentStep] = useState(1)
  const [totalSteps, setTotalSteps] = useState(4)
  const [nudgeCss, setNudgeCss] = useState(NudgePositionCss?.one)

  const handleNudgeButtonClick = () => {

  }

  const handleNudgeButton2Click = () => {}

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setShowSuggestions(value !== ""); // Show suggestions if input is not empty
  };

  const suggestions = ["Vendor Page", "Event", "Merchant Service"]; // Replace with your actual suggestions

  return (
    <div className="h-[104px] border-b-2 border-[#EEEEEE] bg-white">
      <div className="p-[32px]">
        <div className="flex justify-between">
          <div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search anything...."
                value={searchValue}
                onChange={handleInputChange}
                onKeyPress={handleSearchKeyPress}
                className="focus:outline-buttonprimary h-[40px] rounded-[8px] border border-gray-300 py-3 pl-10 font-avenirRegular text-[16px] xl:w-[400px]"
              />
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
              {showSuggestions && (
                <div className="absolute left-0 z-10 mt-2 w-[400px] rounded-[8px] border border-gray-300 bg-white shadow-lg">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="cursor-pointer p-2 font-avenirRegular text-[14px] hover:bg-gray-100"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between space-x-5">
            <Link to="/sales-submission" className="border-r-2">
              <Button className="font-avenirRegular font-medium mr-5">
                Sales Submission
              </Button>
            </Link>
            <div className="border-r-2">
              <Bell className="w-12 text-[#646464]" />
            </div>
            <div onClick={()=>{setDialogOpen(true)}}>
              <img src={Image} className="text-[#646464]" />
            </div>
            <div className="border-l-2">
              <div className="ml-5 flex items-center space-x-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="font-avenirRegular text-[14px] font-medium text-[#1C1C1C]">
                  Mathew Perry
                </h1>
                <LogoutDialog />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nudge dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} title={nudgeTitle} info={nudgeInfo} buttonText={nudgeButtonText} buttonText2={nudgeButtonText2} img={nudgeImage} steps={false} currentStep={currentStep} totalSteps={totalSteps} positionCss={nudgeCss} primaryAction={handleNudgeButtonClick} secondaryAction={handleNudgeButton2Click} />
    </div>
    
  );
}
