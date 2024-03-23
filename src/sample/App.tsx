import { useState } from "react";
import ReactRRuleWidget from "../lib/components/ReactRRuleWidget";
import "./App.css";
import "./global.css";
import { rrulestr } from "rrule";

function App() {
  const [rrule, setRrule] = useState("");
  const [dates, setDates] = useState<any[]>([]);

  const handleChange = (newRRule: string) => {
    setRrule(newRRule);
    const rruleObj = rrulestr(newRRule);
    setDates(rruleObj.all((_, index) => index < 20));
  };

  return (
    <>
      <ReactRRuleWidget
        onChange={handleChange}
        value={rrule}
        locale="fr"
        config={{
          hideStart: false,
          count: 10,
          endOptions: ["on-date", "after-executions"],
        }}
      />

      <div className="mt-12">
        <div>{rrule}</div>

        <div>
          {dates.map((date, index) => (
            <div key={index}>{date.toUTCString()}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
