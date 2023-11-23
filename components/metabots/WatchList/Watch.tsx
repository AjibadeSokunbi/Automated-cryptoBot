"use client";

import { FavoriteStarProps, TokenPairDetails } from "@/utils/types";
import useProjectStore from "@/utils/zustanStore/favorites";
import { Fragment, useCallback, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { AiFillStar } from "react-icons/ai";
export const Watch = ({ id, tokenPairDetails }: FavoriteStarProps) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const { favoritedProjects, addToFavorite, removeFromFavorite } =
    useProjectStore();
  const projectDetails = favoritedProjects.projectsDetails.find(
    (project) => project.id === id
  );
  const isFavorite = !!projectDetails;

  const handleFavorite = useCallback(
    (id: string, tokenPairDetails: TokenPairDetails) => {
      if (isFavorite) {
        toast({
          variant: "copied",
          description: "You've already added this pair to watchlist",
        });
      } else {
        addToFavorite(id, tokenPairDetails);
      }
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 100);
    },
    [addToFavorite, isFavorite]
  );

  return (
    <Fragment>
      <span
        onClick={() => handleFavorite(id, tokenPairDetails)}
        className="cursor-pointer"
      >
        {isFavorite ? (
          <Fragment>
            <AiFillStar className="w-6 h-6" color="#f7fb04" size={18} />
          </Fragment>
        ) : (
          <AiFillStar className="w-6 h-6" color="#DBDBDC" size={18} />
        )}
      </span>
    </Fragment>
  );
};
