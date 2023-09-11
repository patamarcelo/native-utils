import { View, FlatList, StyleSheet, Text } from "react-native";
import PlaceItem from "./PlaceItem";
import Colors from "../../utils/colors";

const PlaceList = ({ items }) => {
	if (!items || items.length === 0) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>No Places added yet</Text>
			</View>
		);
	}
	return (
		<View>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <PlaceItem place={item} />}
			/>
		</View>
	);
};

export default PlaceList;

const styles = StyleSheet.create({
	fallbackContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	fallbackText: {
		fontSize: 16,
		color: Colors.gray[100]
	}
});
