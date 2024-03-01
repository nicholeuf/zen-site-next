'use client';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';

interface RouterTransitionProps {
  children: React.ReactNode;
}

const RouterTransition: React.FC<RouterTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  const variants = {
    out: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 2,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 2,
      },
    },
  };

  return (
    <Box
      sx={{
        overflow: 'hidden',
      }}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={pathname}
          variants={variants}
          animate="in"
          initial="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default RouterTransition;
