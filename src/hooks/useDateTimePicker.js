import { useCallback, useMemo, useState, useEffect } from "react";

const useDateTimePicker = (initialValue = "") => {
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
        onChange: setValue,
      },
      clear,
    }),
    [value, clear]
  );
};

const useReactiveDateTimePicker = (externalValue = "") => {
  const textInput = useDateTimePicker(externalValue);

  const { setValue } = textInput;

  useEffect(() => {
    setValue(externalValue);
  }, [externalValue, setValue]);

  return textInput;
};

export default useDateTimePicker;
export { useReactiveDateTimePicker };
