"use client";

import Image from "next/image";
import Layout from "../components/Layout";
import { redirect, usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  if(pathname === '/'){
    redirect('/users');
  }
  return (
    <Layout />
  );
}
