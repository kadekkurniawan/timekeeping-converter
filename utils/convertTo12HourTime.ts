import {
    Meridiem,
    TwelveHour,
    TwelveHourTime,
    TwentyFourHourTime,
} from 'types';

const MID_DAY = 12;

const DECIMAL = 10;

export const convertTo12HourTime = (
    twentyFourHourTime: TwentyFourHourTime,
): TwelveHourTime => {
    const { hour, minute } = twentyFourHourTime;

    if (hour === '00')
        return {
            hour: '12',
            minute,
            meridiem: Meridiem.AM,
        };

    if (parseInt(hour, DECIMAL) <= MID_DAY)
        return {
            hour: hour as TwelveHour,
            minute,
            meridiem: Meridiem.AM,
        };

    const formattedToTwelveHour = String(
        parseInt(hour, DECIMAL) - MID_DAY,
    ).padStart(2, '0') as TwelveHour;

    return {
        hour: formattedToTwelveHour,
        minute,
        meridiem: Meridiem.PM,
    };
};
