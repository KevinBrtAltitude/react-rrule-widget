import FrequencyMonthlyMode1 from "./FrequencyMonthlyMode1";
import FrequencyMonthlyMode2 from "./FrequencyMonthlyMode2";

export default function FrequencyMonthlyTab({
  monthly: { mode, interval, on, onThe, options },
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
          <FrequencyMonthlyMode1
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
          <FrequencyMonthlyMode2
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
