import React, { useEffect, useMemo, useState } from 'react';

import { formatDateTime } from '../../helpers/date';

import { calculateNextUpdate } from './helpers';
import { DateTimeProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const DateTime: React.FC<DateTimeProps> = (props) => {
  const {
    date,
    kind = 'datetime',
    format,
    prefix,
    postfix,
    ...restProps
  } = props;

  // =============== STATE
  const [tick, setTick] = useState(0);
  const [datetime, setDateTime] = useState('');

  // =============== HELPERS
  // function to get date format
  const finalFormat = useMemo(() => {
    if (format) return format;
    if (kind === 'date') {
      return 'DD, MMM YYYY';
    }
    if (kind === 'date2') {
      return 'DD-MM-YYYY';
    }
    if (kind === 'datetime') {
      return 'Do, MMM YYYY hh:mm:A';
    }
    return 'DD, MMM YYYY';
  }, [format, kind]);

  // =============== EFFECTS
  useEffect(() => {
    const time = formatDateTime(date, { format: finalFormat, ...restProps });
    setDateTime(time);
  }, [date, finalFormat, restProps]);

  useEffect(() => {
    const updateInterval = calculateNextUpdate(date);
    const timeoutId = setTimeout(() => {
      if (!restProps.relative) return;
      setDateTime(formatDateTime(date, { format: finalFormat, ...restProps }));
      setTick(tick + 1);
    }, updateInterval);
    return () => clearTimeout(timeoutId);
  }, [date, tick, finalFormat, restProps]);

  // =============== VIEWS
  return (
    <>
      {prefix}
      {datetime}
      {postfix}
    </>
  );
};

/**
 * ===========================
 * EXPORT
 * ===========================
 */
export * from './props';
export default DateTime;
