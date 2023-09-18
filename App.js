import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IconButton from "./components/ui/IconButton";

import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";

import Colors from "./utils/colors";
import Map from "./screens/Map";

import { useEffect, useState } from "react";
import { init } from "./utils/database";

import AppLoading from "expo-app-loading";
import PlaceDetails from "./screens/PlaceDetails";

const Stack = createNativeStackNavigator();

export default function App() {
	const [dbInitialized, setDbInitialized] = useState(false);

	useEffect(() => {
		init()
			.then(() => {
				setDbInitialized(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	if (!dbInitialized) {
		return <AppLoading />;
	}

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
							),
							headerLeft: ({ tintColor }) => (
								<IconButton
									icon="home"
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
					<Stack.Screen name="Map" component={Map} />
					<Stack.Screen
						name="PlaceDetails"
						component={PlaceDetails}
						options={{
							title: "Loading Place..."
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({});
