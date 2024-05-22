import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import VideoPlaylistCard from "@/components/shared/VideoPlaylistCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
// import ReactPlayer from "react-player";

export default function PulsePage() {
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
              <BreadcrumbLink
                href="/learning-solutions"
                className="font-avenirRegular text-[14px] text-[#989898]"
              >
                Learning Solution
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                Pulse on Your Practise
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-vsp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-5 lg:py-4">
        <div>
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  Pulse on Your Practise
                </h1>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px]">
                  Pulse On Your Practice (POYP) is a dedicated medium designed
                  to get you thinking critically about all aspects of your
                  practice.
                </p>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px]">
                  Richard S. Kattouf, O.D., D.O.S. built one of the largest solo
                  practices in the U.S. from a cold start-up. For many years Dr.
                  Kattoufpracticed and did consulting. Kattouf Consulting
                  Services (KCS) – has been retained by over 5,300 optometrists
                  and ophthalmologists ranging from on-site consultations,
                  practice mergers, brokering and start-up consultations.
                </p>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px]">
                  Dr. Kattouf brings this wealth of knowledge, experience and
                  expertise to Vision Trends as the Director of Education and
                  Professional Relations. With Pulse On Your Practice, Dr.
                  Kattouf encourages every Vision Trends member to think
                  critically about their practice and how things could be
                  improved.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="card-vsp flex flex-col  space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-5 lg:py-4">
        {/* <div className="">
          <video className="video-area h-full w-full" controls>
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          
        </div> */}
        <div className="w-full">
          <iframe
            src="https://vimeo.com/showcase/8096214/embed"
            allowFullScreen
            frameBorder="0"
            className="video-area h-full w-full"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>

        <div className="space-y-4">
          <div className="card-contact-ipp space-y-4">
            <Card className="card-vendor-contact rounded-[16px] lg:w-[395px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div className="flex items-center space-x-6">
                  <div className="space-y-2">
                    <h1 className="font-avenirHeavy text-[18px] font-semibold text-[#1C1C1C]">
                      Pulse on Your Practise
                    </h1>
                    <p className="font-avenirRegular font-thin text-[#989898]">
                      1/36 Videos
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <VideoPlaylistCard />
                  <VideoPlaylistCard />
                  <VideoPlaylistCard />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
