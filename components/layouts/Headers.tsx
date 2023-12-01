"use client";
import React, { useState } from "react";
import Stack from "@/components/custom/Stack";
import { AiOutlineBell } from "react-icons/ai";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { usePathname, useParams } from "next/navigation";
import { UserAccountNav } from "../custom/accountnav";
import Link from "next/link";
import Typography from "@/components/custom/Typography";
import { Button } from "@/components/ui/button";
import { FaTelegram } from "react-icons/fa";
import Search from "./Search";

interface Props {}

const Headers = () => {

  //const user = await getCurrentUser();

  const pathname = usePathname();
  const params = useParams();
  const address = params.address;

  const [menuVisible, setMenuVisible] = useState(false);

  const handleLinkClick = () => {
    setMenuVisible(false);
  };

  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };

  const NavMenus = [
    {
      title: "Referrals & Rewards",
      link: "/referrals",
    },
    {
      title: "SuperUser",
      link: "/superuser",
    },
    {
      title: "Settings",
      link: "/settings",
    },
  ];

  const hidden = pathname === "/login" || pathname === "/register";;
  return (
    <>
      {!hidden && (
        <nav className="fixed z-40 w-full py-1 bg-[#0B0F16] border-b border-[#101720]  text-white-900 font-semibold flex justify-end mb-20">
          <div className="w-full md:w-[93%] lg:w-[93%] px-3 md:px-0 lg:px-0"> 
            <div className="flex justify-between py-2 items-center">
              <>
                <div
                  className={
                    pathname === "/dex" || pathname === `/dex/${address}`
                      ? "hidden md:flex lg:flex flex-row gap-1 w-2/12"
                      : "hidden md:flex lg:flex flex-row gap-1"
                  }
                >
                  <Link href="/superuser" className="text-white text-[16px] font-normal"> <span className="hover:underline hover:underline-offset-4"> Super User </span> 🔥 </Link>

                  {/*<div className="hover:underline hover:underline-offset-4 text-[16px] font-normal">
                    {pathname === "/" && "Super User"}
                  </div>
                  <div> {pathname === "/" && "🔥"}</div> */}
                </div>

                <Image
                  src="/logo.png"
                  alt="logo"
                  width={35}
                  height={35}
                  className="block md:hidden lg:hidden"
                />
              </>

              {(pathname === `/metabots/${address}`) && (
                 <Search />
              )}

              <div className="flex gap-6 text-align items-center md:mr-8 lg:mr-8 text-2xl">
                <UserAccountNav />
                {/*<AiOutlineBell className="hidden md:inline lg:inline" /> */}

                <Link href="">
                  <Button
                    variant="default" 
                    size="sm"
                    className="border-none bg-[#0D6EFD] hover:bg-[#0D6EFD] rounded-lg text-sm font-semibold px-5"
                  >
                    {" "} Join Our Community {" "}
                    <FaTelegram className="text-lg text-white ml-2" />{" "}
                  </Button>
                </Link>
                
                {/*<div className="items-center w-auto h-auto gap-3 hidden md:flex lg:flex">
                    {!user && (
                      <Link href="/login">
                        <Button variant="outline" value="Log In" className="w-28 py-1"> Log In </Button>
                      </Link>
                    )}
                    
                    <Button variant="default" value="Sign Up" className="w-28 py-1"> Sign Up </Button>
                </div> */}
                
                {/*<div className="block md:hidden lg:hidden relative">
                  <HiMenuAlt3 size={35} onClick={toggleMenu} />
                  {menuVisible && (
                    <div className="absolute right-0 top-12 bg-[#17212F] z-50 w-44 h-auto px-3 py-4">
                      {NavMenus.map((navmenu, index) => (
                        <Link href={navmenu.link} key={index}>
                          <Typography
                            variant="normal"
                            className="text-base mb-5"
                            onClick={handleLinkClick}
                          >
                            {" "}
                            {navmenu.title}{" "}
                          </Typography>
                        </Link>
                      ))}
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Headers;
