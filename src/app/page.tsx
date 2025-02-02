import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-swiss-white text-swiss-black font-sans">
      {/* Fixed Header */}
      <div className="top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 bg-white z-40">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Wagon']">
          Ciao and Beyond
        </h1>

        {/* Hamburger Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default" className="mb-1" size="lg">
              <Menu className="h-8 w-8 sm:h-10 sm:w-10" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px] bg-white">
            <SheetTitle className="text-2xl">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-8 mt-16">
              <Link
                href="/about"
                className="text-2xl  hover:text-[#FF6B6B] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-2xl  hover:text-[#FF6B6B] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-2xl  hover:text-[#FF6B6B] transition-colors"
              >
                Blog
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className="container relative mx-auto px-4 sm:px-5 py-6 sm:py-8 overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8 mt-2 sm:mt-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              We are
              <br />
              <span className="text-swiss-red">Students</span>
              <br />
              from Italy
            </h1>
            <p className="text-lg sm:text-xl">
              Our intensive study classes are coming soon..
            </p>
            {/* Download PDF Button with Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="bg-red-500 font-bold text-white px-4 sm:px-6 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base whitespace-nowrap">
                  Download PDF <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[200px] sm:w-56">
                <DropdownMenuItem className="text-center py-2 sm:py-3 text-sm sm:text-base">
                  Exam Questions
                </DropdownMenuItem>
                <DropdownMenuItem className="text-center py-2 sm:py-3 text-sm sm:text-base">
                  Guide
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Column */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
            {/* Background geometric shapes */}
            <div className="absolute top-4 right-4 w-48 h-48 md:w-64 md:h-64 motion-opacity-in-0 motion-translate-x-in-100 motion-blur-in-md bg-swiss-red z-0"></div>
            <div className="absolute bottom-4 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md  left-4 w-48 h-48 md:w-64 md:h-64 border-4 border-swiss-black z-0"></div>

            {/* Central image with geometric overlay */}
            <div className="absolute inset-0 m-auto w-64 h-64 md:w-80 md:h-80">
              <div className="relative w-full h-full">
                <Image
                  src="/images/logo.png"
                  alt="Swiss design elements"
                  fill
                  className="object-cover z-10"
                />
                {/* Geometric overlay */}
                <div className="absolute inset-0 bg-swiss-black opacity-10 z-20"></div>
              </div>
            </div>

            {/* Typography element */}
            <div className="absolute bottom-8 right-8 z-30">
              <p
                className="text-6xl font-bold writing-mode-vertical transform rotate-180"
                style={{ writingMode: "vertical-rl" }}
              >
                2025
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-swiss-white text-swiss-black p-4 sm:p-8 border-t border-swiss-black">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="text-sm sm:text-base">
            &copy; 2025 Ciao and Beyond Co.
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:text-swiss-red transition-colors text-sm sm:text-base"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-swiss-red transition-colors text-sm sm:text-base"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
