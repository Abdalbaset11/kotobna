import Image from "next/image";
import { Button } from "flowbite-react";
import { Hero } from "@/components/Hero";
import { MobileGallert } from "@/components/MobileGallert";
import { Filter } from "@/components/filter";

export default function Home() {
  return (
    <>
      <Hero />
      <MobileGallert />
      <Filter />
    </>
  );
}
