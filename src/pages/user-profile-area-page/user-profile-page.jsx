import { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import NoProfilePicArea from "@/assets/noprofilepic.png";
import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CircleAlert } from "lucide-react";
import PasswordDialog from "@/components/shared/PasswordDialog";

export default function UserProfilePage() {
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    noClick: true,
    noKeyboard: true,
  });
  const [activeTab, setActiveTab] = useState("personal");
  const formSchema = z.object({
    username: z.string(),
    firstname: z.string().nonempty("First Name is required"),
    lastname: z.string().nonempty("Last Name is required"),
    nickname: z.string().nonempty("Nick Name is required"),
    displayname: z.string().nonempty("Display Name is required"),
    email: z.string().nonempty("Email is required"),
    website: z.string().nonempty("Website is required"),
    password: z.string().nonempty("Password is required"),
    accountpassword: z.string().nonempty("Account Password is required"),
    title: z.string().nonempty("Title is required"),
    position: z.string().nonempty("Position is required"),
    practicename: z.string().nonempty("Practise Name is required"),
    address: z.string().nonempty("Address is required"),
    city: z.string().nonempty("City is required"),
    state: z.string().nonempty("State is required"),
    zipcode: z.string().nonempty("Zipcode is required"),
    vtname: z.string().nonempty("VT Name is required"),
    vtphone: z.string().nonempty("VT Phone is required"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstname: "",
      lastname: "",
      nickname: "",
      displayname: "",
      email: "",
      website: "",
      password: "",
      accountpassword: "",
      title: "",
      position: "",
      practicename: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      vtname: "",
      vtphone: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessMessage("Profile updated successfully");
      setErrors({});
    } catch (error) {
      setErrors({ submit: "Failed to update profile" });
      setSuccessMessage("");
    }
  };

  const personalInfoRef = useRef(null);
  const contactInfoRef = useRef(null);
  const accountManagementRef = useRef(null);
  const businessInfoRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabClasses = (tab) =>
    `flex items-center cursor-pointer ${
      activeTab === tab ? "bg-[#F0F7FE] text-[#1F3E7C]" : "text-[#646464]"
    } hover:bg-[#F0F7FE] rounded-[8px] w-full overflow-hidden whitespace-nowrap px-2 py-3`;

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
              <BreadcrumbPage className="font-avenirRegular text-[14px] font-medium text-[#1F3E7C]">
                My Profile
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-5 lg:px-[32px]">
        <h1 className="font-avenirHeavy text-[24px] text-[#1F3E7C]">
          My Profile
        </h1>
      </div>
      <div className="card-ipp flex flex-col justify-between py-3 lg:px-[32px] xl:flex-row xl:space-x-6 xl:space-y-0">
        <div className="space-y-4">
          <Card className="hidden w-[280px] rounded-[16px] xl:block">
            <div
              className="flex flex-col items-start pb-[24px] pl-[16px] pr-[16px] pt-[16px]"
              aria-label="Tabs"
              role="tablist"
              data-hs-tabs-vertical="true"
            >
              <div className="flex h-full w-full flex-col items-center px-2 py-3">
                <button
                  className={tabClasses("personal")}
                  id="vertical-tab-with-border-item-1"
                  onClick={() => {
                    setActiveTab("personal");
                    scrollToSection(personalInfoRef);
                  }}
                  role="tab"
                >
                  <h1 className="font-avenirRegular text-[16px] font-medium">
                    Personal Information
                  </h1>
                </button>
                <button
                  className={tabClasses("contact")}
                  id="vertical-tab-with-border-item-2"
                  onClick={() => {
                    setActiveTab("contact");
                    scrollToSection(contactInfoRef);
                  }}
                  role="tab"
                >
                  <h1 className="font-avenirRegular text-[16px] font-medium">
                    Contact Info
                  </h1>
                </button>
                <button
                  className={tabClasses("account")}
                  id="vertical-tab-with-border-item-3"
                  onClick={() => {
                    setActiveTab("account");
                    scrollToSection(accountManagementRef);
                  }}
                  role="tab"
                >
                  <h1 className="font-avenirRegular text-[16px] font-medium">
                    Account Management
                  </h1>
                </button>
                <button
                  className={tabClasses("business")}
                  id="vertical-tab-with-border-item-4"
                  onClick={() => {
                    setActiveTab("business");
                    scrollToSection(businessInfoRef);
                  }}
                  role="tab"
                >
                  <h1 className="font-avenirRegular text-[16px] font-medium">
                    Business Info
                  </h1>
                </button>
              </div>
            </div>
          </Card>
          <div className="inline-block xl:hidden">
            <Carousel
              opts={{
                align: "start",
                dragFree: true,
              }}
              className="w-full max-w-sm overflow-scroll"
              aria-label="Tabs"
              role="tablist"
              data-hs-tabs-vertical="false"
            >
              <CarouselContent className="">
                <CarouselItem className="basis-1/2">
                  <div className="p-1">
                    <button
                      className={tabClasses("personal")}
                      id="vertical-tab-with-border-item-1"
                      onClick={() => {
                        setActiveTab("personal");
                        scrollToSection(personalInfoRef);
                      }}
                      role="tab"
                    >
                      <h1 className="font-avenirRegular text-[16px] font-medium">
                        Personal Information
                      </h1>
                    </button>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div className="p-1">
                    <button
                      className={tabClasses("contact")}
                      id="vertical-tab-with-border-item-2"
                      onClick={() => {
                        setActiveTab("contact");
                        scrollToSection(contactInfoRef);
                      }}
                      role="tab"
                    >
                      <h1 className="font-avenirRegular text-[16px] font-medium">
                        Contact Info
                      </h1>
                    </button>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                  <div className="p-1">
                    <button
                      className={tabClasses("account")}
                      id="vertical-tab-with-border-item-3"
                      onClick={() => {
                        setActiveTab("account");
                        scrollToSection(accountManagementRef);
                      }}
                      role="tab"
                    >
                      <h1 className="font-avenirRegular text-[16px] font-medium">
                        Account Management
                      </h1>
                    </button>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div className="p-1">
                    <button
                      className={tabClasses("business")}
                      id="vertical-tab-with-border-item-4"
                      onClick={() => {
                        setActiveTab("business");
                        scrollToSection(businessInfoRef);
                      }}
                      role="tab"
                    >
                      <h1 className="font-avenirRegular text-[16px] font-medium">
                        Business Info
                      </h1>
                    </button>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <ScrollArea className="h-screen">
            <Card className="rounded-[16px]">
              <div className="px-[40px] py-[32px]">
                <Form {...form}>
                  <>
                    <form
                      className="space-y-10"
                      onSubmit={form.handleSubmit(onSubmit)}
                    >
                      {Object.keys(errors).length > 0 && (
                        <div className="mb-4 rounded border border-red-400 bg-red-100 p-4 text-red-700">
                          <ul>
                            {Object.values(errors).map((error, index) => (
                              <li key={index}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {successMessage && (
                        <div className="mb-4 rounded border border-green-400 bg-green-100 p-4 text-green-700">
                          {successMessage}
                        </div>
                      )}
                      <div ref={personalInfoRef}>
                        <h2 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
                          Personal Information
                        </h2>
                        <div className="mt-5 space-y-6">
                          <div>
                            <div className="flex items-center space-x-6">
                              <div className="relative">
                                <div
                                  {...getRootProps()}
                                  className="flex h-[80px] w-[80px] cursor-pointer flex-col items-center justify-center rounded-full lg:h-[120px] lg:w-[120px]"
                                >
                                  <input {...getInputProps()} />
                                  {profileImage ? (
                                    <img
                                      src={profileImage}
                                      alt="Profile"
                                      className="h-full w-full rounded-full object-cover"
                                    />
                                  ) : (
                                    <div className="text-center text-gray-500">
                                      <img
                                        src={NoProfilePicArea}
                                        alt="Profile"
                                        className="h-full w-full rounded-full object-cover"
                                      />
                                    </div>
                                  )}
                                </div>
                                {profileImage && (
                                  <button
                                    onClick={() => setProfileImage(null)}
                                    className="absolute right-0 top-0 rounded-full bg-red-500 p-1 text-white"
                                  >
                                    &#x2715;
                                  </button>
                                )}
                              </div>
                              <button
                                type="button"
                                onClick={open}
                                className="mt-4 rounded-[8px] bg-[#F4F4F4] px-4 py-2 text-[#1F3E7C]"
                              >
                                Upload Image
                              </button>
                            </div>
                          </div>
                          <div>
                            <FormField
                              ontrol={form.control}
                              name="username"
                              render={({ field }) => (
                                <FormItem className="form-area-4">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    Username
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      className="cursor-pointer border-none bg-[#F4F4F4] outline-none"
                                      placeholder="harpreet.singh@toptal.com"
                                      readOnly
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="flex items-center space-x-4">
                            <FormField
                              control={form.control}
                              name="firstname"
                              render={({ field }) => (
                                <FormItem className="form-area-3 ">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    First Name
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter First Name"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastname"
                              render={({ field }) => (
                                <FormItem className="form-area-3 ">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    Last Name
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Last Name"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div>
                            <FormField
                              ontrol={form.control}
                              name="nickname"
                              render={({ field }) => (
                                <FormItem className="form-area-4">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    Nickname
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Nickname"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div>
                            <FormField
                              ontrol={form.control}
                              name="displayname"
                              render={({ field }) => (
                                <FormItem className="form-area-4">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    Display name publicly as
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Display Name"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div ref={contactInfoRef}>
                        <h2 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
                          Contact Information
                        </h2>
                        <div className="mt-5 space-y-6">
                          <div>
                            <FormField
                              ontrol={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem className="form-area-4">
                                  <div className="flex items-center justify-between">
                                    <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                      Email
                                    </FormLabel>
                                    <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#B6B6B6]">
                                      <CircleAlert />
                                    </FormLabel>
                                  </div>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Email"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div>
                            <FormField
                              ontrol={form.control}
                              name="website"
                              render={({ field }) => (
                                <FormItem className="form-area-4">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    Website
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Website"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>

                      <Separator />
                      <div ref={accountManagementRef}>
                        <h2 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
                          Account Management
                        </h2>
                        <div className="mt-5 space-y-6">
                          <div>
                            <FormField
                              ontrol={form.control}
                              name="password"
                              render={({ field }) => (
                                <FormItem className="form-area-4">
                                  <div className="flex items-center justify-between">
                                    <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                      Password
                                    </FormLabel>
                                    <PasswordDialog passwordText="Password" />
                                  </div>
                                  <FormControl>
                                    <Input
                                      placeholder="********"
                                      {...field}
                                      readOnly
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="form-area-4 flex flex-col space-y-2">
                            <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                              Sessions
                            </FormLabel>
                            <button className="h-10 rounded-[8px] bg-[#F4F4F4] px-4 py-2 text-[#989898]">
                              <div className="flex items-start justify-start">
                                <h1>Logout from everywhere else</h1>
                              </div>
                            </button>
                            <div className="flex items-center space-x-[8px]">
                              <CircleAlert className="w-[14px] text-[#B6B6B6]" />
                              <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                                You are only logged in at this location.
                              </h1>
                            </div>
                          </div>
                          <div>
                            <FormField
                              ontrol={form.control}
                              name="accountpassword"
                              render={({ field }) => (
                                <FormItem className="form-area-4">
                                  <div className="flex items-center justify-between">
                                    <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                      Account Password
                                    </FormLabel>
                                    <PasswordDialog passwordText="Account Password" />
                                  </div>
                                  <FormControl>
                                    <Input
                                      placeholder="********"
                                      {...field}
                                      readOnly
                                    />
                                  </FormControl>
                                  <FormMessage />
                                  <div className="flex space-x-[8px]">
                                    <CircleAlert className="w-[14px] text-[#B6B6B6]" />
                                    <h1 className="font-avenirRegular text-[14px] text-[#989898]">
                                      Required to create an Application
                                      Password, but not to update the user.
                                    </h1>
                                  </div>
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div ref={businessInfoRef}>
                        <h2 className="font-avenirHeavy text-[18px] text-[#1C1C1C]">
                          Business Info
                        </h2>
                        <div className="mt-5 space-y-6">
                          <div className="flex items-center space-x-4">
                            <FormField
                              control={form.control}
                              name="title"
                              render={({ field }) => (
                                <FormItem className="form-area-3 ">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    Title
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Title"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="position"
                              render={({ field }) => (
                                <FormItem className="form-area-3 ">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    Position
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Position"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div>
                            <FormField
                              ontrol={form.control}
                              name="practicename"
                              render={({ field }) => (
                                <FormItem className="form-area-4">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    Practice Name
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Practice Name"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div>
                            <FormField
                              ontrol={form.control}
                              name="address"
                              render={({ field }) => (
                                <FormItem className="form-area-4">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    Address
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Address"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
                            <div className="flex items-center space-x-4">
                              <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                  <FormItem className="form-area-6 ">
                                    <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                      City
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter city"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                  <FormItem className="form-area-6 ">
                                    <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                      State
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter state"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <div>
                              <FormField
                                control={form.control}
                                name="zipcode"
                                render={({ field }) => (
                                  <FormItem className="form-area-6 ">
                                    <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                      Zip Code
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter zipcode"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <FormField
                              control={form.control}
                              name="vtname"
                              render={({ field }) => (
                                <FormItem className="form-area-3 ">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    VT Name
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter VT Name"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="vtphone"
                              render={({ field }) => (
                                <FormItem className="form-area-3 ">
                                  <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                    VT Phone
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter VT Phone"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button
                          type="submit"
                          className="w-[150px] font-avenirRegular font-medium"
                        >
                          Update Profile
                        </Button>
                      </div>
                    </form>
                  </>
                </Form>
              </div>
            </Card>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
