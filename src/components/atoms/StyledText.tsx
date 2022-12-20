import { View, Text, TextProps, StyleSheet } from "react-native";
import React from "react";
import { theme } from "@utils/theme";

interface Props extends TextProps {
    size?: "small" | "medium" | "large" | "xlarge" | "xxlarge" | "header";
    weight?: "regular" | "medium" | "bold";
    children: string;
}

const StyledText = (props: Props) => {
    let fontFamily = theme.fonts.regular;
    const weight = props.weight || "regular";

    if (weight != "regular")
        fontFamily = weight == "bold" ? theme.fonts.bold : theme.fonts.medium;

    return (
        <View>
            <Text
                {...props}
                style={{
                    fontFamily,
                    fontSize: theme.fontSizes[props.size || "medium"],
                    ...(props.style as any),
                }}
            >
                {props.children}
            </Text>
        </View>
    );
};

export default StyledText;
