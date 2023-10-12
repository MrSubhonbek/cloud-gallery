"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "~/component/ui/button";
import { Input } from "~/component/ui/input";
import { Label } from "~/component/ui/label";

export function SearchForm({ initialSearch }: { initialSearch: string }) {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const router = useRouter();

  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
        router.refresh();
      }}>
      <Label htmlFor="tag-name" className="text-right">
        Search By Tag
      </Label>
      <div className="flex gap-2">
        <Input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="tag-name"
          value={tagName}
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
