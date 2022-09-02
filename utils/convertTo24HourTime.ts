import { stringify } from 'querystring';
import { useMap } from 'react-use';

import {
    Meridiem,
    TwelveHourTime,
    TwentyFourHour,
    TwentyFourHourTime,
    ValueOf,
} from 'types';

const MID_DAY = '12';

const DECIMAL = 10;

export const convertTo24HourTime = (
    twelveHourTime: TwelveHourTime,
): TwentyFourHourTime => {
    const { hour, minute, meridiem } = twelveHourTime;

    if (hour === MID_DAY && meridiem === Meridiem.AM)
        return {
            hour: '00',
            minute,
        };

    if (hour === MID_DAY && meridiem === Meridiem.PM)
        return {
            hour: '12',
            minute,
        };

    if (parseInt(hour) < 12 && meridiem === Meridiem.PM)
        return {
            hour: String(parseInt(hour, DECIMAL) + 12) as TwentyFourHour,
            minute,
        };

    return {
        hour,
        minute,
    };
};
