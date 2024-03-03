import translateLabel from "../../../../lib/utils/translateLabel";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import numericalFieldHandler from "../../../utils/numericalFieldHandler";

export default function FrequencyDailyTab({
  daily: { interval },
  handleChange,
  translations,
}: any) {
  return (
    <div className="flex flex-row items-center">
      <Label>{translateLabel(translations, "repeat.daily.every")}</Label>
      <Input
        value={interval ?? 1}
        className="w-[50px] text-sm ml-3 mr-3"
        type="number"
        name="repeat.daily.interval"
        min={0}
        onChange={numericalFieldHandler(handleChange)}
      />
      <Label>{translateLabel(translations, "days.days")}</Label>
    </div>
  );
}
