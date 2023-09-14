import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

const Map = () => {
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
		console.log(lat, lng);
		setSelectedLocation({
			lat: lat,
			lng: lng
		});
	};
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
