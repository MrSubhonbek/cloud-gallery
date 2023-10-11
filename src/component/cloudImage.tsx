"use client";
import { CldImage } from "next-cloudinary";

export const CloudImage = ({ public_id, ...rest }: { public_id: string }) => {
  return (
    <CldImage
      src={public_id}
      width={400}
      height={500}
      sizes="100"
      alt={`image #${public_id}`}
      {...rest}
    />
  );
};
