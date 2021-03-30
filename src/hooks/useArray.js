import produce from "immer";
import { useCallback, useMemo, useState, useEffect } from "react";

const useArray = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  const clear = useCallback(() => {
    setValue([]);
  }, []);

  const push = useCallback((newValue) => {
    setValue(
      produce((draftValue) => {
        draftValue.push(newValue);
      })
    );
  }, []);

  const remove = useCallback((index) => {
    setValue(
      produce((draftValue) => {
        draftValue.splice(index, 1);
      })
    );
  }, []);

  return useMemo(
    () => ({
      value,
      setValue,
      push,
      remove,
      clear,
    }),
    [value, clear, push, remove]
  );
};

const useReactiveArray = (externalValue = "") => {
  const objectState = useArray(externalValue);

  const { setValue } = objectState;

  useEffect(() => {
    setValue(externalValue);
  }, [externalValue, setValue]);

  return objectState;
};

export default useArray;
export { useReactiveArray };
