import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import translateLabel from "../../../utils/translateLabel";
import { Combobox } from "../../ui/combobox";
import numericalFieldHandler from "../../../utils/numericalFieldHandler";
import { DAYS } from "../../../constants";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "../../ui/select";

export default function FrequencyMonthlyMode2({
  mode,
  onThe,
  hasMoreModes,
  handleChange,
  translations,
  interval,
}: any) {
  const isActive = mode === "on the";

  // Options for positions (First, Second, etc.)
  const whichOptions = [
    { value: "First", label: translateLabel(translations, "numerals.first") },
    { value: "Second", label: translateLabel(translations, "numerals.second") },
    { value: "Third", label: translateLabel(translations, "numerals.third") },
    { value: "Fourth", label: translateLabel(translations, "numerals.fourth") },
    { value: "Last", label: translateLabel(translations, "numerals.last") },
  ];

  // Options for days (Monday, Tuesday, etc.)
  const dayOptions = [
    ...DAYS.map((day: string) => ({
      value: day,
      label: translateLabel(translations, `days.${day.toLowerCase()}`),
    })),
  ];

  // Handle multiple values for which
  const handleWhichChange = (value: string | string[]) => {
    handleChange({
      target: { name: "repeat.monthly.onThe.which", value },
    });
  };

  // Handle multiple values for day
  const handleDayChange = (value: string | string[]) => {
    handleChange({
      target: { name: "repeat.monthly.onThe.day", value },
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
                  target: { name: "repeat.monthly.mode", value: "on the" },
                });
              }}
              value="on the"
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
        options={whichOptions}
        className="w-[130px] text-sm"
        value={Array.isArray(onThe.which) ? onThe.which : [onThe.which]}
        onChange={handleWhichChange}
        title={translateLabel(translations, "positions.position")}
        hasHeader={false}
        multiple
      />
      <Combobox
        options={dayOptions}
        className="w-[130px] text-sm ml-2"
        value={Array.isArray(onThe.day) ? onThe.day : [onThe.day]}
        onChange={handleDayChange}
        title={translateLabel(translations, "days.day")}
        hasHeader={false}
        multiple
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
          {[...new Array(12)].map((day, i) => (
            <SelectItem key={i} value={i + 1 + ""}>
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
