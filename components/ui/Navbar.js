'use client';

import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme-btn';

export default function Navbar() {
  const linkClasses = `relative text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 
    after:block after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 
    after:ease-in-out hover:after:w-full cursor-pointer`;

  return (
    <nav className="p-4 bg-background/50 flex z-10 sticky top-0 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          Danish Blog
        </Link>

        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className={linkClasses}>Home</Link>
          <Link href="/about" className={linkClasses}>About</Link>
          <Link href="/blog" className={linkClasses}>Blogs</Link>
          <ModeToggle />
        </div>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="font-bold my-4">Danish Blog</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-6">
                  <Link href="/" className={linkClasses}>Home</Link>
                  <Link href="/about" className={linkClasses}>About</Link>
                  <Link href="/blog" className={linkClasses}>Blog</Link>
                  <ModeToggle />
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
