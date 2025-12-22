"use client";

import Box from "@mui/material/Box";
import { usePathname, useRouter } from "next/navigation";
import constants from "@/app/styles/constants";

const SkipLink: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const mainContent = document.getElementById("main-content");

    if (mainContent instanceof HTMLElement) {
      mainContent.focus({ preventScroll: true });
      mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Remove hash from URL after navigation completes
    setTimeout(() => {
      router.replace(pathname, { scroll: false });
    }, 0);
  };

  return (
    <Box
      component="a"
      href="#main-content"
      onClick={handleClick}
      sx={{
        position: "fixed",
        left: "-9999px",
        top: "8px",
        zIndex: 10000,
        padding: "8px 20px",
        backgroundColor: `${constants.colors.guava} !important`,
        color: `${constants.colors.cream} !important`,
        textDecoration: "none",
        fontWeight: constants.fontWeights.semiBold,
        fontSize: "15px",
        letterSpacing: "0.5px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2s ease-in-out",
        "&:focus": {
          left: "12px",
          backgroundColor: `${constants.colors.guava} !important`,
        },
        "&:hover": {
          backgroundColor: `${constants.colors.carob} !important`,
          color: `${constants.colors.cream} !important`,
        },
        "&:focus:hover": {
          backgroundColor: `${constants.colors.carob} !important`,
        },
      }}
    >
      Skip to main content
    </Box>
  );
};

export default SkipLink;
