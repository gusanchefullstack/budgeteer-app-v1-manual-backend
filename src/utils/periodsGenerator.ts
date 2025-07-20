import {
  addDays,
  differenceInCalendarDays,
  eachDayOfInterval,
  eachMonthOfInterval,
  eachQuarterOfInterval,
  eachWeekOfInterval,
  eachYearOfInterval,
} from "date-fns";
import { Frequency } from "../models/enums";

export const getIntervalsByFrequency = (
  startDate: string,
  endDate: string,
  frequency: Frequency
) => {
  let periods: Date[] = [];
  switch (frequency) {
    case Frequency.Daily:
      periods = eachDayOfInterval({ start: startDate, end: endDate });
      break;
    case Frequency.Weekly:
      periods = eachWeekOfInterval(
        { start: startDate, end: endDate },
        { weekStartsOn: 1 }
      );
      break;
    case Frequency.Monthly:
      periods = eachMonthOfInterval({ start: startDate, end: endDate });
      break;
    case Frequency.Quarterly:
      periods = eachQuarterOfInterval({ start: startDate, end: endDate });
      break;
    case Frequency.SemiAnnually:
      const numberOfDays = differenceInCalendarDays(endDate, startDate);
      if (numberOfDays > 180) {
        const middleDate = addDays(startDate, 180);
        const daysOfPeriod = eachDayOfInterval({
          start: startDate,
          end: middleDate,
        });
        periods = Array(daysOfPeriod[0], daysOfPeriod[daysOfPeriod.length - 1]);
      } else {
        periods = eachYearOfInterval({ start: startDate, end: endDate });
      }
      break;
    case Frequency.Annually:
      periods = eachYearOfInterval({ start: startDate, end: endDate });
      break;
    case Frequency.OneTime:
      const daysOfPeriod = eachDayOfInterval({
        start: startDate,
        end: endDate,
      }).reverse();
      periods = Array(daysOfPeriod[0]);
      break;
    default:
      break;
  }
  return periods;
};
