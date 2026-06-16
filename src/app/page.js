"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Home from "@/components/Landing";
import Description from "@/components/Description";
import Projects from "@/components/Projects";
import SlidingImages from "@/components/SlidingImages";
import Contact from "@/components/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <Home />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </>
  );
}
