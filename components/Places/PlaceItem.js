import { View, Image, Pressable, StyleSheet, Text } from "react-native";
import colors from "../../utils/colors";

View;

const PlaceItem = ({ place, onSelect }) => {
	return (
		<Pressable
			onPress={onSelect.bind(this, place.id)}
			style={({ pressed }) => [styles.item, pressed && styles.pressed]}
		>
			<Image source={{ uri: place.imageUri }} style={styles.image} />
			<View style={styles.info}>
				<Text style={styles.title}>{place.title}</Text>
				<Text style={styles.address}>{place.address}</Text>
			</View>
		</Pressable>
	);
};

export default PlaceItem;

const styles = StyleSheet.create({
	item: {
		flexDirection: "row",
		alignItems: "flex-start",
		borderRadius: 6,
		marginVertical: 12,
		backgroundColor: colors.primary[500],
		elevation: 2,

		shadowColor: "black",
		shadowOpacity: 0.15,
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 2
	},
	pressed: { opacity: 0.9 },
	image: {
		flex: 1,
		borderBottomLeftRadius: 4,
		borderTopLeftRadius: 4,
		height: 100
	},
	info: { flex: 2, padding: 12, gap: 5 },
	title: { fontWeight: "bold", fontSize: 18, color: colors.gray[200] },
	address: { fontSize: 12, color: colors.gray[200] }
});
