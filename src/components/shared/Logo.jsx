import clientLogo from "@/assets/clientLogo.png";

export default function Logo() {
  return (
    <div className="mr-4 flex h-[54px] items-center bg-white">
      <img
        src={clientLogo}
        className="h-12 w-[108.17px] bg-white"
        alt="Client logo"
      />
    </div>
  );
}
