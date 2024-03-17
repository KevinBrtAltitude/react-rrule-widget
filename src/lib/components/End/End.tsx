import translateLabel from "../../utils/translateLabel";
import { Label } from "../ui/label";
import EndAfter from "./EndAfter";
import EndOnDate from "./EndOnDate";

export default function End({
  end: { mode, after, onDate },
  handleChange,
  translations,
  locale,
}: any) {
  return (
    <div className="px-3">
      <div className="flex flex-col items-start">
        <div className="text-sm-right mr-4 mb-1">
          <Label>
            <strong>{translateLabel(translations, "end.label")}</strong>
          </Label>
        </div>
      </div>

      <div>
        <EndOnDate
          locale={locale}
          onDate={onDate}
          handleChange={handleChange}
          translations={translations}
          mode={mode}
        />
      </div>
      <div className="mt-2">
        <EndAfter
          after={after}
          handleChange={handleChange}
          translations={translations}
          mode={mode}
        />
      </div>
    </div>
  );
}
