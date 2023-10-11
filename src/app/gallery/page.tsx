import React from "react";
import { UploadButton } from "~/component/uploadButton";

const GalleryPage = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
      </div>
    </section>
  );
};

export default GalleryPage;
