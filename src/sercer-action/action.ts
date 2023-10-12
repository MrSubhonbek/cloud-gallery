"use server";
import cloudinary from "cloudinary";

export const setMarkAsAction = async (
  public_id: string,
  isBookmark: boolean
) => {
  isBookmark
    ? await cloudinary.v2.uploader.add_tag("bookmark", [public_id])
    : await cloudinary.v2.uploader.remove_tag("bookmark", [public_id]);
};
