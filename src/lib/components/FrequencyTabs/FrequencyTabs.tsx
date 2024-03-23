import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import translateLabel from "../../../lib/utils/translateLabel";
import FrequencyDailyTab from "./FrequencyDailyTab/FrequencyDailyTab";
import FrequencyWeeklyTab from "./FrequencyWeeklyTab/FrequencyWeeklyTab";
import FrequencyMonthlyTab from "./FrequencyMonthlyTab/FrequencyMonthlyTab";
import FrequencyYearlyTab from "./FrequencyYearlyTab/FrequencyYearlyTab";

export default function FrequencyTab({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  repeat: { frequency, yearly, monthly, weekly, daily, hourly, options },
  handleChange,
  translations,
}: any) {
  options.frequency = options.frequency ?? [
    "Daily",
    "Weekly",
    "Monthly",
    "Yearly",
  ];
  const isOptionSelected = (option: string) => frequency === option;

  return (
    <div className="px-3 flex flex-col item-start w-full">
      <Label className="text-start">
        <strong>{translateLabel(translations, "repeat.label")}</strong>
      </Label>
      <Tabs
        value={frequency}
        defaultValue={options.frequency[0] ?? "Daily"}
        className="w-[450px] flex flex-col item-start mt-2 max-w-max w-full"
      >
        <TabsList className="w-max">
          {options.frequency.map((key: string) => (
            <TabsTrigger
              name="repeat.frequency"
              key={key}
              value={key}
              onClick={() =>
                handleChange({
                  target: { name: "repeat.frequency", value: key },
                })
              }
            >
              {translateLabel(
                translations,
                "repeat." + key.toLowerCase() + ".label"
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        {options.frequency.map((key: string) => (
          <TabsContent key={key} value={key} className="py-2 px-2">
            {isOptionSelected("Daily") && (
              <FrequencyDailyTab
                daily={daily}
                handleChange={handleChange}
                translations={translations}
              />
            )}

            {isOptionSelected("Weekly") && (
              <FrequencyWeeklyTab
                weekly={weekly}
                handleChange={handleChange}
                translations={translations}
              />
            )}

            {isOptionSelected("Monthly") && (
              <FrequencyMonthlyTab
                monthly={monthly}
                handleChange={handleChange}
                translations={translations}
              />
            )}

            {isOptionSelected("Yearly") && (
              <FrequencyYearlyTab
                yearly={yearly}
                handleChange={handleChange}
                translations={translations}
              />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
