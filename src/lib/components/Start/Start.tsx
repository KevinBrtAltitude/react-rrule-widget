import translateLabel from "../../utils/translateLabel";
import React from "react";
import { Label } from "../ui/label";
import StartOnDate from "./StartOnDateInput";

interface IProps {
  start: {
    onDate: any;
  };
  handleChange: (p: any) => void;
  translations: any;
}

export default function Start({
  start: { onDate },
  handleChange,
  translations,
}: IProps) {
  console.log("start on date", onDate);
  return (
    <div className="px-3">
      <div className="flex flex-col items-start">
        <div className="text-sm-right mr-4 mb-1">
          <Label>
            <strong>{translateLabel(translations, "start.label")}</strong>
          </Label>
        </div>
        <StartOnDate
          onDate={onDate}
          handleChange={handleChange}
          translations={translations}
        />
      </div>
    </div>
  );
}
