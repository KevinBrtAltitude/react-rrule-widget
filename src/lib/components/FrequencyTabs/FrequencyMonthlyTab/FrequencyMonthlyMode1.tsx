import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import translateLabel from "../../../utils/translateLabel";
import { Combobox } from "../../ui/combobox";
import numericalFieldHandler from "../../../utils/numericalFieldHandler";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "../../ui/select";

export default function FrequencyMonthlyMode1({
  mode,
  on,
  hasMoreModes,
  handleChange,
  translations,
  interval,
}: any) {
  const isActive = mode === "on";

  // Options for days of month
  const dayOptions = [...Array(31)].map((_, i) => ({
    value: (i + 1).toString(),
    label: (i + 1).toString()
  }));

  // Handle multiple values for day
  const handleDayChange = (value: string | string[]) => {
    handleChange({
      target: { name: "repeat.monthly.on.day", value }
    });
  };

  return (
    <div className="relative flex flex-row items-center">
      <div>
        {hasMoreModes && (
          <RadioGroup>
            <RadioGroupItem
              onClick={() => {
                handleChange({
                  target: { name: "repeat.monthly.mode", value: "on" },
                });
              }}
              value="on"
              checked={isActive}
            />
          </RadioGroup>
        )}
      </div>
      <div className="ml-2 mr-2">
        <Label className="capitalize">
          {translateLabel(translations, "repeat.monthly.on_the")}
        </Label>
      </div>
      <Combobox
        options={dayOptions}
        className="w-[80px] text-sm"
        value={Array.isArray(on.day) ? on.day.map((d: number | string) => d.toString()) : [on.day.toString()]}
        onChange={handleDayChange}
        title={translateLabel(translations, "days.day")}
        multiple={true}
        hasHeader={false}
      />
      <div className="ml-2 mr-2">
        <Label className="lowercase">
          {translateLabel(translations, "repeat.monthly.every")}
        </Label>
      </div>
      <Select
        name="repeat.monthly.interval"
        value={interval + ""}
        onValueChange={(value) =>
          numericalFieldHandler(handleChange)({
            target: { name: "repeat.monthly.interval", value },
          })
        }
      >
        <SelectTrigger className="w-[60px] text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {[...new Array(12)].map((_, i) => (
            <SelectItem key={i} value={(i + 1) + ""}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="ml-2 mr-2">
        <Label className="lowercase">
          {translateLabel(translations, "repeat.monthly.months")}
        </Label>
      </div>
    </div>
  );
}
