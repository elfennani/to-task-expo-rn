import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import { theme } from "@utils/theme";

type Props = {
    title: string;
    onPress?(): void;
    colorDegree?: number;
};

const CategoryCard = (props: Props) => {
    return (
        <View>
            <Pressable
                style={{
                    ...styles.card,
                    backgroundColor: `hsl(${props.colorDegree || 0}, ${
                        props.colorDegree ? 91 : 0
                    }%, 91%)`,
                }}
                onPress={props.onPress}
                android_ripple={{ color: theme.colors.ripple }}
                disabled={!props.onPress}
            >
                <StyledText size="small" style={styles.text} weight="medium">
                    {props.title}
                </StyledText>
            </Pressable>
        </View>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    card: {
        padding: theme.spacing.small,
        paddingVertical: theme.spacing.smaller,
        backgroundColor: "hsl(0, 91%,91%)",
    },
    text: {
        textTransform: "uppercase",
        letterSpacing: 1,
    },
});
