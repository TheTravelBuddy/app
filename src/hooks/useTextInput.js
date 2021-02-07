import { useCallback, useMemo, useState, useEffect } from "react";

const useTextInput = (initialValue = "") => {
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
        onChangeText: setValue,
      },
      clear,
    }),
    [value, clear]
  );
};

const useReactiveTextInput = (externalValue = "") => {
  const textInput = useTextInput(externalValue);

  const { setValue } = textInput;

  useEffect(() => {
    setValue(externalValue);
  }, [externalValue, setValue]);

  return textInput;
};

export default useTextInput;
export { useReactiveTextInput };
