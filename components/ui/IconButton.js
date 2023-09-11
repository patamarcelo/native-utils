import { Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons";

const IconButton = ({ color, icon, size, onPress }) => {
	return (
		<Pressable onPress={onPress}>
			<View>
				<Ionicons name={icon} color={color} size={size} />
			</View>
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({});
