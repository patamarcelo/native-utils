import PlaceForm from "../components/Places/PlaceForm";
import { inserPlace } from "../utils/database";

const AddPlace = ({ navigation }) => {
	const createPlaceHandler = async (place) => {
		await inserPlace(place);
		navigation.navigate("AllPlaces");
		// navigation.navigate("AllPlaces", {
		// 	place: place
		// });
	};
	return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
