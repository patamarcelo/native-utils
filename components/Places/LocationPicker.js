import { StyleSheet, View } from "react-native";
import OutlinedButton from "../ui/OutlinedButton";
import colors from "../../utils/colors";

const LocationPicker = () => {
	const getLocationhandler = () => {};
	const pickOnMapHandler = () => {};
	return (
		<View>
			<View style={styles.mapPreview}></View>
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
	}
});
