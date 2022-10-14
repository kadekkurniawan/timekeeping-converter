import { MotionProps, Variants } from 'framer-motion';

const zoomVariants: Variants = {
  closed: {
    scale: 0.95,
    opacity: 0,
  },
  open: {
    scale: 1,
    opacity: 1,
  },
};

export const zoomAnimations: MotionProps = {
  initial: 'closed',
  animate: 'open',
  exit: 'closed',
  variants: zoomVariants,
};
