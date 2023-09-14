import { Alert, Button, View, Image, Text, StyleSheet } from "react-native";
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus
} from "expo-image-picker";
import { useState } from "react";
import colors from "../../utils/colors";
import OutlinedButton from "../ui/OutlinedButton";

const ImagePicker = ({ onImgTaken }) => {
	const [cameraPerissionInfo, requestPermission] = useCameraPermissions();
	const [pickedImage, setPickedImage] = useState();

	const verifyPermissions = async () => {
		if (cameraPerissionInfo.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();

			return permissionResponse.granted;
		}

		if (cameraPerissionInfo.status === PermissionStatus.DENIED) {
			Alert.alert(
				"Insuficient Permissions",
				"You need to grant camera persmissions to use this app"
			);
			return false;
		}

		return true;
	};

	const takeImgHandler = async () => {
		const haspermission = await verifyPermissions();
		if (!haspermission) {
			return;
		}
		const img = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.5
		});
		setPickedImage(img.uri);
		onImgTaken(img.uri);
	};

	let imagepreview = <Text>No Image taken yet.</Text>;

	if (pickedImage) {
		return (imagepreview = (
			<Image style={styles.image} source={{ uri: pickedImage }} />
		));
	}
	return (
		<View>
			<View style={styles.imagePreview}>{imagepreview}</View>
			<OutlinedButton icon="camera" onPress={takeImgHandler}>
				Take Image
			</OutlinedButton>
		</View>
	);
};

export default ImagePicker;

const styles = StyleSheet.create({
	imagePreview: {
		width: "100%",
		height: 200,
		marginVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.primary[300],
		borderRadius: 4
	},
	image: {
		width: "100%",
		height: "100%"
	}
});
