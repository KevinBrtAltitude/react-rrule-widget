import "moment/min/locales";

import { DATE_TIME_FORMAT } from "../../constants/index";
import translateLabel from "../../utils/translateLabel";
import { DatePicker } from "../ui/date_picker";

const StartOnDate = ({
  id,
  onDate: { date, options },
  handleChange,
  translations,
}: any) => {
  const CustomCalendar = options.calendarComponent;
  const locale = "fr-FR";
  const calendarAttributes = {
    "aria-label": translateLabel(translations, "start.tooltip"),
    value: date,
    dateFormat: DATE_TIME_FORMAT,
    locale,
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
