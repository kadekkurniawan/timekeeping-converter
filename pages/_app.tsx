import type { AppProps } from 'next/app';

import { IconContext } from 'react-icons';
import { FaExchangeAlt } from 'react-icons/fa';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const iconValue: IconContext = {
        className: 'select-none',
        color: '#94a3b8',
        size: '18px',
    };

    return (
        <div className="bg-slate-900 h-screen overflow-hidden">
            <IconContext.Provider value={iconValue}>
                <Component {...pageProps} />
            </IconContext.Provider>
        </div>
    );
}

export default MyApp;
