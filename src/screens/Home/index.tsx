import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import StyledText from "@components/atoms/StyledText";
import StyledButton from "@components/atoms/StyledButton";
import ContainerView from "@components/atoms/ContainerView";
import HomeTemplate from "@components/templates/HomeTemplate";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
    return <HomeTemplate />;
};

export default Home;
