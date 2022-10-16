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
      hour: TwentyFourHour.ZERO,
      minute,
    };

  if (hour === MID_DAY && meridiem === Meridiem.PM)
    return {
      hour: TwentyFourHour.TWELVE,
      minute,
    };

  if (parseInt(hour, DECIMAL) < parseInt(MID_DAY) && meridiem === Meridiem.AM)
    return {
      hour: hour as unknown as TwentyFourHour,
      minute,
    };

  return {
    hour: String(parseInt(hour, DECIMAL) + parseInt(MID_DAY)) as TwentyFourHour,
    minute,
  };
};
