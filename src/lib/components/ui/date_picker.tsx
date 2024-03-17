"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "../../utils/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

import { fr, enUS } from "date-fns/locale";
import translateLabel from "../../utils/translateLabel";

export function DatePicker({ onChange, value, translations, locale }: any) {
  const [date, setDate] = React.useState<Date>(value);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "PPP", { locale: locale === "fr" ? fr : enUS })
          ) : (
            <span>{translateLabel(translations, "end.pickADate")}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e: any) => {
            setDate(e);
            onChange(e);
          }}
          initialFocus
          locale={locale === "fr" ? fr : enUS}
        />
      </PopoverContent>
    </Popover>
  );
}
