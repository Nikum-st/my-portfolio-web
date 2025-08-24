"use client";

import Link from "next/link";
import { useNavigation } from "../../hooks/useNavigation";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
}) => {
  const { startNavigation } = useNavigation();

  const handleClick = () => {
    startNavigation();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`text-text hover:text-purple-500 transition duration-300 `}
    >
      {children}
    </Link>
  );
};
