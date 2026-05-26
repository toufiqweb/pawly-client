import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="block">
      {React.isValidElement(children)
        ? React.cloneElement(children, { isActive })
        : children}
    </Link>
  );
};

export default NavLinks;