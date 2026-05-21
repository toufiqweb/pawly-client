"use client";

import {
  Menu,
  PawPrint,
  User,
  X,
  LogOut,
  Loader2,
  LayoutDashboard,
  ChevronDown,
  HeartHandshake,
  PlusCircle,
  Grid3X3,
  Home,
  ClipboardList,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeSwitch } from "../ui/ThemeSwitch";
import NavLinks from "../ui/NavLinks";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/login");
            router.refresh();
          },
        },
      });
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-card/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold hover:text-primary transition-colors"
          >
            <div className="p-2 rounded-xl bg-primary/10">
              <PawPrint className="text-primary w-6 h-6" />
            </div>

            <span style={{ fontFamily: "var(--font-poppins)" }}>Pawly</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLinks href="/">
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </div>
            </NavLinks>
            {user && (
              <>
                {/* My Requests */}
                <NavLinks href="/dashboard/my-requests">
                  <div className="flex items-center gap-2">
                    <ClipboardList className="w-4 h-4" />
                    My Requests
                  </div>
                </NavLinks>

                {/* Add Pet */}
                <NavLinks href="/dashboard/add-pet">
                  <div className="flex items-center gap-2">
                    <PlusCircle className="w-4 h-4" />
                    Add Pet
                  </div>
                </NavLinks>
              </>
            )}
            <NavLinks href="/all-pets">
              <div className="flex items-center gap-2">
                <Grid3X3 className="w-4 h-4" />
                All-Pets
              </div>
            </NavLinks>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeSwitch />

            {/* Auth Section */}
            {isPending ? (
              <div className="hidden md:flex items-center justify-center w-10 h-10">
                <Loader2 className="w-5 h-5 animate-spin" />
              </div>
            ) : user ? (
              /* Profile Dropdown */
              <div className="relative hidden md:block">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 border border-border bg-muted/40 hover:bg-muted/70 transition-all rounded-2xl px-3 py-2"
                >
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User"}
                      width={40}
                      height={40}
                      className="rounded-full object-cover border border-border"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  )}

                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-semibold leading-none">
                      {user?.name}
                    </p>

                    <p className="text-xs text-muted-foreground mt-1">
                      {user?.email}
                    </p>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-64 rounded-2xl border border-border bg-background shadow-2xl overflow-hidden"
                    >
                      {/* User Info */}
                      <div className="p-4 border-b border-border">
                        <p className="font-semibold">{user?.name}</p>

                        <p className="text-sm text-muted-foreground truncate">
                          {user?.email}
                        </p>
                      </div>

                      {/* Links */}
                      <div className="p-2">
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-muted transition-colors"
                        >
                          <LayoutDashboard className="w-4 h-4" />
                          Dashboard
                        </Link>

                        <button
                          onClick={handleLogout}
                          disabled={isLoggingOut}
                          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-destructive/10 text-destructive transition-colors"
                        >
                          {isLoggingOut ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <LogOut className="w-4 h-4" />
                          )}

                          {isLoggingOut ? "Logging out..." : "Logout"}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Login Button */
              <Link
                href="/login"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground font-medium hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <User size={18} />
                <span>Login</span>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-border/50 py-5"
            >
              <div className="flex flex-col gap-2">
                <NavLinks href="/">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Home
                  </div>
                </NavLinks>

                <NavLinks href="/all-pets">
                  <div className="flex items-center gap-2">
                    <Grid3X3 className="w-4 h-4" />
                    All-Pets
                  </div>
                </NavLinks>

                {user && (
                  <>
                    {/* My Requests */}
                    <NavLinks href="/dashboard/my-requests">
                      <div className="flex items-center gap-2">
                        <ClipboardList className="w-4 h-4" />
                        My Requests
                      </div>
                    </NavLinks>

                    {/* Add Pet */}
                    <NavLinks href="/dashboard/add-pet">
                      <div className="flex items-center gap-2">
                        <PlusCircle className="w-4 h-4" />
                        Add Pet
                      </div>
                    </NavLinks>
                    <NavLinks href="/dashboard">
                      <div className="flex items-center gap-2">
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                      </div>
                    </NavLinks>
                  </>
                )}

                {/* Mobile Auth */}
                <div className="pt-4">
                  {isPending ? (
                    <div className="flex justify-center py-4">
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </div>
                  ) : user ? (
                    <div className="space-y-3">
                      {/* User Card */}
                      <div className="flex items-center gap-3 p-3 rounded-2xl border border-border bg-muted/40">
                        {user?.image ? (
                          <Image
                            src={user.image}
                            alt={user.name || "User"}
                            width={45}
                            height={45}
                            className="rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                        )}

                        <div>
                          <p className="font-semibold">{user?.name}</p>

                          <p className="text-sm text-muted-foreground">
                            {user?.email}
                          </p>
                        </div>
                      </div>

                      {/* Logout */}
                      <Button
                        fullWidth
                        color="danger"
                        variant="flat"
                        onPress={handleLogout}
                        isDisabled={isLoggingOut}
                        className="h-12 rounded-xl font-medium"
                      >
                        {isLoggingOut ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <LogOut className="w-4 h-4" />
                        )}

                        <span>
                          {isLoggingOut ? "Logging out..." : "Logout"}
                        </span>
                      </Button>
                    </div>
                  ) : (
                    <Link href="/login">
                      <Button
                        fullWidth
                        className="h-12 rounded-xl font-medium"
                        color="primary"
                      >
                        <User className="w-4 h-4" />
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
