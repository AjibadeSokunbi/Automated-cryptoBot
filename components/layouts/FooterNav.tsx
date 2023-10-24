"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { AiOutlineHome } from "react-icons/ai";
import { RiShieldLine } from "react-icons/ri";
import { PiBriefcaseMetalBold } from "react-icons/pi";


const FooterNav = () => {
  const router = usePathname();
  const address = "0x11b815efb8f581194ae79006d24e0d814b7697f6";

  const menus = [
    { name: "Home", link: "/", icon: AiOutlineHome },
    { name: "Dex Explorer", link: "/dex", icon: "" },
    {
      name: "Transaction Flow",
      link: "/txflow",
      icon: "",
    },
    {
      name: "Portfolio Management",
      link: "/portfolio",
      icon: PiBriefcaseMetalBold,
    },
    { name: "Due Diligence", link: "/duediligence", icon: RiShieldLine },
  ];

  return (
    <div className="w-screen h-auto bg-[#0B0F16] text-white flex md:hidden lg:hidden justify-between align-middle fixed bottom-0 left-0 p-5 border-t-2 border-[#101720] z-50">
      {menus?.map((menu, i) => (
        <Link href={menu.link} key={i}>
          {menu.link === "/dex" && (
            <>
              <svg width="20" height="20" viewBox="0 0 20 20" fill={router === menu.link ? "#FFF" : "#999999"}>

                <path d="M9.21875 0C4.13 0 0 4.13 0 9.21875C0 14.3075 4.13 18.4375 9.21875 18.4375H16.5938C17.6078 18.4375 18.4375 17.6078 18.4375 16.5938V9.21875C18.4375 4.13 14.3075 0 9.21875 0ZM9.21875 16.5938C6.55453 16.5938 4.21297 15.1741 2.92234 13.0538L5.64187 10.3342L8.67484 12.9062L12.9062 8.68406V10.1406H14.75V5.53125H10.1406V7.375H11.5972L8.57344 10.3987L5.53125 7.83594L2.12953 11.2469C1.94516 10.6016 1.84375 9.91938 1.84375 9.21875C1.84375 5.15328 5.15328 1.84375 9.21875 1.84375C13.2842 1.84375 16.5938 5.15328 16.5938 9.21875C16.5938 13.2842 13.2842 16.5938 9.21875 16.5938ZM16.1328 17.0547C15.6258 17.0547 15.2109 16.6398 15.2109 16.1328C15.2109 15.6258 15.6258 15.2109 16.1328 15.2109C16.6398 15.2109 17.0547 15.6258 17.0547 16.1328C17.0547 16.6398 16.6398 17.0547 16.1328 17.0547Z" />
              
              </svg>
              </>
          )}

          {menu.link === "/txflow" && (
            <>
              <svg width="22" height="22" viewBox="0 0 22 22" fill={router === menu.link ? "#FFF" : "#999999"}>
              
                <path d="M2 20H0V14H6V16H3.52C5.13 18.41 7.88 20 11 20C15.97 20 20 15.97 20 11H22C22 17.08 17.08 22 11 22C7.28 22 3.99 20.15 2 17.33V20ZM0 11C0 4.92 4.92 0 11 0C14.72 0 18.01 1.85 20 4.67V2H22V8H16V6H18.48C16.87 3.59 14.12 2 11 2C6.03 2 2 6.03 2 11H0Z"/>
                
                <path d="M16 10.0789V11.5C16 12.6771 13.985 13.6316 11.5 13.6316C9.015 13.6316 7 12.6771 7 11.5V10.0789C7 11.2561 9.015 12.2105 11.5 12.2105C13.985 12.2105 16 11.2561 16 10.0789ZM7 12.4474C7 13.6245 9.015 14.5789 11.5 14.5789C13.985 14.5789 16 13.6245 16 12.4474V13.8684C16 15.0455 13.985 16 11.5 16C9.015 16 7 15.0455 7 13.8684V12.4474ZM11.5 11.2632C9.015 11.2632 7 10.3087 7 9.13158C7 7.95447 9.015 7 11.5 7C13.985 7 16 7.95447 16 9.13158C16 10.3087 13.985 11.2632 11.5 11.2632Z"/>

              </svg> 
            </>
          )}

          {menu.icon !== "" && (
            <div
              style={{ color: router === menu.link ? "#FFF" : "#999999" }}
            >
              {React.createElement(menu.icon, { size: "20" })}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default FooterNav;
