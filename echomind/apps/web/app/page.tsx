"use client";
import Image, { type ImageProps } from "next/image";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

// import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
// import { Navbar } from "@/components/ui/navbar";
type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

export default function Home() {
  const { user, isLoaded, isSignedIn } = useUser();

  console.log("user is ", user);

  if (!isLoaded) return <div>Loading...</div>;
  if (!user) return <div>You are not signed in</div>;

  return (
    <div className="p-10 bg-blue-500 text-white text-3xl">hello world</div>
  );
}
