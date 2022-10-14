import type { AppProps } from 'next/app';

import { IconContext } from 'react-icons';
import { Context as ResponsiveContext } from 'react-responsive';

import '../styles/globals.css';

// to edit font size use size props in the icon e.g <IconName size={24} /> (size in px)
function MyApp({ Component, pageProps }: AppProps) {
  const iconValue: IconContext = {
    className: 'select-none ',
    size: '24px',
  };

  return (
    <IconContext.Provider value={iconValue}>
      <Component {...pageProps} />
    </IconContext.Provider>
  );
}

export default MyApp;
