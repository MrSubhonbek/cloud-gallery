"use client";

import { useState, useTransition } from "react";

import { CldImage, CldImageProps } from "next-cloudinary";
import { ImageMenu } from "./image-menu";
import { FullHeart } from "./icons/full-heart";
import { Heart } from "./icons/heart";
import { setAsFavoriteAction } from "~/sercer-action/action";

import type { ResultSearch } from "~/type";

export function CloudinaryImage(
  props: {
    imageData: ResultSearch;
    onUnheart?: (unheartedResource: ResultSearch) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();

  const { imageData, onUnheart } = props;

  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            onUnheart?.(imageData);
            setIsFavorited(false);
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, false);
            });
          }}
          className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, true);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
        />
      )}
      <ImageMenu image={imageData} />
    </div>
  );
}
