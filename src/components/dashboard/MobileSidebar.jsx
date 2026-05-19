"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  Menu,
  X,
  Home,
  ClipboardList,
  CirclePlus,
  PawPrint,
  LogOut,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const router = useRouter();

  const navLinks = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      href: "/dashboard/my-requests",
      label: "My Requests",
      icon: ClipboardList,
    },
    {
      href: "/dashboard/add-pet",
      label: "Add Pet",
      icon: CirclePlus,
    },
    {
      href: "/dashboard/my-listings",
      label: "My Listings",
      icon: PawPrint,
    },
  ];

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh();
        },
      },
    });
  };

  return (
    <>
      {/* MENU BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl p-2 transition-colors hover:bg-muted"
      >
        <Menu size={24} />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={` fixed top-0 left-0 z-50 h-screen w-[280px]  border-r border-border bg-card  transition-transform duration-300  ${open ? "translate-x-0" : "-translate-x-full"} `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-border p-5">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-xl font-bold"
          >
            <div className="rounded-xl bg-primary/10 p-2">
              <PawPrint className="h-5 w-5 text-primary" />
            </div>

            <span style={{ fontFamily: "var(--font-poppins)" }}>Pawly</span>
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="space-y-2 p-4">
          {navLinks.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }
                `}
              >
                <Icon className="h-5 w-5" />

                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* FOOTER */}
        <div className="absolute bottom-0 w-full border-t border-border p-4">
          <button
            onClick={handleLogout}
            className="  flex w-full items-center gap-3 rounded-xl px-4 py-3 text-destructive  transition-all duration-200 hover:bg-destructive/10 "
          >
            <LogOut className="h-5 w-5" />

            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
