# React RRule Widget

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Based on : React RRule Generator
https://github.com/fafruch/react-rrule-generator

![App Screenshot](https://i.ibb.co/mbwDCSc/Capture-d-cran-2024-03-23-112223.png)

## Description

ReactJS library for generating RRule strings.

Uses :

- [Shadcn/ui](https://ui.shadcn.com/) and [Tailwindcss](https://tailwindcss.com/) for styling
- [Moment](https://momentjs.com/)
- [Lodash](https://github.com/lodash/lodash)
- [Rrule.js](https://github.com/jkbrzt/rrule)

## Installation

npm

```bash
  npm install --save react-rrule-widget
```

yarn

```bash
  yarn add react-rrule-widget
```

## Usage/Examples

```ts
import ReactRRuleWidget from "react-rrule-widget";

function App() {
  const [rrule, setRrule] = useState("");
  const [dates, setDates] = useState<any[]>([]);

  const handleChange = (newRRule: string) => {
    setRrule(newRRule);
    const rruleObj = rrulestr(newRRule);
    setDates(rruleObj.all((_, index) => index < 20));
  };

  return (
    <ReactRRuleWidget
      onChange={handleChange}
      value={rrule}
      locale="en"
      config={{
        hideStart: false,
        count: 10,
        endOptions: ["never", "on-date", "after-executions"],
      }}
    />
  );
}
```

## API

### Props

| Name               | Type                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------ | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **value**          | `string`                                  | **REQUIRED.** You can pass your own RRule value to RRuleGenerator and use it like controlled input component.                                                                                                                                                                                                                                                                                                                                                                       |
| **onChange**       | `function`                                | Callback trigger when the RRule changes. The callback receives newly generated RRule `string`.                                                                                                                                                                                                                                                                                                                                                                                      |
| **config**         | `object`                                  | Accepts object of what options will be rendered. This object's structure is described in [#config](#config)                                                                                                                                                                                                                                                                                                                                                                         |
| **translations**   | `function` or `object`                    | Accepts a function or an object with translations for all labels in the component. By default all labels are in English. You can pass your own translation object or function, which has the following signature: `(key: string, replacements: object) => string`. It receives key of the label in form of `'repeat.yearly.on_the'` and an object for placeholder replacements, e.g., `{ value: error.value }`. Example translation objects are placed in `/src/lib/translations/`. |
| **locale**         | `string`                                  | Specifies the language setting for the package. It supports two values: `'en'` for English and `'fr'` for French. The default value is `'en'`                                                                                                                                                                                                                                                                                                                                       |
| **customCalendar** | `React Component` or `stateless function` | This accepts custom calendar / datepicker for choosing a date in EndOnDate view. It receives following props by default: <ul><li>`'aria-label'` with value `'Datetime picker for end on date'`,</li><li>`value` - date value consumed by app logic, </li><li>`dateFormat` - by default `'YYYY-MM-DD'`, </li><li>`locale` - `'en/ca'` or `'en/gb'` depending on if `weekStartsOnSunday` in config is set to `true` or `false` </li>                                                  |

### config

`config` is an object which accepts following:

| Name                   | Type                | Description                                                                                                                                                                                                                                                          |
| ---------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **frequency**          | `array` of `string` | You can optionally choose if you want to show repeating options `'Yearly'`, `'Monthly'`, `'Weekly'`, `'Daily'`, `'Hourly'`. You can pass for example `['Monthly', 'Weekly']` if you want to show only options for repeating monthly and weekly.                      |
| **yearly**             | `string`            | If `'on'` provided, only choosing a particular day of a month is available, if `'on the'` is provided, you have ability to choose for example 'fourth Wednesday of February'                                                                                         |
| **monthly**            | `string`            | If `'on'` provided, only choosing a particular day of a month is available, if `'on the'` is provided, you have ability to choose for example 'fourth Wednesday'                                                                                                     |
| **end**                | `string`            | You can optionally choose default end option `'Never'`, `'After'`, `'On date'`. The Default value is `'After'`                                                                                                                                                       |
| **endOptions**         | `array` of `string` | You can optionally choose if you want to show ending options `'never'`, `'after-executions'`, `'on-date'`. You can pass for example `['never', 'on-date']` if you want to show only options for ending never or on a particular date without showint 'After' option. |
| **hideStart**          | `boolean`           | If `true` start date form is not rendered. Default: `true`                                                                                                                                                                                                           |
| **hideEnd**            | `boolean`           | If `true` ending form is not rendered. Default: `false`                                                                                                                                                                                                              |
| **weekStartsOnSunday** | `boolean`           | If set to `true`, weeks starts on Sunday (both for views and RRule string). Default: `false`                                                                                                                                                                         |
| **count**              | `number`            | Default value for `'After'` end option                                                                                                                                                                                                                               |

## License

[MIT](https://choosealicense.com/licenses/mit/)
