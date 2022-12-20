import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import StyledText from "@components/atoms/StyledText";
import StyledButton from "@components/atoms/StyledButton";
import ContainerView from "@components/atoms/ContainerView";

type Props = NativeStackScreenProps<RootStackParamList, "Test">;

const Test = ({ route, navigation }: Props) => {
    useEffect(() => console.log(route.params.id), []);
    return (
        <ContainerView>
            <StyledText>Test</StyledText>
            <StyledButton disabled title="Go back" />
        </ContainerView>
    );
};

export default Test;

const styles = StyleSheet.create({});
