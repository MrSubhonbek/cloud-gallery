"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export const setMarkAsAction = async (
  public_id: string,
  isBookmark: boolean,
  path: string
) => {
  isBookmark
    ? await cloudinary.v2.uploader.add_tag("bookmark", [public_id])
    : await cloudinary.v2.uploader.remove_tag("bookmark", [public_id]);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  revalidatePath(path);
};
