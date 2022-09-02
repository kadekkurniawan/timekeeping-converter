import {
    Meridiem,
    TwelveHourTime,
    TwentyFourHour,
    TwentyFourHourTime,
} from 'types';

const MID_DAY = 12;

const DECIMAL = 10;

export const convertTo24HourTime = (
    twelveHourTime: TwelveHourTime,
): TwentyFourHourTime => {
    const { hour, minute, meridiem } = twelveHourTime;

    // if (hour === String(MID_DAY) && meridiem === Meridiem.AM)
    //     return {
    //         hour: '00',
    //         minute,
    //     };

    // if (hour === String(MID_DAY) && meridiem === Meridiem.PM)
    //     return {
    //         hour: '12',
    //         minute,
    //     };

    // if (parseInt(hour, DECIMAL) < MID_DAY && meridiem === Meridiem.PM) {
    //     const convertedToTwentyFourHour = String(
    //         parseInt(hour, DECIMAL) + MID_DAY,
    //     ) as TwentyFourHour;

    //     return {
    //         hour: convertedToTwentyFourHour,
    //         minute,
    //     };
    // }

    // return {
    //     hour,
    //     minute,
    // };

    if (hour === String(MID_DAY) && meridiem === Meridiem.AM)
        return {
            hour: '00',
            minute,
        };

    if (hour === String(MID_DAY) && meridiem === Meridiem.PM)
        return {
            hour: '12',
            minute,
        };

    if (parseInt(hour, DECIMAL) <= MID_DAY && meridiem === Meridiem.AM)
        return {
            hour,
            minute,
        };

    const formattedToTwelveHour = String(
        parseInt(hour, DECIMAL) + MID_DAY,
    ) as TwentyFourHour;

    return {
        hour: formattedToTwelveHour,
        minute,
    };
};
