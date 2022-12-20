import { theme } from "@utils/theme";
import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {}

const IconButton = (props: Props) => {
    return (
        <TouchableOpacity
            {...props}
            style={{ ...styles.button, ...(props.style as any) }}
            activeOpacity={0.75}
        >
            {props.children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: theme.spacing.small,
    },
});

export default IconButton;
