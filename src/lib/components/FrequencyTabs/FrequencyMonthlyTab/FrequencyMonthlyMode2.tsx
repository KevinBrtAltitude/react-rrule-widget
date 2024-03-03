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
import { DAYS } from "../../../../lib/constants";

export default function FrequencyMonthlyMode2({
  mode,
  onThe,
  hasMoreModes,
  handleChange,
  translations,
  interval,
}: any) {
  const isActive = mode === "on the";
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
      <Select
        name="repeat.monthly.onThe.which"
        value={onThe.which + ""}
        onValueChange={(value) =>
          numericalFieldHandler(handleChange)({
            target: { name: "repeat.monthly.onThe.which", value },
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
        name="repeat.monthly.onThe.day"
        value={onThe.day + ""}
        onValueChange={(value) =>
          numericalFieldHandler(handleChange)({
            target: { name: "repeat.monthly.onThe.day", value },
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
