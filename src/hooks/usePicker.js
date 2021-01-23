import { useCallback, useMemo, useState } from "react";

const usePicker = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const clear = useCallback(() => {
    setValue("");
  }, []);

  return useMemo(
    () => ({
      value,
      props: {
        value,
        onValueChange: setValue,
      },
      clear,
    }),
    [value, clear]
  );
};

export default usePicker;
