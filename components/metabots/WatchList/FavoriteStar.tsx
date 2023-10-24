import { FavoriteStarProps, FavoriteStarProps2, TokenPairDetails } from "@/utils/types";
import useProjectStore from "@/utils/zustanStore/favorites";
import { Fragment, useCallback, useState } from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

export const FavoriteStar = ({ id }: FavoriteStarProps2) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const { favoritedProjects, removeFromFavorite } = useProjectStore();
  const projectDetails = favoritedProjects.projectsDetails.find(
    (project) => project.id === id
  );
  const isFavorite = !!projectDetails;

  const handleFavorite = useCallback(
    (id: string) => {
      if (isFavorite) {
        removeFromFavorite(id);
      }
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 100);
    },
    [removeFromFavorite, isFavorite]
  );

  return (
    <Fragment>
      <span onClick={() => handleFavorite(id)} className="cursor-pointer">
        {isFavorite ? (
          <Fragment>
            <RiStarSFill
                size={20}
              className={`${
                isPulsing ? "h-6 w-6" : "h-6 w-6"
              } transition-all text-yellow-400`}
            />
          </Fragment>
        ) : (
          <RiStarSLine
          size={20}
            className={`${
              isPulsing ? "h-6 w-6" : "h-6 w-6"
            } transition-all text-yellow-400`}
          />
        )}
      </span>
    </Fragment>
  );
};
