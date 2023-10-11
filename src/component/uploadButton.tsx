"use client";
import { CldUploadButton } from "next-cloudinary";
import type { CldUploadWidgetResults } from "next-cloudinary";
import { Button } from "./ui/button";

export const UploadButton = () => {
  return (
    <Button asChild className="cursor-pointer">
      <div className="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>

        <CldUploadButton
          uploadPreset="ml_default"
          onUpload={(result: CldUploadWidgetResults) => {}}>
          Upload
        </CldUploadButton>
      </div>
    </Button>
  );
};
