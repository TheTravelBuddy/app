import { SCREEN_PADDING } from "../../constants";

export default {
  Container: {
    justifyContent: "space-between",
    flexGrow: 1,
    padding: SCREEN_PADDING,
  },
  Header: {
    alignItems: "center",
  },
  HeaderTitle: {
    marginTop: SCREEN_PADDING,
  },
  IllustrationContainer: {
    paddingVertical: SCREEN_PADDING * 2,
  },
  FormInput: {
    marginBottom: 12,
  },
  FormInputContainer: {
    flexDirection: "row",
  },
  FormInputLeft: {
    flex: 1,
    marginRight: 4,
  },
  FormInputRight: {
    flex: 1,
    marginLeft: 4,
  },
};
