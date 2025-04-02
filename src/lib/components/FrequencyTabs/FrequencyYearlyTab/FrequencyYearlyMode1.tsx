import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import translateLabel from "../../../utils/translateLabel";
import { Combobox } from "../../ui/combobox";
import numericalFieldHandler from "../../../utils/numericalFieldHandler";
import moment from "moment";
import { MONTHS } from "../../../constants";
import { range } from "lodash";
import { Input } from "../../ui/input";

export default function FrequencyYearlyMode1({
  mode,
  on,
  hasMoreModes,
  handleChange,
  translations,
  interval,
}: any) {
  const daysInMonth = moment(on.month, "MMM").daysInMonth();
  const isActive = mode === "on";

  // Options pour les jours du mois
  const dayOptions = range(0, daysInMonth).map(i => ({
    value: (i + 1).toString(),
    label: (i + 1).toString()
  }));

  // Options pour les mois
  const monthOptions = MONTHS.map(month => ({
    value: month,
    label: translateLabel(translations, `months.${month.toLowerCase()}`)
  }));

  // Gérer les valeurs multiples pour day
  const handleDayChange = (value: string | string[]) => {
    handleChange({
      target: { name: "repeat.yearly.on.day", value }
    });
  };

  // Gérer les valeurs multiples pour month
  const handleMonthChange = (value: string | string[]) => {
    handleChange({
      target: { name: "repeat.yearly.on.month", value }
    });
  };

  return (
    <div className="flex flex-row items-center flex-wrap gap-y-2">
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
      <div className="ml-2 mr-2">
        <Label className="capitalize">
          {translateLabel(translations, "repeat.yearly.on_the")}
        </Label>
      </div>
      <Combobox
        options={dayOptions}
        className="w-[80px] text-sm"
        value={on.day.map((item: string | number) => item.toString())}
        onChange={(values: string[]) => 
          handleDayChange(values)
        }
        title={translateLabel(translations, "days.day")}
        multiple={true}
        hasHeader={false}
      />

      <Combobox
        options={monthOptions}
        className="w-[120px] text-sm ml-2"
        value={on.month.map((item: string) => item.toString())}
        onChange={(values: string[]) => 
          handleMonthChange(values)
        }
        title={translateLabel(translations, "months.month")}
        multiple={true}
        hasHeader={false}
      />

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
