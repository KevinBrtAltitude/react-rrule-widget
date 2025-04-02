import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import translateLabel from "../../../utils/translateLabel";
import { Combobox } from "../../ui/combobox";
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

  // Options pour le combobox "which" (Premier, Deuxième, etc.)
  const whichOptions = [
    { value: "First", label: translateLabel(translations, "numerals.first") },
    { value: "Second", label: translateLabel(translations, "numerals.second") },
    { value: "Third", label: translateLabel(translations, "numerals.third") },
    { value: "Fourth", label: translateLabel(translations, "numerals.fourth") },
    { value: "Last", label: translateLabel(translations, "numerals.last") },
  ];

  // Options pour les jours de la semaine
  const dayOptions = DAYS.map(day => ({
    value: day,
    label: translateLabel(translations, `days.${day.toLowerCase()}`)
  }));

  // Options pour les mois
  const monthOptions = MONTHS.map(month => ({
    value: month,
    label: translateLabel(translations, `months.${month.toLowerCase()}`)
  }));

  // Gérer les valeurs multiples pour which
  const handleWhichChange = (value: string | string[]) => {
    handleChange({
      target: { name: "repeat.yearly.onThe.which", value }
    });
  };

  // Gérer les valeurs multiples pour day
  const handleDayChange = (value: string | string[]) => {
    handleChange({
      target: { name: "repeat.yearly.onThe.day", value }
    });
  };

  // Gérer les valeurs multiples pour month
  const handleMonthChange = (value: string | string[]) => {
    handleChange({
      target: { name: "repeat.yearly.onThe.month", value }
    });
  };

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

      <Combobox
        options={whichOptions}
        className="w-[140px] text-sm"
        value={onThe.which}
        onChange={handleWhichChange}
        title={translateLabel(translations, "numerals.ordinal")}
        multiple={true}
        hasHeader={false}
      />

      <Combobox
        options={dayOptions}
        className="w-[140px] text-sm ml-2"
        value={onThe.day}
        onChange={handleDayChange}
        title={translateLabel(translations, "days.day")}
        multiple={true}
        hasHeader={false}
      />

      <div className="ml-2 mr-2">
        <Label className="lowercase">
          {translateLabel(translations, "repeat.yearly.of")}
        </Label>
      </div>

      <Combobox
        options={monthOptions}
        className="w-[120px] text-sm"
        value={onThe.month}
        onChange={handleMonthChange}
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
