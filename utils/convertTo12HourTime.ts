import { parse } from 'path';

import { Meridiem, TwelveHourTime, TwentyFourHourTime } from 'types';

const MID_DAY = 12;

export const convertTo12HourTime = (
    twentyFourHourTime: TwentyFourHourTime,
): TwelveHourTime => {
    const { hour, minute } = twentyFourHourTime;

    const convertedTime: TwelveHourTime = {
        hour: '01',
        minute,
    };

    if (hour === '12') {
        hour = '00';
    }

    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
};
