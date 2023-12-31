import Link from "next/link";
import cloudinary from "cloudinary";

import { cn } from "~/lib/utils";
import { Button } from "./button";
import { Heart } from "../icons/heart";
import type { Folder } from "~/type";

export async function Sidebar({ className }: { className: string }) {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full">
              <Link
                href={"/gallery"}
                className="w-full justify-start flex gap-1">
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
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                Gallery
              </Link>
            </Button>
            <Button variant="ghost" className="w-full">
              <Link
                href={"/albums"}
                className="w-full flex justify-start gap-1">
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
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                Albums
              </Link>
            </Button>
            {folders.map((folder) => (
              <Button
                variant="ghost"
                asChild
                key={folder.name}
                className="w-full justify-start flex gap-2">
                <Link className="pl-8" href={`/albums/${folder.path}`}>
                  {folder.name}
                </Link>
              </Button>
            ))}
            <Button variant="ghost" className="w-full">
              <Link
                href={"/favorites"}
                className="w-full flex justify-start gap-1">
                <Heart />
                Favorites
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
