import Link from "next/link";
import Image from "next/image";
import { PawPrint, User } from "lucide-react";
import { ThemeSwitch } from "../ui/ThemeSwitch";
import MobileSidebar from "./MobileSidebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DashboardNavbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const user = session?.user;

  return (
    <header
      className="
        sticky
        top-0
        z-40
        h-16
        w-full
        border-b
        border-border/50
        bg-card/80
        backdrop-blur-xl
      "
    >
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileSidebar />
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="rounded-xl bg-primary/10 p-2">
              <PawPrint className="h-5 w-5 text-primary" />
            </div>

            <span
              className="hidden sm:block"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Pawly
            </span>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <ThemeSwitch />

          {/* Desktop User Info */}
          {user && (
            <div className="hidden md:flex items-center gap-3">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={44}
                  height={44}
                  className="rounded-full border border-border object-cover"
                />
              ) : (
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
              )}

              <div className="max-w-[180px] overflow-hidden">
                <p className="truncate text-sm font-semibold leading-none">
                  {user?.name}
                </p>

                <p className="mt-1 truncate text-xs text-muted-foreground">
                  {user?.email}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
