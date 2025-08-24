"use client";

import Link from "next/link";
import { useNavigation } from "../../hooks/useNavigation";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  const { startNavigation } = useNavigation();

  return (
    <Link
      href={href}
      onClick={startNavigation}
      className={`text-text hover:text-purple-500 transition duration-300 ${className}`}
    >
      {children}
    </Link>
  );
};
