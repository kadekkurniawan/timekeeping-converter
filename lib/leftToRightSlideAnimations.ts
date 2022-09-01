import { MotionProps, Variants } from "framer-motion";

const leftToRightSlideVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    open: {
        translateX: "50%",
        opacity: 1,
    },
    close: {
        opacity: 0,
        translateX: "100%",
    },
};

export const leftToRightSlideAnimations: MotionProps = {
    initial: "hidden",
    animate: "open",
    exit: "close",
    variants: leftToRightSlideVariants,
};
