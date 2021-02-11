import React, { isValidElement, cloneElement, Children } from "react";
import { ScrollView, View } from "react-native";

import { SCREEN_PADDING } from "../../constants";

const HorizontalScroller = ({
  children,
  horizontalSpacing = SCREEN_PADDING,
  verticalSpacing = 2,
  gap = SCREEN_PADDING / 2,
  // contentStyle,
}) => {
  const marginHorizontal = Math.round(gap / 2);
  const paddingVertical = verticalSpacing;
  const paddingHorizontal = horizontalSpacing - marginHorizontal;

  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal, paddingVertical }}
    >
      {Children.map(
        children,
        (child) => (
          <View style={{ marginHorizontal }}>{child}</View>
        )
        // isValidElement(child)
        //   ? cloneElement(child, {
        //       style: [{ marginHorizontal }, contentStyle],
        //     })
        //   : child
      )}
    </ScrollView>
  );
};

export default HorizontalScroller;
