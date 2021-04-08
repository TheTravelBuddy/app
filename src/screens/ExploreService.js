import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { RenderOnLoad, Scaffold, ServiceSearchCard } from "../components";
import { useAPI } from "../helpers/API";

const ExploreServiceScreen = ({
  navigation: { goBack },
  route: { params },
}) => {
  const [apiRequest] = useAPI({
    url: "/traveller/explore/service",
    params: {
      latitude: params.latitude,
      longitude: params.longitude,
      serviceId: params.serviceId,
    },
  });

  return (
    <Scaffold
      header={useMemo(
        () => ({
          title: params?.name ? `Service - ${params.name}` : "Services",
          backAction: goBack,
        }),
        [goBack, params.name]
      )}
    >
      <RenderOnLoad loading={!apiRequest.data}>
        {() => (
          <>
            <View style={commonStyles.Section}>
              {apiRequest.data?.map((serviceDataDetails) => (
                <ServiceSearchCard
                  key={serviceDataDetails.id}
                  {...serviceDataDetails}
                  style={[
                    commonStyles.ScreenPadded,
                    commonStyles.HorizontalCard,
                  ]}
                />
              ))}
            </View>
          </>
        )}
      </RenderOnLoad>
    </Scaffold>
  );
};

export default ExploreServiceScreen;
