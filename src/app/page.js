"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Home from "@/components/Landing";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep the preloader visible for slightly longer than the word loop
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2300); // 1000ms (first word) + (150ms * 7 words) + extra buffer = ~2.3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Home />
    </main>
  );
}
