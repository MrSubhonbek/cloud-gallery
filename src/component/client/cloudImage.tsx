"use client";
import { CldImage } from "next-cloudinary";
import { Bookmark } from "../icons/Bookmark";
import { setMarkAsAction } from "~/sercer-action/action";
import { useTransition } from "react";
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
  const isBookmark = imageData.tags.includes("bookmark");
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
            startTransition(() => {
              setMarkAsAction(imageData.public_id, false, path);
            });
          }}
        />
      ) : (
        <Bookmark
          className="absolute right-2 top-2 hover:text-black cursor-pointer"
          onClick={() => {
            startTransition(() => {
              setMarkAsAction(imageData.public_id, true, path);
            });
          }}
        />
      )}
    </div>
  );
};
