import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Home from "@screens/Home";
import Test from "@screens/Test";
import {
    useFonts,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
} from "@expo-google-fonts/outfit";
import { theme } from "@utils/theme";
import StyledText from "@components/atoms/StyledText";
import {
    SafeAreaProvider,
    useSafeAreaFrame,
} from "react-native-safe-area-context";
import Header from "@components/molecules/Header";

export type RootStackParamList = {
    Home: undefined;
    Test: { id: string };
};

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: theme.colors.background,
    },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const [fontIsLoaded] = useFonts({
        Outfit_R: Outfit_400Regular,
        Outfit_M: Outfit_500Medium,
        Outfit_B: Outfit_600SemiBold,
    });

    if (!fontIsLoaded) return null;

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            header: (props) => <Header />,
                        }}
                    />
                    <Stack.Screen name="Test" component={Test} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
