import React from "react";
import { View } from "react-native";
import { Avatar, useTheme, IconButton, Text } from "react-native-paper";
import moment from "moment";

import { CARD_SPACING } from "../../constants";
import BottomModal from "../BottomModal";
import screenStyles from "../../screens/styles";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";

const CommentModal = ({
  visible,
  onDismiss,
  name,
  comment,
  profileuri,
  publishedOn,
}) => {
  const theme = useTheme();

  return (
    <BottomModal {...{ visible, onDismiss }}>
      <View style={styles.Container}>
        <Avatar.Image size={24} source={{ uri: profileuri }} />
        <CardTitle style={styles.UserNameText}>{name}</CardTitle>
      </View>
      <Paragraph>{comment}</Paragraph>
      <View style={styles.SectionRightButton}>
        <IconButton
          size={18}
          color={theme.colors.textSecondary}
          style={styles.CardActionsIcon}
          icon="clock-outline"
        />
        <Text
          style={[
            { color: theme.colors.textSecondary },
            screenStyles.CardActionsText,
          ]}
        >
          {moment(publishedOn).fromNow()}
        </Text>
      </View>
    </BottomModal>
  );
};

const styles = {
  Container: {
    flexDirection: "row",
    alignItems: "center",
  },
  UserNameText: {
    flex: 1,
    marginLeft: CARD_SPACING,
  },
  SectionRightButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  CardActionsIcon: {
    margin: 0,
  },
  CardActionsText: {
    fontSize: 14,
  },
};

export default CommentModal;
