"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";
import {
  BsTwitter,
  BsLinkedin,
  BsDiscord,
  BsTelegram,
} from "react-icons/bs";
//import step from "@/components/icons/step";
import dex from "@/components/icons/dex";
import txflow from "@/components/icons/txflow";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Typography from "../custom/Typography";
import {FaRobot, FaChevronDown} from "react-icons/fa";
import {RiShieldLine} from "react-icons/ri";
import {PiBriefcaseMetalBold} from "react-icons/pi";
import {MdOutlineCelebration} from "react-icons/md";
import {HiMiniChevronUp} from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Stack from "../custom/Stack";

interface Props {}

const SideBar = () => {
  const pathname = usePathname();

  const menus = [
    { name: "Home", link: "/", icon: AiOutlineHome },
    {
      name: "Transaction Flow",
      link: "/txflow",
      icon: txflow,
    },
    { name: "Dex Explorer", link: "/dex", icon: dex },
    {
      name: "Portfolio Management",
      link: "/portfolio",
      icon: PiBriefcaseMetalBold,
    },
    { name: "Due Diligence", link: "/duediligence", icon: RiShieldLine },
    {
      name: "Referrals and Rewards",
      link: "/referrals",
      icon: MdOutlineCelebration,
      margin: true,
    },
    { name: "Settings", link: "/settings", icon: RiSettings4Line },
    { name: "Metabots", link: "/metabots", icon: FaRobot },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<String>("");

  const handleMenuClick = (name: String) => {
    setActiveMenu(name);
  };

  const router = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      router.push("/");
    }
  }, [pathname, router]);
  const hidden = pathname === "/login" || pathname === "/register";
  return (
    <>
          {!hidden && (
        <div className="hidden md:block fixed z-50">
      <div
        className={`bg-[#0B0F16] min-h-screen ${
          open ? "w-72  z-1 absolute" : "w-16 z-1 absolute"
        } duration-1000 text-gray-100  px-4 `}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="py-3 ">
          {!open && (
            <Image
              src="/logo.png"
              alt="logo"
              width={30}
              height={30}
            />
          )}

          {open && (
            <Image src="/metadapp.png" alt="logo" width={100} height={100} />
          )}
        </div>
        <div className="mt-5 flex flex-col gap-4 relative">
          {menus?.filter(menu => menu.name === "Home")?.map((menu, i) => ( 
            <Link
              href={menu.link}
              key={i}
              className={`mb-5 group flex items-center text-sm  gap-3 font-medium p-2 hover:bg-gray-800 rounded-md ${
                activeMenu === menu.name ? " bg-gray-800" : ""
              } ${activeMenu === menu.name && !open ? "pr-7" : ""}`}
              onClick={() => handleMenuClick(menu.name)}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2 style={{ transitionDelay: `${i + 3}00ms`}} className={`whitespace-pre duration-1000 ${!open && "opacity-0 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}

          <div className="py-5 mb-5 border-y-2 border-[#212E40] w-full h-auto overflow-hidden flex flex-col justify-center items-center">
            <>
            {!open && <FaChevronDown className="text-[20px] mb-5"/>}
            
            {open && (
              <Stack flexDirection="col" sx="w-full">
                <Stack justifyContent="between" alignItems="center" sx="w-full mb-2">
                  <Typography variant="normal" className="text-sm"> Automation Tools </Typography>
                  <HiMiniChevronUp className="text-lg" />
                </Stack>

                {menus?.filter(menu => menu.name === "Metabots")?.map((menu, i) => (
                  <Link
                  href={menu.link}
                  key={i}
                  className={`mb-5 group flex items-center text-sm  gap-3 font-medium p-2 hover:bg-gray-800 rounded-md ${
                    activeMenu === menu.name ? " bg-gray-800" : ""
                  } ${activeMenu === menu.name && !open ? "pr-7" : ""}`}
                  onClick={() => handleMenuClick(menu.name)}
                  >
                    <div>{React.createElement(menu.icon, { size: "20" })}</div>
                    <h2 style={{ transitionDelay: `${i + 3}00ms`}} className={`whitespace-pre duration-1000 ${!open && "opacity-0 overflow-hidden"}`}
                    >
                      {menu.name}
                    </h2>
                  </Link>
                ))}
              </Stack>
              )}
            </>

            <>
            {!open && <FaChevronDown className="text-[20px]"/>}
            {open && (
              <Accordion type="single" collapsible className="w-full no-underline">  
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <Typography variant="normal" className="text-sm"> Analytics </Typography>
                  </AccordionTrigger>
                  <AccordionContent>
                    {menus?.filter(menu => menu.name !== "Home" && menu.name !== "Referrals and Rewards" && menu.name !== "Settings" && menu.name !== "Metabots")?.map((menu, i) => (
                      <Link
                        href={menu.link}
                        key={i}
                        className={`mb-3 group flex items-center text-sm  gap-3 font-medium p-2 hover:bg-gray-800 rounded-md ${
                          activeMenu === menu.name ? " bg-gray-800" : ""
                        } ${activeMenu === menu.name && !open ? "pr-7" : ""}`}
                        onClick={() => handleMenuClick(menu.name)}
                      >
                        <div>{React.createElement(menu.icon, { size: "20" })}</div>
                        
                        <h2 style={{ transitionDelay: `${i + 3}00ms`}} className={`whitespace-pre duration-1000 ${!open && "opacity-0 overflow-hidden"}`}
                        >
                          {menu.name}
                        </h2>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              )}
            </>
          </div>
          
          <>
            {menus?.filter(menu => menu.name === "Referrals and Rewards" || menu.name === "Settings")?.map((menu, i) => ( 
              <Link
                href={menu.link}
                key={i}
                className={`group flex items-center text-sm  gap-3 font-medium p-2 hover:bg-gray-800 rounded-md ${
                  activeMenu === menu.name ? " bg-gray-800" : ""
                } ${activeMenu === menu.name && !open ? "pr-7" : ""}`}
                onClick={() => handleMenuClick(menu.name)}
              >
                <div>{React.createElement(menu.icon, { size: "20" })}</div>
                <h2 style={{ transitionDelay: `${i + 3}00ms` }} className={`whitespace-pre duration-1000 ${!open && "opacity-0 overflow-hidden"}`}
                >
                  {menu.name}
                </h2>
              </Link>
            ))}
          </>

          <>
            {!open && (
              <div className="flex flex-col w-full items-center justify-center gap-5 absolute left-0 bottom-[-90%]">
                <BsTwitter />
                <BsDiscord />
                <BsTelegram />
                <BsLinkedin />
              </div>
            )}
            {open && (
              <h6 className={`text-center mt-36 whitespace-pre duration-1000 ${!open && "opacity-0  overflow-hidden"}`}
              >
                Join Our Community
                <div className="flex flex-row gap-5 justify-center mt-3">
                  <> <BsTwitter /> </>
                  <> <BsDiscord /> </>
                  <> <BsTelegram /> </>
                  <> <BsLinkedin /> </>  
                </div>
              </h6>
            )}
          </>

        </div>
      </div>
    </div>
    )}
    </>

  );
};

export default SideBar;
