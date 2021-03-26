import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, ReviewCard, RenderOnLoad } from "../components";
import { useAPI } from "../helpers/API";

const ReviewsScreen = ({ navigation: { goBack }, route: { params } }) => {
  const [apiRequest] = useAPI({
    url: `/traveller/${params.nodeType}/reviews`,
    params: { [`${params.nodeType}Id`]: params.nodeId },
  });

  return (
    <Scaffold
      header={useMemo(() => ({ title: "Reviews", backAction: goBack }), [
        goBack,
      ])}
    >
      <RenderOnLoad loading={!apiRequest.data}>
        {() => (
          <>
            <View style={[commonStyles.Section, commonStyles.ScreenPadded]}>
              {apiRequest.data?.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </View>
          </>
        )}
      </RenderOnLoad>
    </Scaffold>
  );
};

export default ReviewsScreen;
