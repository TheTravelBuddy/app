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
    marginHorizontal: SCREEN_PADDING,
    marginBottom: CARD_SPACING / 2,
  },
};
