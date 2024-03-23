import moment from "moment";
import { Model } from "../Model";

const computeEnd = ({ mode, after, onDate: { date } }: Model["end"]) => {
  const end: any = {};

  if (mode === "After") {
    end.count = after;
  }

  if (mode === "On date") {
    end.until = moment(date).format();
  }

  return end;
};

export default computeEnd;
