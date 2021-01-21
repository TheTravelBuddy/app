import { useMemo } from "react";
import useToggle from "./useToggle";

const useSnackbarHandler = (initialValue = false) => {
  const visibility = useToggle(initialValue);

  return useMemo(
    () => ({
      show: visibility.on,
      dismiss: visibility.off,
      props: {
        visible: visibility.state,
        onDismiss: visibility.off,
      },
      visibility,
    }),
    [visibility]
  );
};

export default useSnackbarHandler;
