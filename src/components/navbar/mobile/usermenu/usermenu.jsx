"user client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const UserMenu = () => {
  const path = usePathname();

  const [open, setOpen] = useState(false);
  return (
    <Sheet className="md:hidden block" onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="rounded-none md:hidden block bg-primary border-none"
        >
          <MenuSquare className="size-10" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            <span className="font-english text-black flex-col items-center space-y-2 font-light">
              <Link
                href={"/"}
                onClick={() => setOpen(false)}
                className={
                  path === "/"
                    ? "bg-secondary flex rounded px-2 py-2 text-primary"
                    : "bg-secondary flex rounded px-2 py-2 hover:text-primary"
                }
              >
                Home
              </Link>

              <Link
                href={"/books"}
                onClick={() => setOpen(false)}
                className={
                  path === "/books"
                    ? "bg-secondary flex rounded px-2 py-2 text-primary"
                    : "bg-secondary flex rounded px-2 py-2 hover:text-primary"
                }
              >
                Books
              </Link>

              <Link
                href={"/blogs"}
                onClick={() => setOpen(false)}
                className={
                  path === "/blogs"
                    ? "bg-secondary flex rounded px-2 py-2 text-primary"
                    : "bg-secondary flex rounded px-2 py-2 hover:text-primary"
                }
              >
                Blogs
              </Link>

              <Link
                href={"/about"}
                onClick={() => setOpen(false)}
                className={
                  path === "/about"
                    ? "bg-secondary flex rounded px-2 py-2 text-primary"
                    : "bg-secondary flex rounded px-2 py-2 hover:text-primary"
                }
              >
                About
              </Link>

              <Link
                href={"/contact"}
                onClick={() => setOpen(false)}
                className={
                  path === "/contact"
                    ? "bg-secondary flex rounded px-2 py-2 text-primary"
                    : "bg-secondary flex rounded px-2 py-2 hover:text-primary"
                }
              >
                Contact
              </Link>
            </span>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4"></div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default UserMenu;
