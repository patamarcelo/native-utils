import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet, View } from "react-native";
import { useCallback, useLayoutEffect, useState } from "react";

import IconButton from "../components/ui/IconButton";

const Map = (props) => {
	const { navigation } = props;
	const [selectedLocation, setSelectedLocation] = useState();
	const region = {
		latitude: 37.78,
		longitude: -122.43,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	};

	const selectLocationHandler = (event) => {
		// console.log(event);
		const lat = event.nativeEvent.coordinate.latitude;
		const lng = event.nativeEvent.coordinate.longitude;
		setSelectedLocation({
			lat: lat,
			lng: lng
		});
	};

	const savePickedLocationHandler = useCallback(() => {
		if (!selectedLocation) {
			Alert.alert(
				"No Location Picked",
				"Pick a location(by tap on map first)!!"
			);
			return;
		}
		navigation.navigate("AddPlace", {
			pickedLat: selectedLocation.lat,
			pickedLng: selectedLocation.lng
		});
	}, [navigation, selectedLocation]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: ({ tintcolor }) => (
				<IconButton
					icon="save"
					size={24}
					color={"white"}
					onPress={savePickedLocationHandler}
				/>
			)
		});
	}, [navigation, savePickedLocationHandler]);

	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={region}
				onPress={selectLocationHandler}
			>
				{selectedLocation && (
					<Marker
						title="Picked Location"
						coordinate={{
							latitude: selectedLocation.lat,
							longitude: selectedLocation.lng
						}}
					/>
				)}
			</MapView>
		</View>
	);
};

export default Map;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		width: "100%",
		height: "100%"
	}
});
