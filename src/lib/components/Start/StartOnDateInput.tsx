import "moment/min/locales";

import { DATE_TIME_FORMAT } from "../../constants/index";
import translateLabel from "../../utils/translateLabel";
import { DatePicker } from "../ui/date_picker";

const StartOnDate = ({
  id,
  onDate: { date, options },
  handleChange,
  translations,
  locale,
}: any) => {
  const CustomCalendar = options.calendarComponent;
  const curLocale = locale === "fr" ? "fr-FR" : "en-EN";
  const calendarAttributes = {
    "aria-label": translateLabel(translations, "start.tooltip"),
    value: date,
    dateFormat: DATE_TIME_FORMAT,
    curLocale,
    readOnly: true,
  };

  return (
    <div className="col-6 col-sm-3">
      {CustomCalendar ? (
        <CustomCalendar
          key={`${id}-calendar`}
          {...calendarAttributes}
          onChange={(event: any) => {
            const editedEvent = {
              target: {
                value: event.target.value,
                name: "start.onDate.date",
              },
            };

            handleChange(editedEvent);
          }}
        />
      ) : (
        <DatePicker
          locale={locale}
          value={date}
          onChange={(value: any) => {
            handleChange({
              target: {
                value: value,
                name: "start.onDate.date",
              },
            });
          }}
        />
      )}
    </div>
  );
};

export default StartOnDate;
