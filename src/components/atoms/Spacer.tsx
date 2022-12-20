import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@utils/theme";

type Props = {
    size: "smaller" | "small" | "medium" | "large";
    horizontal?: boolean;
};

const Spacer = ({ size, horizontal }: Props) => {
    return (
        <View
            style={
                horizontal
                    ? { width: theme.spacing[size] }
                    : { height: theme.spacing[size] }
            }
        ></View>
    );
};

export default Spacer;
