import translateLabel from "../../utils/translateLabel";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function EndNever({
  mode,
  handleChange,
  translations,
}: any) {
  const isActive = mode === "Never";

  return (
    <div className="flex flex-row items-center">
      <div>
        <RadioGroup>
          <RadioGroupItem
            onClick={() => {
              handleChange({
                target: { name: "end.mode", value: "Never" },
              });
            }}
            value="Never"
            checked={isActive}
          />
        </RadioGroup>
      </div>
      <Label className="ml-2">
        {translateLabel(translations, "end.never")}
      </Label>
    </div>
  );
}
