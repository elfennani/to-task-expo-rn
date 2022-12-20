import {
    Pressable,
    PressableProps,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React from "react";
import { theme } from "@utils/theme";
import StyledText from "./StyledText";

interface Props extends PressableProps {
    title: string;
    secondary?: boolean;
    children?: any | any[];
}

const StyledButton = (props: Props) => {
    return (
        <View
            style={{
                ...styles.buttonContainer,
                ...(props.secondary && styles.secondaryButtonContainer),
                ...(props.disabled && styles.diabledButtonContainer),
            }}
        >
            <Pressable
                android_ripple={{
                    color: "hsla(100, 0%, 0%, 0.1)",
                    borderless: true,
                }}
                {...props}
                style={{
                    ...styles.button,
                    ...(props.secondary && styles.secondaryButton),
                }}
            >
                {props.children}
                <StyledText
                    size="medium"
                    style={{
                        ...styles.buttonText,
                        ...(props.secondary && styles.secondaryButtonText),
                    }}
                    // weight="medium"
                >
                    {props.title}
                </StyledText>
            </Pressable>
        </View>
    );
};

export default StyledButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: theme.borderRadius.small,
        backgroundColor: theme.colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        paddingHorizontal: theme.spacing.medium,
        paddingVertical: theme.spacing.small,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    diabledButtonContainer: {
        backgroundColor: theme.colors.border,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    secondaryButtonContainer: {
        // elevation: 0,
    },
    secondaryButton: {
        backgroundColor: theme.colors.border,
    },
    secondaryButtonText: {
        color: theme.colors.grey,
    },
});
