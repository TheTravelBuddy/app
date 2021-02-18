import { CARD_SPACING } from "../../constants";

export default {
  CardContainer: {
    padding: CARD_SPACING,
  },
  CardTitleContainer: {
    flexDirection: "row",
  },
  CardTitleHeader: {
    flexDirection: "row",
    marginBottom: CARD_SPACING / 2,
  },
  CardTitleText: {
    flex: 1,
    marginRight: CARD_SPACING / 2,
  },
  CardTitleIcon: {
    marginRight: CARD_SPACING / 2,
  },
  CardContent: {
    marginTop: CARD_SPACING / 2,
  },
  CardActionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: CARD_SPACING / 2,
  },
  CardActionsIcon: {
    margin: 0,
  },
  CardActionsText: {
    fontSize: 14,
  },
  CardActionsSpacer: {
    flexGrow: 1,
  },
};
