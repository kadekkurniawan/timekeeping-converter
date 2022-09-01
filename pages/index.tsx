import type { NextPage } from "next";
import Head from "next/head";
import { FaExchangeAlt } from "react-icons/fa";
import { useState } from "react";
import { useUpdateEffect, useDebounce, useToggle } from "react-use";

import { Meridiem, TwentyFourHour } from "../types";

import { useMap } from "react-use";
import Label from "../components/Label";
import TwentyFourHourInput from "../components/TwentyFourHourInput";
import { TwentyFourHourTime, TwelveHourTime } from "../types";
import { MINUTES, TWELVE_HOURS, TWENTY_FOUR_HOURS } from "../data/times";
import TwelveHourInput from "../components/TwelveHourInput";

const INITIAL_TWELVE_HOUR_TIME = {
    hour: TWELVE_HOURS[0],
    minute: MINUTES[0],
    meridiem: Meridiem.PM,
};

const INITIAL_TWENTY_FOUR_HOUR_TIME = {
    hour: TWENTY_FOUR_HOURS[0],
    minute: MINUTES[0],
};

const Home: NextPage = () => {
    const [twelveHourTime, { set: setTwelveHourTime }] = useMap<TwelveHourTime>(
        INITIAL_TWELVE_HOUR_TIME
    );

    const [twentyFourHourTime, { set: setTwentyFourHourTime }] =
        useMap<TwentyFourHourTime>(INITIAL_TWENTY_FOUR_HOUR_TIME);

    return (
        <>
            <Head>
                <title>12 Hour 24 Hour Converter</title>
            </Head>

            <main className="grid place-items-center h-full">
                <div className="grid cols-1 w-9/12 max-w-sm gap-4 shadow-lg p-4">
                    <div className="grid gap-y-1 place-items-center">
                        <Label text="24-hour Time" id="twenty-four-hour-time" />
                        <TwentyFourHourInput
                            initialTime={twentyFourHourTime}
                            onChangeHour={(hour) =>
                                setTwentyFourHourTime("hour", hour)
                            }
                            onChangeMinute={(minute) =>
                                setTwentyFourHourTime("minute", minute)
                            }
                        />
                    </div>

                    <div className="grid place-items-center">
                        <FaExchangeAlt className="text-lg transition-colors text-teal-400 ease-in-out duration-500" />
                    </div>

                    <div className="grid gap-y-1 place-items-center">
                        <TwelveHourInput
                            initialTime={twelveHourTime}
                            onChangeHour={(hour) =>
                                setTwelveHourTime("hour", hour)
                            }
                            onChangeMinute={(minute) =>
                                setTwelveHourTime("minute", minute)
                            }
                            onChangeMeridiem={(meridiem) =>
                                setTwelveHourTime("meridiem", meridiem)
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
