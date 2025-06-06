/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Bell, SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import LogoutDialog from "./LogoutDialog";
import { Link, useNavigate } from "react-router-dom";
import Nudge from "./Nudge";
import { NudgeTitle, NudgeInfo, NudgeButtonText, NudgeButtonText2, NudgeImage, NudgePositionCss, NudgePointerCss } from './NudgeContent';
import Image from '../../assets/landing-popup.svg'

export default function Navbar({dialogTrigger, userType='old'}) {
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  //dialog states
  const [dialogOpen, setDialogOpen] = useState(false)
  const [nudgeTitle, setNudgeTitle] = useState(NudgeTitle?.[`${userType}1`])
  const [nudgeInfo, setNudgeInfo] = useState(NudgeInfo?.[`${userType}1`])
  const [nudgeButtonText, setNudgeButtonText] = useState(NudgeButtonText?.start)
  const [nudgeButtonText2, setNudgeButtonText2] = useState(NudgeButtonText2?.later)
  const [nudgeImage, setNudgeImage] = useState(NudgeImage?.[`${userType}1`])
  const [currentStep, setCurrentStep] = useState(0)
  const totalSteps = userType == 'new' ? 4 : 11;
  const [nudgeCss, setNudgeCss] = useState(NudgePositionCss?.[`${userType}1`])
  const [pointerCss, setPointerCss] = useState(NudgePointerCss?.[`${userType}1`])

  useEffect(()=>{
    if(!dialogOpen){
      setNudgeTitle(NudgeTitle?.[`${userType}1`])
      setNudgeInfo(NudgeInfo?.[`${userType}1`])
      setNudgeButtonText(NudgeButtonText?.start)
      setNudgeButtonText2(NudgeButtonText2?.later)
      setNudgeImage(NudgeImage?.[`${userType}1`])
      setCurrentStep(0)
      setNudgeCss(NudgePositionCss?.[`${userType}1`])
      setPointerCss(NudgePointerCss?.[`${userType}1`])
    }
  }, [dialogOpen])

  const handleNudgeButtonClick = () => {
    setNudgeTitle(NudgeTitle?.[`${userType}${currentStep+2}`]);
    setNudgeInfo(NudgeInfo?.[`${userType}${currentStep+2}`]);
    setNudgeImage(NudgeImage?.[`${userType}${currentStep+2}`]);
    setNudgeCss(NudgePositionCss?.[`${userType}${currentStep+2}`] ?? NudgePositionCss.one);
    setPointerCss(NudgePointerCss?.[`${userType}${currentStep+2}`]);
    setCurrentStep(prev => prev+1);
    if(nudgeButtonText == NudgeButtonText?.start){
      setNudgeButtonText(NudgeButtonText?.next);
      setNudgeButtonText2(NudgeButtonText2?.previous);
    }
    else if(nudgeButtonText == NudgeButtonText?.next){
      if(currentStep == totalSteps-1){
        setNudgeButtonText(NudgeButtonText?.finish);
      }
    }
    else{
      setDialogOpen(false)
      setNudgeButtonText(NudgeButtonText?.start);
      setNudgeButtonText2(NudgeButtonText2?.later);
      setNudgeTitle(NudgeTitle?.[`${userType}1`]);
      setNudgeInfo(NudgeInfo?.[`${userType}1`]);
      setNudgeImage(NudgeImage?.[`${userType}1`]);
      setCurrentStep(0);
    }
  }

  const handleNudgeButton2Click = () => {
    if(nudgeButtonText2 == NudgeButtonText2?.later){
      setDialogOpen(false)
    }
    else{
      setCurrentStep(prev => prev-1);
      if(currentStep == 1){
        setNudgeButtonText(NudgeButtonText?.start);
        setNudgeButtonText2(NudgeButtonText2?.later);
        setNudgeTitle(NudgeTitle?.[`${userType}1`]);
        setNudgeInfo(NudgeInfo?.[`${userType}1`]);
        setNudgeImage(NudgeImage?.[`${userType}1`]);
        setNudgeCss(NudgePositionCss?.[`${userType}1`]);
        setPointerCss(NudgePointerCss?.[`${userType}1`]);
      }
      else{
        setNudgeTitle(NudgeTitle?.[`${userType}${currentStep}`]);
        setNudgeInfo(NudgeInfo?.[`${userType}${currentStep}`]);
        setNudgeImage(NudgeImage?.[`${userType}${currentStep}`]);
        setNudgeCss(NudgePositionCss?.[`${userType}${currentStep}`] ?? NudgePositionCss.one);
        setPointerCss(NudgePointerCss?.[`${userType}${currentStep}`]);
      }
      if(currentStep == totalSteps){
        setNudgeButtonText(NudgeButtonText?.next);
      }
    }
  }

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
              <img src={Image} className="text-[#646464] cursor-pointer" />
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
      <Nudge dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} title={nudgeTitle} info={nudgeInfo} buttonText={nudgeButtonText} buttonText2={nudgeButtonText2} img={nudgeImage} steps={nudgeButtonText != NudgeButtonText?.start || currentStep != 0} currentStep={currentStep} totalSteps={totalSteps} positionCss={nudgeCss} pointerCss={pointerCss} primaryAction={handleNudgeButtonClick} secondaryAction={handleNudgeButton2Click} />
    </div>
    
  );
}