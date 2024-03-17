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
import moment from "moment";
import { MONTHS } from "../../../constants";
import { range } from "lodash";

export default function FrequencyYearlyMode1({
  mode,
  on,
  hasMoreModes,
  handleChange,
  translations,
}: any) {
  const daysInMonth = moment(on.month, "MMM").daysInMonth();
  const isActive = mode === "on";

  return (
    <div className="relative flex flex-row items-center">
      <div>
        {hasMoreModes && (
          <RadioGroup>
            <RadioGroupItem
              onClick={() => {
                handleChange({
                  target: { name: "repeat.yearly.mode", value: "on" },
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
          {translateLabel(translations, "repeat.yearly.on_the")}
        </Label>
      </div>
      <Select
        name="repeat.yearly.on.day"
        value={on.day + ""}
        onValueChange={(value) =>
          numericalFieldHandler(handleChange)({
            target: { name: "repeat.yearly.on.day", value },
          })
        }
      >
        <SelectTrigger className="w-[60px] text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {range(0, daysInMonth).map((i) => (
            <SelectItem key={i} value={i + 1 + ""}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        name="repeat.yearly.on.month"
        value={on.month + ""}
        onValueChange={(value) =>
          numericalFieldHandler(handleChange)({
            target: { name: "repeat.yearly.on.month", value },
          })
        }
      >
        <SelectTrigger className="w-[120px] text-sm ml-2">
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
    </div>
  );
}
