import { useState } from "react";
import ReactRRuleWidget from "../lib/components/ReactRRuleWidget";
import "./App.css";
import "./global.css";
import { rrulestr } from "rrule";

function App() {
  const [rrule, setRrule] = useState("FREQ=DAILY;INTERVAL=1;WKST=MO");
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
        locale="en"
        config={{ hideStart: true, count: 5 }}
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
