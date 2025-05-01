'use client';

// import a from 'next/a';
import { Button } from "@/components/ui/button";
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
  return (
    <nav className="p-4 bg-background/50 flex z-10 sticky top-0 backdrop-blur border-b">
      <div className="container mx-auto flex  items-center  justify-between">
        <a href="/" className="text-lg font-bold">
          Danish Blog
        </a>

        <div className="hidden md:flex space-x-4 items-center">
          <a href="/" className="relative text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 
    after:block after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 
    after:ease-in-out hover:after:w-full cursor-pointer">Home</a>
          <a href="/about" className="relative text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 
    after:block after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 
    after:ease-in-out hover:after:w-full cursor-pointer">About</a>
          <a href="/blog" className="relative text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 
    after:block after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 
    after:ease-in-out hover:after:w-full cursor-pointer">Blog</a>
          <a href="/contact" className="relative text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 
    after:block after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 
    after:ease-in-out hover:after:w-full cursor-pointer">Contact</a>
          <ModeToggle />
          <div>
            <Button className="mx-1 cursor-pointer" variant="outline">Login</Button>
            <Button className="mx-1 cursor-pointer" variant="outline">Signup</Button>
          </div>
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
                  <a href="/" className="relative text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 
    after:block after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 
    after:ease-in-out hover:after:w-full cursor-pointer">Home</a>
                  <a href="/about" className="relative text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 
    after:block after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 
    after:ease-in-out hover:after:w-full cursor-pointer">About</a>
                  <a href="/blog" className="relative text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 
    after:block after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 
    after:ease-in-out hover:after:w-full cursor-pointer">Blog</a>
                  <a href="/contact" className="relative text-primary hover:text-primary/80 dark:text-white dark:hover:text-gray-300 
    after:block after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 
    after:ease-in-out hover:after:w-full cursor-pointer">Contact</a>
                  <ModeToggle />
                  <div>
                    <Button className="mx-1" variant="outline">Login</Button>
                    <Button className="mx-1" variant="outline">Signup</Button>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
