"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PawPrint } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const swiperRef = useRef(null);

  const slides = [
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2070",
    "https://i1-c.pinimg.com/1200x/02/6b/33/026b33f63039adba46b9843ff8970495.jpg",
    "https://i1-c.pinimg.com/1200x/38/5d/3e/385d3ebe0cb0413cfa3c21af5fd75c6d.jpg",
    "https://i.pinimg.com/736x/e8/4a/0f/e84a0f5da52e1e9a286201315e19a473.jpg",
    "https://i.pinimg.com/736x/0d/e2/65/0de265d61e0ee104f5baf49b11dcf040.jpg",
  ];

 
  return (
    <section className="relative max-w-7xl mx-auto overflow-hidden rounded-[32px] my-8 lg:my-12 border border-border bg-background shadow-2xl">
      {/* Background Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={1200}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="overflow-hidden"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[85vh] md:h-[80vh] lg:h-180 w-full overflow-hidden">
              {/* Background Image */}
              <div
                style={{
                  backgroundImage: `url(${image})`,
                }}
                className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_10s_linear_infinite]"
              />

              {/* Theme Overlay */}
              <div className="absolute inset-0 bg-[#FEF7EB]/65 dark:bg-[#1a0605]/50" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253,176,52,0.18),transparent_30%)]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-px py-px mb-6"
          >
            {/* Animated Border */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                  absolute inset-0
                  bg-[conic-gradient(from_0deg,transparent,rgba(253,176,52,0.9),transparent)]
                "
            />

            {/* Content */}
            <div
              className="
                  relative z-10
                  inline-flex items-center gap-2
                  rounded-full
                  bg-card/80
                  backdrop-blur-xl
                  px-5 py-2
                  text-sm
                  text-[#2b0b0a] dark:text-foreground
                  shadow-lg
                "
            >
              <PawPrint size={16} className="text-primary" />
              Find Your Forever Friend
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-foreground"
          >
            Find Your
            <span className="block bg-linear-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
              Perfect Companion
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed text-foreground"
          >
            Adopt a loving pet and give them the forever home they deserve.
            Experience unconditional love, happiness, and companionship that
            fills your life with warmth every single day.
          </motion.p>

          {/* Buttons */}
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            {/* Primary Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/all-pets"
                className="
        group relative inline-flex items-center gap-3
        overflow-hidden rounded-2xl
        bg-primary
        px-8 py-4
        text-base md:text-lg
        font-semibold
        text-primary-foreground
        shadow-[0_10px_40px_rgba(253,176,52,0.35)]
        transition-all duration-300
        hover:shadow-[0_15px_50px_rgba(253,176,52,0.5)]
      "
              >
                {/* Animated Shine */}
                <span className="absolute inset-0 overflow-hidden rounded-2xl">
                  <span
                    className="
            absolute left-[-120%] top-0
            h-full w-[80%]
            rotate-12
            bg-white/20 blur-2xl
            transition-all duration-700
            group-hover:left-[140%]
          "
                  />
                </span>

                {/* Hover Glow */}
                <span className="absolute inset-0 bg-white/0 transition duration-300 group-hover:bg-white/5" />

                <span className="relative z-10">Browse Pets</span>

                <ArrowRight
                  size={20}
                  className="
          relative z-10
          transition-transform duration-300
          group-hover:translate-x-1
        "
                />
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/about"
                className="
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-2xl
        border border-primary/20
        bg-card/70
        backdrop-blur-xl
        px-8 py-4
        text-base md:text-lg
        font-semibold
        text-[#2b0b0a] dark:text-foreground
        shadow-lg
        transition-all duration-300
        hover:border-primary/50
        hover:shadow-[0_10px_30px_rgba(253,176,52,0.18)]
      "
              >
                {/* Bottom Fill Animation */}
                <span
                  className="
          absolute bottom-0 left-0
          h-0 w-full
          bg-primary
          transition-all duration-300
          group-hover:h-full
        "
                />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
                  Learn More
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      

      {/* Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 25px !important;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.45);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .dark .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
        }

        .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 999px;
          background: var(--primary);
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.12);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
