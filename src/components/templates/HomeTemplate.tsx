import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContainerView from "@components/atoms/ContainerView";
import SectionTitle from "@components/molecules/SectionTitle";
import Spacer from "@components/atoms/Spacer";
import TaskList from "@components/organisms/TaskList";
import TaskAddForm from "@components/organisms/TaskAddForm";

type Props = {};

const HomeTemplate = (props: Props) => {
    return (
        <ContainerView>
            <SectionTitle title="Add task" />
            <TaskAddForm />
            <Spacer size="large" />
            <SectionTitle title="My tasks" secondary="2/4 done" />
            <TaskList />
        </ContainerView>
    );
};

export default HomeTemplate;

const styles = StyleSheet.create({});
