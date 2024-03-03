import translateLabel from "../../../../lib/utils/translateLabel";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import numericalFieldHandler from "../../../utils/numericalFieldHandler";
import { Toggle } from "../../ui/toggle";
import { toPairs } from "lodash";

export default function FrequencyWeeklyTab({
  weekly: { interval, days, options },
  handleChange,
  translations,
}: any) {
  let daysArray = toPairs(days);
  if (options.weekStartsOnSunday) {
    daysArray = daysArray.slice(-1).concat(daysArray.slice(0, -1));
  }

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-row items-center">
        <Label>{translateLabel(translations, "repeat.weekly.every")}</Label>
        <Input
          value={interval ?? 1}
          className="w-[50px] text-sm ml-3 mr-3"
          type="number"
          name="repeat.weekly.interval"
          min={0}
          onChange={numericalFieldHandler(handleChange)}
        />
        <Label>{translateLabel(translations, "repeat.weekly.weeks")}</Label>
      </div>

      <div className="border rounded mt-3">
        {daysArray.map(([dayName, isDayActive]: any) => (
          <Toggle
            key={dayName}
            pressed={isDayActive}
            onPressedChange={(event: any) => {
              const editedEvent = {
                ...event,
                target: {
                  ...event.target,
                  value: !isDayActive,
                  name: `repeat.weekly.days[${dayName}]`,
                },
              };

              handleChange(editedEvent);
            }}
          >
            {translateLabel(
              translations,
              `days_letter.${dayName.toLowerCase()}`
            )}
          </Toggle>
        ))}
      </div>
    </div>
  );
}
