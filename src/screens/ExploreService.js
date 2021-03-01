import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, ServiceSearchCard } from "../components";

const serviceData = [
  {
    id: 1,
    name: "Kandivali Police Station",

    address: "101, Charkop Police Station Near Monginis",
    timings: "10:00 AM - 9:30 PM, Mon - Fri",
  },
];

const ExploreServiceScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(() => ({ title: "Services", backAction: goBack }), [
        goBack,
      ])}
    >
      <View style={commonStyles.Section}>
        {serviceData.map((serviceDataDetails) => (
          <ServiceSearchCard
            key={serviceDataDetails.id}
            {...serviceDataDetails}
            style={[commonStyles.ScreenPadded, commonStyles.HorizontalCard]}
          />
        ))}
      </View>
    </Scaffold>
  );
};

export default ExploreServiceScreen;
