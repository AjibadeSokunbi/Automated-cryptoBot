import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { OutlinedInput } from "../ui/OutlinedInput";
import Stack from "../custom/Stack";
import { AiFillStar } from "react-icons/ai";
import { fixNum } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TokenPairDataArray } from "@/utils/types";
import { ImSpinner2 } from "react-icons/im";
interface Props {}

const Search = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchData, setSearchData] = useState<TokenPairDataArray>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsVisible(false);
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputClick = () => {
    setIsVisible(true);
    if(searchData.length === 0) {
          fetchData("USDT")
    }
  
  };

  const fetchData = async (searchTerm: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://tradeviewer.metadapp.com/chart-api/autocomplete_search?search_term=${searchTerm}`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_TRADEVIEWER_API as string,
            "Content-Type": "application/json",
          },
          next: { revalidate: 5 },
        }
      );
      const data = await response.json();
      setSearchData(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div ref={inputRef} onClick={handleInputClick}>
        <Stack flexDirection="col">
          <form action="">
            <OutlinedInput
              type="Search"
              placeholder="Search"
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
                if (event.target.value) {
                  fetchData(event.target.value);
                } else {
                  setSearchData([]);
                }
              }}
              className="bg-background1 text-white hidden md:inline lg:inline w-96"
              endAddon={
                <BiSearch size={20} className="hidden md:inline lg:inline" />
              }
            />
          </form>
          {isVisible && (
            <Stack
              flexDirection="col"
              gap={4}
              sx=" hide-scrollbar overflow-y-auto w-96 Z-50 absolute mt-12 p-4 bg-gray-900 rounded-md border-none h-52 z-50 "
            >
        
              {!isLoading && searchData?.length <= 0 && (
                <Stack
                  alignItems="center"
                  width="full"
                  height="h-full"
                  justifyContent="center"
                >
                  No results found
                </Stack>
              )}
              {isLoading ? (
                <Stack
                  alignItems="center"
                  alignContent="center"
                  justifyContent="center"
                  height="h-[200px]"
                >
                  <ImSpinner2 className="text-[#18283f] h-20 w-20 animate-spin " />
                </Stack>
              ) : searchData?.map((singleSearchData, index) => (
                <Link
                  onClick={() => {
                    setIsVisible(false);
                  }}
                  key={index}
                  href={`/metabots/${singleSearchData.pairAddress}`}
                >
                  <Stack
                    onClick={() => {
                      router.push(`/metabots/${singleSearchData.pairAddress}`);
                      setIsVisible(false);
                    }}
                    justifyContent="between"
                  >
                    <Stack gap={1}>
                      <AiFillStar className="mt-1" />{" "}
                      {`${singleSearchData?.symbol} / ${singleSearchData?.quoteSymbol}`}
                    </Stack>
                    <Stack> ${fixNum(singleSearchData?.price, 6, true)}</Stack>
                  </Stack>
                </Link>
              ))}
            </Stack>
          )}
        </Stack>
      </div>
    </>
  );
};

export default Search;
