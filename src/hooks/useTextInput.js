import { useCallback, useMemo, useState } from "react";

const useTextInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const clear = useCallback(() => {
    setValue("");
  }, []);

  return useMemo(
    () => ({
      value,
      props: {
        value,
        onChangeText: setValue,
      },
      clear,
    }),
    [value, clear]
  );
};

export default useTextInput;
