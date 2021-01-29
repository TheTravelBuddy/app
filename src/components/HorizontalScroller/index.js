import React, { isValidElement, cloneElement, Children } from "react";
import { ScrollView } from "react-native";

import { SCREEN_PADDING } from "../../constants";

const HorizontalScroller = ({ children }) => {
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.CardsScrollerContainer}
    >
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child, { style: styles.CardsScrollerCard })
          : child
      )}
    </ScrollView>
  );
};

const styles = {
  CardsScrollerContainer: {
    paddingHorizontal: (3 / 4) * SCREEN_PADDING,
    paddingVertical: 2,
  },
  CardsScrollerCard: {
    marginHorizontal: SCREEN_PADDING / 4,
  },
};

export default HorizontalScroller;
