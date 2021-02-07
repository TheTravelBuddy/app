import { useCallback, useMemo, useState, useEffect } from "react";

const usePicker = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const clear = useCallback(() => {
    setValue("");
  }, []);

  return useMemo(
    () => ({
      value,
      setValue,
      props: {
        value,
        onValueChange: setValue,
      },
      clear,
    }),
    [value, clear]
  );
};

const useReactivePicker = (externalValue = "") => {
  const textInput = usePicker(externalValue);

  const { setValue } = textInput;

  useEffect(() => {
    setValue(externalValue);
  }, [externalValue, setValue]);

  return textInput;
};

export default usePicker;
export { useReactivePicker };
