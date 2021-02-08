import React from "react";
import { View } from "react-native";
import { TextInput, useTheme } from "react-native-paper";

import styles from "../../screens/styles";

import BottomModal from "../BottomModal";
import Button from "../Button";
import ModalTitle from "../Typography/ModalTitle";

import { useBookingFilters } from "../../stores/BookingFilters";
import { useReactiveTextInput } from "../../hooks/useTextInput";

const BookingSearchModal = ({ visible, onDismiss }) => {
  const theme = useTheme();

  const searchQuery = useBookingFilters((state) => state.searchQuery);
  const setSearch = useBookingFilters((state) => state.setSearch);

  const searchInput = useReactiveTextInput(searchQuery);

  return (
    <BottomModal {...{ visible, onDismiss }}>
      <ModalTitle>Something specific?</ModalTitle>
      <View style={styles.Section}>
        <TextInput
          dense
          label="Search"
          {...searchInput.props}
          right={
            searchInput.value && (
              <TextInput.Icon
                color={theme.colors.textSecondary}
                name="close"
                onPress={searchInput.clear}
              />
            )
          }
        />
      </View>
      <View style={styles.Section}>
        <View style={styles.FormInputContainer}>
          <Button
            compact
            mode="outlined"
            style={styles.FormInputLeft}
            onPress={onDismiss}
          >
            Cancel
          </Button>
          <Button
            compact
            mode="contained"
            style={styles.FormInputRight}
            onPress={() => {
              setSearch(searchInput.value);
              onDismiss();
            }}
          >
            Search
          </Button>
        </View>
      </View>
    </BottomModal>
  );
};

export default BookingSearchModal;
