import { Pressable, StyleSheet, Text } from "react-native";
import colors from "../../utils/colors";

const Button = (props) => {
	const { onPress, children, style } = props;
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.button,
				style,
				pressed && styles.pressed
			]}
		>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		margin: 4,
		backgroundColor: colors.primary[800],
		elevation: 2,

		shadowColor: "black",
		shadowOpacity: 0.15,
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 2,
		borderRadius: 4
	},
	pressed: {
		opacity: 0.7
	},
	text: {
		fontSize: 16,
		textAlign: "center",
		color: colors.primary[200]
	}
});
