import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "@utils/theme";
import StyledText from "@components/atoms/StyledText";

type Props = {};

const Header = (props: Props) => {
    const { top } = useSafeAreaInsets();

    return (
        <View
            style={{
                ...styles.container,
                paddingTop: top + theme.spacing.medium,
            }}
        >
            <StyledText weight="bold" size="xxlarge">
                To
            </StyledText>
            <StyledText
                weight="bold"
                size="xxlarge"
                style={{ color: theme.colors.primary }}
            >
                Task
            </StyledText>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: theme.spacing.medium,
    },
});
