import React from "react";
import cloudinary from "cloudinary";

import { UploadButton } from "~/component/client/uploadButton";
import { CloudImage } from "~/component/client/cloudImage";
import { ResultSearch } from "~/type";
import { ForceRefresh } from "~/lib/forceRefresh";

const BookmarkPage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=bookmark")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(12)
    .execute()) as { resources: ResultSearch[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Bookmark Image</h1>
        <UploadButton />
      </div>
      <div className="grid grid-cols-4 gap-4 py-6 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
        {results.resources.map((result) => (
          <div>
            <CloudImage imageData={result} path="/bookmark" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookmarkPage;
