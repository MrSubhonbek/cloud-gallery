"use client";

import { CloudinaryImage } from "~/component/cloudinary-image";
import { ImageGrid } from "~/component/image-grid";
import type { ResultSearch } from "~/type";

export default function AlbumGrid({ images }: { images: ResultSearch[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: ResultSearch) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}
