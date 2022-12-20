import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ContainerView from "@components/atoms/ContainerView";
import StyledTextInput from "@components/atoms/StyledTextInput";
import TaskAddActions from "@components/molecules/TaskAddActions";
import CategoriesSelection from "@components/molecules/CategoriesSelection";
import Spacer from "@components/atoms/Spacer";
import { theme } from "@utils/theme";

type Props = {};

const TaskAddForm = (props: Props) => {
    const [text, setText] = useState("");
    return (
        <View style={styles.card}>
            <StyledTextInput
                placeholder="Something interesting to do?"
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                style={styles.input}
                value={text}
                onChangeText={setText}
                multiline
            />
            <ContainerView style={styles.container}>
                <CategoriesSelection />
                <Spacer size="medium" />
                <TaskAddActions
                    onAdd={() => console.log("add")}
                    onSelectImage={() => console.log("image")}
                    disableAdd={!text}
                />
            </ContainerView>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: theme.borderRadius.medium,
        borderColor: theme.colors.border,
        borderWidth: 1,
    },
    input: {
        padding: 16,
    },
    container: {
        paddingTop: 0,
    },
});

export default TaskAddForm;
