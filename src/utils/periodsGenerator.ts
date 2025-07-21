import {
  addDays,
  differenceInCalendarDays,
  eachDayOfInterval,
  eachMonthOfInterval,
  eachQuarterOfInterval,
  eachWeekOfInterval,
  eachYearOfInterval,
} from "date-fns";
import { TransactionFrequency } from "../models/enums";

export const getIntervalsByFrequency = (
  startDate: string,
  endDate: string,
  frequency: TransactionFrequency
) => {
  let periods: Date[] = [];
  switch (frequency) {
    case TransactionFrequency.Daily:
      periods = eachDayOfInterval({ start: startDate, end: endDate });
      break;
    case TransactionFrequency.Weekly:
      periods = eachWeekOfInterval(
        { start: startDate, end: endDate },
        { weekStartsOn: 1 }
      );
      break;
    case TransactionFrequency.Monthly:
      periods = eachMonthOfInterval({ start: startDate, end: endDate });
      break;
    case TransactionFrequency.Quarterly:
      periods = eachQuarterOfInterval({ start: startDate, end: endDate });
      break;
    case TransactionFrequency.SemiAnnually:
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
    case TransactionFrequency.Annually:
      periods = eachYearOfInterval({ start: startDate, end: endDate });
      break;
    case TransactionFrequency.OneTime:
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
