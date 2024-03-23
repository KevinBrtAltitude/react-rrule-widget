import { Model } from "@/lib/utils/Model";
import translateLabel from "../../utils/translateLabel";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function EndNever({
  mode,
  handleChange,
  translations,
}: {
  mode: Model["end"]["mode"];
  handleChange: any;
  translations: any;
}) {
  const isActive = mode === "Never";

  return (
    <div className="flex flex-row items-center mb-2">
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
