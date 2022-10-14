import type { NextPage } from 'next';
import Head from 'next/head';

import { useMap } from 'react-use';
import { convertTo24HourTime } from 'utils/convertTo24HourTime';

import { Desktop, Mobile, Tablet } from 'components/Devices';
import {
  MobileTimeConverter,
  TabletAndAboveTimeConverter,
} from 'components/TimeConverter';
import {
  Meridiem,
  Minute,
  TwelveHour,
  TwelveHourTime,
  TwentyFourHour,
  TwentyFourHourTime,
} from 'types';
import { convertTo12HourTime } from 'utils';

const INITIAL_TWENTY_FOUR_HOUR_TIME: TwentyFourHourTime = {
  hour: TwentyFourHour.ZERO,
  minute: Minute.ZERO,
};
const INITIAL_TWELVE_HOUR_TIME: TwelveHourTime = {
  hour: TwelveHour.TWELVE,
  minute: Minute.ZERO,
  meridiem: Meridiem.AM,
};

const Home: NextPage = () => {
  const [twentyFourHourTime, { setAll: setTwentyFourHourTime }] =
    useMap<TwentyFourHourTime>(INITIAL_TWENTY_FOUR_HOUR_TIME);

  const [twelveHourTime, { setAll: setTwelveHourTime }] =
    useMap<TwelveHourTime>(INITIAL_TWELVE_HOUR_TIME);

  const handleTwentyFourHourTimeChange = (
    new24HourTime: TwentyFourHourTime,
  ) => {
    const convertedTo12HourTime = convertTo12HourTime(new24HourTime);

    setTwentyFourHourTime(new24HourTime);
    setTwelveHourTime(convertedTo12HourTime);
  };

  const handleTwelveHourTimeChange = (new12HourTime: TwelveHourTime) => {
    const convertedTo24HourTime = convertTo24HourTime(new12HourTime);

    setTwentyFourHourTime(convertedTo24HourTime);
    setTwelveHourTime(new12HourTime);
  };

  return (
    <>
      <Head>
        <title>12hour-24hour Converter</title>
      </Head>

      <main className="grid place-items-center h-screen">
        <Mobile>
          <MobileTimeConverter
            twelveHourTime={twelveHourTime}
            onTwelveHourTimeChange={handleTwelveHourTimeChange}
            twentyFourHourTime={twentyFourHourTime}
            onTwentyFourHourTimeChange={handleTwentyFourHourTimeChange}
          />
        </Mobile>
        <Tablet>
          <TabletAndAboveTimeConverter
            twelveHourTime={twelveHourTime}
            onTwelveHourTimeChange={handleTwelveHourTimeChange}
            twentyFourHourTime={twentyFourHourTime}
            onTwentyFourHourTimeChange={handleTwentyFourHourTimeChange}
          />
        </Tablet>
      </main>
    </>
  );
};
export default Home;
