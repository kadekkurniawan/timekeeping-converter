import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import { format } from 'date-fns';
import { FaExchangeAlt } from 'react-icons/fa';
import { useUpdateEffect } from 'react-use';
import { useMap } from 'react-use';
import { convertTo24HourTime } from 'utils/convertTo24HourTime';

import Label from 'components/Label';
import TwelveHourInput from 'components/TwelveHourInput';
import TwentyFourHourInput from 'components/TwentyFourHourInput';
import { MINUTES, TWELVE_HOURS, TWENTY_FOUR_HOURS } from 'data/times';
import { Meridiem, Minute, TwelveHour, TwentyFourHour } from 'types';
import { TwelveHourTime, TwentyFourHourTime } from 'types';
import { convertTo12HourTime } from 'utils';

const INITIAL_TWENTY_FOUR_HOUR_TIME: TwentyFourHourTime = {
    hour: TWENTY_FOUR_HOURS[0],
    minute: MINUTES[0],
};
const INITIAL_TWELVE_HOUR_TIME: TwelveHourTime = {
    hour: TWELVE_HOURS[TWELVE_HOURS.length - 1],
    minute: MINUTES[0],
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

    console.log('rerendered!');
    return (
        <>
            <Head>
                <title>12hour-24hour Converter</title>
            </Head>

            <main className="grid place-items-center h-full">
                <div className="grid cols-1 w-9/12 max-w-sm gap-4 shadow-lg p-4">
                    <div className="grid gap-y-1 place-items-center">
                        <Label text="24-hour Time" id="twenty-four-hour-time" />
                        <TwentyFourHourInput
                            initialTime={twentyFourHourTime}
                            onChangeHour={(hour) =>
                                handleTwentyFourHourTimeChange({
                                    ...twentyFourHourTime,
                                    hour,
                                })
                            }
                            onChangeMinute={(minute) =>
                                handleTwentyFourHourTimeChange({
                                    ...twentyFourHourTime,
                                    minute,
                                })
                            }
                        />
                    </div>
                    <div className="grid place-items-center">
                        <FaExchangeAlt color="#2dd4bf" />
                    </div>
                    <div className="grid gap-y-1 place-items-center">
                        <TwelveHourInput
                            initialTime={twelveHourTime}
                            onChangeHour={(hour) =>
                                handleTwelveHourTimeChange({
                                    ...twelveHourTime,
                                    hour,
                                })
                            }
                            onChangeMinute={(minute) =>
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
                        <Label text="12-hour Time" id="twelve-hour-time" />
                    </div>
                </div>
            </main>
        </>
    );
};
export default Home;
