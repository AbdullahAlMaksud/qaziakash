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

const Usermenu = () => {
  const path = usePathname();
  return (
    <Sheet className="md:hidden block">
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-none md:hidden block">
          <MenuSquare />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            <span className="font-english text-black flex-col items-center space-y-2 font-light">
              <Link
                href={"/"}
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
                className={
                  path === "/books"
                    ? "bg-secondary flex rounded px-2 py-2 text-primary"
                    : "bg-secondary flex rounded px-2 py-2 hover:text-primary"
                }
              >
                Books
              </Link>

              <Link
                href={"/blog"}
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

export default Usermenu;
