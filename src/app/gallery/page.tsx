import React from "react";
import { UploadButton } from "~/component/uploadButton";
import cloudinary from "cloudinary";
import { CloudImage } from "~/component/cloudImage";

type ResultSearch = {
  resources: {
    public_id: string;
  }[];
};

const GalleryPage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute()) as ResultSearch;

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
      </div>
      <div className="grid grid-cols-4 gap-4 py-6 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
        {results.resources.map(({ public_id }) => (
          <div>
            <CloudImage public_id={public_id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
