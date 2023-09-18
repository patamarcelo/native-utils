import { View, FlatList, StyleSheet, Text } from "react-native";
import PlaceItem from "./PlaceItem";
import Colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const PlaceList = ({ items }) => {
	const navigation = useNavigation();

	const selectPlaceHandler = (id) => {
		navigation.navigate("PlaceDetails", {
			placeId: id
		});
	};

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
				style={styles.list}
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<PlaceItem place={item} onSelect={selectPlaceHandler} />
				)}
			/>
		</View>
	);
};

export default PlaceList;

const styles = StyleSheet.create({
	list: { marginHorizontal: 18 },
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
