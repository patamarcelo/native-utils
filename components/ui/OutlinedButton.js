import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../utils/colors";

const OutlinedButton = ({ onPress, icon, children }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Ionicons
				style={styles.icon}
				name={icon}
				color={colors.primary[500]}
				size={18}
			/>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
};

export default OutlinedButton;

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		margin: 4,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: colors.primary[500]
	},
	pressed: {
		opacity: 0.7
	},
	icon: {
		marginRight: 6
	},
	text: {
		color: colors.primary[500]
	}
});
