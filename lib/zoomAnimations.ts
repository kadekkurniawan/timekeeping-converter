import { MotionProps, Variants } from 'framer-motion';

import { Placement } from 'types';

const zoomVariants: Variants = {
    closed: (placement: Placement) => ({
        y: placement === 'top' ? '-10' : '10',
        scale: 0.95,
        opacity: 0,
        x: '-50%',
    }),
    open: {
        y: 0,
        opacity: 1,
        scale: 1,
        x: '-50%',
    },
    close: (placement: Placement) => ({
        y: placement === 'top' ? '-3' : '3',
        scale: 0.98,
        opacity: 0,
        x: '-50%',
    }),
};

export const zoomAnimations: MotionProps = {
    initial: 'closed',
    animate: 'open',
    exit: 'close',
    variants: zoomVariants,
};
