import ArrowUpIcon from "@/assets/icons/ArrowUpIcon";
import DollarIcon from "@/assets/icons/DollarIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import RegisterFormIcon from "@/assets/icons/RegisterFormIcon";
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
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ReferPage() {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const formSchema = z.object({
    salutation: z.string().nonempty("Salutation is required"),
    firstname: z.string().nonempty("First Name is required"),
    lastname: z.string().nonempty("Last Name is required"),
    practicename: z.string().nonempty("Practise Name is required"),
    address: z.string().nonempty("Address is required"),
    city: z.string().nonempty("City is required"),
    state: z.string().nonempty("State is required"),
    zipcode: z.string().nonempty("Zipcode is required"),
    phonenumber: z.string().nonempty("Phone Number is required"),
    email: z.string().nonempty("Email is required"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salutation: "",
      firstname: "",
      lastname: "",
      practicename: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      phonenumber: "",
      email: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessMessage("Refer successfully");
      setErrors({});
    } catch (error) {
      setErrors({ submit: "Failed to refer" });
      setSuccessMessage("");
    }
  };
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
                Refer Member
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="px-5 lg:px-[32px]">
        <h1 className="font-avenirHeavy text-[24px] text-[#1F3E7C]">
          Refer a New Member, Earn $500
        </h1>
      </div>
      <div className="card-ipp flex flex-col-reverse justify-between  py-3  lg:flex-row lg:space-x-6 lg:space-y-0 lg:px-[32px] ">
        <div className="mt-5 space-y-4 lg:mt-0">
          <Card className="rounded-[16px]">
            <div className="space-y-6 p-5 lg:p-10">
              <div>
                <h1>Referral Details</h1>
              </div>
              <div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
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
                    <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
                      <div>
                        <FormField
                          control={form.control}
                          name="salutation"
                          render={({ field }) => (
                            <FormItem className="form-area-2 ">
                              <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                Salutation
                              </FormLabel>
                              <FormControl>
                                <Select>
                                  <SelectTrigger className="h-[40px]">
                                    <SelectValue placeholder="Mr" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectItem value="Mr">Mr</SelectItem>
                                      <SelectItem value="Mrs">Mrs</SelectItem>
                                      <SelectItem value="Dr">Dr</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
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
                            <FormItem className="form-area-2 ">
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
                            <FormItem className="form-area-2 ">
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
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name="practicename"
                        render={({ field }) => (
                          <FormItem className="form-area-1">
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
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="form-area-1">
                            <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                              Address
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Address" {...field} />
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
                            <FormItem className="form-area-2 ">
                              <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                City
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Enter city" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem className="form-area-2 ">
                              <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                State
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Enter state" {...field} />
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
                            <FormItem className="form-area-2 ">
                              <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                                Zip Code
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="Enter zipcode" {...field} />
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
                        name="phonenumber"
                        render={({ field }) => (
                          <FormItem className="form-area-5 ">
                            <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Phone Number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="form-area-5">
                            <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#646464]">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="w-[150px] font-avenirRegular font-medium"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
              <div>
                <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                  *The referral must be by email or other form of written
                  verification. The new member can not have a financial interest
                  in another Vision Trends member location or have been
                  previously contacted by Vision Trends for the purpose of
                  joining within the past 12 months.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <h1 className="hidden font-avenirHeavy text-[18px] text-[#1C1C1C] lg:flex">
              How referral works ?
            </h1>
            <Card className="rounded-[16px] lg:w-[358px]">
              <h1 className="flex p-[22px] font-avenirHeavy text-[18px] text-[#1C1C1C] lg:hidden">
                How referral works ?
              </h1>
              <div className="flex flex-col p-[32px]">
                <div className="flex items-center space-x-4 space-y-4">
                  <div className="flex h-auto w-auto justify-center rounded-full bg-[#F4F4F4] p-4  lg:w-auto lg:p-4">
                    <div className="">
                      <ArrowUpIcon />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#1C1C1C] lg:text-[16px]">
                      1. Share referral details
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                      Submit member information in the given form
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-y-4">
                  <div className="flex h-auto w-auto justify-center rounded-full bg-[#F4F4F4] p-4  lg:w-auto lg:p-4">
                    <div className="">
                      <RegisterFormIcon />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#1C1C1C] lg:text-[16px]">
                      2. Registers within 6 months
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                      Referred member must complete registration within 6 months
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-y-4">
                  <div className="flex h-auto w-auto justify-center rounded-full bg-[#F4F4F4] p-4  lg:w-auto lg:p-4">
                    <div className="">
                      <DollarIcon />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-avenirRegular text-[16px] font-medium text-[#1C1C1C] lg:text-[16px]">
                      3. Earn $500
                    </h1>
                    <p className="font-avenirRegular text-[14px] text-[#989898] lg:text-[16px]">
                      Receive a $500 reward upon successful referral
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
