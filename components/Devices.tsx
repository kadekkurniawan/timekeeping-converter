import { ReactNode, useLayoutEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';

function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  const isTablet = useMediaQuery({
    minWidth: 768,
  });

  const isDesktop = useMediaQuery({
    minWidth: 992,
  });

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    isDesktop: isClient ? isDesktop : false,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : true,
  };
}

interface DeviceProps {
  children: ReactNode;
}

export const Desktop = ({ children }: DeviceProps) => {
  const { isDesktop } = useResponsive();
  return isDesktop ? <>{children}</> : null;
};

export const Tablet = ({ children }: DeviceProps) => {
  const { isTablet } = useResponsive();
  return isTablet ? <>{children}</> : null;
};

export const Mobile = ({ children }: DeviceProps) => {
  const { isMobile } = useResponsive();
  return isMobile ? <>{children}</> : null;
};
