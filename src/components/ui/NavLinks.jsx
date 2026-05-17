import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ children, href }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${pathname === href ? "text-primary" : "text-muted-foreground"} text-sm font-medium transition-colors hover:text-primary `}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
