import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import translateLabel from "../../../utils/translateLabel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import numericalFieldHandler from "../../../utils/numericalFieldHandler";
import { DAYS, MONTHS } from "../../../../lib/constants";
import { Input } from "../../ui/input";

export default function FrequencyYearlyMode2({
  mode,
  onThe,
  hasMoreModes,
  handleChange,
  translations,
  interval,
}: any) {
  const isActive = mode === "on the";
  return (
    <div className="relative flex flex-row items-center flex-wrap gap-y-2">
      <div>
        {hasMoreModes && (
          <RadioGroup>
            <RadioGroupItem
              onClick={() => {
                handleChange({
                  target: { name: "repeat.yearly.mode", value: "on the" },
                });
              }}
              value="on the"
              checked={isActive}
            />
          </RadioGroup>
        )}
      </div>
      <div className="ml-2 mr-2">
        <Label className="capitalize w-max block">
          {translateLabel(translations, "repeat.yearly.on_the")}
        </Label>
      </div>

      <Select
        name="repeat.yearly.onThe.which"
        value={onThe.which + ""}
        onValueChange={(value) =>
          numericalFieldHandler(handleChange)({
            target: { name: "repeat.yearly.onThe.which", value },
          })
        }
      >
        <SelectTrigger className="w-[100px] text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key={1} value="First">
            {translateLabel(translations, "numerals.first")}
          </SelectItem>
          <SelectItem key={2} value="Second">
            {translateLabel(translations, "numerals.second")}
          </SelectItem>
          <SelectItem key={3} value="Third">
            {translateLabel(translations, "numerals.third")}
          </SelectItem>
          <SelectItem key={4} value="Fourth">
            {translateLabel(translations, "numerals.fourth")}
          </SelectItem>
          <SelectItem key={5} value="Last">
            {translateLabel(translations, "numerals.last")}
          </SelectItem>
        </SelectContent>
      </Select>

      <Select
        name="repeat.yearly.onThe.day"
        value={onThe.day + ""}
        onValueChange={(value) =>
          numericalFieldHandler(handleChange)({
            target: { name: "repeat.yearly.onThe.day", value },
          })
        }
      >
        <SelectTrigger className="w-[100px] text-sm ml-2">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {DAYS.map((day) => (
            <SelectItem key={day} value={day}>
              {translateLabel(translations, `days.${day.toLowerCase()}`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="ml-2 mr-2">
        <Label className="lowercase">
          {translateLabel(translations, "repeat.yearly.of")}
        </Label>
      </div>

      <Select
        name="repeat.yearly.onThe.month"
        value={onThe.month + ""}
        onValueChange={(value) =>
          numericalFieldHandler(handleChange)({
            target: { name: "repeat.yearly.onThe.month", value },
          })
        }
      >
        <SelectTrigger className="w-[120px] text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {MONTHS.map((month) => (
            <SelectItem key={month} value={month}>
              {translateLabel(translations, `months.${month.toLowerCase()}`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="ml-2 mr-2">
        <Label className="lowercase">
          {translateLabel(translations, "repeat.yearly.every")}
        </Label>
      </div>
      <Input
        value={interval}
        className="w-[50px] text-sm ml-1 mr-1"
        type="number"
        name="repeat.yearly.interval"
        min={0}
        onChange={numericalFieldHandler(handleChange)}
      />
      <div className="ml-2 mr-2">
        <Label className="lowercase">
          {translateLabel(translations, "repeat.yearly.years")}
        </Label>
      </div>
    </div>
  );
}
