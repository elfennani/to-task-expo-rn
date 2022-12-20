import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "@components/atoms/CategoryCard";
import Spacer from "@components/atoms/Spacer";

type Props = {
    onAdd?(): void;
};

const CategoriesSelection = (props: Props) => {
    return (
        <View style={styles.container}>
            <CategoryCard title="Testing" colorDegree={100} />
            <Spacer size="small" horizontal />
            <CategoryCard title="Development" colorDegree={230} />
            <Spacer size="small" horizontal />
            {props.onAdd && <CategoryCard title="+" onPress={props.onAdd} />}
        </View>
    );
};

export default CategoriesSelection;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
