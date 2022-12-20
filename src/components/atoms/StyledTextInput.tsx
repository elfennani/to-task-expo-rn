import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";
import React from "react";
import { theme } from "@utils/theme";

interface Props extends TextInputProps {}

const StyledTextInput = (props: Props) => {
    return (
        <TextInput
            placeholderTextColor={theme.colors.grey}
            {...props}
            style={{ ...styles.input, ...(props.style as any) }}
        />
    );
};

export default StyledTextInput;

const styles = StyleSheet.create({
    input: {
        fontFamily: theme.fonts.regular,
        color: theme.colors.text,
    },
});
