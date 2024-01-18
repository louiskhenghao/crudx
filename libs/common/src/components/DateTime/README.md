# DateTime

This component help to display date time easily

## Props

```TypeScript
type DateTimeProps = {
  /**
   * date object or date string
   */
  date?: any;
  /**
   * display format, `date`, `datetime` is preset, otherwise custom format
   * default to `datetime`
   */
  kind?: 'date' | 'date2' | 'datetime' | string;
  /**
   * the date format, will take place if provided
   */
  format?: string;
  /**
   * whether should display relative time
   * default `false`
   */
  relative?: boolean;
  /**
   * set locale time
   */
  locale?: string;
  /**
   * prefix of time
   */
  prefix?: ReactNode;
  /**
   * postfix of time
   */
  postfix?: ReactNode;
}
```

---

## Example

```TypeScript
// import from package
import { DateTime } from "@crudx/common";

const date = new Date();

// simple usage
<DateTime date={date} />

// with kind
// kind `date`, "DD, MMM YYYY"
<DateTime date={date} kind="date" />

// kind `datetime`, "Do, MMM YYYY hh:mm:A"
<DateTime date={date} kind="datetime" />

// kind `custom`, refer to this https://day.js.org/docs/en/display/format
<DateTime date={date} kind="D (ddd) MMM, YYYY"/>

// relative time - example `1 hours ago`
<DateTime date={date} relative={true} />
```
