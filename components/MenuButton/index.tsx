import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "../ui/button/Button";
import { MenuIcon, XIcon } from "lucide-react"; // Import icons from Lucide
import Link from "next/link";

export function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <MenuIcon /> {/* Hamburger icon */}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetFooter className=" mt-6">
          <SheetClose asChild className=" my-4">
            <Link href="/" passHref className=" border-2 rounded-lg">
              <Button>Home</Button> {/* Redirect to home page */}
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/docs" passHref className="border-2 rounded-lg">
              <Button>404</Button> {/* Redirect to home page */}
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
