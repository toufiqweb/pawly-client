"use client";

import { useEffect, useState } from "react";
import { PawPrint } from "lucide-react";
import Image from "next/image";

export default function PetLoadingScreen() {
  const statuses = [
    "Checking local shelters...",
    "Matching your personality...",
    "Preparing the welcome mat...",
    "Waking up the puppies...",
    "Finalizing your matches...",
  ];

  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    let timeout;

    const updateLoading = () => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 15, 100);

        if (Math.random() > 0.7) {
          setStatusIndex((current) => (current + 1) % statuses.length);
        }

        if (next < 100) {
          timeout = setTimeout(
            updateLoading,
            400 + Math.random() * 800
          );
        }

        return next;
      });
    };

    timeout = setTimeout(updateLoading, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f2ec] px-6 py-10 text-center">
      {/* Background Grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-xl flex-col items-center">
        {/* Paw Icon */}
        <div className="mb-8 relative flex items-center justify-center">
          {/* Glow */}
          <div className="absolute h-28 w-28 rounded-full bg-[#d6b06b]/20 blur-3xl" />

          {/* Icon */}
          <div className="relative animate-pulse">
            <PawPrint
              className="h-14 w-14 md:h-16 md:w-16 text-[#8B5E0B] fill-[#8B5E0B]"
              strokeWidth={1.8}
            />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-[2rem] md:text-[3rem] font-bold tracking-tight text-[#2D1208] leading-tight">
            Just a Moment...
          </h1>

          <p className="mx-auto max-w-sm text-sm md:text-base text-[#7A675E]">
            We&apos;re finding your perfect companion.
          </p>
        </div>

        {/* Progress Section */}
        <div className="mt-12 flex w-full flex-col items-center">
          {/* Progress Bar */}
          <div className="relative h-[3px] w-[220px] overflow-hidden rounded-full bg-[#E7D8C8] md:w-[260px]">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-[#D39B2D] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#A58A74]">
              {progress >= 100
                ? "Ready to meet your match"
                : statuses[statusIndex]}
            </span>

            {/* Dots */}
            <div className="flex gap-1">
              <span
                className="h-1 w-1 animate-bounce rounded-full bg-[#D39B2D]"
                style={{ animationDelay: "0s" }}
              />
              <span
                className="h-1 w-1 animate-bounce rounded-full bg-[#D39B2D]"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="h-1 w-1 animate-bounce rounded-full bg-[#D39B2D]"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-16 opacity-20 transition duration-700 hover:opacity-40">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-[#D8CFC7] grayscale md:h-52 md:w-52">
            <Image
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
              alt="Dog"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}