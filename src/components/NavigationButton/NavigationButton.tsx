"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Loader } from "../Loader/Loader";
import { useNavigation } from "../../hooks/useNavigation";

interface NavigationButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  href,
  children,
  className = "",
  icon,
}) => {
  const { isNavigating, startNavigation } = useNavigation();

  return (
    <>
      {isNavigating && <Loader size="medium" color="text-white" />}
      <Link
        href={href}
        onClick={startNavigation}
        className={`inline-flex items-center px-6 py-3 rounded-full text-white hover:bg-opacity-80 transition duration-300 ${className}`}
      >
        {!isNavigating && (
          <>
            <span className="mr-2">{children}</span>
            {icon}
          </>
        )}
      </Link>
    </>
  );
};
