import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import OutlinedButton from "../components/ui/OutlinedButton";
import colors from "../utils/colors";
import { useEffect, useState } from "react";

import { fetchPlaceDetails } from "../utils/database";

const PlaceDetails = ({ route, navigation }) => {
	const selectedPlaceId = route.params.placeId;
	const [fetchedPlace, setFetchedPlace] = useState();
	const showOnMapHandler = () => {
		navigation.navigate("Map", {
			intialLat: fetchedPlace.location.lat,
			initialLng: fetchedPlace.location.lng
		});
	};

	useEffect(() => {
		const loadPlaceData = async () => {
			const place = await fetchPlaceDetails(selectedPlaceId);
			setFetchedPlace(place);
			navigation.setOptions({
				title: place.title
			});
		};
		loadPlaceData();
	}, [selectedPlaceId]);

	if (!fetchedPlace) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>Loading place data....</Text>
			</View>
		);
	}
	return (
		<ScrollView>
			<Image
				style={styles.image}
				source={{ uri: fetchedPlace.imageUri }}
			/>
			<View style={styles.locationContainer}>
				<View style={styles.addressContainer}>
					<Text style={styles.address}>{fetchedPlace.address}</Text>
				</View>
				<OutlinedButton icon="map" onPress={showOnMapHandler}>
					View on Map
				</OutlinedButton>
			</View>
		</ScrollView>
	);
};

export default PlaceDetails;

const styles = StyleSheet.create({
	fallbackContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	fallbackText: {
		color: colors.primary[100],
		fontSize: 16
	},
	image: {
		height: "35%",
		minHeight: 300,
		width: "100%"
	},
	locationContainer: {
		justifyContent: "center",
		alignItems: "center"
	},
	addressContainer: {
		padding: 20
	},
	address: {
		color: colors.primary[500],
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 16
	}
});
