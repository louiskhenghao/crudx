import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isNil from 'lodash/isNil';

// ===== extend
dayjs.extend(relativeTime);
dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

export const formatDateTime = (
  data: any,
  options?: { relative?: boolean; format?: string; locale?: string }
): string => {
  const relative = options?.relative ?? false;
  const outFormat = options?.format ?? 'DD-MMM-YYYY';
  const locale = options?.locale ?? 'ms';
  if (relative) {
    return dayjs(data).fromNow();
  }
  return dayjs(data).locale(locale).format(outFormat);
};

/**
 * set date time with preference value & return it with desired format
 * @example
```ts
  setDateTi`me({ sec: 45, min: 1, hour: 12 })
  setDateTime({ sec: 45, min: 1, hour: 11 }, 'date')
  setDateTime({ sec: 45, min: 1, hour: 11 }, 'relative')
  setDateTim`e({ sec: 45, min: 1, hour: 11 }, 'DD-MM-YYYY HH:mmA')
```
 */
export const setDateTime = (
  date: {
    sec?: number;
    min?: number;
    hour?: number;
    day?: number;
    month?: number;
    year?: number;
  },
  type: 'object' | 'date' | 'relative' | string = 'object'
): string | dayjs.Dayjs => {
  let dayObj = new Date();
  if (!isNil(date.sec)) {
    dayObj = dayjs(dayObj).set('s', date.sec).toDate();
  }
  if (!isNil(date.min)) {
    dayObj = dayjs(dayObj).set('m', date.min).toDate();
  }
  if (!isNil(date.hour)) {
    dayObj = dayjs(dayObj).set('h', date.hour).toDate();
  }
  if (!isNil(date.day)) {
    dayObj = dayjs(dayObj).set('D', date.day).toDate();
  }
  if (!isNil(date.month)) {
    const month = date.month - 1;
    dayObj = dayjs(dayObj).set('M', month).toDate();
  }
  if (!isNil(date.year)) {
    dayObj = dayjs(dayObj).set('y', date.year).toDate();
  }

  if (type === 'object') return dayjs(dayObj);

  return formatDateTime(dayObj, {
    relative: type === 'relative',
    format: type === 'date' ? 'DD, MMM YYYY' : type,
  });
};
