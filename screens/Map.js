import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

const Map = () => {
	const region = {
		latitude: 37.78,
		longitude: -122.43,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	};
	return (
		<View style={styles.container}>
			<MapView style={styles.map} initialRegion={region}></MapView>
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
