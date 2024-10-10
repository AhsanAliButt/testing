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
        <div className="border-2 rounded-md mt-6 mb-2">
          <SheetClose asChild>
            <Link href="/" passHref>
              <Button>Home</Button> {/* Redirect to home page */}
            </Link>
          </SheetClose>
        </div>
        <div className="border-2 rounded-md">
          <SheetClose asChild>
            <Link href="/docs" passHref>
              <Button>404</Button> {/* Redirect to Error page */}
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
