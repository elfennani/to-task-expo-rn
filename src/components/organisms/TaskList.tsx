import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TaskItem from "@components/molecules/TaskItem";
import Spacer from "@components/atoms/Spacer";

type Props = {};

const TaskList = (props: Props) => {
    return (
        <>
            <TaskItem />
            <Spacer size="medium" />
            <TaskItem />
            <Spacer size="medium" />
            <TaskItem />
            <Spacer size="medium" />
        </>
    );
};

export default TaskList;

const styles = StyleSheet.create({});
