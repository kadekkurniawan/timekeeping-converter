import { DECIMAL, MID_DAY } from 'data/times';
import {
    Meridiem,
    TwelveHourTime,
    TwentyFourHour,
    TwentyFourHourTime,
} from 'types';

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

    if (parseInt(hour, DECIMAL) < parseInt(MID_DAY) && meridiem === Meridiem.AM)
        return {
            hour,
            minute,
        };

    const formattedToTwelveHour = String(
        parseInt(hour, DECIMAL) + parseInt(MID_DAY),
    ) as TwentyFourHour;

    return {
        hour: formattedToTwelveHour,
        minute,
    };
};
