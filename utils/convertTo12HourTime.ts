import { DECIMAL, MID_DAY, MID_NIGHT } from 'data/times';
import {
  Meridiem,
  TwelveHour,
  TwelveHourTime,
  TwentyFourHourTime,
} from 'types';

export const convertTo12HourTime = (
  twentyFourHourTime: TwentyFourHourTime,
): TwelveHourTime => {
  const { hour, minute } = twentyFourHourTime;

  if (hour === MID_NIGHT)
    return {
      hour: '12',
      minute,
      meridiem: Meridiem.AM,
    };

  if (hour === String(MID_DAY))
    return {
      hour: '12',
      minute,
      meridiem: Meridiem.PM,
    };

  if (parseInt(hour, DECIMAL) < parseInt(MID_DAY))
    return {
      hour: hour as TwelveHour,
      minute,
      meridiem: Meridiem.AM,
    };

  const formattedToTwelveHour = String(
    parseInt(hour, DECIMAL) - parseInt(MID_DAY),
  ).padStart(2, '0') as TwelveHour;

  return {
    hour: formattedToTwelveHour,
    minute,
    meridiem: Meridiem.PM,
  };
};
