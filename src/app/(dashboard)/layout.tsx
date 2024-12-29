import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/** Sidebar */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] text-white p-4">
      <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="hidden lg:block">Gifted</span>
      </Link>
      <Menu/>
    </div>
    {/** Content */}
    <div className="w-[86%] md:w-[92%] lg:[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
      <Navbar />
      {children}
    </div>
  </div>
}
