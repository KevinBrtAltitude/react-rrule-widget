import FrequencyYearlyMode1 from "./FrequencyYearlyMode1";
import FrequencyYearlyMode2 from "./FrequencyYearlyMode2";

export default function FrequencyYearlyTab({
  yearly: { mode, interval, on, onThe, options },
  handleChange,
  translations,
}: any) {
  //options.modes = options.modes ?? ["on", "on the"];
  const isTheOnlyOneMode = (option: string) => options.modes === option;
  const isOptionAvailable = (option: string) =>
    !options.modes || isTheOnlyOneMode(option);

  return (
    <div className="flex flex-col items-start">
      <div>
        {isOptionAvailable("on") && (
          <FrequencyYearlyMode1
            mode={mode}
            on={on}
            hasMoreModes={!isTheOnlyOneMode("on")}
            handleChange={handleChange}
            translations={translations}
            interval={interval}
          />
        )}
      </div>

      <div className="mt-2">
        {isOptionAvailable("on the") && (
          <FrequencyYearlyMode2
            mode={mode}
            onThe={onThe}
            hasMoreModes={!isTheOnlyOneMode("on the")}
            handleChange={handleChange}
            translations={translations}
            interval={interval}
          />
        )}
      </div>
    </div>
  );
}
