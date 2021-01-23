import { useCallback, useMemo, useState } from "react";

const useDateTimePicker = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const clear = useCallback(() => {
    setValue("");
  }, []);

  return useMemo(
    () => ({
      value,
      props: {
        value,
        onChange: setValue,
      },
      clear,
    }),
    [value, clear]
  );
};

export default useDateTimePicker;
