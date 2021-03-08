import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, BusinessSearchCard } from "../components";

const businesscategoryData = [
  {
    id: 1,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55wRXAj9yVvUjMEbtZDixoiQCb_da9YEbaQ&usqp=CAU",
    name: "Monginis Cake shop",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    timings: "10:00 AM - 9:30 PM, Mon - Fri",
  },
  {
    id: 2,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55wRXAj9yVvUjMEbtZDixoiQCb_da9YEbaQ&usqp=CAU",
    name: "Monginis Cake shop",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    timings: "10:00 AM - 9:30 PM, Mon - Fri",
  },
  {
    id: 3,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55wRXAj9yVvUjMEbtZDixoiQCb_da9YEbaQ&usqp=CAU",
    name: "Monginis Cake shop",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    timings: "10:00 AM - 9:30 PM, Mon - Fri",
  },
  {
    id: 4,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55wRXAj9yVvUjMEbtZDixoiQCb_da9YEbaQ&usqp=CAU",
    name: "Monginis Cake shop",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    timings: "10:00 AM - 9:30 PM, Mon - Fri",
  },
  {
    id: 5,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55wRXAj9yVvUjMEbtZDixoiQCb_da9YEbaQ&usqp=CAU",
    name: "Monginis Cake shop",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    timings: "10:00 AM - 9:30 PM, Mon - Fri",
  },
];

const BusinessCategoryScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(() => ({ title: "Cake Shops", backAction: goBack }), [
        goBack,
      ])}
    >
      <View style={commonStyles.Section}>
        {businesscategoryData.map((businesscategoryDataDetails) => (
          <BusinessSearchCard
            key={businesscategoryDataDetails.id}
            {...businesscategoryDataDetails}
            style={[commonStyles.ScreenPadded, commonStyles.HorizontalCard]}
          />
        ))}
      </View>
    </Scaffold>
  );
};

export default BusinessCategoryScreen;
