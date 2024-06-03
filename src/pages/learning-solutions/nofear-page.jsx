import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import VideoPlaylistCard from "@/components/shared/VideoPlaylistCard";
import PlaylistImage from "@/assets/playlist.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { DownloadIcon, Share2 } from "lucide-react";
import AudioPlayer from "@/components/shared/AudioPlayer";

export default function NoFearPage() {
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      <div className="p-5 lg:px-[32px] lg:pt-[28px]">
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
                No Fear, No Limits Podcast
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="card-vsp flex flex-col justify-between space-y-6 py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-[32px]">
        <div>
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <h1 className="font-avenirHeavy text-[20px] text-[#1F3E7C] lg:text-[24px]">
                  No Fear, No Limits Podcast
                </h1>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] font-thin text-[#989898] lg:text-[16px]">
                  No Fear, No Limits is a podcast for independent optometrists
                  looking to achieve next level success. Each episode will
                  feature a special guest who has achieved great success in both
                  optometry and business as a whole. Neither fear, nor limits
                  held them back and now they share their mindset and their
                  experience with us.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="px-[32px]">
        <h1 className="font-avenirHeavy text-[16px] text-[#1C1C1C] lg:text-[18px]">
          Latest Podcasts
        </h1>
      </div>
      <div className="card-vsp flex flex-col  space-y-6 py-3  lg:px-[32px] xl:flex-row xl:space-x-6 xl:space-y-0">
        <div>
          <Card className=" rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div className="flex items-center justify-between">
                <div className="">
                  <div className="flex flex-row space-x-4 space-y-2 lg:flex-row lg:items-center lg:space-y-0">
                    <img
                      src={PlaylistImage}
                      className="h-[48px] w-[71px] lg:w-[74.48px]"
                    />
                    <div>
                      <h1 className="font-avenirHeavy text-[14px] font-semibold text-[#1C1C1C] lg:text-[16px]">
                        No Fear, No Limits
                      </h1>
                      <div className="flex items-center font-avenirRegular text-[12px] text-[#646464] lg:text-[14px]">
                        <p>Drs. Michael Toups and Douglas Inns</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden items-center space-x-4 lg:flex">
                  <DownloadIcon className="h-[24px] w-[24px] text-[#646464]" />
                  <Share2 className="h-[20px] w-[20px] text-[#646464]" />
                </div>
              </div>
              <div className="">
                <AudioPlayer />
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="card-contact-ipp space-y-4">
            <Card className="card-vendor-contact rounded-[16px] lg:w-[395px]">
              <div className="space-y-4 p-6 lg:p-8">
                <div className="flex items-center space-x-6">
                  <div className="space-y-2">
                    <h1 className="font-avenirHeavy text-[18px] font-semibold text-[#1C1C1C]">
                      No Fear, No Limits
                    </h1>
                    <p className="font-avenirRegular font-thin text-[#989898]">
                      1/56 Podcasts
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
