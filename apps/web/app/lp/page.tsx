"use client";

import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import "./lp.css";
import { Header } from "./_components/header";
import { MainVisual } from "./_components/mainvisual";
import { ReasonSection } from "./_components/reason-section";
import { VoiceSection } from "./_components/voice-section";
import { SummarySection } from "./_components/summary-section";
import { EntrySection } from "./_components/entry-section";
import { Footer } from "./_components/footer";
import { Loading } from "./_components/loading";

export default function LpPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el.classList.contains("inview-slide-left")) {
              el.classList.add("slide-left");
            }
            if (el.classList.contains("inview-slide-right")) {
              el.classList.add("slide-right");
            }
            if (el.classList.contains("inview-balloon")) {
              el.classList.add("balloon");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".inview-slide-left, .inview-slide-right, .inview-balloon")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      color="#333"
      fontFamily='"游ゴシック体", "YuGothic", "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", "メイリオ", sans-serif'
      letterSpacing="0.1em"
    >
      <Header />
      <Box as="main">
        <MainVisual />
        <ReasonSection />
        <VoiceSection />
        <SummarySection />
        <EntrySection />
      </Box>
      <Footer />
      <Loading />
    </Box>
  );
}
