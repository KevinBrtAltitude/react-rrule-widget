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

export default function FrequencyMonthlyMode1({
  mode,
  on,
  hasMoreModes,
  handleChange,
  translations,
  interval,
}: any) {
  const isActive = mode === "on";
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
      <Select
        name="repeat.monthly.on.day"
        value={on.day + ""}
        onValueChange={(value) =>
          numericalFieldHandler(handleChange)({
            target: { name: "repeat.monthly.on.day", value },
          })
        }
      >
        <SelectTrigger className="w-[60px] text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {[...new Array(31)].map((day, i) => (
            <SelectItem key={i} value={i + 1 + ""}>
              {i + 1}
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
