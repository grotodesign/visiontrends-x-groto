/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Dialog,
    // DialogPortal,
    // DialogOverlay,
    // DialogClose,
    // DialogTrigger,
    DialogContent,
    DialogHeader,
    // DialogFooter,
    // DialogTitle,
    DialogDescription
} from "../ui/dialog"

import pointerSvg from "../../assets/circles.svg"

const Nudge = ({dialogOpen, setDialogOpen, positionCss='', pointerCss='', title, info, buttonText, buttonText2, img, steps, currentStep, totalSteps, primaryAction, secondaryAction}) => {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen} className="w-[200px] p-[0px]">
        <DialogContent
          className={`p-[0px] max-w-[346px] z-[1000] ${positionCss}`}
        >
          {title !== "Welcome to Vision Trends!" && (
            <img
              src={pointerSvg}
              alt="pointer"
              className={`absolute ${pointerCss} transform -translate-x-1/2 w-[55px] h-auto -z-[10] animate-pulse`}
            />
          )}
          <DialogHeader>
            <DialogDescription>
              <div className='h-fit w-fit bg-[#ffffff] rounded-md z-[10000000]'>
                <div className="h-[200px] w-full">
                  <img src={img} alt="nudge image" className="" />
                </div>
                <div className="flex flex-col gap-[15px] items-center pb-[20px] text-center">
                    <div
                      className={`text-[#344054] text-[18px] font-bold font-avenirHeavy ${
                        title === "What’s Happening with Vision Trends?" ? 'w-[198px]' : ''
                      }`}
                    >
                      {title}
                    </div>
                    <div style={{wordSpacing:'2px'}} className="text-[14px] w-[250px] font-light leading-[20.92px] text-[#667085] font-avenirBook">{info}</div>
                    {steps && <div>{currentStep}/{totalSteps}</div>}
                    <button onClick={primaryAction} className="text-[12px] font-extrabold bg-[#1F3E7C] text-[#ffffff] py-[8px] px-[20px] max-w-[240px] font-avenirHeavy w-[240px] rounded-lg">{buttonText}</button>
                    {title !== "Need a Quick Tour?" && (<div onClick={secondaryAction} className="text-[#646464] text-[12px] font-avenirRegular cursor-pointer">{buttonText2}</div>)}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default Nudge