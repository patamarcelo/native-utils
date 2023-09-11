import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IconButton from "./components/ui/IconButton";

import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";

import Colors from "./utils/colors";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: Colors.gray[600] },
						headerTintColor: Colors.gray[100],
						contentStyle: { backgroundColor: Colors.gray[500] }
					}}
				>
					<Stack.Screen
						name="AllPlaces"
						component={AllPlaces}
						options={({ navigation }) => ({
							title: "Your Favorite Places",
							headerRight: ({ tintColor }) => (
								<IconButton
									icon="add"
									color={tintColor}
									size={24}
									onPress={() =>
										navigation.navigate("AddPlace")
									}
								/>
							)
						})}
					/>
					<Stack.Screen
						name="AddPlace"
						component={AddPlace}
						options={{
							title: "Add New Place"
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({});
