import type { NextPage } from 'next';
import Head from 'next/head';

import { FaExchangeAlt } from 'react-icons/fa';
import { useMap } from 'react-use';
import { convertTo24HourTime } from 'utils/convertTo24HourTime';

import TwelveHourInput from 'components/TwelveHourInput';
import TwentyFourHourInput from 'components/TwentyFourHourInput';
import { MINUTES, TWELVE_HOURS, TWENTY_FOUR_HOURS } from 'data/times';
import { Meridiem, Minute, TwelveHour, TwentyFourHour } from 'types';
import { TwelveHourTime, TwentyFourHourTime } from 'types';
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
        <div className="grid cols-1 w-9/12 max-w-sm gap-4 shadow-lg p-4">
          <div className="grid gap-y-1 place-items-center">
            <p className="text-slate-400 font-medium text-sm">12-hour Time</p>
            <TwelveHourInput
              initialTime={twelveHourTime}
              onHourChange={(hour) =>
                handleTwelveHourTimeChange({
                  ...twelveHourTime,
                  hour,
                })
              }
              onMinuteChange={(minute) =>
                handleTwelveHourTimeChange({
                  ...twelveHourTime,
                  minute,
                })
              }
              onChangeMeridiem={(meridiem) =>
                handleTwelveHourTimeChange({
                  ...twelveHourTime,
                  meridiem,
                })
              }
            />
          </div>
          <div className="grid place-items-center">
            <FaExchangeAlt color="#2dd4bf" />
          </div>
          <div className="grid gap-y-1 place-items-center">
            <TwentyFourHourInput
              initialTime={twentyFourHourTime}
              onHourChange={(hour) =>
                handleTwentyFourHourTimeChange({
                  ...twentyFourHourTime,
                  hour,
                })
              }
              onMinuteChange={(minute) =>
                handleTwentyFourHourTimeChange({
                  ...twentyFourHourTime,
                  minute,
                })
              }
            />

            <p className="text-slate-400 font-medium text-sm">24-hour Time</p>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
