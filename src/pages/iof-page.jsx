import CallIcon from '@/assets/icons/CallIcon';
import EmailIcon from '@/assets/icons/EmailIcon';
import StarIcon from '@/assets/icons/StarIcon';
import MobileNav from '@/components/shared/MobileNav'
import Navbar from '@/components/shared/Navbar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function IofPage() {
  return (
    <div>
        <div className="hidden lg:block">
            <Navbar />
        </div>
        <div className="block lg:hidden">
            <MobileNav />
        </div>
        <div className="p-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-avenirRegular text-[14px] text-[#989898]"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                VSP IOF
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col justify-between space-x-6 space-y-6  py-3 lg:py-8 lg:flex-row lg:space-y-0 lg:p-5">
        <div>
            <Card className="rounded-[16px]">
                <div className="space-y-6 p-5">
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[#1F3E7C] font-avenirHeavy text-[24px]'>VSP In-Office Finishing Pilot Program</h1>
                        <Button className="bg-[#F0F7FE] rounded-[8px]">
                            <div className="flex items-center space-x-3">
                                <StarIcon />
                                <h1 className='text-[#1F3E7C] font-medium font-avenirRegular text-[14px]'>Member Exclusive</h1>
                            </div>
                        </Button>
                    </div>
                    <div>
                        <p className='text-[#989898] font-avenirRegular text-[16px]'>Vision Trends and VSP Optics have entered into a new provider arrangement to offer our members a more profitable approach to providing quality eye care and eye wear for eligible patients. </p>
                    </div>
                    <div>
                        <p className='text-[#989898] font-avenirRegular text-[16px]'>This Vision Trends/VSP Progressive Lens IOF Pilot Program is available to <span  className='text-[#1C1C1C] font-avenirHeavy'>all active Vision Trends members</span> with in-office finishing capabilities. </p>
                    </div>
                    <Separator />
                    <div className=''>
                        <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">Program Highlights -</h1>
                        <div className='p-5'>
                            <ul className='list-disc text-[#989898] font-avenirRegular text-[16px] space-y-3'>
                                <li className=''><span className='text-[#1C1C1C] font-avenirHeavy '>Generate an average 30% increase in PROFIT</span> per VSP Vision Care patient, when dispensing Unity Progressive Lenses*</li>
                                <li>VT Members can earn up to 5 additional points towards VSPOne Rewards </li>
                                <li>No more lab chargebacks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <h1 className="text-[#1C1C1C] text-[18px] font-avenirHeavy">Contact Details</h1>
            <Card className="card-vendor-contact lg:w-[358px] rounded-[16px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div className="flex items-center space-x-6">
                  <div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h1 className="font-avenirHeavy text-[16px] text-[#1C1C1C]">
                    Dr. Michael Toups
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898]">
                    Designation
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <EmailIcon />
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    mtoups@vtrends.us
                    </h1>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CallIcon />
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                    281-772-5551
                    </h1>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
