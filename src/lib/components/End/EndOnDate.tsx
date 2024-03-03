import { DATE_TIME_FORMAT } from "../../constants";
import translateLabel from "../../utils/translateLabel";
import { DatePicker } from "../ui/date_picker";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import moment from "moment";

export default function EndOnDate({
  mode,
  onDate: { date, options },
  handleChange,
  translations,
}: any) {
  const CustomCalendar = options.calendarComponent;

  const locale = options.weekStartsOnSunday ? "en-ca" : "en-gb";
  const calendarAttributes = {
    "aria-label": translateLabel(translations, "end.tooltip"),
    value: date,
    dateFormat: DATE_TIME_FORMAT,
    locale,
    readOnly: true,
  };
  const isActive = mode === "On date";
  return (
    <div className="flex flex-row items-center">
      <div>
        <RadioGroup>
          <RadioGroupItem
            onClick={() => {
              handleChange({
                target: { name: "end.mode", value: "On date" },
              });
            }}
            value="On date"
            checked={isActive}
          />
        </RadioGroup>
      </div>
      <div className="ml-2 mr-2">
        <Label className="capitalize">
          {translateLabel(translations, "end.on_date")}
        </Label>
      </div>
      {CustomCalendar ? (
        <CustomCalendar
          key={`${5456465}-calendar`}
          {...calendarAttributes}
          onChange={(event: any) => {
            const editedEvent = {
              target: {
                value: event.target.value,
                name: "end.onDate.date",
              },
            };

            handleChange(editedEvent);
          }}
        />
      ) : (
        <DatePicker
          onChange={(value: any) => {
            handleChange({
              target: {
                value: moment(value).format(DATE_TIME_FORMAT),
                name: "end.onDate.date",
              },
            });
          }}
        />
      )}
    </div>
  );
}
