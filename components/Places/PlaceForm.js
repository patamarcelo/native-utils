import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { useCallback, useState } from "react";

import colors from "../../utils/colors";

import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../../components/ui/Button";

import { Place } from "../../models/place";

const PlaceForm = (props) => {
	const { onCreatePlace } = props;
	const [text, setText] = useState("");
	const [pickedLocation, setPickedLocation] = useState();
	const [selectedImage, setSelectedImage] = useState();

	const handleChange = (textInput) => {
		setText(textInput);
	};

	const iamgehandler = (imgUri) => {
		setSelectedImage(imgUri);
	};
	const pickLocationhandler = useCallback((location) => {
		setPickedLocation(location);
	}, []);

	const savePlaceHandler = () => {
		const placeData = new Place(text, selectedImage, pickedLocation);
		onCreatePlace(placeData);

		// console.log(text);
		// console.log(pickedLocation);
		// console.log(selectedImage);
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
			<ImagePicker onImgTaken={iamgehandler} />
			<LocationPicker onLocationPick={pickLocationhandler} />
			<Button onPress={savePlaceHandler}>Add Place</Button>
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
