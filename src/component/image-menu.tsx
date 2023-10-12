import { useState } from "react";
import Link from "next/link";
import { Pencil } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { AddToAlbumDialog } from "./add-to-album-dialog";
import { Menu } from "./icons/menu";
import { Button } from "./ui/button";

import type { ResultSearch } from "~/type";

export function ImageMenu({ image }: { image: ResultSearch }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button
              className="cursor-pointer flex justify-start pl-4"
              asChild
              variant="ghost">
              <Link
                href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
                <Pencil className="mr-2 w-4 h-4" />
                Edit
              </Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
