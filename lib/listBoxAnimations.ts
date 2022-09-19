import { MotionProps, Variants } from 'framer-motion';

const listBoxVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
  },
  open: {
    opacity: 1,
    height: 'auto',
  },
};

export const listBoxAnimations: MotionProps = {
  initial: 'closed',
  animate: 'open',
  exit: 'close',
  transition: {
    stiffness: 100,
  },
  variants: listBoxVariants,
};
