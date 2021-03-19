import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";

import { CARD_SPACING } from "../../constants";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";
import CommentModal from "../Modals/CommentModal";
import useToggle from "../../hooks/useToggle";

const CommentCard = ({ id, comment, name, profileUri, publishedOn }) => {
  const commentModal = useToggle(false);
  return (
    <>
      <Card
        style={{
          padding: CARD_SPACING,
          marginVertical: Math.round(CARD_SPACING / 2),
        }}
        onPress={commentModal.show}
      >
        <View>
          <CardTitle>{name}</CardTitle>
        </View>
        <Paragraph numberOfLines={2}>{comment}</Paragraph>
      </Card>
      <CommentModal
        visible={commentModal.visible}
        onDismiss={commentModal.hide}
        {...{ comment, name, profileUri, publishedOn }}
      />
    </>
  );
};

export default CommentCard;
