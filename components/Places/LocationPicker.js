import { Alert, StyleSheet, View, Image, Text } from "react-native";
import OutlinedButton from "../ui/OutlinedButton";
import colors from "../../utils/colors";
import { useState, useEffect } from "react";
import {
	useNavigation,
	useRoute,
	useIsFocused
} from "@react-navigation/native";

import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus
} from "expo-location";
import { getMapPreview } from "../../utils/Location";

const LocationPicker = ({ onLocationPick }) => {
	const [locPermi, requestPermission] = useForegroundPermissions();

	const [pickedLocation, setPickedLocation] = useState(null);

	const navigation = useNavigation();
	const route = useRoute();
	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused && route.params) {
			const mapPickedLocation = {
				lat: route.params.pickedLat,
				lng: route.params.pickedLng
			};
			setPickedLocation(mapPickedLocation);
		}
	}, [route, isFocused]);

	useEffect(() => {
		onLocationPick(pickedLocation);
	}, [pickedLocation, onLocationPick]);

	const verifyPermission = async () => {
		if (locPermi.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();

			return permissionResponse.granted;
		}

		if (locPermi.status === PermissionStatus.DENIED) {
			Alert.alert(
				"Insuficient Permissions",
				"You need to grant camera persmissions to use this app"
			);
			return false;
		}

		return true;
	};
	const getLocationhandler = async () => {
		const hasPermission = await verifyPermission();
		if (!hasPermission) {
			return;
		}
		const location = await getCurrentPositionAsync();
		setPickedLocation({
			lat: location.coords.latitude,
			lng: location.coords.longitude
		});
		console.log("user location: ", location.coords);
	};
	const pickOnMapHandler = () => {
		navigation.navigate("Map");
	};

	let locationPreview = <Text>No Location picked Yet</Text>;

	if (pickedLocation) {
		locationPreview = (
			<Image
				style={styles.image}
				source={{
					uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)
				}}
			/>
		);
	}
	return (
		<View>
			<View style={styles.mapPreview}>{locationPreview}</View>
			<View style={styles.actions}>
				<OutlinedButton icon="location" onPress={getLocationhandler}>
					Locate User
				</OutlinedButton>
				<OutlinedButton icon="map" onPress={pickOnMapHandler}>
					Pick on Map
				</OutlinedButton>
			</View>
		</View>
	);
};

export default LocationPicker;

const styles = StyleSheet.create({
	mapPreview: {
		width: "100%",
		height: 200,
		marginVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.primary[200],
		borderRadius: 4
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 4
	}
});
