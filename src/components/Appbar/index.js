import React from "react";
import { Appbar, useTheme } from "react-native-paper";

const Action = (props) => {
  const theme = useTheme();

  return <Appbar.Action color={theme.colors.greyDark} {...props} />;
};

const BackAction = (props) => {
  const theme = useTheme();

  return <Appbar.BackAction color={theme.colors.greyDark} {...props} />;
};

const Content = ({ titleStyle, ...props }) => {
  const theme = useTheme();

  return (
    <Appbar.Content
      titleStyle={[
        theme.fonts.bold,
        { color: theme.colors.textPrimary },
        styles.ContentTitle,
      ]}
      {...props}
    />
  );
};

const Header = ({ children, animated = false, style, ...props }) => {
  const theme = useTheme();

  return (
    <Appbar.Header
      style={[
        styles.Header,
        style,
        { backgroundColor: theme.colors.background },
      ]}
      {...props}
    >
      {children}
    </Appbar.Header>
  );
};

const styles = {
  Header: {
    elevation: 0,
  },
  ContentTitle: {
    fontSize: 24,
  },
};

export default { Action, BackAction, Content, Header };
