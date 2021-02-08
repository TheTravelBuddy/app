import React from "react";
import { View } from "react-native";
import { useTheme, Portal } from "react-native-paper";
import Modal from "react-native-modal";
import { SCREEN_PADDING } from "../../constants";

const BottomModal = ({ visible, onDismiss, children }) => {
  const theme = useTheme();
  return (
    <Portal>
      <Modal
        useNativeDriver
        hideModalContentWhileAnimating
        backdropOpacity={0.25}
        style={styles.BottomModal}
        isVisible={visible}
        onBackdropPress={onDismiss}
        onBackButtonPress={onDismiss}
        onModalHide={onDismiss}
      >
        <View
          style={[
            styles.ModalContentContainer,
            {
              backgroundColor: theme.colors.surface,
              borderRadius: theme.roundness,
            },
          ]}
        >
          {children}
        </View>
      </Modal>
    </Portal>
  );
};

const styles = {
  BottomModal: {
    justifyContent: "flex-end",
    padding: 0,
    margin: 0,
  },
  ModalContentContainer: {
    margin: 8,
    padding: SCREEN_PADDING,
    zIndex: 100,
  },
};

export default BottomModal;
