import { useCallback, useMemo, useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const on = useCallback(() => {
    setValue(true);
  }, []);

  const off = useCallback(() => {
    setValue(false);
  }, []);

  return useMemo(
    () => ({
      value,
      on,
      off,
      state: value,
      visible: value,
      set: on,
      reset: off,
      start: on,
      stop: off,
      show: on,
      hide: off,
    }),
    [value, on, off]
  );
};

export default useToggle;
