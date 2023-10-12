"use client";
import { CldImage } from "next-cloudinary";
import { Bookmark } from "../icons/Bookmark";
import { setMarkAsAction } from "~/sercer-action/action";
import { useState, useTransition } from "react";
import { SolidBookmark } from "../icons/SolidBookmark";
import { ResultSearch } from "~/type";
export const CloudImage = ({
  path,
  imageData,
  ...rest
}: {
  path: string;
  imageData: ResultSearch;
}) => {
  const [_, startTransition] = useTransition();
  const [isBookmark, setIsBookmark] = useState(
    imageData.tags.includes("bookmark")
  );
  return (
    <div className="relative">
      <CldImage
        src={imageData.public_id}
        width={1500}
        height={500}
        sizes="100vh"
        alt={`image #${imageData.public_id}`}
        {...rest}
      />
      {isBookmark ? (
        <SolidBookmark
          className="absolute right-2 top-2 hover:text-black cursor-pointer"
          onClick={() => {
            setIsBookmark(false);
            startTransition(() => {
              setMarkAsAction(imageData.public_id, false);
            });
          }}
        />
      ) : (
        <Bookmark
          className="absolute right-2 top-2 hover:text-black cursor-pointer"
          onClick={() => {
            setIsBookmark(true);
            startTransition(() => {
              setMarkAsAction(imageData.public_id, true);
            });
          }}
        />
      )}
    </div>
  );
};
