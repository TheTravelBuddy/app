import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

import styles from "../../screens/styles";

import BottomModal from "../BottomModal";
import Button from "../Button";
import DateTimePicker from "../DateTimePicker";
import CardTitle from "../Typography/CardTitle";
import ModalTitle from "../Typography/ModalTitle";

import { useReactiveTextInput } from "../../hooks/useTextInput";
import { useReactiveDateTimePicker } from "../../hooks/useDateTimePicker";
import useToggle from "../../hooks/useToggle";
import API from "../../helpers/API";

const today = new Date();
const maxBookingDate = moment(today).add(1, "year").toDate();

const PackageBookingModal = ({ visible, onDismiss, packageId }) => {
  const date = useReactiveDateTimePicker(today);
  const noOfPeople = useReactiveTextInput("1");
  const loading = useToggle(false);
  const { navigate } = useNavigation();

  return (
    <BottomModal {...{ visible, onDismiss }}>
      <ModalTitle>Booking Details</ModalTitle>
      <View style={styles.Section}>
        <CardTitle style={styles.SectionHeader}>Duration</CardTitle>
        <View style={styles.FormInputContainer}>
          <DateTimePicker
            dense
            {...date.props}
            style={styles.FormInputLeft}
            label="Date"
            disabled={loading.value}
            maximumDate={maxBookingDate}
            minimumDate={today}
          />
          <TextInput
            dense
            label="People"
            keyboardType="numeric"
            {...noOfPeople.props}
            disabled={loading.value}
            style={styles.FormInputRight}
          />
        </View>
      </View>
      <View style={styles.Section}>
        <View style={styles.FormInputContainer}>
          <Button
            compact
            mode="outlined"
            style={styles.FormInputLeft}
            onPress={onDismiss}
            disabled={loading.value}
          >
            Cancel
          </Button>
          <Button
            compact
            mode="contained"
            style={styles.FormInputRight}
            disabled={loading.value}
            loading={loading.value}
            onPress={() => {
              loading.start();
              API({
                url: `/traveller/package/booking`,
                method: "post",
                params: { packageId },
                data: { date: date.value, people: noOfPeople.value },
              })
                .then((response) => {
                  const { data: packageBookingId } = response;
                  navigate("PackageBookingScreen", {
                    packageBookingId,
                    new: true,
                  });
                })
                .catch(console.log)
                .finally(() => {
                  loading.stop();
                  onDismiss();
                });
            }}
          >
            Confirm
          </Button>
        </View>
      </View>
    </BottomModal>
  );
};

export default PackageBookingModal;
