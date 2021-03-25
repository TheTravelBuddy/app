import { useCallback, useMemo, useState, useEffect } from "react";

const useObjectState = (initialValue = {}) => {
  const [value, setValue] = useState(initialValue);

  const clear = useCallback(() => {
    setValue({});
  }, []);

  const setProperty = useCallback((property, newValue) => {
    setValue((oldValue) => ({ ...oldValue, [property]: newValue }));
  }, []);

  return useMemo(
    () => ({
      value,
      setValue,
      setProperty,
      props: {
        value,
        onValueChange: setValue,
      },
      clear,
    }),
    [value, clear, setProperty]
  );
};

const useReactiveObjectState = (externalValue = "") => {
  const objectState = useObjectState(externalValue);

  const { setValue } = objectState;

  useEffect(() => {
    setValue(externalValue);
  }, [externalValue, setValue]);

  return objectState;
};

export default useObjectState;
export { useReactiveObjectState };
