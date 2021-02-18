import { SCREEN_PADDING, CARD_SPACING } from "../../constants";
import authStyles from "./authStyles";

export default {
  ...authStyles,
  Header: {
    elevation: 0,
  },
  Section: {
    paddingVertical: SCREEN_PADDING / 2,
  },
  SectionHeader: {
    marginBottom: CARD_SPACING / 2,
  },
  ScreenPadded: {
    marginHorizontal: SCREEN_PADDING,
  },
  HorizontalCard: {
    marginVertical: CARD_SPACING / 2,
  },
  ActivityContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  Flex: {
    flex: 1,
  },
  FlexMore: {
    flex: 2,
  },
};
