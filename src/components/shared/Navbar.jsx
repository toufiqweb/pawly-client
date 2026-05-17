"use client";
import { Menu, PawPrint, User, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ThemeSwitch } from "../ui/ThemeSwitch";
import NavLinks from "../ui/NavLinks";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold cursor-pointer hover:text-primary transition-colors">
            <PawPrint className="text-primary w-7 h-7" />
            <span>Pawly</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks href="/">Home</NavLinks>
            <NavLinks href="/all-pets">All Pets</NavLinks>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeSwitch />

            <Link
              href="/login"
              className="hidden md:block px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/30 transition-all  "
            >
              <div className="flex justify-center items-center gap-1">
                <User size={20} />
                <span>Get Started</span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: 500 }}
              exit={{ opacity: 0, maxHeight: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t overflow-hidden py-4 z-10 "
            >
              <div className="flex flex-col gap-2 px-2">
                <NavLinks href="/">Home</NavLinks>
                <NavLinks href="/all-pets">All Pets</NavLinks>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2"
                >
                  <User size={20} />
                  <span>Get Started</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
