import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import ContainerView from "@components/atoms/ContainerView";
import { theme } from "@utils/theme";
import StyledText from "@components/atoms/StyledText";
import CategoriesSelection from "./CategoriesSelection";
import Spacer from "@components/atoms/Spacer";
import StyledButton from "@components/atoms/StyledButton";
import IconButton from "@components/atoms/IconButton";
import { AntDesign } from "@expo/vector-icons";

type Props = {};

const TaskItem = (props: Props) => {
    return (
        <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
            <ContainerView style={styles.card}>
                <View style={styles.content}>
                    <StyledText>TaskItem</StyledText>
                    <Spacer size="medium" />
                    <CategoriesSelection />
                </View>
                <View style={styles.actions}>
                    <IconButton>
                        <AntDesign
                            name="minussquareo"
                            size={16}
                            color={theme.colors.grey}
                        />
                    </IconButton>
                </View>
            </ContainerView>
        </TouchableOpacity>
    );
};

export default TaskItem;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: theme.borderRadius.medium,
        flexDirection: "row",
        padding: 0,
    },
    actions: {
        padding: theme.spacing.small,
    },
    content: {
        paddingRight: theme.spacing.smaller,
        padding: theme.spacing.medium,
        flex: 1,
    },
});
