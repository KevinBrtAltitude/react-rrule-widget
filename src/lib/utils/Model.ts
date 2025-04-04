export type Model = {
  start: {
    onDate: {
      date: string;
      options: {
        weekStartsOnSunday: boolean | undefined;
        calendarComponent: React.ReactElement | undefined;
      };
    };
  };
  repeat: {
    frequency: string;
    yearly: {
      mode: string;
      interval: number;
      on: {
        month: string | string[];
        day: number | number[] | string | string[];
      };
      onThe: {
        month: string | string[];
        day: string | string[];
        which: string | string[];
      };
      options: {
        modes: string | undefined;
      };
    };
    monthly: {
      mode: string;
      interval: number | undefined;
      on: {
        day: number | number[] | string | string[];
      };
      onThe: {
        day: string | string[];
        which: string | string[];
      };
      options: {
        modes: string | undefined;
      };
    };
    weekly: {
      interval: number | undefined;
      days: {
        mon: boolean;
        tue: boolean;
        wed: boolean;
        thu: boolean;
        fri: boolean;
        sat: boolean;
        sun: boolean;
      };
      options: {
        weekStartsOnSunday: boolean | undefined;
      };
    };
    daily: {
      interval: number | undefined;
      wkst: number | undefined;
    };
    hourly: {
      interval: number | undefined;
    };
    options: {
      frequency:
        | ("Yearly" | "Monthly" | "Weekly" | "Daily" | "Hourly")[]
        | undefined;
    };
  };
  end: {
    mode: "After" | "On date" | "Never" | undefined;
    after: number;
    onDate: {
      date: string;
      options: {
        weekStartsOnSunday: boolean | undefined;
        calendarComponent?:
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | undefined;
      };
    };
    options: {
      modes: string | undefined;
    };
  };
  options: {
    hideStart: boolean;
    hideEnd: boolean | undefined;
    weekStartsOnSunday: boolean | undefined;
    endOptions: ("never" | "on-date" | "after-executions")[];
    count?: number;
  };
  error: { message: Error | unknown; value: string } | null;
};
