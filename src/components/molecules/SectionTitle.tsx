import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StyledText from "@components/atoms/StyledText";
import { theme } from "@utils/theme";
import Spacer from "@components/atoms/Spacer";

type Props = {
    title: string;
    secondary?: string;
};

const SectionTitle = (props: Props) => {
    return (
        <View style={styles.container}>
            <StyledText style={styles.text} size="small" weight="bold">
                {props.title}
            </StyledText>
            {props.secondary && (
                <>
                    <Spacer size="small" horizontal />
                    <StyledText
                        style={{ ...styles.text, ...styles.secondary }}
                        size="small"
                        weight="regular"
                    >
                        {props.secondary}
                    </StyledText>
                </>
            )}
        </View>
    );
};

export default SectionTitle;

const styles = StyleSheet.create({
    container: {
        paddingVertical: theme.spacing.small,
        paddingHorizontal: theme.spacing.small,
        flexDirection: "row",
    },
    text: {
        textTransform: "uppercase",
        color: theme.colors.darkGrey,
        letterSpacing: 1,
    },
    secondary: {
        color: theme.colors.grey,
    },
});
