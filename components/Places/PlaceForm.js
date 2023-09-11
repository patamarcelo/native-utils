import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { useState } from "react";

import colors from "../../utils/colors";

const PlaceForm = () => {
	const [text, setText] = useState("");

	const handleChange = (textInput) => {
		setText(textInput);
	};
	return (
		<ScrollView style={styles.form}>
			<View>
				<Text style={styles.label}>Title</Text>
				<TextInput
					style={styles.input}
					onChangeText={handleChange}
					value={text}
				/>
			</View>
		</ScrollView>
	);
};

export default PlaceForm;

const styles = StyleSheet.create({
	form: {
		flex: 1,
		padding: 24
	},
	label: {
		fontWeight: "bold",
		marginBottom: 4,
		color: colors.white[400]
	},
	input: {
		marginVertical: 8,
		paddingHorizontal: 4,
		paddingVertical: 8,
		fontSize: 16,
		borderBottomColor: colors.primary[500],
		borderBottomWidth: 2,
		backgroundColor: colors.primary[100]
	}
});
