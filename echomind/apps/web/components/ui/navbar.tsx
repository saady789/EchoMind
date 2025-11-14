"use client";

import Link from "next/link";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4">
        {/* Left Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          EchoMind
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Signed out */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700">
                Sign in
              </Button>
            </SignInButton>
          </SignedOut>

          {/* Signed in */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox:
                    "ring-2 ring-slate-700 hover:ring-slate-500 transition",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
