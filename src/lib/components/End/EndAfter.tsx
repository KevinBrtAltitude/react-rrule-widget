import translateLabel from "../../utils/translateLabel";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import numericalFieldHandler from "../../utils/numericalFieldHandler";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function EndAfter({
  mode,
  after,
  handleChange,
  translations,
}: any) {
  const isActive = mode === "After";

  return (
    <div className="flex flex-row items-center">
      <div>
        <RadioGroup>
          <RadioGroupItem
            onClick={() => {
              handleChange({
                target: { name: "end.mode", value: "After" },
              });
            }}
            value="After"
            checked={isActive}
          />
        </RadioGroup>
      </div>
      <Label className="ml-2">
        {translateLabel(translations, "end.after")}
      </Label>
      <Input
        value={after ?? 1}
        className="w-[50px] text-sm ml-3 mr-3"
        type="number"
        name="end.after"
        min={0}
        onChange={numericalFieldHandler(handleChange)}
      />
      <Label>{translateLabel(translations, "end.executions")}</Label>
    </div>
  );
}
