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
        <SheetFooter>
          <Link href="/" passHref>
            <Button>Home</Button> {/* Redirect to home page */}
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
