import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StyledButton from "@components/atoms/StyledButton";
import { Entypo } from "@expo/vector-icons";
import { theme } from "@utils/theme";
import Spacer from "@components/atoms/Spacer";

type Props = {
    onSelectImage: () => void;
    onAdd: () => void;
    disableAdd?: boolean;
};

const TaskAddActions = (props: Props) => {
    return (
        <View style={styles.container}>
            <StyledButton
                title="Images"
                onPress={props.onSelectImage}
                secondary
            >
                <Entypo name="images" size={18} color={theme.colors.grey} />
                <Spacer size="small" horizontal />
            </StyledButton>
            <StyledButton
                title="Add"
                onPress={props.onAdd}
                disabled={props.disableAdd}
            />
        </View>
    );
};

export default TaskAddActions;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
