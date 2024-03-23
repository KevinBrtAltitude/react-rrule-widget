import React, { useCallback, useEffect, useRef, useState } from "react";
import configureState from "../utils/configureInitialState";
import computeRRuleToString from "../utils/toString/computeRRule";
import computeRRuleFromString from "../utils/fromString/computeRRule";
import { cloneDeep, set } from "lodash";
import Start from "./Start/Start";

import "../styles/react-rrule-widget.css";
import translations from "../translations";
import FrequencyTabs from "./FrequencyTabs/FrequencyTabs";
import End from "./End/End";

const translationsConf = {
  fr: translations.french,
  en: translations.english,
};

export default function ReactRRuleWidget(props: ReactRRuleWidgetProps) {
  const prevRrule = useRef<string | null>(null);
  const [options, setOptions] = useState(
    configureState(props.value, props.config, props.calendarComponent)
  );

  const locale = props.locale ?? "en";

  const curTranslations =
    props.translations ?? translationsConf[locale] ?? translations.english;

  useEffect(() => {
    if (options && prevRrule.current !== props.value) {
      prevRrule.current = props.value;
      const cOptions = { ...options };
      cOptions.data = computeRRuleFromString(options.data, props.value);
      setOptions(cOptions);
    }
  }, [options.data, props.value]);

  useEffect(() => {
    const rrule = computeRRuleToString(options.data);
    if (props.onChange) {
      props.onChange(rrule);
    }
  }, []);

  const handleChange = useCallback(
    // represents a path to a value in the options.data object
    // how to type this properly?
    ({ target }: { target: { name: string; value: any } }) => {
      const newData = cloneDeep(options.data);
      set(newData, target.name, target.value);
      const rrule = computeRRuleToString(newData);
      const cOptions = { ...options };
      cOptions.data = newData;
      setOptions(cOptions);
      if (props.onChange) {
        props.onChange(rrule);
      }
    },
    [options, props]
  );

  if (!options) {
    return null;
  }

  const {
    data: { start, repeat, end, options: config },
  } = options;

  return (
    <div>
      <div className="px-0 pt-3 border-rounded">
        {!config.hideStart && (
          <div>
            <Start
              locale={locale}
              start={start}
              handleChange={handleChange}
              translations={curTranslations}
            />
          </div>
        )}

        <div className="mt-6">
          <FrequencyTabs
            repeat={repeat}
            handleChange={handleChange}
            translations={curTranslations}
          />
        </div>

        {!config.hideEnd && (
          <div className="mt-4">
            <End
              locale={locale}
              end={end}
              handleChange={handleChange}
              translations={curTranslations}
              availableEndOptions={config.endOptions}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export interface ReactRRuleWidgetPropConfig {
  frequency?: ("Yearly" | "Monthly" | "Weekly" | "Daily" | "Hourly")[];
  yearly?: "on" | "on the";
  monthly?: "on" | "on the";
  end?: "Never" | "After" | "On date";
  hideStart?: boolean;
  hideEnd?: boolean;
  endOptions?: ("never" | "on-date" | "after-executions")[];
  weekStartsOnSunday?: boolean;
  count?: number;
}

interface TranslationObject {
  [key: string]: string;
}

export interface ReactRRuleWidgetProps {
  config?: ReactRRuleWidgetPropConfig;
  value: string;
  onChange?: (rrule: string) => void;
  calendarComponent?: React.ReactElement;
  translations?: TranslationObject;
  locale?: "en" | "fr";
}
